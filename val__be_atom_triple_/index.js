import { be_, be_arg_triple__new } from 'ctx-core/be'
import { atom_ } from '../atom_/index.js'
/** @typedef {import('@ctx-core/object').be__params_T}be__params_T */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('../be_atom_triple_/index.d.ts').be_atom_triple_T}be_atom_triple_T */
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
		be_arg_triple__new(...arg_a)
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
	const val_ = ctx=>val$_(ctx)()
	const val__set = (ctx, val)=>{
		val$_(ctx).set(val)
	}
	return [
		val$_,
		val_,
		val__set
	]
}
