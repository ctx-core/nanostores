/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { be_ } from 'ctx-core/be'
import { computed_ } from '../computed/index.js'
/** @typedef {import('nanostores').ReadableAtom}ReadableAtom */
/**
 * @returns {be_computed_pair_T}
 * @private
 */
export function be_computed_pair_(...argv_a) {
	let [
		be_OR_stores__new_OR_val__new,
		val_new_OR_config,
		config
	] = argv_a
	/** @type {Be<ReadableAtom>} */
	let be =
		be_OR_stores__new_OR_val__new.is_be
			? be_OR_stores__new_OR_val__new
			: argv_a.length === 1 || typeof val_new_OR_config !== 'function'
				? be_(
					ctx=>computed_(()=>be_OR_stores__new_OR_val__new(ctx)),
					argv_a.length === 2 ? val_new_OR_config : config)
				: be_(
					ctx=>computed_(
						be_OR_stores__new_OR_val__new(ctx),
						(...values)=>val_new_OR_config(...values)),
					config)
	return [
		be,
		ctx=>be(ctx)(),
	]
}
