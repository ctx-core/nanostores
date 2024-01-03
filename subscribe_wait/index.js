import { timeout_promise } from 'ctx-core/function'
import { isNumber_ } from 'ctx-core/number'
/** @typedef {import('nanostores').ReadableAtom} */
/** @typedef {import('../_types/index.d.ts').ExtractReadableAtomValue} */
/**
 * @param {ReadableAtom<unknown>}store
 * @param {(val:ExtractReadableAtomValue<ReadableAtom<unknown>>)=>any}condition_fn
 * @param {number}[timeout]
 * @returns {Promise<ExtractReadableAtomValue<ReadableAtom<unknown>>>}
 */
export function subscribe_wait(
	store,
	condition_fn,
	timeout
) {
	const _subscribe_wait = new Promise(resolve=>{
		let unsubscribe, unsubscribe_oninit = false
		unsubscribe = store.subscribe($=>{
			if (condition_fn($)) {
				if (unsubscribe) unsubscribe()
				else unsubscribe_oninit = true
				resolve($)
			}
		})
		if (unsubscribe_oninit) unsubscribe()
	})
	return (
		isNumber_(timeout)
			? timeout_promise(_subscribe_wait, timeout)
			: _subscribe_wait)
}
