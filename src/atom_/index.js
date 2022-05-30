import { atom } from 'nanostores'
export const atom_ = initialValue=>{
	const _atom = atom(initialValue)
	Object.defineProperties(_atom, Object.getOwnPropertyDescriptors({
		get _() {
			return _atom.get()
		},
		set _(val) {
			_atom.set(val)
		},
		get $() {
			return _atom.get()
		},
		set $(val) {
			_atom.set(val)
		},
	}))
	return _atom
}
export { atom_ as atom$ }
