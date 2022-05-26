export function listen_once($atom, listener) {
	let unlisten
	console.debug('listen_once|debug|1')
	const once_listener = (value)=>{
		console.debug('listen_once|once_listener|debug|0')
		listener(value)
		unlisten()
	}
	unlisten = $atom.listen(once_listener)
	return unlisten
}
