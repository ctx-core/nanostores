import { is } from 'uvu/assert'
import { test } from 'uvu'
import { atom_ } from '../index.js'
test('atom_()()', ()=>{
	const atom = atom_(1)
	is(atom(), 1)
	is(atom._, 1)
	is(atom.$, 1)
	is(atom.get(), 1)
	atom(2)
	is(atom(), 2)
	is(atom._, 2)
	is(atom.$, 2)
	is(atom.get(), 2)
	atom._ = 3
	is(atom(), 3)
	is(atom._, 3)
	is(atom.$, 3)
	is(atom.get(), 3)
	atom.$ = 4
	is(atom(), 4)
	is(atom._, 4)
	is(atom.$, 4)
	is(atom.get(), 4)
	atom.set(5)
	is(atom(), 5)
	is(atom._, 5)
	is(atom.$, 5)
	is(atom.get(), 5)
})
test.run()
