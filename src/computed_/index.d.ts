import { AnyStore, Store, StoreValue } from 'nanostores/map'
import { StoreValues } from 'nanostores/computed'
import type { ReadableAtom_ } from '../ReadableAtom_'
/**
 * Create derived store, which use generates value from another stores.
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
interface computed__T {
	<Value extends any, OriginStores extends AnyStore[]>(
		stores:[...OriginStores],
		cb:(...values:StoreValues<OriginStores>)=>Value
	):ReadableAtom_<Value>
	<Value extends any, OriginStore extends Store>(
		stores:OriginStore,
		cb:(value:StoreValue<OriginStore>)=>Value
	):ReadableAtom_<Value>
}
export declare const computed_:computed__T
export declare const computed$:computed__T
