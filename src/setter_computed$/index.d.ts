import { Store } from 'nanostores'
import { AnyStore, StoreValue } from 'nanostores/map'
import { StoreValues } from 'nanostores/computed'
import { ReadableAtom$ } from '../ReadableAtom$'
interface setter_computed$_T {
	/**
	 * Create derived store, which use generates value from another stores.
	 *
	 * ```js
	 * import { computed } from 'nanostores'
	 *
	 * import { users } from './users.js'
	 *
	 * export const admins = computed$(users, list => {
	 *   return list.filter(user => user.isAdmin)
	 * })
	 * ```
	 */
	<Value extends any, OriginStores extends AnyStore[]>(
		stores:[...OriginStores],
		cb:(values:StoreValues<OriginStores>, set:(newValue:Value)=>void)=>void
	):SetterComputedAtom$<Value>
	<Value extends any, OriginStore extends Store>(
		stores:OriginStore,
		cb:(value:StoreValue<OriginStore>, set:(newValue:Value)=>void)=>void
	):SetterComputedAtom$<Value>
}
export const setter_computed$:setter_computed$_T
export interface SetterComputedAtom$<Value extends any> extends ReadableAtom$<Value> {
	store_a:AnyStore[]
}
