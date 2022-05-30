import { atom } from 'nanostores'
export const split_atom_ = initialValue=>{
	const split_atom = atom(initialValue)
	const { set } = split_atom
	delete split_atom.set
	Object.defineProperties(split_atom, Object.getOwnPropertyDescriptors({
		get _() {
			return split_atom.get()
		},
		get $() {
			return split_atom.get()
		},
	}))
	return [split_atom, set]
}
export {
	split_atom_ as split_atom$
}
