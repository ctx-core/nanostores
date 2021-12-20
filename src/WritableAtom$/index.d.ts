import type { WritableAtom } from 'nanostores'
export type WritableAtom$<Value> = WritableAtom<Value>&{
	$:Value
}
