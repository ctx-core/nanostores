import { atom } from 'nanostores'
export const split_atom$ = (initialValue)=>{
	const split_atom = atom(initialValue)
	const { set } = split_atom
	delete split_atom.set
	Object.defineProperties(split_atom, Object.getOwnPropertyDescriptors({
		get $() {
			return split_atom.get()
		},
	}))
	return [split_atom, set]
}
