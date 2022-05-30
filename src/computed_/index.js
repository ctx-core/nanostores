import { computed as _computed_ } from 'nanostores'
export const computed_ = (stores, cb)=>{
	const computed = _computed_(stores, cb)
	Object.defineProperties(computed, Object.getOwnPropertyDescriptors({
		get _() {
			return computed.get()
		},
		get $() {
			return computed.get()
		},
	}))
	return computed
}
export {
	computed_ as computed$
}
