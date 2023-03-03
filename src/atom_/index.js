import { _atom_ } from '../_nanostores/index.js'
import { writable_atom___mix } from '../writable_atom___mix/index.js'
/**
 * @param {unknown}[initial]
 * @returns {import('./index.d.ts').atom_T<unknown>}
 * @private
 */
export function atom_(initial) {
	return writable_atom___mix(_atom_(initial))
}
export { atom_ as atom$ }
