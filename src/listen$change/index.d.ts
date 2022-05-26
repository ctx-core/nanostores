import { ReadableAtom } from 'nanostores'
export declare function listen$change<T>(store:ReadableAtom<T>, fn:(val:T, prev_val:T)=>void, eq_fn?:T[]):()=>void
