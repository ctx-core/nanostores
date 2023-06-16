import type { Be, be__params_T, Ctx } from '@ctx-core/object'
import type { Autosubscribe, StoreValue, WritableAtom } from 'nanostores'
import type { WritableAtom_ } from '../_types'
export declare function be_atom_triple_<
	A extends WritableAtom = WritableAtom_<any>,
	ctx_T extends Ctx = Ctx
>(
	be__params?:be__params_T
):be_atom_triple_T<A, ctx_T>
export declare function be_atom_triple_<
	A extends WritableAtom = WritableAtom_<any>,
	ctx_T extends Ctx = Ctx
>(
	id:string|null|undefined,
	be__params?:be__params_T
):be_atom_triple_T<A, ctx_T>
export declare function be_atom_triple_<
	A extends WritableAtom = WritableAtom_<any>,
	ctx_T extends Ctx = Ctx
>(
	atom__new:(ctx:ctx_T)=>A,
	be__params?:be__params_T
):be_atom_triple_T<A, ctx_T>
export declare function be_atom_triple_<
	A extends WritableAtom = WritableAtom_<any>,
	ctx_T extends Ctx = Ctx
>(
	id?:string|null|undefined,
	atom__new?:((ctx:ctx_T)=>A),
	be__params?:be__params_T
):be_atom_triple_T<A, ctx_T>
export type be_atom_triple_T<
	A extends WritableAtom = WritableAtom_<any>,
	ctx_T extends Ctx = Ctx
> = [
	Be<A>,
	(ctx:ctx_T, asub?:Autosubscribe<StoreValue<A>>)=>StoreValue<A>,
	(ctx:ctx_T, val:StoreValue<A>)=>void
]
