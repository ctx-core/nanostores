import type { Be, be__params_T, Ctx, MapCtx } from '@ctx-core/object'
import type { Task } from 'nanostores'
import type { WritableAtom_ } from '../_types/index.js'
export declare function val__be_atom_triple_<
	V,
	ctx_T extends Ctx = Ctx
>(
	be__params?:be__params_T
):val__be_atom_triple_T<V, ctx_T>
export declare function val__be_atom_triple_<
	V,
	ctx_T extends Ctx = Ctx
>(
	id:string|null|undefined,
	be__params?:be__params_T
):val__be_atom_triple_T<V, ctx_T>
export declare function val__be_atom_triple_<
	V,
	ctx_T extends Ctx = Ctx
>(
	val__new:(ctx:MapCtx)=>V,
	be__params?:be__params_T
):val__be_atom_triple_T<V, ctx_T>
export declare function val__be_atom_triple_<
	V,
	ctx_T extends Ctx = Ctx
>(
	id?:string|null|undefined,
	val__new?:(ctx:MapCtx)=>Task<V>|V,
	be__params?:be__params_T
):val__be_atom_triple_T<V, ctx_T>
export type val__be_atom_triple_T<
	V,
	ctx_T extends Ctx = Ctx
> = [
	Be<WritableAtom_<V>>,
	(ctx:ctx_T)=>V,
	(ctx:ctx_T, val:V)=>void
]
