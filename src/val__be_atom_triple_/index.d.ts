import type { Be, be__params_T, Ctx, MapCtx } from '@ctx-core/object'
import type { Autosubscribe, BoxAutosubscribe, UnboxAutosubscribe } from 'nanostores'
import type { WritableAtom_ } from '../_types'
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
	val__new:(ctx:MapCtx)=>
		BoxAutosubscribe<V>
		|PromiseLike<BoxAutosubscribe<V>>,
	be__params?:be__params_T
):val__be_atom_triple_T<UnboxAutosubscribe<Awaited<V>>, ctx_T>
export declare function val__be_atom_triple_<
	V,
	ctx_T extends Ctx = Ctx
>(
	id?:string|null|undefined,
	val__new?:((ctx:MapCtx)=>
		BoxAutosubscribe<V>
		|PromiseLike<BoxAutosubscribe<V>>),
	be__params?:be__params_T
):val__be_atom_triple_T<UnboxAutosubscribe<Awaited<V>>, ctx_T>
export type val__be_atom_triple_T<
	V,
	ctx_T extends Ctx = Ctx
> = [
	Be<WritableAtom_<V>>,
	(ctx:ctx_T, asub?:Autosubscribe)=>V,
	(ctx:ctx_T, val:V)=>void
]
