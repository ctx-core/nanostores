/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { be_ } from 'ctx-core/be'
import { atom_ } from '../atom/index.js'
/** @typedef {import('nanostores').WritableAtom}WritableAtom */
/**
 * @param {Be<WritableAtom>|be__val__new_T<unknown>}be_OR_val__new
 * @param {be_config_T}[config]
 * @returns {be_atom_triple_T}
 * @private
 */
export function be_atom_triple_(be_OR_val__new, config) {
	/** @type {Be<WritableAtom>} */
	let be =
		be_OR_val__new.is_be
			? be_OR_val__new
			: be_(
				ctx=>atom_(be_OR_val__new(ctx)),
				config)
	return [
		be,
		ctx=>be(ctx)(),
		(ctx, val)=>{
			be(ctx).set(val)
		},
	]
}
