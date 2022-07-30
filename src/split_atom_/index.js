import { atom } from 'nanostores'
import { readable_fn_ } from '../readable_fn_/index.js'
export const split_atom_ = initialValue=>{
	const split_atom = atom(initialValue)
	return [readable_fn_(split_atom), split_atom.set]
}
export { split_atom_ as split_atom$ }
