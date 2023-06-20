import { be__params_T, Ctx, MapCtx } from '@ctx-core/object'
import { Autosubscribe, StoreValue } from 'nanostores'
export declare function _be_atom_arg_triple_<
	V,
	ctx_T extends Ctx = Ctx
>(
	be__params?:be__params_T
):_be_atom_arg_triple_T<V, ctx_T>
export declare function _be_atom_arg_triple_<
	V,
	ctx_T extends Ctx = Ctx
>(
	id:string|null|undefined,
	be__params?:be__params_T
):_be_atom_arg_triple_T<V, ctx_T>
export declare function _be_atom_arg_triple_<
	V,
	ctx_T extends Ctx = Ctx
>(
	val__new:(ctx:MapCtx)=>V,
	be__params?:be__params_T
):_be_atom_arg_triple_T<V, ctx_T>
export declare function _be_atom_arg_triple_<
	V,
	ctx_T extends Ctx = Ctx
>(
	id?:string|null|undefined,
	val__new?:(ctx:MapCtx)=>V,
	be__params?:be__params_T
):_be_atom_arg_triple_T<V, ctx_T>
export type _be_atom_arg_triple_T<
	V,
	ctx_T extends Ctx = Ctx
> = [
	id:string|null,
	val__new:(ctx:ctx_T, asub?:Autosubscribe)=>V,
	(ctx:ctx_T, val:StoreValue<V>)=>void
]
