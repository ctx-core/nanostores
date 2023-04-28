import { be_ } from '@ctx-core/object'
import { atom_ } from '../atom_/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('nanostores').WritableAtom}WritableAtom */
/** @typedef {import('./index.d.ts').be_atom_triple_T}be_atom_triple_T */
/**
 * @param {string|null|undefined|((ctx:Ctx)=>WritableAtom)}[name_OR_atom__new]
 * @param {(ctx:Ctx)=>WritableAtom}[atom__new]
 * @returns {be_atom_triple_T}
 * @private
 */
export function be_atom_triple_(
	name_OR_atom__new,
	atom__new
) {
	/** @type {string} */
	let name
	if (typeof name_OR_atom__new === 'function') {
		atom__new = name_OR_atom__new
	} else {
		name = name_OR_atom__new
	}
	if (!atom__new) atom__new = ()=>atom_()
	const val__ =
		name
		? be_(name, atom__new)
		: be_(atom__new)
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
