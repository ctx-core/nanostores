import FakeTimers, { InstalledClock } from '@sinonjs/fake-timers'
import { is } from 'uvu/assert'
import { test } from 'uvu'
import { run } from '@ctx-core/function'
import { atom$, setter_computed$ } from '../index.js'
let clock:InstalledClock
test.before(()=>{
	clock = FakeTimers.install()
})
test.after(()=>{
	clock.uninstall()
})
test('setter_computed$.$', ()=>{
	let letter$ = atom$('a')
	let number$ = atom$(0)
	const a = setter_computed$([letter$, number$], ([letter, number], set)=>{
		run(async ()=>{
			set(`${letter}-${String(number * 2)}`)
		})
	})
	is(a.$, 'a-0')
	is(a.get(), 'a-0')
	letter$.$ = 'b'
	clock.runAll()
	is(a.$, 'b-0')
	is(a.get(), 'b-0')
	number$.$ = 2
	clock.runAll()
	is(a.$, 'b-4')
	is(a.get(), 'b-4')
})
test.run()
