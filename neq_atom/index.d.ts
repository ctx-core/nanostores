import type { WritableAtom } from 'nanostores'
import type { WritableAtom_ } from '../_types/index.js'
export declare function neq_atom_<Value>(
	initial?:Value
):WritableAtom_<Value>
export { neq_atom_ as neq_atom$ }
export declare function decorate_neq_atom_<
	Value
>(
	atom:WritableAtom<Value>
):()=>void
export { decorate_neq_atom_ as decorate_neq_atom$ }
