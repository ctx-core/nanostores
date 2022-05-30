import { atom as _atom_ } from 'nanostores'
import { writable_fn_ } from '../_private/index.js'
export const atom_ = initialValue=>{
	return writable_fn_(_atom_(initialValue))
}
export { atom_ as atom$ }
