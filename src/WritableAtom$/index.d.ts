import type { WritableAtom } from 'nanostores'
import { ReadableAtom$ } from '../ReadableAtom$'
export interface WritableAtom$<Value> extends ReadableAtom$<Value>,WritableAtom<Value> {
	$:Value
}
