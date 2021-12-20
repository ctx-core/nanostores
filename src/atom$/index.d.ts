import { WritableAtom$ } from '../WritableAtom$'
export function atom$<Value, StoreExt = {}>(
	initialValue?:Value
):atom$_ret_T<Value, StoreExt>
export type atom$_ret_T<Value, StoreExt = {}> = WritableAtom$<Value>&StoreExt
