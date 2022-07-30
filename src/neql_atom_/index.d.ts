import type { atom_T } from '../atom_'
export declare function neql_atom_<Value, StoreExt = {}>(
	initialValue?:Value
):atom_T<Value, StoreExt>
export declare function decorate_neql_atom_<Value, StoreExt = {}>(
	$atom$:atom_T<Value, StoreExt>
):atom_T<Value, StoreExt>
export { neql_atom_ as neql_atom$, decorate_neql_atom_ as decorate_neql_atom$ }
