import type { computed, ReadableAtom } from 'nanostores'
export declare function computed_set_a_<Val extends unknown = unknown>(
	initial:Val, __computed_?:typeof computed
):computed_set_a__T<Val>
export declare type computed_set_a__T<
	Val extends unknown = unknown
> = [ReadableAtom<Val>, computed_set_a__set_T<Val>]
export declare type computed_set_a__set_T<
	Val extends unknown = unknown
> = ($:Val)=>void
