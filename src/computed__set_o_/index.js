import { mix_computed_ } from '../computed_/index.js'
import { _computed_ } from '../_nanostores/index.js'
import { computed__set_a_ } from '../computed__set_a_/index.js'
export function computed__set_o_(initial, __computed_ = _computed_) {
	const [computed, set] = computed__set_a_(initial, __computed_)
	const computed_ = mix_computed_(computed)
	return { computed_, set }
}
