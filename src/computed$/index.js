import { computed } from 'nanostores'
export const computed$ = (stores, cb)=>{
	const _computed$ = computed(stores, cb)
	Object.defineProperties(_computed$, Object.getOwnPropertyDescriptors({
		get $() {
			return _computed$.get()
		},
	}))
	return _computed$
}
