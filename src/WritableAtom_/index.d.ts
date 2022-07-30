import type { WritableAtom } from 'nanostores'
import type { ReadableAtom_ } from '../ReadableAtom_'
export interface WritableAtom_<Value> extends ReadableAtom_<Value>,WritableAtom<Value> {
	():Value
	(_:Value):void
	_:Value
	$:Value
}
export { WritableAtom_ as WritableAtom$ }
