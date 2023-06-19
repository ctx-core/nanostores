import { be_ } from '@ctx-core/object'
import { autosubscriber } from 'nanostores'
import { atom_ } from '../atom_/index.js'
/** @typedef {import('@ctx-core/object').be__params_T}be__params_T */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('nanostores').WritableAtom}WritableAtom */
/** @typedef {import('./index.d.ts').be_atom_triple_T}be_atom_triple_T */
/**
 * @param {string|null|undefined|((ctx:Ctx)=>WritableAtom)|be__params_T}[id_OR_val__new_OR_be__params]
 * @param {((ctx:Ctx)=>WritableAtom)|be__params_T}[val__new_OR_be__params]
 * @param {be__params_T}[be__params]
 * @returns {be_atom_triple_T}
 * @private
 */
export function val__be_atom_triple_(
	id_OR_val__new_OR_be__params,
	val__new_OR_be__params,
	be__params
) {
	/** @type {string} */
	let id
	/** @type {(ctx:Ctx)=>WritableAtom} */
	let val__new
	if (typeof id_OR_val__new_OR_be__params === 'function') {
		val__new_OR_be__params = id_OR_val__new_OR_be__params
	} else if (typeof id_OR_val__new_OR_be__params === 'object') {
		be__params = id_OR_val__new_OR_be__params
	} else {
		id = id_OR_val__new_OR_be__params
	}
	if (typeof val__new_OR_be__params === 'function') {
		val__new = val__new_OR_be__params
	} else if (!be__params) {
		be__params = val__new_OR_be__params
	}
	if (!val__new) {
		val__new = ()=>undefined
	}
	const _be_ =
		(be__params && be__params.be_)
		?? be_
	const val$_ =
		id
		? _be_(id, ctx=>atom_(val__new(ctx)), be__params)
		: _be_(ctx=>atom_(val__new(ctx)), be__params)
	const val_ = (
		ctx,
		asub = autosubscriber()
	)=>val$_(ctx)(asub)
	const val__set = (ctx, val)=>{
		val$_(ctx).set(val)
	}
	return [
		val$_,
		val_,
		val__set
	]
}
