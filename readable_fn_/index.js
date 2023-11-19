/** @typedef {import('nanostores').ReadableAtom} */
/** @typedef {import('../_types/index.d.ts').ReadableAtom_} */
/**
 * @param {ReadableAtom<unknown>}computed
 * @returns {ReadableAtom_<unknown>}
 * @private
 */
export function readable_fn_(computed) {
	const fn = asub=>computed(asub)
	/** @type {ReadableAtom_<unknown>} */
	return new Proxy(/** @type {any} */fn, {
		get(target, prop) {
			if (prop === '_' || prop === '$') {
				return computed.get()
			}
			return Reflect.get(computed, prop, computed)
		},
		set(target, prop, val, receiver) {
			return Reflect.set(computed, prop, val, receiver)
		},
	})
}
