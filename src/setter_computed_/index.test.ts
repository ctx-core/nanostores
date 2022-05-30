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
	let letter$ = atom_('a')
	let number$ = atom_(0)
	const a = setter_computed_([letter$, number$], ([letter, number], set)=>{
		run(async ()=>{
			set(`${letter}-${String(number * 2)}`)
		})
	})
	is(a._, 'a-0')
	is(a.$, 'a-0')
	is(a.get(), 'a-0')
	letter$._ = 'b'
	clock.runAll()
	is(a._, 'b-0')
	is(a.$, 'b-0')
	is(a.get(), 'b-0')
	number$._ = 2
	clock.runAll()
	is(a._, 'b-4')
	is(a.$, 'b-4')
	is(a.get(), 'b-4')
})
test('setter_computed_|single & multiple (array) dependency stores', ()=>{
	const i0_ = atom_(0)
	const i1_ = atom_(1)
	const single_ = setter_computed_(i0_, (args, set)=>{
		set(args)
	})
	equal(single_._, 0)
	const multi_ = setter_computed_([i0_, i1_], (args, set)=>{
		set(args)
	})
	equal(multi_._, [0, 1])
})
test('setter_computed_|child atoms|cb does not set', ()=>{
	const atom = atom_(0)
	const setter_computed = setter_computed_<number>(atom, ()=>{
		return
	})
	const child_ = computed_(setter_computed, _=>_)
	const child__listen_a:number[] = []
	child_.listen(_=>child__listen_a.push(_))
	atom._ = 1
	equal(child_._, undefined)
	equal(child__listen_a, [])
})
test('setter_computed_|cb returns sets same value', ()=>{
	const atom = atom_<Object>()
	const setter_computed = setter_computed_<Object>(atom, (atom, set)=>{
		set(atom)
	})
	const child_ = computed_(setter_computed, _=>_)
	const child__listen_a:Object[] = []
	child_.listen(_=>child__listen_a.push(_))
	const val = {}
	atom._ = val
	equal(child_._, val)
	equal(child__listen_a, [val])
	atom._ = val
	equal(child_._, val)
	equal(child__listen_a, [val, val])
})
test('setter_computed_|cb returns set then no set', ()=>{
	const atom = atom_<Object>()
	let i = 0
	const setter_computed = setter_computed_<Object>(atom, (atom, set)=>{
		if (i < 2) {
			set(atom)
			i++
		}
	})
	const child_ = computed_(setter_computed, _=>_)
	const child__listen_a:Object[] = []
	child_.listen(_=>child__listen_a.push(_))
	const val = {}
	atom._ = val
	equal(child_._, val)
	equal(child__listen_a, [val])
	atom._ = val
	equal(child_._, val)
	equal(child__listen_a, [val])
})
test.run()
