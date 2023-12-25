import { _computed_ } from '../_nanostores/index.js'
import { computed_set_a_ } from '../computed_set_a/index.js'
/**
 * @param {unknown}initial
 * @param {typeof import('nanostores').computed}__computed_
 * @returns {import('./index.d.ts').computed_set_o_T}
 * @private
 */
export function computed_set_o_(
	initial,
	__computed_ = _computed_
) {
	const [computed, set] = computed_set_a_(initial, __computed_)
	return { computed, set }
}
