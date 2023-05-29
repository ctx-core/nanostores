import { be_ } from '@ctx-core/object'
import { atom_ } from '../atom_/index.js'
/** @typedef {import('@ctx-core/object').be__params_T}be__params_T */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('nanostores').WritableAtom}WritableAtom */
/** @typedef {import('./index.d.ts').be_atom_triple_T}be_atom_triple_T */
/**
 * @param {string|null|undefined|((ctx:Ctx)=>WritableAtom)|be__params_T}[id_OR_atom__new_OR_be__params]
 * @param {((ctx:Ctx)=>WritableAtom)|be__params_T}[atom__new_OR_be__params]
 * @param {be__params_T}[be__params]
 * @returns {be_atom_triple_T}
 * @private
 */
export function be_atom_triple_(
	id_OR_atom__new_OR_be__params,
	atom__new_OR_be__params,
	be__params
) {
	/** @type {string} */
	let id
	/** @type {(ctx:Ctx)=>WritableAtom} */
	let atom__new
	if (typeof id_OR_atom__new_OR_be__params === 'function') {
		atom__new_OR_be__params = id_OR_atom__new_OR_be__params
	} else if (typeof id_OR_atom__new_OR_be__params === 'object') {
		be__params = id_OR_atom__new_OR_be__params
	} else {
		id = id_OR_atom__new_OR_be__params
	}
	if (typeof atom__new_OR_be__params === 'function') {
		atom__new = atom__new_OR_be__params
	} else if (!be__params) {
		be__params = atom__new_OR_be__params
	}
	if (!atom__new) {
		atom__new =
			()=>
				atom_()
	}
	const _be_ =
		(be__params && be__params.be_)
		?? be_
	const val__ =
		id
		? _be_(id, atom__new, be__params)
		: _be_(atom__new, be__params)
	function val_(ctx) {
		return val__(ctx).$
	}
	function val__set(ctx, val) {
		val__(ctx).$ = val
	}
	return [
		val__,
		val_,
		val__set
	]
}
