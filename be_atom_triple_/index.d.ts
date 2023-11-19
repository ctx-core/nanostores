import type { Be, Ctx, MapCtx } from '@ctx-core/object'
import type { WritableAtom } from 'nanostores'
import type { WritableAtom_ } from '../_types/index.js'
export declare function be_atom_triple_<
	val_T,
	atom_T extends WritableAtom<val_T> = WritableAtom_<val_T>,
	ctx_T extends Ctx = Ctx
>(val__new:(ctx:MapCtx)=>val_T):be_atom_triple_T<val_T, atom_T, ctx_T>
export type be_atom_triple_T<
	val_T,
	atom_T extends WritableAtom<val_T> = WritableAtom_<val_T>,
	ctx_T extends Ctx = Ctx
> = [
	Be<atom_T>,
	(ctx:ctx_T)=>val_T,
	(ctx:ctx_T, val:val_T)=>void
]&{
	config:(config__fn:(be:Be<atom_T>)=>unknown)=>be_atom_triple_T<val_T, atom_T, ctx_T>
	oninit__def:(oninit:(atom:atom_T)=>unknown)=>be_atom_triple_T<val_T, atom_T, ctx_T>
}
