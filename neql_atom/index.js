import { _atom_, onSet } from '../_nanostores/index.js'
import { writable_atom___mix } from '../writable_atom___mix/index.js'
/** @typedef {import('nanostores').WritableAtom} */
/** @typedef {import('../_types/index.d.ts').WritableAtom_} */
/**
 * @param {unknown}initial
 * @returns {WritableAtom_<unknown>}
 * @private
 */
export function neql_atom_(initial) {
	/** @type {WritableAtom<unknown>} */
	const _atom = _atom_(initial)
	decorate_neql_atom_(_atom)
	return writable_atom___mix(_atom)
}
export { neql_atom_ as neql_atom$ }
/**
 * @param {WritableAtom<unknown>}atom
 * @returns {() => void}
 * @private
 */
export function decorate_neql_atom_(atom) {
	return onSet(atom, ({ newValue, abort })=>{
		if (atom.get() === newValue) abort()
	})
}
export { decorate_neql_atom_ as decorate_neql_atom$ }
