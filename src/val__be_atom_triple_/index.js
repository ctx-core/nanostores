import { be_ } from '@ctx-core/object'
import { autosubscriber } from 'nanostores'
import { atom_ } from '../atom_/index.js'
import { _be_atom_arg_triple_ } from '../_be_atom_arg_triple_/index.js'
/** @typedef {import('@ctx-core/object').be__params_T}be__params_T */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('./index.d.ts').be_atom_triple_T}be_atom_triple_T */
/**
 * @returns {be_atom_triple_T}
 * @private
 */
export function val__be_atom_triple_(...arg_a) {
	let [
		id,
		val__new,
		be__params
	] =
		/** @type {[string, (ctx:Ctx)=>unknown, be__params_T]} */
		_be_atom_arg_triple_(...arg_a)
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
		use = autosubscriber()
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
