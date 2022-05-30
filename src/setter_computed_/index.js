import { atom } from 'nanostores'
import { computed_ } from '../computed_/index.js'
/** @type {import('./index.d.ts').setter_computed__T} */
export const setter_computed_ = (stores, cb)=>{
	const isArray = Array.isArray(stores)
	const store_a = isArray ? stores : [stores]
	const store_val_a_ = computed_(store_a, (...store_val_a)=>store_val_a)
	const return_payload$ = atom()
	let _store_val_a = []
	let run = store_val_a=>{
		cb(isArray ? store_val_a : store_val_a[0], val=>{
			if (store_val_a.every((store_val, $i)=>store_val === _store_val_a[$i])) {
				return_payload$.set(val)
			} else {
				console.warn('setter_computed_|run|stale inputs', cb)
			}
		})
	}
	store_val_a_.subscribe(store_val_a=>{
		_store_val_a = store_val_a
		run(store_val_a)
	})
	const setter_computed = computed_(return_payload$, val=>val)
	setter_computed.store_a = store_a
	return /** @type {import('./index.d.ts').SetterComputedAtom_} */setter_computed
}
export {
	setter_computed_ as setter_computed$
}
