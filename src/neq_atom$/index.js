import { atom$ } from '../atom$/index.js'
import { onSet } from '../index.js'
/** @type {import('./index.d.ts').neq_atom$} */
export const neq_atom$ = (initialValue)=>{
	const $atom$ = atom$(initialValue)
	decorate_neq_atom$($atom$)
	return $atom$
}
export function decorate_neq_atom$($atom$) {
	return onSet($atom$, ({ newValue, abort })=>{
		if ($atom$.$ == newValue) abort()
	})
}
