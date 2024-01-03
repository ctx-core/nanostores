import { run } from 'ctx-core/run'
import { atom, onMount, onStop } from 'nanostores'
import { computed_ } from '../computed/index.js'
/** @type {import('./index.d.ts').setter_computed__T} */
export const setter_computed_ = (stores, cb)=>{
	const isArray = Array.isArray(stores)
	const store_a = isArray ? stores : [stores]
	const store_val_a_ =
		computed_(
			store_a,
			(...store_val_a)=>
				/** @type {import('nanostores').AnyStore[]} */
				store_val_a)
	const return_payload_atom = atom()
	let cb__run = store_val_a=>{
		return cb(
			isArray
				? store_val_a
				|| store_a.map(()=>undefined)
				: store_val_a && store_val_a[0],
			val=>{
				return_payload_atom.set(val)
			})
	}
	let unsubscribe
	/** @type {import('./index.d.ts').SetterComputedAtom_} */
	const setter_computed =
		computed_(
			return_payload_atom,
			val=>val)
	onMount(setter_computed, ()=>{
		unsubscribe = store_val_a_.subscribe($=>{
			cb__run($)
		})
	})
	onStop(
		setter_computed,
		()=>run(unsubscribe))
	return setter_computed
}
export { setter_computed_ as setter_computed$ }
