/** @typedef {import('../_types').ReadonlyIfObject}ReadonlyIfObject */
/**
 * @param {import('nanostores').ReadableAtom<unknown>}atom
 * @param {(value:ReadonlyIfObject<unknown>)=>void}listener
 * @returns {()=>void}
 */
export function listen_once(atom, listener) {
	let unlisten
	const once_listener = value=>{
		listener(value)
		unlisten()
	}
	unlisten = atom.listen(once_listener)
	return unlisten
}
