import { be_ } from 'ctx-core/be'
import { atom_ } from '../atom_/index.js'
/** @typedef {import('@ctx-core/object').be__params_T} */
/** @typedef {import('@ctx-core/object').Ctx} */
/** @typedef {import('nanostores').WritableAtom} */
/** @typedef {import('./index.d.ts').be_atom_triple_T} */
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
			oninit?.(ctx, atom)
			return atom
		}),
		ctx=>be_atom_triple[0](ctx)(),
		(ctx, val)=>{
			be_atom_triple[0](ctx).set(val)
		},
	]
	be_atom_triple.config = params=>(be_atom_triple[0].config(params), be_atom_triple)
	be_atom_triple.oninit = _oninit=>(oninit = _oninit, be_atom_triple)
	return be_atom_triple
}
