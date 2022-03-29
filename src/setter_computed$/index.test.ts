import FakeTimers, { InstalledClock } from '@sinonjs/fake-timers'
import { equal, is } from 'uvu/assert'
import { test } from 'uvu'
import { run } from '@ctx-core/function'
import { atom$, computed$, setter_computed$ } from '../index.js'
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
test('setter_computed$|single & multiple (array) dependency stores', ()=>{
	const i0_atom$ = atom$(0)
	const i1_atom$ = atom$(1)
	const single_computed$ = setter_computed$(i0_atom$, (args, set)=>{
		set(args)
	})
	equal(single_computed$.$, 0)
	const multi_computed$ = setter_computed$([i0_atom$, i1_atom$], (args, set)=>{
		set(args)
	})
	equal(multi_computed$.$, [0, 1])
})
test('setter_computed$|child atoms|cb does not set', ()=>{
	const $atom$ = atom$(0)
	const $setter_computed$ = setter_computed$<number>($atom$, ()=>{
		return
	})
	const $child$ = computed$($setter_computed$, $=>$)
	const $child$_listen_a:number[] = []
	$child$.listen($=>$child$_listen_a.push($))
	$atom$.$ = 1
	equal($child$.$, undefined)
	equal($child$_listen_a, [])
})
test('setter_computed$|cb returns sets same value', ()=>{
	const $atom$ = atom$<Object>()
	const $setter_computed$ = setter_computed$<Object>($atom$, (atom, set)=>{
		set(atom)
	})
	const $child$ = computed$($setter_computed$, $=>$)
	const $child$_listen_a:Object[] = []
	$child$.listen($=>$child$_listen_a.push($))
	const atom = {}
	$atom$.$ = atom
	equal($child$.$, atom)
	equal($child$_listen_a, [atom])
	$atom$.$ = atom
	equal($child$.$, atom)
	equal($child$_listen_a, [atom, atom])
})
test('setter_computed$|cb returns set then no set', ()=>{
	const $atom$ = atom$<Object>()
	let i = 0
	const $setter_computed$ = setter_computed$<Object>($atom$, (atom, set)=>{
		if (i < 2) {
			set(atom)
			i++
		}
	})
	const $child$ = computed$($setter_computed$, $=>$)
	const $child$_listen_a:Object[] = []
	$child$.listen($=>$child$_listen_a.push($))
	const atom = {}
	$atom$.$ = atom
	equal($child$.$, atom)
	equal($child$_listen_a, [atom])
	$atom$.$ = atom
	equal($child$.$, atom)
	equal($child$_listen_a, [atom])
})
test.run()
