import { atom, onMount } from 'nanostores'
/** @type {import('./index.d.ts').setter_computed$_T} */
export const setter_computed$ = (stores, cb)=>{
	const isArray = Array.isArray(stores)
	const store_a = isArray ? stores : [stores]
	let _atom = atom()
	const { set } = _atom
	let run = ()=>cb(isArray ? stores.map(store=>store.get()) : stores.get(), set)
	onMount(_atom, ()=>{
		run()
		let unbinds = store_a.map(store=>
			store.listen(()=>
				run()
			)
		)
		return ()=>{
			for (const unbind of unbinds) unbind()
		}
	})
	return /** @type {import('./index.d.ts').SetterComputedAtom$} */{
		store_a,
		get $() {
			return _atom.get()
		},
		..._atom
	}
}
