import { test } from 'uvu'
import { is } from 'uvu/assert'
import { split_atom_ } from '../index.js'
test('split_atom_._', ()=>{
	const [a$, set] = split_atom_(1)
	is(a$._, 1)
	is(a$.$, 1)
	is(a$.get(), 1)
	set(2)
	is(a$._, 2)
	is(a$.$, 2)
	is(a$.get(), 2)
})
test.run()
