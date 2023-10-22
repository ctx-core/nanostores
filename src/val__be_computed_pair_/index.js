import { be_ } from '@ctx-core/object'
import { _be_atom_arg_triple_ } from '../_be_computed_arg_triple_/index.js'
import { computed_ } from '../computed_/index.js'
/** @typedef {import('@ctx-core/object').be__params_T}be__params_T */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('./index.d.ts').val__be_computed_pair_T}val__be_computed_pair_T */
/**
 * @param {string|null|undefined|((ctx:Ctx)=>any)}id_OR_val__new
 * @param {((ctx:Ctx)=>any)|be__params_T}[val__new_OR_be__params]
 * @param {be__params_T}[be__params]
 * @returns {val__be_computed_pair_T}
 * @private
 */
export function val__be_computed_pair_(...arg_a) {
	const [id, val__new, be__params] =
		/** @type {[string, (ctx:Ctx)=>any, be__params_T]} */
		_be_atom_arg_triple_(...arg_a)
	if (!val__new) throw new Error('val__be_computed_pair_|val__new argument is required')
	const _be_ =
		(be__params && be__params.be_)
		?? be_
	const val$_ =
		id
		? _be_(id, ctx=>computed_(()=>val__new(ctx)), be__params)
		: _be_(ctx=>computed_(()=>val__new(ctx)), be__params)
	const val_ = ctx=>val$_(ctx)()
	return [
		val$_,
		val_,
	]
}
