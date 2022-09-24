import { _atom_, onSet } from '../_nanostores/index.js'
import { writable_atom___mix } from '../writable_atom___mix/index.js'
export function neql_atom_(initialValue) {
	const _atom = _atom_(initialValue)
	decorate_neql_atom_(_atom)
	return writable_atom___mix(_atom)
}
export function decorate_neql_atom_(atom) {
	return onSet(atom, ({ newValue, abort })=>{
		if (atom.get() === newValue) abort()
	})
}
export { neql_atom_ as neql_atom$, decorate_neql_atom_ as decorate_neql_atom$ }
