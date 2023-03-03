import type { AnyStore, StoreValue } from 'nanostores'
export type StoreValues<Stores extends AnyStore[]> = {
	[Index in keyof Stores]:StoreValue<Stores[Index]>
}
