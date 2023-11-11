import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { atom_, listen_prev } from '../index.js'
test('listen_prev', ()=>{
	let a$ = atom_('a')
	const listen_val_a:string[][] = []
	listen_prev(a$, (...arg_a)=>{
		listen_val_a.push(arg_a as string[])
	})
	equal(listen_val_a, [])
	a$._ = 'b'
	equal(listen_val_a, [['b', 'a']])
	a$._ = 'c'
	equal(listen_val_a, [
		['b', 'a'],
		['c', 'b']])
})
test.run()
