import type { Be, be__params_T, Ctx } from '@ctx-core/object'
import type { ReadableAtom, StoreValue } from 'nanostores'
import type { ReadableAtom_ } from '../_types'
export declare function be_computed_pair_<
	C extends ReadableAtom = ReadableAtom_
>(
	computed__new:(ctx:Ctx)=>C,
	be__params?:be__params_T
):be_computed_pair_T<C>
export declare function be_computed_pair_<
	C extends ReadableAtom = ReadableAtom_
>(
	name:string|null|undefined,
	computed__new:((ctx:Ctx)=>C),
	be__params?:be__params_T
):be_computed_pair_T<C>
export type be_computed_pair_T<
	C extends ReadableAtom = ReadableAtom_
> = [
	Be<C>,
	(ctx:Ctx)=>StoreValue<C>
]
