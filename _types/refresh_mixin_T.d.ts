import type { ReadableAtom } from 'nanostores'
import type { refresh_T } from './refresh_T.js'
export interface refresh_mixin_T<I extends unknown = unknown> extends ReadableAtom<I> {
	refresh:refresh_T<I>
}
