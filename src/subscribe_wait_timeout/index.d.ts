import type { ReadableAtom } from 'nanostores'
import { ExtractReadableAtomValue } from '../ExtractReadableAtomValue'
export function subscribe_wait_timeout<Store extends ReadableAtom<unknown>, Val>(
	store:Store,
	condition_fn?:(val:ExtractReadableAtomValue<Store>)=>any,
	timeout?:number
):Promise<ExtractReadableAtomValue<Store>>
