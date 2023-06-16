import { test } from 'uvu'
import { equal, is } from 'uvu/assert'
import { atom_, type WritableAtom_ } from '../index.js'
test('atom_()()', ()=>{
	const atom = atom_(1)
	is(atom(), 1)
	is(atom._, 1)
	is(atom.$, 1)
	is(atom.get(), 1)
	atom.set(2)
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
test('atom_|assign', ()=>{
	const letter_ = atom_('a') as Foobar
	letter_.foobar = 'baz'
	equal(letter_.foobar, 'baz')
})
test.run()
interface Foobar extends WritableAtom_<string> {
	foobar: string
}
