import { ReadableAtom } from 'nanostores'
export declare function listen$prev<T>(store:ReadableAtom<T>, fn:(val:T, prev_val:T)=>void):()=>void
