import type { WritableAtom_ } from '../WritableAtom_'
export declare function atom_<Value, StoreExt = {}>(
	initialValue?:Value
):atom_T<Value, StoreExt>
export type atom_T<Value, StoreExt = {}> = WritableAtom_<Value>&StoreExt
export { atom_ as atom$, atom_T as atom$_ret_T }
