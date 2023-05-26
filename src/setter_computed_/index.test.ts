import FakeTimers, { InstalledClock } from '@sinonjs/fake-timers'
import { equal, is } from 'uvu/assert'
import { test } from 'uvu'
import { run } from '@ctx-core/function'
import { atom_, computed_, setter_computed_ } from '../index.js'
let clock:InstalledClock
test.before(()=>{
	clock = FakeTimers.install()
})
test.after(()=>{
	clock.uninstall()
})
test('setter_computed_()._', ()=>{
	let letter_ = atom_('a')
	let number_ = atom_(0)
	const a_ = setter_computed_([letter_, number_], ([letter, number], set)=>{
		run(async ()=>{
			set(`${letter}-${String(number * 2)}`)
		})
	})
	is(a_(), 'a-0')
	is(a_._, 'a-0')
	is(a_.$, 'a-0')
	is(a_.get(), 'a-0')
	letter_('b')
	clock.runAll()
	is(a_(), 'b-0')
	is(a_._, 'b-0')
	is(a_.$, 'b-0')
	is(a_.get(), 'b-0')
	number_(2)
	clock.runAll()
	is(a_(), 'b-4')
	is(a_._, 'b-4')
	is(a_.$, 'b-4')
	is(a_.get(), 'b-4')
})
test('setter_computed_|single & multiple (array) dependency stores', ()=>{
	const i0_ = atom_(0)
	const i1_ = atom_(1)
	const single_ = setter_computed_(i0_, (args, set)=>{
		set(args)
	})
	equal(single_(), 0)
	equal(single_._, 0)
	equal(single_.$, 0)
	equal(single_.get(), 0)
	const multi_ = setter_computed_([i0_, i1_], (args, set)=>{
		set(args)
	})
	equal(multi_(), [0, 1])
	equal(multi_._, [0, 1])
	equal(multi_.$, [0, 1])
	equal(multi_.get(), [0, 1])
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
	const child_ = computed_<
		number,
		typeof setter_computed
	>(setter_computed, _=>_)
	const child_listen_a:number[] = []
	child_.listen(_=>child_listen_a.push(_))
	atom(1)
	equal(child_(), undefined)
	equal(child_._, undefined)
	equal(child_.$, undefined)
	equal(child_.get(), undefined)
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
	const child_ = computed_(setter_computed, _=>_)
	const child_listen_a:Object[] = []
	child_.listen(_=>child_listen_a.push(_))
	const val = {}
	atom(val)
	equal(child_(), val)
	equal(child_._, val)
	equal(child_.$, val)
	equal(child_.get(), val)
	equal(child_listen_a, [val])
	atom(val)
	equal(child_(), val)
	equal(child_._, val)
	equal(child_.$, val)
	equal(child_.get(), val)
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
	const child_ = computed_(setter_computed, _=>_)
	const child_listen_a:Object[] = []
	child_.listen(_=>child_listen_a.push(_))
	const val = {}
	atom(val)
	equal(child_(), val)
	equal(child_._, val)
	equal(child_.$, val)
	equal(child_.get(), val)
	equal(child_listen_a, [val])
	atom(val)
	equal(child_(), val)
	equal(child_._, val)
	equal(child_.$, val)
	equal(child_.get(), val)
	equal(child_listen_a, [val])
})
test.run()
