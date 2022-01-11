import { atom, onMount } from 'nanostores'
export const setter_computed$ = (stores, cb)=>{
	const isArray = Array.isArray(stores)
	let deps = collectWritable(isArray ? stores : [stores])
	let run = (set)=>cb(isArray ? stores.map(store=>store.get()) : stores, set)
	let derived = atom()
	const { set } = derived
	onMount(derived, ()=>{
		run(set)
		let unbinds = deps.map(store=>
			store.listen(()=>{
				run(set)
			})
		)
		return ()=>{
			for (let unbind of unbinds) unbind()
		}
	})
	return {
		deps,
		get $() {
			return derived.get()
		},
		...derived
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
