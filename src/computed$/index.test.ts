import { is } from 'uvu/assert'
import { test } from 'uvu'
import { atom$, computed$ } from '../index.js'
test('computed$.$', ()=>{
  let letter$ = atom$('a')
  let number$ = atom$(0)
	const a = computed$([letter$, number$], (letter, number)=>{
		return `${letter}-${String(number * 2)}`
	})
	is(a.$, 'a-0')
	is(a.get(), 'a-0')
	letter$.$ = 'b'
	is(a.$, 'b-0')
	is(a.get(), 'b-0')
	number$.$ = 2
	is(a.$, 'b-4')
	is(a.get(), 'b-4')
})
test.run()
