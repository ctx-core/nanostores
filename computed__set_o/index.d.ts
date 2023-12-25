import type { computed } from 'nanostores'
import type { ReadableAtom_ } from '../_types/index.js'
import type { computed_set_o__set_T } from '../computed_set_o/index.js'
export declare function computed__set_o_<Val extends unknown = unknown>(
	initial:Val, __computed_?:typeof computed
):computed__set_o__T<Val>;
export interface computed__set_o__T<Val extends unknown = unknown> {
	computed_:ReadableAtom_<Val>;
	set:computed_set_o__set_T<Val>
}
