import { is } from 'uvu/assert'
import { test } from 'uvu'
import { atom$ } from '../index.js'
test('atom$.$', ()=>{
	const a = atom$(1)
	is(a.$, 1)
	is(a.get(), 1)
	a.$ = 2
	a.set(3)
	is(a.$, 3)
	is(a.get(), 3)
})
test.run()
