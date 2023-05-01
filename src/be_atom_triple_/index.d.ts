import type { Be, be__params_T, Ctx } from '@ctx-core/object'
import type { WritableAtom } from 'nanostores'
import type { WritableAtom_ } from '../_types'
export declare function be_atom_triple_<
	T = any
>(
	be__params?:be__params_T
):be_atom_triple_T<T, WritableAtom_<T>>
export declare function be_atom_triple_<
	T = any
>(
	id:string|null|undefined,
	be__params?:be__params_T
):be_atom_triple_T<T, WritableAtom_<T>>
export declare function be_atom_triple_<
	T = any,
	A extends WritableAtom<T> = WritableAtom<T>
>(
	atom__new:(ctx:Ctx)=>A,
	be__params?:be__params_T
):be_atom_triple_T<T, A>
export declare function be_atom_triple_<
	T = any,
	A extends WritableAtom<T> = WritableAtom<T>
>(
	id?:string|null|undefined,
	atom__new?:((ctx:Ctx)=>A),
	be__params?:be__params_T
):be_atom_triple_T<T, A>
export type be_atom_triple_T<
	T = any,
	A extends WritableAtom<T> = WritableAtom<T>
> = [
	Be<A>,
	(ctx:Ctx)=>T,
	(ctx:Ctx, val:T)=>void
]
