import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { atom$, listen$prev } from '../index.js'
test('listen$prev', ()=>{
	let a$ = atom$('a')
	const listen_val_a:string[][] = []
	listen$prev(a$, (...arg_a)=>{
		listen_val_a.push(arg_a as string[])
	})
	equal(listen_val_a, [])
	a$.$ = 'b'
	equal(listen_val_a, [['b', 'a']])
	a$.$ = 'c'
	equal(listen_val_a, [
		['b', 'a'],
		['c', 'b']])
})
test.run()
