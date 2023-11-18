import type { Be, be__params_T, Ctx, MapCtx } from '@ctx-core/object'
import type { ReadableAtom, StoreValue, Task } from 'nanostores'
import type { ReadableAtom_ } from '../_types/index.js'
export declare function be_computed_pair_<
	C extends ReadableAtom = ReadableAtom_<any>,
	ctx_T extends Ctx = Ctx
>(
	computed__new:(ctx:MapCtx)=>C,
	be__params?:be__params_T
):be_computed_pair_T<C, ctx_T>
export declare function be_computed_pair_<
	C extends ReadableAtom = ReadableAtom_<any>,
	ctx_T extends Ctx = Ctx
>(
	id:string|null|undefined,
	computed__new:(ctx:MapCtx)=>C,
	be__params?:be__params_T
):be_computed_pair_T<C, ctx_T>
export type be_computed_pair_T<
	C extends ReadableAtom = ReadableAtom_<any>,
	ctx_T extends Ctx = Ctx
> = [
	Be<C, ctx_T>,
	(ctx:ctx_T)=>Task<StoreValue<C>>|StoreValue<C>
]