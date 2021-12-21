export function subscribe_wait(store, condition_fn) {
	return new Promise(resolve => {
		let unsubscribe, unsubscribe_oninit = false
		unsubscribe = store.subscribe(val => {
			if (condition_fn(val)) {
				if (unsubscribe) unsubscribe()
				else unsubscribe_oninit = true
				resolve(val)
			}
		})
		if (unsubscribe_oninit) unsubscribe()
	})
}
