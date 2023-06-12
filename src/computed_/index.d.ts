import type {
	AnyStore,
	Autosubscribe,
	ReadableAtom,
	Store,
	StoreValue
} from 'nanostores'
import {
	BoxAutosubscribe,
	UnboxAutosubscribe
} from 'nanostores/computed/index.js'
import type { ReadableAtom_, StoreValues } from '../_types'
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
	<Value extends any, Asub extends Autosubscribe<Value, any> = Autosubscribe<Value, any>>(
		cb: (asub?: Asub) => BoxAutosubscribe<Value, Asub> | Promise<BoxAutosubscribe<Value, Asub>>
	): ReadableAtom_<UnboxAutosubscribe<Awaited<Value>>>
	<Value extends any, OriginStore extends Store>(
		stores: OriginStore,
		cb: (value: StoreValue<OriginStore>) => BoxAutosubscribe<Value> | Promise<BoxAutosubscribe<Value>>
	): ReadableAtom_<UnboxAutosubscribe<Awaited<Value>>>
	<Value extends any, OriginStores extends AnyStore[]>(
		stores: [...OriginStores],
		cb: (...values: StoreValues<OriginStores>) => BoxAutosubscribe<Value> | Promise<BoxAutosubscribe<Value>>
	): ReadableAtom_<UnboxAutosubscribe<Awaited<Value>>>
}

type BoxAutosubscribe<Value, Asub extends Autosubscribe<Value, any> = Autosubscribe<Value>> =
	Asub | Value
type UnboxAutosubscribe<Value> = Value extends Autosubscribe ? never : Value
