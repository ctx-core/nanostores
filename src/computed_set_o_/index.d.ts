import type { computed, ReadableAtom } from 'nanostores'
export declare function computed_set_o_<
	Val extends unknown = unknown
>(initial:Val, readable_fn?:typeof computed):computed_set_o_T<Val>
export interface computed_set_o_T<
	Val extends unknown = unknown
> {
	computed:ReadableAtom<Val>;
	set:computed_set_o__set_T<Val>
}
export declare type computed_set_o__set_T<
	Val extends unknown = unknown
> = ($:Val)=>void
