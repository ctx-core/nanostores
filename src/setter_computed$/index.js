import { atom, onMount } from 'nanostores'
export const setter_computed$ = (stores, cb)=>{
	if (!Array.isArray(stores)) stores = [stores]
	let deps = collectWritable(stores)
	let run = (set)=>cb(stores.map(store=>store.get()), set)
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
