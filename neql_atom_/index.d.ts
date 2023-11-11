import type { WritableAtom } from 'nanostores'
import type { WritableAtom_ } from '../_types/index.js'
export declare function neql_atom_<Value>(
	initialValue?:Value
):WritableAtom_<Value>
export { neql_atom_ as neql_atom$ }
export declare function decorate_neql_atom_<Value>(
	atom:WritableAtom<Value>
):()=>void
export { decorate_neql_atom_ as decorate_neql_atom$ }
