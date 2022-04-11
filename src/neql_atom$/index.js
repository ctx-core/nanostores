import { onSet } from 'nanostores'
import { atom$ } from '../atom$/index.js'
/** @type {import('./index.d.ts').neql_atom$} */
export const neql_atom$ = (initialValue)=>{
	const $atom$ = atom$(initialValue)
	decorate_neql_atom$($atom$)
	return $atom$
}
export function decorate_neql_atom$($atom$) {
	return onSet($atom$, ({ newValue, abort })=>{
		if ($atom$.$ === newValue) abort()
	})
}
