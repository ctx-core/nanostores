import type { ReadableAtom, WritableAtom } from 'nanostores'
import type { ReadableAtom_ } from './ReadableAtom_.js'
export interface WritableAtom_<
	Value
> extends ReadableAtom_<Value>, ReadableAtom<Value>, WritableAtom<Value> {
	():Value
	(_:Value):void
	_:Value
	$:Value
}
export { WritableAtom_ as WritableAtom$ }
