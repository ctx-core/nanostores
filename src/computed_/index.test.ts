import { test } from 'uvu'
import { equal, is } from 'uvu/assert'
import { atom_, computed_, ReadableAtom_ } from '../index.js'
test('computed_()()', ()=>{
	const letter_ = atom_('a')
	const number_ = atom_(0)
	const str_ = computed_([letter_, number_], (letter, number)=>{
		return `${letter}-${String(number * 2)}`
	})
	is(str_(), 'a-0')
	is(str_._, 'a-0')
	is(str_.$, 'a-0')
	is(str_.get(), 'a-0')
	letter_('b')
	is(str_(), 'b-0')
	is(str_._, 'b-0')
	is(str_.$, 'b-0')
	is(str_.get(), 'b-0')
	number_(2)
	is(str_(), 'b-4')
	is(str_._, 'b-4')
	is(str_.$, 'b-4')
	is(str_.get(), 'b-4')
})
test('computed_|assign', ()=>{
	const letter_ = computed_(atom_('a'), $=>$) as Foobar
	letter_.foobar = 'baz'
	equal(letter_.foobar, 'baz')
})
test.run()
interface Foobar extends ReadableAtom_<string> {
	foobar:string
}
