import { ReadableAtom } from 'nanostores'
import type { ReadonlyIfObject } from '../ReadonlyIfObject'
export function listen_once<Value>(
	atom:ReadableAtom<Value>,
	listener: (value: ReadonlyIfObject<Value>) => void
): () => void
