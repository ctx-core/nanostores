import { _computed_ } from '../_nanostores/index.js'
import { computed_set_a_ } from '../computed_set_a_/index.js'
export function computed_set_o_(initial, __computed_ = _computed_) {
	const [computed, set] = computed_set_a_(initial, __computed_)
	return { computed, set }
}
