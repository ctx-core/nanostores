export function subscribe_wait(store, condition_fn) {
	return new Promise(resolve => {
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
}
