import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { atom_, listen_change } from '../index.js'
test('listen_change', ()=>{
	let a$ = atom_('a')
	const listen_val_a:string[][] = []
	listen_change(a$, (...arg_a)=>{
		listen_val_a.push(arg_a as string[])
	})
	equal(listen_val_a, [])
	a$.$ = 'b'
	equal(listen_val_a, [['b', 'a']])
	a$.$ = 'c'
	equal(listen_val_a, [
		['b', 'a'],
		['c', 'b']])
	a$.$ = 'c'
	equal(listen_val_a, [
		['b', 'a'],
		['c', 'b']])
})
test.run()
