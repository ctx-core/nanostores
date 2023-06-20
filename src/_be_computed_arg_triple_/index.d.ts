import type { Be, be__params_T, Ctx, MapCtx } from '@ctx-core/object'
import type { Autosubscribe, ReadableAtom, StoreValue } from 'nanostores'
import type { ReadableAtom_ } from '../_types'
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
	val__new:(ctx:ctx_T, asub?:Autosubscribe)=>V,
	(ctx:ctx_T, val:StoreValue<V>)=>void
]
