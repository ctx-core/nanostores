import { ReadableAtom } from 'nanostores'
export declare function listen_change<T>(store:ReadableAtom<T>, fn:(val:T, prev_val:T)=>void, eq_fn?:T[]):()=>void
export type listen$change = typeof listen_change
