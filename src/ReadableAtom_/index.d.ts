import type { ReadableAtom } from 'nanostores'
export interface ReadableAtom_<Value> extends ReadableAtom<Value> {
	():Value
	readonly _:Value
	readonly $:Value
}
export { ReadableAtom_ as ReadableAtom$ }
