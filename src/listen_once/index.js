export const listen_once = (_atom, listener)=>{
	let unlisten
	const once_listener = (value)=>{
		listener(value)
		unlisten()
	}
	unlisten = _atom.listen(once_listener)
}
