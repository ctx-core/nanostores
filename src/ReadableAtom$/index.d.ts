import type { ReadableAtom } from 'nanostores'
export interface ReadableAtom$<Value> extends ReadableAtom<Value> {
	readonly $:Value
}
