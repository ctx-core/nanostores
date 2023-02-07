import { computed as _computed_ } from 'nanostores'
import { readable_fn_ } from '../readable_fn_/index.js'
/**
 *
 * @param stores {AnyStore[]|Store}
 * @param cb {((...values:StoreValues<OriginStores>)=>Value)|((value:StoreValue<OriginStore>)=>Value)}
 * @returns {function(): *}
 * @private
 */
export function computed_(
	stores,
	cb
) {
	return mix_computed_(_computed_(stores, cb))
}
export function mix_computed_(computed) {
	return readable_fn_(computed)
}
export { computed_ as computed$ }
