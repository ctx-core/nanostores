import { atom } from 'nanostores'
export const atom$ = (initialValue)=>{
	const _atom$ = atom(initialValue)
	Object.defineProperties(_atom$, Object.getOwnPropertyDescriptors({
		get $() {
			return _atom$.get()
		},
		set $(val) {
			_atom$.set(val)
		},
	}))
	return _atom$
}
