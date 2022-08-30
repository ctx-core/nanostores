import { subscribe_wait } from '../subscribe_wait/index.js'
export function subscribe_wait_timeout(store, condition_fn, timeout) {
	return subscribe_wait(store, condition_fn, timeout)
}
