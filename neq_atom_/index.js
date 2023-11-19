import { _atom_, onSet } from '../_nanostores/index.js'
import { writable_atom___mix } from '../writable_atom___mix/index.js'
/** @typedef {import('nanostores').WritableAtom} */
/**
 * @param {unknown}initial
 * @returns {WritableAtom_<unknown>}
 * @private
 */
export function neq_atom_(initial) {
	const _atom = _atom_(initial)
	decorate_neq_atom_(_atom)
	return writable_atom___mix(_atom)
}
export { neq_atom_ as neq_atom$ }
/**
 * @param {WritableAtom<unknown>}atom
 * @returns {()=>void}
 * @private
 */
export function decorate_neq_atom_(atom) {
	return onSet(atom, ({ newValue, abort })=>{
		if (atom.get() == newValue) abort()
	})
}
export { decorate_neq_atom_ as decorate_neq_atom$ }
