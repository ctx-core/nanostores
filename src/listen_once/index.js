export function listen_once($atom, listener) {
	let unlisten
	const once_listener = (value)=>{
		listener(value)
		unlisten()
	}
	unlisten = $atom.listen(once_listener)
	return unlisten
}
