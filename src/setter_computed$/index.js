import { atom, computed } from 'nanostores'
import { computed$ } from '../computed$/index.js'
/** @type {import('./index.d.ts').setter_computed$_T} */
export const setter_computed$ = (stores, cb)=>{
	const isArray = Array.isArray(stores)
	const store_a = isArray ? stores : [stores]
	const store_val_a$ = computed(store_a, (...store_val_a)=>store_val_a)
	const return_payload$ = atom()
	let _store_val_a = []
	let run = store_val_a=>{
		cb(isArray ? store_val_a : stores.get(), val=>{
			if (store_val_a.every((store_val, $i)=>store_val === _store_val_a[$i])) {
				return_payload$.set(val)
			} else {
				console.warn('setter_computed$|run|stale inputs', cb)
			}
		})
	}
	store_val_a$.subscribe(store_val_a=>{
		_store_val_a = store_val_a
		run(store_val_a)
	})
	const _setter_computed$ = computed$([return_payload$, store_val_a$], val=>val)
	_setter_computed$.store_a = store_a
	return /** @type {import('./index.d.ts').SetterComputedAtom$} */_setter_computed$
}
