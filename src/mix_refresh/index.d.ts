import type { ReadableAtom, WritableAtom } from 'nanostores'
import type { Subscriber } from 'svelte/store'
import type { refresh_mixin_T } from '../_types'
export declare function mix_refresh<store_T extends unknown = unknown>(
	readable_atom:ReadableAtom<store_T>,
	set?:typeof readable_atom extends WritableAtom<store_T> ? undefined : Subscriber<store_T>
):refresh_mixin_T<store_T>
