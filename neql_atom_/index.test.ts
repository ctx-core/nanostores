import { equal } from 'uvu/assert'
import { test } from 'uvu'
import { neql_atom_ } from '../index.js'
test('neql_atom_()()', ()=>{
	const v$ = neql_atom_<number|null|undefined>(1)
	const v_a:any[] = []
	v$.subscribe(v=>v_a.push(v))
	equal(v$(), 1)
	equal(v$._, 1)
	equal(v_a, [1])
	v$.set(2)
	equal(v$(), 2)
	equal(v$._, 2)
	equal(v_a, [1, 2])
	v$.set(2)
	equal(v$(), 2)
	equal(v$._, 2)
	equal(v_a, [1, 2])
	v$._ = 3
	equal(v$(), 3)
	equal(v$._, 3)
	equal(v_a, [1, 2, 3])
	v$.set(null)
	equal(v$(), null)
	equal(v$._, null)
	equal(v_a, [1, 2, 3, null])
	v$.set(undefined)
	equal(v$(), undefined)
	equal(v$._, undefined)
	equal(v_a, [1, 2, 3, null, undefined])
})
test.run()
