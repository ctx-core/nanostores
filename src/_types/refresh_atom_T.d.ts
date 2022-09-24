import type { refresh_mixin_T } from './refresh_mixin_T'
import type { WritableAtom_ } from './WritableAtom_'
export interface refresh_atom_T<I> extends WritableAtom_<I>, refresh_mixin_T<I> {}
