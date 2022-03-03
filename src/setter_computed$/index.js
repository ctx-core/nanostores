import { atom, onMount } from 'nanostores'
/** @type {import('./index.d.ts').setter_computed$_T} */
export const setter_computed$ = (stores, cb)=>{
	const isArray = Array.isArray(stores)
	const store_a = isArray ? stores : [stores]
	const deps = collectWritable(store_a)
	let _atom = atom(undefined)
	let run = ()=>cb(isArray ? store_a.map(store=>store.get()) : stores.get(), _atom.set)
	onMount(_atom, ()=>{
		run()
		let unbinds = deps.map(store=>
			store.listen(()=>run()))
		return ()=>{
			for (const unbind of unbinds) unbind()
		}
	})
	return /** @type {import('./index.d.ts').SetterComputedAtom$} */{
		// This object should be collected by collectWritable
		store_a,
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
