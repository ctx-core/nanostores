import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { atom_, listen_once } from '../index.js'
test('listen_once', ()=>{
	let a_ = atom_('a')
	const listen_val_a:string[][] = []
	listen_once(a_, (...arg_a)=>{
		listen_val_a.push(arg_a as string[])
	})
	equal(listen_val_a, [])
	a_._ = 'b'
	equal(listen_val_a, [['b']])
	a_._ = 'c'
	equal(listen_val_a, [['b']])
})
test.run()
