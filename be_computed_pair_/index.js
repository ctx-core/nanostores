import { be_ } from 'ctx-core/be'
import { computed_ } from '../computed_/index.js'
/** @typedef {import('@ctx-core/object').be__val__new_T} */
/** @typedef {import('./index.d.ts').be_computed_pair_T} */
/**
 * @param {be__val__new_T<unknown>}val__new
 * @returns {be_computed_pair_T}
 * @private
 */
export function be_computed_pair_(val__new) {
	let oninit
	const be_computed_pair = [
		be_(ctx=>{
			let computed$ = computed_(()=>val__new(ctx))
			oninit?.(ctx, computed$)
			return computed$
		}),
		ctx=>be_computed_pair[0](ctx)(),
	]
	be_computed_pair.config = params=>(be_computed_pair[0].config(params), be_computed_pair)
	be_computed_pair.oninit = _oninit=>(oninit = _oninit, be_computed_pair)
	return be_computed_pair
}
