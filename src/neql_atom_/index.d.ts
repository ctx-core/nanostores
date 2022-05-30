import type { atom_T } from '../atom_'
export declare function neql_atom_<Value, StoreExt = {}>(
	initialValue?:Value
):atom_T<Value, StoreExt>
export declare function decorate_neql_atom_<Value, StoreExt = {}>(
	$atom$:atom_T<Value, StoreExt>
):atom_T<Value, StoreExt>
export type neql_atom$<Value, StoreExt = {}> = typeof neql_atom_<Value, StoreExt>
export type decorate_neql_atom$<Value, StoreExt = {}> = typeof decorate_neql_atom_<Value, StoreExt>
