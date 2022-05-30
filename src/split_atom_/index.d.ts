import { ReadableAtom_ } from '../ReadableAtom_'
export function split_atom_<Value, StoreExt = {}>(
	initialValue?:Value
):split_atom__ret_T<Value, StoreExt>
export type split_atom__ret_T<Value, StoreExt = {}> = [ReadableAtom_<Value>&StoreExt, (set:Value)=>void]
export type split_atom$<Value, StoreExt = {}> = typeof split_atom_<Value, StoreExt>
export type split_atom$_ret_T<Value, StoreExt = {}> = split_atom__ret_T<Value, StoreExt>
