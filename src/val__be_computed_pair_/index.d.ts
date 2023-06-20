import type { Be, be__params_T, Ctx, MapCtx } from '@ctx-core/object'
import type { Autosubscribe, BoxAutosubscribe, UnboxAutosubscribe } from 'nanostores'
import type { ReadableAtom_ } from '../_types'
export declare function val__be_computed_pair_<
	V,
	ctx_T extends Ctx = Ctx
>(
	val__new:(ctx:MapCtx, asub:Autosubscribe<V>)=>
		BoxAutosubscribe<V>|PromiseLike<BoxAutosubscribe<V>>,
	be__params?:be__params_T
):val__be_computed_pair_T<UnboxAutosubscribe<Awaited<V>>, ctx_T>
export declare function val__be_computed_pair_<
	V,
	ctx_T extends Ctx = Ctx
>(
	name:string|null|undefined,
	val__new:((ctx:MapCtx, asub:Autosubscribe<V>)=>
		BoxAutosubscribe<V>|PromiseLike<BoxAutosubscribe<V>>),
	be__params?:be__params_T
):val__be_computed_pair_T<UnboxAutosubscribe<Awaited<V>>, ctx_T>
export type val__be_computed_pair_T<
	V,
	ctx_T extends Ctx = Ctx
> = [
	Be<ReadableAtom_<V>, ctx_T>,
	(ctx:ctx_T, asub?:Autosubscribe)=>V
]
