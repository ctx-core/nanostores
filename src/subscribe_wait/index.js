import { isNumber_ } from '@ctx-core/number'
import { promise_timeout } from '@ctx-core/function'
export function subscribe_wait(store, condition_fn, timeout) {
	const _subscribe_wait = new Promise(resolve => {
		let unsubscribe, unsubscribe_oninit = false
		unsubscribe = store.subscribe($ => {
			if (condition_fn($)) {
				if (unsubscribe) unsubscribe()
				else unsubscribe_oninit = true
				resolve($)
			}
		})
		if (unsubscribe_oninit) unsubscribe()
	})
	return isNumber_(timeout) ? promise_timeout(_subscribe_wait, timeout) : _subscribe_wait
}
