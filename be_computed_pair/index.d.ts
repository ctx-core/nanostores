import type {
	Be,
	be__val__new_T,
	be_config_arg_a_T,
	be_config_T,
	ctx__be_T,
	ctx__get_T,
	wide_ctx_T
} from 'ctx-core/object'
import type { AnyStore, ReadableAtom, Store, StoreValue, Task } from 'nanostores'
import type { ReadableAtom_, StoreValues } from '../_types/index.js'
export declare function be_computed_pair_<
	val_T,
	ns_T extends string = '',
	computed_T extends ReadableAtom = ReadableAtom_<unknown>,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(be:Be<computed_T, ns_T, ctx_T>):be_computed_pair_T<val_T, ns_T, computed_T, ctx_T>
export declare function be_computed_pair_<
	val_T,
	ns_T extends string = '',
	stores_T extends Store = Store,
	computed_T extends ReadableAtom = ReadableAtom_<unknown>,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(
	stores__new:(ctx:ctx_T)=>stores_T,
	val__new:(value:StoreValue<stores_T>)=>Task<val_T>|val_T,
	...config:be_config_arg_a_T<ns_T>
):be_computed_pair_T<val_T, ns_T, computed_T, ctx_T>
export declare function be_computed_pair_<
	val_T,
	ns_T extends string = '',
	stores_T extends AnyStore[] = AnyStore[],
	computed_T extends ReadableAtom = ReadableAtom_<unknown>,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(
	stores__new:(ctx:ctx_T)=>stores_T,
	val__new:(...values:StoreValues<stores_T>)=>Task<val_T>|val_T,
	...config:be_config_arg_a_T<ns_T>
):be_computed_pair_T<val_T, ns_T, computed_T, ctx_T>
export declare function be_computed_pair_<
	val_T,
	ns_T extends string = '',
	computed_T extends ReadableAtom = ReadableAtom_<unknown>,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(
	val__new:be__val__new_T<val_T, ns_T, ctx_T>,
	...config:be_config_arg_a_T<ns_T>
):be_computed_pair_T<val_T, ns_T, computed_T, ctx_T>
export type be_computed_pair_T<
	val_T,
	ns_T extends string = '',
	computed_T extends ReadableAtom = ReadableAtom_<unknown>,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
> = [
	ctx__be_T<computed_T, ns_T, ctx_T>,
	ctx__get_T<val_T, ns_T, ctx_T>
]
