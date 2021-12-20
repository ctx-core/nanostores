import { is } from 'uvu/assert'
import { test } from 'uvu'
import { split_atom$ } from '../index.js'
test('split_atom$.$', ()=>{
	const [a$, set] = split_atom$(1)
	is(a$.$, 1)
	is(a$.get(), 1)
	set(2)
	is(a$.$, 2)
	is(a$.get(), 2)
})
test.run()
