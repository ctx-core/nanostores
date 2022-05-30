import { is } from 'uvu/assert'
import { test } from 'uvu'
import { atom_, computed_ } from '../index.js'
test('computed_()._', ()=>{
  let letter_ = atom_('a')
  let number_ = atom_(0)
	const a = computed_([letter_, number_], (letter, number)=>{
		return `${letter}-${String(number * 2)}`
	})
	is(a._, 'a-0')
	is(a.$, 'a-0')
	is(a.get(), 'a-0')
	letter_._ = 'b'
	is(a._, 'b-0')
	is(a.$, 'b-0')
	is(a.get(), 'b-0')
	number_._ = 2
	is(a._, 'b-4')
	is(a.$, 'b-4')
	is(a.get(), 'b-4')
})
test.run()
