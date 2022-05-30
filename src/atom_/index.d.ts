import { WritableAtom_ } from '../WritableAtom_'
export declare function atom_<Value, StoreExt = {}>(
	initialValue?:Value
):atom_T<Value, StoreExt>
export type atom$ = typeof atom_
export type atom_T<Value, StoreExt = {}> = WritableAtom_<Value>&StoreExt
export type atom$_ret_T<Value, StoreExt = {}> = atom_T<Value, StoreExt>
