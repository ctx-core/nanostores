import { be_ } from '@ctx-core/object'
import { atom_ } from '../atom_/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('nanostores').ReadableAtom}ReadableAtom */
/** @typedef {import('./index.d.ts').be_computed_pair_T}be_computed_pair_T */
/**
 * @param {string|null|undefined|((ctx:Ctx)=>ReadableAtom)}name_OR_computed__new
 * @param {(ctx:Ctx)=>ReadableAtom}[computed__new]
 * @returns {be_computed_pair_T}
 * @private
 */
export function be_computed_pair_(
	name_OR_computed__new,
	computed__new
) {
	/** @type {string} */
	let name
	if (typeof name_OR_computed__new === 'function') {
		computed__new = name_OR_computed__new
	} else {
		name = name_OR_computed__new
	}
	if (!computed__new) throw new Error('be_computed_pair_|computed__new argument is required')
	const val__ =
		name
		? be_(name, computed__new)
		: be_(computed__new)
	function val_(ctx) {
		return val__(ctx).$
	}
	return [
		val__,
		val_,
	]
}
