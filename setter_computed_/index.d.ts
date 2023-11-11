import type { AnyStore, ReadableAtom, Store, StoreValue } from 'nanostores'
import type { ReadableAtom_, StoreValues } from '../_types/index.js'
/**
 * Create derived store, which use generates value from another store.
 *
 * ```js
 * import { computed } from 'nanostores'
 *
 * import { users } from './users.js'
 *
 * export const admins = computed_(users, list => {
 *   return list.filter(user => user.isAdmin)
 * })
 * ```
 */
interface setter_computed__T {
	<Value extends any, OriginStores extends AnyStore[]>(
		stores:[...OriginStores],
		cb:(values:StoreValues<OriginStores>, set:(newValue:Value)=>void)=>void
	):SetterComputedAtom_<Value>
	<Value extends any, OriginStore extends Store>(
		stores:OriginStore,
		cb:(value:StoreValue<OriginStore>, set:(newValue:Value)=>void)=>void
	):SetterComputedAtom_<Value>
}
export declare const setter_computed_:setter_computed__T
export interface SetterComputedAtom_<Value extends any>
	extends ReadableAtom_<Value>,
		ReadableAtom<Value> {
	store_a:AnyStore[]
}
export {
	setter_computed_ as setter_computed$,
	SetterComputedAtom_ as SetterComputedAtom$
}
