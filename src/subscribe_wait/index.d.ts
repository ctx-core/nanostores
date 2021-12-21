import type { ReadableAtom } from 'nanostores'
import type { ExtractReadableAtomValue } from '../ExtractReadableAtomValue'
export function subscribe_wait<Store extends ReadableAtom<unknown>>(
	store:Store,
	condition_fn?:(val:ExtractReadableAtomValue<Store>)=>any
):Promise<ExtractReadableAtomValue<Store>>
