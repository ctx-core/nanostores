import { eq } from '@ctx-core/function'
import { listen$prev } from '../listen$prev/index.js'
export function listen$change(store, fn, eq_fn = eq) {
	return listen$prev(store, (val, prev_val)=>{
		if (!eq_fn([val, prev_val])) {
			fn(val, prev_val)
		}
	})
}
