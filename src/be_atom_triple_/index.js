import { be_ } from '@ctx-core/object'
import { autosubscriber } from 'nanostores'
import { _be_atom_arg_triple_ } from '../_be_atom_arg_triple_/index.js'
import { atom_ } from '../atom_/index.js'
/** @typedef {import('@ctx-core/object').be__params_T}be__params_T */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('nanostores').WritableAtom}WritableAtom */
/** @typedef {import('./index.d.ts').be_atom_triple_T}be_atom_triple_T */
/**
 * @param {string|null|undefined|((ctx:Ctx)=>any)|be__params_T}[id_OR_atom__new_OR_be__params]
 * @param {((ctx:Ctx)=>any)|be__params_T}[atom__new_OR_be__params]
 * @param {be__params_T}[be__params]
 * @returns {be_atom_triple_T}
 * @private
 */
export function be_atom_triple_(...arg_a) {
	let [
		id,
		atom__new,
		be__params
	] =
		/** @type {[string, (ctx:Ctx)=>WritableAtom, be__params_T]} */
		_be_atom_arg_triple_(...arg_a)
	if (!atom__new) {
		atom__new =
			()=>
				atom_()
	}
	const _be_ =
		(be__params && be__params.be_)
		?? be_
	const val$_ =
		id
		? _be_(id, atom__new, be__params)
		: _be_(atom__new, be__params)
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
