import { atom as _atom_, onSet } from 'nanostores'
import { writable_fn_ } from '../_private/index.js'
/** @type {import('./index.d.ts').neq_atom_} */
export const neq_atom_ = (initialValue)=>{
	const _atom = _atom_(initialValue)
	decorate_neq_atom_(_atom)
	return writable_fn_(_atom)
}
export function decorate_neq_atom_(atom) {
	return onSet(atom, ({ newValue, abort })=>{
		if (atom.get() == newValue) abort()
	})
}
export {
	neq_atom_ as neq_atom$,
	decorate_neq_atom_ as decorate_neq_atom$
}
