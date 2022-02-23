import { Store } from 'nanostores'
import { AnyStore, StoreValue } from 'nanostores/map'
import { StoreValues } from 'nanostores/computed'
import { ReadableAtom$ } from '../ReadableAtom$'
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
interface setter_computed$_T {
	<Value extends any, OriginStores extends AnyStore[] = AnyStore[]>(
		stores:[...OriginStores],
		cb:(values:StoreValues<OriginStores>, set:(newValue:Value)=>void)=>void
	):SetterComputedAtom$<Value>
	<Value extends any, OriginStore extends Store = Store>(
		stores:OriginStore,
		cb:(value:StoreValue<OriginStore>, set:(newValue:Value)=>void)=>void
	):SetterComputedAtom$<Value>
}
export declare const setter_computed$:setter_computed$_T
export interface SetterComputedAtom$<Value extends any> extends ReadableAtom$<Value> {
	store_a:AnyStore[]
}
