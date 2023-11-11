import type { WritableAtom_ } from '../_types/index.js'
export declare function atom_<Value>(
	initial?:Value
):WritableAtom_<Value>
export { atom_ as atom$ }
export type atom_T<Value> = WritableAtom_<Value>
export declare type atom$_ret_T<Value> = atom_T<Value>
