import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { atom$, listen$change } from '../index.js'
test('listen$change', ()=>{
	let a$ = atom$('a')
	const listen_val_a:string[][] = []
	listen$change(a$, (...arg_a)=>{
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
