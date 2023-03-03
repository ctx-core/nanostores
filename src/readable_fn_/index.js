/** @typedef {import('nanostores').ReadableAtom}ReadableAtom */
/** @typedef {import('../_types').ReadableAtom_}ReadableAtom_ */
/**
 * @param {ReadableAtom<unknown>}computed
 * @returns {ReadableAtom_<unknown>}
 * @private
 */
export function readable_fn_(computed) {
	/** @type {ReadableAtom_<unknown>} */
	return new Proxy(/** @type {any} */fn, {
		get(target, prop, receiver) {
			if (prop === '_' || prop === '$') {
				return computed.get()
			}
			return Reflect.get(computed, prop, computed)
		},
		set(target, prop, val, receiver) {
			return Reflect.set(computed, prop, val, computed)
		},
	})
	/**
	 * @returns {unknown}
	 */
	function fn() {
		return computed.get()
	}
}
