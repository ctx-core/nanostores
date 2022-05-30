import { onSet } from 'nanostores'
import { atom_ } from '../atom_/index.js'
/** @type {import('./index.d.ts').neq_atom_} */
export const neq_atom_ = (initialValue)=>{
	const atom = atom_(initialValue)
	decorate_neq_atom_(atom)
	return atom
}
export function decorate_neq_atom_(atom) {
	return onSet(atom, ({ newValue, abort })=>{
		if (atom._ == newValue) abort()
	})
}
export {
	neq_atom_ as neq_atom$,
	decorate_neq_atom_ as decorate_neq_atom$
}
