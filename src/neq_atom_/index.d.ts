import type { atom_T } from '../atom_'
export declare function neq_atom_<Value, StoreExt = {}>(
	initialValue?:Value
):atom_T<Value, StoreExt>
export declare function decorate_neq_atom_<Value, StoreExt = {}>(
	atom:atom_T<Value, StoreExt>
):atom_T<Value, StoreExt>
export { neq_atom_ as neq_atom$, decorate_neq_atom_ as decorate_neq_atom$ }
