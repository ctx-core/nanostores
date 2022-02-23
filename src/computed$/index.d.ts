import { AnyStore, Store, StoreValue } from 'nanostores/map'
import { StoreValues } from 'nanostores/computed'
import type { ReadableAtom$ } from '../ReadableAtom$'
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
interface computed$_T {
	<Value extends any, OriginStores extends AnyStore[]>(
		stores:[...OriginStores],
		cb:(...values:StoreValues<OriginStores>)=>Value
	):ReadableAtom$<Value>
	<Value extends any, OriginStore extends Store>(
		stores:OriginStore,
		cb:(value:StoreValue<OriginStore>)=>Value
	):ReadableAtom$<Value>
}
export declare const computed$:computed$_T
