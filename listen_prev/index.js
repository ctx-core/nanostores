/**
 * @param {import('nanostores').ReadableAtom<unknown>}atom
 * @param {(val:unknown, prev_val:unknown)}fn
 * @returns {()=>void}
 */
export function listen_prev(atom, fn) {
	let val = atom.get()
	return atom.listen($=>{
		fn($, val)
		val = $
	})
}
export { listen_prev as listen$prev }
