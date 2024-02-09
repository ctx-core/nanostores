import type { Be, be_config_arg_a_T, ctx__be_T, ctx__get_T, ctx__set_T, wide_ctx_T } from 'ctx-core/be'
import type { WritableAtom } from 'nanostores'
import type { WritableAtom_ } from '../_types/index.js'
export declare function be_atom_triple_<
	val_T,
	ns_T extends string = '',
	atom_T extends WritableAtom<val_T> = WritableAtom_<val_T>,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(be:Be<atom_T, ns_T, ctx_T>):be_atom_triple_T<val_T, ns_T, atom_T, ctx_T>
export declare function be_atom_triple_<
	val_T,
	ns_T extends string = '',
	atom_T extends WritableAtom<val_T> = WritableAtom_<val_T>,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(
	val__new:(ctx:ctx_T)=>val_T,
	...config:be_config_arg_a_T<ns_T>
):be_atom_triple_T<val_T, ns_T, atom_T, ctx_T>
export type be_atom_triple_T<
	val_T,
	ns_T extends string = '',
	atom_T extends WritableAtom<val_T> = WritableAtom_<val_T>,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
> = [
	ctx__be_T<atom_T, ns_T, ctx_T>,
	ctx__get_T<val_T, ns_T, ctx_T>,
	ctx__set_T<val_T, ns_T, ctx_T>,
]
