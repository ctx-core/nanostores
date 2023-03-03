/** @typedef {import('nanostores').WritableAtom}WritableAtom */
/** @typedef {import('../_types').WritableAtom_}WritableAtom_ */
/**
 * @param {WritableAtom<unknown>}writable_atom
 * @returns {WritableAtom_<unknown>}
 */
export function writable_atom___mix(writable_atom) {
	/** @type {WritableAtom_<unknown>} */
	return new Proxy(/** @type {any} */writable_atom, {
		get(target, prop, receiver) {
			if (prop === '_' || prop === '$') {
				return writable_atom.get()
			}
			return Reflect.get(writable_atom, prop, writable_atom)
		},
		set(target, prop, val, receiver) {
			if (prop === '_' || prop === '$') {
				writable_atom.set(val)
				return true
			}
			return Reflect.set(writable_atom, prop, val, writable_atom)
		}
	})
	/**
	 * @param {unknown}[$]
	 * @returns {void|unknown}
	 */
	function fn($) {
		return arguments.length ? writable_atom.set($) : writable_atom.get()
	}
}
