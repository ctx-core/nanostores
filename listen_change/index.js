/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { eq } from 'ctx-core/function'
import { listen_prev } from '../listen_prev/index.js'
/**
 * @param {import('nanostores').ReadableAtom<unknown>>}store
 * @param {(val:unknown, prev_val:unknown)=>void}fn
 * @param {typeof eq}[eq_fn]
 * @returns {()=>void}
 */
export function listen_change(store, fn, eq_fn = eq) {
	return listen_prev(store, (val, prev_val)=>{
		if (!eq_fn([val, prev_val])) {
			fn(val, prev_val)
		}
	})
}
export { listen_change as listen$change }
