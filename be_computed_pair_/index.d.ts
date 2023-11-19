import type { Be, be__val__new_T, Ctx } from '@ctx-core/object'
import type { ReadableAtom, Task } from 'nanostores'
import type { ReadableAtom_ } from '../_types/index.js'

export declare function be_computed_pair_<
	val_T,
	computed_T extends ReadableAtom = ReadableAtom_<unknown>,
	ctx_T extends Ctx = Ctx
>(val__new:be__val__new_T<val_T>):be_computed_pair_T<val_T, computed_T, ctx_T>
export type be_computed_pair_T<
	val_T,
	computed_T extends ReadableAtom = ReadableAtom_<unknown>,
	ctx_T extends Ctx = Ctx
> = [
	Be<computed_T, ctx_T>,
	(ctx:ctx_T)=>Task<val_T>|val_T
]&{
	config:(config__fn:(be:Be<computed_T>)=>unknown)=>be_computed_pair_T<val_T, computed_T, ctx_T>
	oninit__def:(oninit:(computed:computed_T)=>unknown)=>be_computed_pair_T<val_T, computed_T, ctx_T>
}

