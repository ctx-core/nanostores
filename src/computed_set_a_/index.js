import { _atom_, _computed_ } from '../_nanostores/index.js'
export function computed_set_a_(initial, __computed_ = _computed_) {
	const atom = _atom_(initial)
	const computed = __computed_(atom, $=>$)
	return [computed, atom.set]
}
