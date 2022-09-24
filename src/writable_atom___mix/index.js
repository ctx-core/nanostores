export function writable_atom___mix(readable_atom) {
	function fn($) {
		return arguments.length ? readable_atom.set($) : readable_atom.get()
	}
	return new Proxy(fn, {
		get(target, prop, receiver) {
			if (prop === '_' || prop === '$') {
				return readable_atom.get()
			}
			return Reflect.get(readable_atom, prop, readable_atom)
		},
		set(target, prop, val, receiver) {
			if (prop === '_' || prop === '$') {
				readable_atom.set(val)
				return true
			}
			return Reflect.set(readable_atom, prop, val, readable_atom)
		}
	})
}
