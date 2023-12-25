import type { computed } from 'nanostores'
import type { ReadableAtom_ } from '../_types/index.js'
import type { computed_set_a__set_T } from '../computed_set_a/index.js'
export declare function computed__set_a_<
	Val extends unknown = unknown
>(initial:Val, computed_?:typeof computed):computed__set_a__T<Val>;
export declare type computed__set_a__T<
	Val extends unknown = unknown
> = [ReadableAtom_<Val>, computed_set_a__set_T<Val>];
