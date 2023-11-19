/** @typedef {import('nanostores').WritableAtom} */
/** @typedef {import('../_types/index.d.ts').WritableAtom_} */
/**
 * @param {WritableAtom<unknown>}writable_atom
 * @returns {WritableAtom_<unknown>}
 */
export function writable_atom___mix(writable_atom) {
	const fn = asub=>writable_atom(asub)
	/** @type {WritableAtom_<unknown>} */
	return new Proxy(/** @type {any} */fn, {
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
}
