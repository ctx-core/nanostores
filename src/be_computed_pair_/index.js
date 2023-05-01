import { be_ } from '@ctx-core/object'
/** @typedef {import('@ctx-core/object').be__params_T}be__params_T */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('nanostores').ReadableAtom}ReadableAtom */
/** @typedef {import('./index.d.ts').be_computed_pair_T}be_computed_pair_T */
/**
 * @param {string|null|undefined|((ctx:Ctx)=>ReadableAtom)}name_OR_computed__new
 * @param {((ctx:Ctx)=>ReadableAtom)|be__params_T}[computed__new_OR_be__params]
 * @param {be__params_T}[be__params]
 * @returns {be_computed_pair_T}
 * @private
 */
export function be_computed_pair_(
	name_OR_computed__new,
	computed__new_OR_be__params,
	be__params
) {
	/** @type {string} */
	let name, computed__new
	if (typeof name_OR_computed__new === 'function') {
		computed__new = name_OR_computed__new
		be__params = computed__new_OR_be__params
	} else {
		name = name_OR_computed__new
		computed__new = computed__new_OR_be__params
	}
	if (!computed__new) throw new Error('be_computed_pair_|computed__new argument is required')
	const val__ =
		name
		? be_(name, computed__new_OR_be__params, be__params)
		: be_(computed__new_OR_be__params, be__params)
	function val_(ctx) {
		return val__(ctx).$
	}
	return [
		val__,
		val_,
	]
}
