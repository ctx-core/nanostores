import type { atom_T } from '../atom_'
export declare function neq_atom_<Value, StoreExt = {}>(
	initialValue?:Value
):atom_T<Value, StoreExt>
export declare function decorate_neq_atom_<Value, StoreExt = {}>(
	atom:atom_T<Value, StoreExt>
):atom_T<Value, StoreExt>
export type neq_atom$<Value, StoreExt = {}> = typeof neq_atom_<Value, StoreExt>
export type decorate_neq_atom$<Value, StoreExt = {}> = typeof decorate_neq_atom_<Value, StoreExt>
