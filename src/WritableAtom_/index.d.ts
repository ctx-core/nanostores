import type { WritableAtom } from 'nanostores'
import { ReadableAtom_ } from '../ReadableAtom_'
export interface WritableAtom_<Value> extends ReadableAtom_<Value>,WritableAtom<Value> {
	_:Value
	$:Value
}
export type WritableAtom$<Value> = WritableAtom_<Value>
