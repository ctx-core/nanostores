import { be_ } from '@ctx-core/object'
import { autosubscriber } from 'nanostores'
import { _be_atom_arg_triple_ } from '../_be_computed_arg_triple_/index.js'
/** @typedef {import('@ctx-core/object').be__params_T}be__params_T */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('nanostores').ReadableAtom}ReadableAtom */
/** @typedef {import('./index.d.ts').be_computed_pair_T}be_computed_pair_T */
/**
 * @returns {be_computed_pair_T}
 * @private
 */
export function be_computed_pair_(...arg_a) {
	const [id, computed__new, be__params] =
		/** @type {[string, (ctx:Ctx)=>ReadableAtom, be__params_T]} */
		_be_atom_arg_triple_(...arg_a)
	if (!computed__new) throw new Error('be_computed_pair_|computed__new argument is required')
	const _be_ =
		(be__params && be__params.be_)
		?? be_
	const val$_ =
		id
		? _be_(id, computed__new, be__params)
		: _be_(computed__new, be__params)
	const val_ = (
		ctx,
		use = autosubscriber()
	)=>val$_(ctx)(use)
	return [
		val$_,
		val_,
	]
}
