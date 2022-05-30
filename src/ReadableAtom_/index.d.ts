import type { ReadableAtom } from 'nanostores'
export interface ReadableAtom_<Value> extends ReadableAtom<Value> {
	readonly _:Value
	readonly $:Value
}
export type ReadableAtom$<Value> = ReadableAtom_<Value>
