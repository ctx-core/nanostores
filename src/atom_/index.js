import { _atom_ } from '../_nanostores/index.js'
import { writable_atom___mix } from '../writable_atom___mix/index.js'
export function atom_(initialValue) {
	return writable_atom___mix(_atom_(initialValue))
}
export { atom_ as atom$ }
