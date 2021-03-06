import { computed as _computed_ } from 'nanostores'
import { readable_fn_ } from '../readable_fn_/index.js'
export const computed_ = (stores, cb)=>{
	return readable_fn_(_computed_(stores, cb))
}
export {
	computed_ as computed$
}
