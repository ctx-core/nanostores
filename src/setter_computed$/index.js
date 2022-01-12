import { atom, onMount } from 'nanostores'
export const setter_computed$ = (stores, cb)=>{
	const isArray = Array.isArray(stores)
	let deps = collectWritable(isArray ? stores : [stores])
	let _atom = atom()
	const { set } = _atom
	let run = ()=>cb(isArray ? stores.map(store=>store.get()) : stores.get(), set)
	onMount(_atom, ()=>{
		run()
		let unbinds = deps.map(store=>
			store.listen(()=>
				run()
			)
		)
		return ()=>{
			for (const unbind of unbinds) unbind()
		}
	})
	return {
		deps,
		get $() {
			return _atom.get()
		},
		..._atom
	}
}
const collectWritable = deps=>[
	...new Set(
		deps.reduce(
			(acc, dep)=>(dep.deps ? [...acc, ...dep.deps] : [...acc, dep]),
			[]
		)
	)
]
