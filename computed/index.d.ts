import type { AnyStore, ReadableAtom, Store, StoreValue, Task } from 'nanostores'
import type { ReadableAtom_, StoreValues } from '../_types/index.js'
export declare const computed_:computed__T
export declare function mix_computed_<
	Value
>(computed:ReadableAtom):ReadableAtom_<Value>
export { computed_ as computed$ }
/**
 * Creates a computed atom, which use generates value from another stores.
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
export interface computed__T {
	<Value extends any, OriginStore extends Store>(
		stores: OriginStore,
		cb: (value: StoreValue<OriginStore>) => Task<Value> | Value
	): ReadableAtom_<Value>
	<Value extends any, OriginStores extends AnyStore[]>(
		stores:[...OriginStores],
		cb:(...values:StoreValues<OriginStores>)=>Task<Value>|Value
	):ReadableAtom_<Value>
	<Value extends any>(
		cb:()=>Task<Value>|Value
	):ReadableAtom_<Value>
}
