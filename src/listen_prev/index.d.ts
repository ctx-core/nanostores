import { ReadableAtom } from 'nanostores'
export declare function listen_prev<T>(store:ReadableAtom<T>, fn:(val:T, prev_val:T)=>void):()=>void
export type listen$prev<T> = typeof listen_prev<T>
