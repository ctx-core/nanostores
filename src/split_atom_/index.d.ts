import type { ReadableAtom_ } from '../_types'
export function split_atom_<Value, StoreExt = {}>(
	initialValue?:Value
):split_atom__ret_T<Value, StoreExt>
export type split_atom__ret_T<Value, StoreExt = {}> = [ReadableAtom_<Value>&StoreExt, (set:Value)=>void]
export { split_atom_ as split_atom$, split_atom__ret_T as split_atom$_ret_T }
