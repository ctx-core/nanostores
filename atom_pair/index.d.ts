import type { ReadableAtom_ } from '../_types/index.js'
export function atom_pair_<Value>(
	initialValue?:Value
):atom_pair_T<Value>
export {
	atom_pair_ as split_atom_,
	atom_pair_ as split_atom$,
	atom_pair_T as split_atom$_ret_T
}
export type atom_pair_T<
	Value
> = [ReadableAtom_<Value>, (set:Value)=>void]
export type split_atom__ret_T<Value> = atom_pair_T<Value>
