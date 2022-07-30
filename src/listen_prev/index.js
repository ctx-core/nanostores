export function listen_prev(atom, fn) {
	let val = atom.get()
	return atom.listen($val=>{
		fn($val, val)
		val = $val
	})
}
export { listen_prev as listen$prev }
