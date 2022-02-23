import { WritableAtom$ } from '../WritableAtom$'
export declare function atom$<Value, StoreExt = {}>(
	initialValue?:Value
):atom$_ret_T<Value, StoreExt>
export type atom$_ret_T<Value, StoreExt = {}> = WritableAtom$<Value>&StoreExt
