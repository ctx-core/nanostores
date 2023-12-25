/// <reference types="../_types/index.d.ts" />
/**
 * @param {import('nanostores').ReadableAtom<unknown>}computed
 * @returns {import('nanostores').ReadableAtom_<unknown>}
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
		set(target, prop, val) {
			return Reflect.set(computed, prop, val, computed)
		},
	})
}
