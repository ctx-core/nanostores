import { _atom_, onSet } from '../_nanostores/index.js'
import { writable_fn_ } from '../writable_fn_/index.js'
export function neq_atom_(initialValue) {
	const _atom = _atom_(initialValue)
	decorate_neq_atom_(_atom)
	return writable_fn_(_atom)
}
export function decorate_neq_atom_(atom) {
	return onSet(atom, ({ newValue, abort })=>{
		if (atom.get() == newValue) abort()
	})
}
export { neq_atom_ as neq_atom$, decorate_neq_atom_ as decorate_neq_atom$ }
