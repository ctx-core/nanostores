import type { ReadableAtom } from 'nanostores'
export type ExtractReadableAtomValue<Store extends ReadableAtom<unknown>, Else extends unknown = unknown> =
	Store extends (ReadableAtom<infer Val>)
	? Val
	: Extract<Store, ReadableAtom<unknown>> extends ReadableAtom<infer O>
		? O
		: Else
