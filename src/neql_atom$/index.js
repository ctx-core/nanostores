import { atom$ } from '../atom$/index.js'
import { onSet } from '../index.js'
/** @type {import('./index.d.ts').neql_atom$} */
export const neql_atom$ = (initialValue)=>{
	return decorate_neql_atom$(atom$(initialValue))
}
export function decorate_neql_atom$($atom$) {
	onSet($atom$, ({ newValue, abort })=>{
		if ($atom$.$ === newValue) abort()
	})
	return $atom$
}
