import { atom } from 'nanostores'
import { readable_fn_ } from '../readable_fn_/index.js'
/**
 * @param {unknown}initial
 * @returns {import('./index.d.ts').split_atom__ret_T<unknown>}
 * @private
 */
export function split_atom_(initial) {
	/** @type {import('nanostores').WritableAtom<unknown>} */
	const split_atom = atom(initial)
	return [readable_fn_(split_atom), split_atom.set]
}
export { split_atom_ as split_atom$ }
