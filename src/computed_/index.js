import { computed as _computed_ } from 'nanostores'
import { readable_fn_ } from '../readable_fn_/index.js'
/** @typedef {import('nanostores').AnyStore}AnyStore */
/** @typedef {import('nanostores').ReadableAtom}ReadableAtom */
/** @typedef {import('nanostores').Store}Store */
/** @typedef {import('nanostores').StoreValue}StoreValue */
/** @typedef {import('../_types').ReadableAtom_}ReadableAtom_ */
/** @typedef {import('../_types').StoreValues}StoreValues */
/**
 * @param {AnyStore[]|Store|any}stores
 * @param {((...values:StoreValues<unknown>)=>unknown)|((value:StoreValue<unknown>)=>unknown)}cb
 * @returns {ReadableAtom_<unknown>}
 * @private
 */
export function computed_(
	stores,
	cb
) {
	return mix_computed_(_computed_(stores, cb))
}
/**
 * @param {ReadableAtom<unknown>}computed
 * @returns {ReadableAtom_<unknown>}
 * @private
 */
export function mix_computed_(computed) {
	return readable_fn_(computed)
}
export { computed_ as computed$ }
