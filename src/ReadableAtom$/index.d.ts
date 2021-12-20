import type { ReadableAtom } from 'nanostores'
export type ReadableAtom$<Value> = ReadableAtom<Value>&{
	$:Value
}
