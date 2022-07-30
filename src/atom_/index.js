import { _atom_ } from '../_nanostores/index.js'
import { writable_fn_ } from '../writable_fn_/index.js'
export function atom_(initialValue) {
	return writable_fn_(_atom_(initialValue))
}
export { atom_ as atom$ }
