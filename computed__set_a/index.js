import { computed_set_a_ } from '../computed_set_a/index.js'
import { mix_computed_ } from '../computed/index.js'
import { _computed_ } from '../_nanostores/index.js'
/**
 * @param {unknown}initial
 * @param {typeof import('nanostores').computed}__computed_
 * @returns {import('./index.d.ts').computed__set_a__T<unknown>}
 * @private
 */
export function computed__set_a_(
	initial,
	__computed_ = _computed_
) {
	const [computed, set] = computed_set_a_(initial, __computed_)
	const computed_ = mix_computed_(computed)
	return [computed_, set]
}
