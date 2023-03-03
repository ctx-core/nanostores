import { subscribe_wait } from '../subscribe_wait/index.js'
/** @typedef {import('nanostores').ReadableAtom}ReadableAtom */
/** @typedef {import('../_types').ExtractReadableAtomValue}ExtractReadableAtomValue */
/**
 * @param {ReadableAtom<unknown>}store
 * @param {(val:ExtractReadableAtomValue<ReadableAtom<unknown>>)}condition_fn
 * @param {number}timeout
 * @returns {Promise<ExtractReadableAtomValue<ReadableAtom<*>>>}
 */
export function subscribe_wait_timeout(
	store,
	condition_fn,
	timeout
) {
	return subscribe_wait(store, condition_fn, timeout)
}
