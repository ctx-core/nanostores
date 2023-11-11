import { test } from 'uvu'
import { is } from 'uvu/assert'
import { atom_pair_ } from '../index.js'
test('atom_pair_()()', ()=>{
	const [a_, set] = atom_pair_(1)
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
