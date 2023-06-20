/** @typedef {import('@ctx-core/object').be__params_T}be__params_T */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('./index.d.ts').be_atom_triple_T}be_atom_triple_T */
/**
 * @returns {be_atom_triple_T}
 * @private
 */
export function _be_atom_arg_triple_(...arg_a) {
	/** @type {string} */
	let id
	/** @type {(ctx:Ctx)=>ReadableAtom} */
	let val__new
	/** @type {be__params_T} */
	let be__params
	if (typeof arg_a[0] === 'function') {
		val__new = arg_a[0]
		be__params = arg_a[1]
	} else {
		[id, val__new, be__params] = arg_a
	}
	return [id, val__new, be__params]
}
