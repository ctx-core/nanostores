import type { ReadableAtom } from 'nanostores'
import type { ReadonlyIfObject } from '../_types/index.js'
export function listen_once<Value>(
	atom:ReadableAtom<Value>,
	listener:(value:ReadonlyIfObject<Value>)=>void
):()=>void
