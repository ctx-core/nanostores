import type { Be, be_config_T, Ctx, ctx__be_T, ctx__get_T, ctx__set_T, Ctx_wide_T } from 'ctx-core/object'
import type { WritableAtom } from 'nanostores'
import type { WritableAtom_ } from '../_types/index.js'
export declare function be_atom_triple_<
	val_T,
	ns_T extends string = '',
	atom_T extends WritableAtom<val_T> = WritableAtom_<val_T>,
	ctx_T extends Ctx = Ctx_wide_T<ns_T>
>(be: Be<atom_T, ns_T, ctx_T>):be_atom_triple_T<val_T, ns_T, atom_T, ctx_T>
export declare function be_atom_triple_<
	val_T,
	ns_T extends string = '',
	atom_T extends WritableAtom<val_T> = WritableAtom_<val_T>,
	ctx_T extends Ctx = Ctx_wide_T<ns_T>
>(
	val__new:(ctx:ctx_T)=>val_T,
	config?:be_config_T<ns_T>
):be_atom_triple_T<val_T, ns_T, atom_T, ctx_T>
export type be_atom_triple_T<
	val_T,
	ns_T extends string = '',
	atom_T extends WritableAtom<val_T> = WritableAtom_<val_T>,
	ctx_T extends Ctx = Ctx_wide_T<ns_T>
> = [
	ctx__be_T<ctx_T, atom_T, ns_T>,
	ctx__get_T<ctx_T, val_T>,
	ctx__set_T<ctx_T, val_T>
]
