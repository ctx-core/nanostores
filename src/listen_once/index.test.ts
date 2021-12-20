import { equal } from 'uvu/assert'
import { test } from 'uvu'
import { atom$, listen_once } from '../index.js'
test('listen_once', ()=>{
  let a$ = atom$('a')
	const listen_val_a:string[][] = []
	listen_once(a$, (...arg_a)=>{
		listen_val_a.push(arg_a)
	})
	equal(listen_val_a, [])
	a$.$ = 'b'
	equal(listen_val_a, [['b']])
	a$.$ = 'c'
	equal(listen_val_a, [['b']])
})
test.run()
