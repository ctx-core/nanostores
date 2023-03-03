import { mix_refresh } from '../mix_refresh/index.js'
import { atom_ } from '../atom_/index.js'
/**
 * @param {unknown}init
 * @returns {import('../_types').refresh_mixin_T<*>}
 * @private
 */
export function refresh_atom_(init) {
	return mix_refresh(atom_(init))
}
