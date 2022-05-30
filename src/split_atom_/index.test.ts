import { test } from 'uvu'
import { is } from 'uvu/assert'
import { split_atom_ } from '../index.js'
test('split_atom_()()', ()=>{
	const [a_, set] = split_atom_(1)
	is(a_(), 1)
	is(a_._, 1)
	is(a_.$, 1)
	is(a_.get(), 1)
	set(2)
	is(a_(), 2)
	is(a_._, 2)
	is(a_.$, 2)
	is(a_.get(), 2)
})
test.run()
