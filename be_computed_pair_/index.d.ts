import type { Be, be__val__new_T, be_config_T, Ctx } from '@ctx-core/object'
import type { ReadableAtom, Store, StoreValue, Task } from 'nanostores'
import type { AnyStore } from 'nanostores/map'
import type { ReadableAtom_, StoreValues } from '../_types/index.js'

export declare function be_computed_pair_<
	val_T,
	computed_T extends ReadableAtom = ReadableAtom_<unknown>,
	ctx_T extends Ctx = Ctx
>(be: Be<computed_T, ctx_T>):be_computed_pair_T<val_T, computed_T, ctx_T>
export declare function be_computed_pair_<
    val_T,
	stores_T extends Store,
    computed_T extends ReadableAtom = ReadableAtom_<unknown>,
    ctx_T extends Ctx = Ctx,
>(
    stores__new:(ctx:Ctx)=>stores_T,
    val__new:(value:StoreValue<stores_T>)=>Task<val_T> | val_T,
    config?:be_config_T
):be_computed_pair_T<val_T, computed_T, ctx_T>
export declare function be_computed_pair_<
    val_T,
	stores_T extends AnyStore[],
    computed_T extends ReadableAtom = ReadableAtom_<unknown>,
    ctx_T extends Ctx = Ctx,
>(
    stores__new:(ctx:Ctx)=>stores_T,
    val__new:(...values:StoreValues<stores_T>)=>Task<val_T> | val_T,
    config?:be_config_T
):be_computed_pair_T<val_T, computed_T, ctx_T>
export declare function be_computed_pair_<
	val_T,
	computed_T extends ReadableAtom = ReadableAtom_<unknown>,
	ctx_T extends Ctx = Ctx
>(val__new:be__val__new_T<val_T>, config?:be_config_T):be_computed_pair_T<val_T, computed_T, ctx_T>
export type be_computed_pair_T<
	val_T,
	computed_T extends ReadableAtom = ReadableAtom_<unknown>,
	ctx_T extends Ctx = Ctx
> = [
	Be<computed_T, ctx_T>,
	(ctx:ctx_T)=>Task<val_T>|val_T
]
