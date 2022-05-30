import { atom } from 'nanostores'
import { computed__T } from '../computed_'
export * from 'nanostores'
export declare type _atom_<Value, StoreExt = {}> = typeof atom<Value, StoreExt>
export declare type _computed_<Value, OriginStore> = computed__T
