import { computed as nanostores__computed_ } from 'nanostores'
import { readable_fn_ } from '../readable_fn/index.js'
/** @typedef {import('nanostores').AnyStore} */
/** @typedef {import('nanostores').ReadableAtom} */
/** @typedef {import('nanostores').Store} */
/** @typedef {import('nanostores').StoreValue} */
/** @typedef {import('../_types/index.d.ts').ReadableAtom_} */
/** @typedef {import('../_types/index.d.ts').StoreValues} */
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
	return mix_computed_(nanostores__computed_(stores, cb))
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
