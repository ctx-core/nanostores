import { be_ } from '@ctx-core/object'
import { autosubscribe } from 'nanostores'
import { _be_atom_arg_triple_ } from '../_be_atom_arg_triple_/index.js'
import { atom_ } from '../atom_/index.js'
/** @typedef {import('@ctx-core/object').be__params_T}be__params_T */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('nanostores').WritableAtom}WritableAtom */
/** @typedef {import('./index.d.ts').be_atom_triple_T}be_atom_triple_T */
/**
 * @returns {be_atom_triple_T}
 * @private
 */
export function be_atom_triple_(...arg_a) {
	let [
		id,
		atom__new,
		be__params
	] = _be_atom_arg_triple_(...arg_a)
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
		use = autosubscribe()
	)=>val$_(ctx)(use)
	const val__set = (ctx, val)=>{
		val$_(ctx).set(val)
	}
	return [
		val$_,
		val_,
		val__set
	]
}
