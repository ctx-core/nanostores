import { ReadableAtom$ } from '../ReadableAtom$'
export function split_atom$<Value, StoreExt = {}>(
	initialValue?:Value
):split_atom$_ret_T<Value, StoreExt>
export type split_atom$_ret_T<Value, StoreExt = {}> = [ReadableAtom$<Value>&StoreExt, (set:Value)=>void]
