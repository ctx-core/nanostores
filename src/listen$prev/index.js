export function listen$prev($atom, fn) {
	let val = $atom.get()
	return $atom.listen($val=>{
		fn($val, val)
		val = $val
	})
}
