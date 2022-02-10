import { atom$ } from '../atom$/index.js'
import { onSet } from '../index.js'
/** @type {import('./index.d.ts').neq_atom$} */
export const neq_atom$ = (initialValue)=>{
	return decorate_neq_atom$(atom$(initialValue))
}
export function decorate_neq_atom$($atom$) {
	onSet($atom$, ({ newValue, abort })=>{
		if ($atom$.$ == newValue) abort()
	})
	return $atom$
}
