import { be_ } from '@ctx-core/object'
import { autosubscriber } from 'nanostores'
import { computed_ } from '../computed_/index.js'
/** @typedef {import('@ctx-core/object').be__params_T}be__params_T */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('nanostores').Autosubscribe}Autosubscribe */
/** @typedef {import('./index.d.ts').val__be_computed_pair_T}val__be_computed_pair_T */
/**
 * @param {string|null|undefined|((ctx:Ctx, asub:Autosubscribe)=>any)}id_OR_val__new
 * @param {((ctx:Ctx, asub:Autosubscribe)=>any)|be__params_T}[val__new_OR_be__params]
 * @param {be__params_T}[be__params]
 * @returns {val__be_computed_pair_T}
 * @private
 */
export function val__be_computed_pair_(
	id_OR_val__new,
	val__new_OR_be__params,
	be__params
) {
	/** @type {string} */
	let id
	/** @type {(ctx:Ctx, asub:Autosubscribe)=>any} */
	let val__new
	if (typeof id_OR_val__new === 'function') {
		val__new = id_OR_val__new
		be__params = val__new_OR_be__params
	} else {
		id = id_OR_val__new
		val__new = val__new_OR_be__params
	}
	if (!val__new) throw new Error('val__be_computed_pair_|val__new argument is required')
	const _be_ =
		(be__params && be__params.be_)
		?? be_
	const val$_ =
		id
		? _be_(id, ctx=>computed_(asub=>val__new(ctx, asub)), be__params)
		: _be_(ctx=>computed_(asub=>val__new(ctx, asub)), be__params)
	const val_ = (
		ctx,
		asub = autosubscriber()
	)=>val$_(ctx)(asub)
	return [
		val$_,
		val_,
	]
}
