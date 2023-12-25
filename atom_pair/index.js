import { atom } from 'nanostores'
import { readable_fn_ } from '../readable_fn/index.js'
/**
 * @param {unknown}initial
 * @returns {import('./index.d.ts').atom_pair_T<unknown>}
 * @private
 */
export function atom_pair_(initial) {
	/** @type {import('nanostores').WritableAtom<unknown>} */
	const split_atom = atom(initial)
	return [readable_fn_(split_atom), split_atom.set]
}
export { atom_pair_ as split_atom$ }
