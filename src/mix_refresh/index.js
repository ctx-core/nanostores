import { assign } from '@ctx-core/object'
/**
 * @param {import('nanostores').ReadableAtom<unknown>}readable_atom
 * @param {($:unknown)=>void}[set]
 * @returns {import('../_types').refresh_mixin_T<unknown>}
 */
export function mix_refresh(
	readable_atom,
	set
) {
	return assign(readable_atom, { refresh })
	function refresh(in_val = readable_atom.get()) {
		if (set) {
			const $ = readable_atom.get()
			if (typeof $ === 'object') {
				set(assign($, in_val))
			} else {
				set(in_val)
			}
		} else if (this.set) {
			try {
				const $ = readable_atom.get()
				readable_atom.set(
					$ && typeof $ === 'object'
					? assign($, in_val)
					: in_val)
			} catch (err) {
				console.trace(err)
				throw err
			}
		} else {
			throw new Error('refresh only works on a WritableAtom or a ReadableAtom with a set function argument')
		}
	}
}
