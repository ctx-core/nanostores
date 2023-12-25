// @ts-ignore
import FakeTimers, { InstalledClock } from '@sinonjs/fake-timers'
import { test } from 'uvu'
import { equal, is } from 'uvu/assert'
import { atom_, computed_, setter_computed_ } from '../index.js'
let clock:InstalledClock
test.before(()=>{
	clock = FakeTimers.install()
})
test.after(()=>{
	clock.uninstall()
})
test('setter_computed_()._', ()=>{
	let letter$ = atom_('a')
	let number$ = atom_(0)
	const a$ = setter_computed_(
		[letter$, number$],
		(a, set)=>{
			const [letter, number] = a
			set(`${letter}-${String(number * 2)}`)
		})
	is(a$(), 'a-0')
	is(a$._, 'a-0')
	is(a$.$, 'a-0')
	is(a$.get(), 'a-0')
	letter$.set('b')
	clock.runAll()
	is(a$(), 'b-0')
	is(a$._, 'b-0')
	is(a$.$, 'b-0')
	is(a$.get(), 'b-0')
	number$.set(2)
	clock.runAll()
	is(a$(), 'b-4')
	is(a$._, 'b-4')
	is(a$.$, 'b-4')
	is(a$.get(), 'b-4')
})
test('setter_computed_|single & multiple (array) dependency stores', ()=>{
	const i0_ = atom_(0)
	const i1_ = atom_(1)
	const single$ = setter_computed_(i0_, (args, set)=>{
		set(args)
	})
	equal(single$(), 0)
	equal(single$._, 0)
	equal(single$.$, 0)
	equal(single$.get(), 0)
	const multi$ = setter_computed_([i0_, i1_], (args, set)=>{
		set(args)
	})
	equal(multi$(), [0, 1])
	equal(multi$._, [0, 1])
	equal(multi$.$, [0, 1])
	equal(multi$.get(), [0, 1])
})
test('setter_computed_|child atoms|cb does not set', ()=>{
	const atom = atom_(0)
	const setter_computed =
		setter_computed_<
			number,
			typeof atom
		>(atom, ()=>{
			return
		})
	const child$ = computed_<
		number,
		typeof setter_computed
	>(setter_computed, _=>_)
	const child_listen_a:number[] = []
	child$.listen(_=>child_listen_a.push(_))
	atom.set(1)
	equal(child$(), undefined)
	equal(child$._, undefined)
	equal(child$.$, undefined)
	equal(child$.get(), undefined)
	equal(child_listen_a, [])
})
test('setter_computed_|cb returns sets same value', ()=>{
	const atom = atom_<Object>()
	const setter_computed = setter_computed_<
		Object,
		typeof atom
	>(atom, (val, set)=>{
		set(val)
	})
	const child$ = computed_(setter_computed, _=>_)
	const child_listen_a:Object[] = []
	child$.listen(_=>child_listen_a.push(_))
	const val = {}
	atom.set(val)
	equal(child$(), val)
	equal(child$._, val)
	equal(child$.$, val)
	equal(child$.get(), val)
	equal(child_listen_a, [val])
	atom.set(val)
	equal(child$(), val)
	equal(child$._, val)
	equal(child$.$, val)
	equal(child$.get(), val)
	equal(child_listen_a, [val])
})
test('setter_computed_|cb returns set then no set', ()=>{
	const atom = atom_<Object>()
	let i = 0
	const setter_computed = setter_computed_<
		Object,
		typeof atom
	>(atom, (atom, set)=>{
		if (i < 2) {
			set(atom)
			i++
		}
	})
	const child$ = computed_(setter_computed, _=>_)
	const child_listen_a:Object[] = []
	child$.listen(_=>child_listen_a.push(_))
	const val = {}
	atom.set(val)
	equal(child$(), val)
	equal(child$._, val)
	equal(child$.$, val)
	equal(child$.get(), val)
	equal(child_listen_a, [val])
	atom.set(val)
	equal(child$(), val)
	equal(child$._, val)
	equal(child$.$, val)
	equal(child$.get(), val)
	equal(child_listen_a, [val])
})
test.run()
