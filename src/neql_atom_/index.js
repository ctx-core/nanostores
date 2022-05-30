import { atom as _atom_, onSet } from 'nanostores'
import { writable_fn_ } from '../_private/index.js'
/** @type {import('./index.d.ts').neql_atom_} */
export const neql_atom_ = (initialValue)=>{
	const _atom = _atom_(initialValue)
	decorate_neql_atom_(_atom)
	return writable_fn_(_atom)
}
export function decorate_neql_atom_(atom) {
	return onSet(atom, ({ newValue, abort })=>{
		if (atom.get() === newValue) abort()
	})
}
export {
	neql_atom_ as neql_atom$,
	decorate_neql_atom_ as decorate_neql_atom$
}
