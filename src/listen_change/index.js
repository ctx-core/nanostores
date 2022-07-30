import { eq } from '@ctx-core/function'
import { listen_prev } from '../listen_prev/index.js'
export function listen_change(store, fn, eq_fn = eq) {
	return listen_prev(store, (val, prev_val)=>{
		if (!eq_fn([val, prev_val])) {
			fn(val, prev_val)
		}
	})
}
export { listen_change as listen$change }
