import { onSet } from 'nanostores'
import { atom_ } from '../atom_/index.js'
/** @type {import('./index.d.ts').neql_atom_} */
export const neql_atom_ = (initialValue)=>{
	const atom = atom_(initialValue)
	decorate_neql_atom_(atom)
	return atom
}
export function decorate_neql_atom_(atom) {
	return onSet(atom, ({ newValue, abort })=>{
		if (atom.$ === newValue) abort()
	})
}
export {
	neql_atom_ as neql_atom$,
	decorate_neql_atom_ as decorate_neql_atom$
}
