import { is } from 'uvu/assert'
import { test } from 'uvu'
import { atom_ } from '../index.js'
test('atom_()._', ()=>{
	const atom = atom_(1)
	is(atom._, 1)
	is(atom.$, 1)
	is(atom.get(), 1)
	atom._ = 2
	atom.set(3)
	is(atom._, 3)
	is(atom.$, 3)
	is(atom.get(), 3)
})
test.run()
