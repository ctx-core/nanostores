import type { ReadableAtom } from 'nanostores'
import type { ExtractReadableAtomValue } from '../_types/index.js'
export function subscribe_wait<
	Store extends ReadableAtom<unknown>
>(
	store:Store,
	condition_fn:(val:ExtractReadableAtomValue<Store>)=>any,
	timeout?:number
):Promise<ExtractReadableAtomValue<Store>>
