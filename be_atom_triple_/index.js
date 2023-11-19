import { be_ } from 'ctx-core/be'
import { atom_ } from '../atom_/index.js'
/** @typedef {import('@ctx-core/object').be__params_T}be__params_T */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('nanostores').WritableAtom}WritableAtom */
/** @typedef {import('./index.d.ts').be_atom_triple_T}be_atom_triple_T */
/**
 * @param {be__val__new_T<unknown>}val__new
 * @returns {be_atom_triple_T}
 * @private
 */
export function be_atom_triple_(val__new) {
	let oninit
	const be_atom_triple = [
		be_(ctx=>{
			let atom = atom_(val__new(ctx))
			oninit?.(atom)
			return atom
		}),
		ctx=>be_atom_triple[0](ctx)(),
		(ctx, val)=>{
			be_atom_triple[0](ctx).set(val)
		},
	]
	be_atom_triple.config = config__fn=>(config__fn(be_atom_triple[0]), be_atom_triple)
	be_atom_triple.oninit__def = _oninit=>(oninit = _oninit, be_atom_triple)
	return be_atom_triple
}
