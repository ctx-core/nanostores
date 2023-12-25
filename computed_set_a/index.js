import { _atom_, _computed_ } from '../_nanostores/index.js'
/** @typedef {import('../_types/index.d.ts').ReadableAtom_} */
/**
 * @param {unknown}initial
 * @param {typeof import('nanostores').computed}[__computed_]
 * @returns {import('./index.d.ts').computed_set_a__T<unknown>}
 * @private
 */
export function computed_set_a_(
	initial,
	__computed_ = _computed_
) {
	const atom = _atom_(initial)
	const computed = __computed_(atom, $=>$)
	return [computed, atom.set]
}
