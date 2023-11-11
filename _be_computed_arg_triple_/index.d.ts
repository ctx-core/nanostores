import type { be__params_T, Ctx, MapCtx } from '@ctx-core/object'
import type { ReadableAtom } from 'nanostores'
import type { ReadableAtom_ } from '../_types/index.js'
export declare function _be_computed_arg_triple_<
	V extends ReadableAtom = ReadableAtom_<any>,
	ctx_T extends Ctx = Ctx
>(
	computed__new:(ctx:MapCtx)=>V,
	be__params?:be__params_T
):_be_computed_arg_triple_T<V, ctx_T>
export declare function _be_computed_arg_triple_<
	V extends ReadableAtom = ReadableAtom_<any>,
	ctx_T extends Ctx = Ctx
>(
	name:string|null|undefined,
	computed__new:(ctx:MapCtx)=>V,
	be__params?:be__params_T
):_be_computed_arg_triple_T<V, ctx_T>
export type _be_computed_arg_triple_T<
	V extends ReadableAtom = ReadableAtom_<any>,
	ctx_T extends Ctx = Ctx
> = [
	id:string|null,
	val__new:(ctx:ctx_T)=>V,
	be__params:be__params_T
]
