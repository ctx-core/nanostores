import { equal } from 'uvu/assert'
import { test } from 'uvu'
import { neq_atom$ } from '../index.js'
test('neq_atom$.$', ()=>{
	const v$ = neq_atom$<number|null|undefined>(1)
	const v_a:any[] = []
	v$.subscribe(v=>v_a.push(v))
	equal(v$.$, 1)
	equal(v_a, [1])
	v$.$ = 2
	equal(v$.$, 2)
	equal(v_a, [1, 2])
	v$.$ = 2
	equal(v$.$, 2)
	equal(v_a, [1, 2])
	v$.$ = 3
	equal(v$.$, 3)
	equal(v_a, [1, 2, 3])
	v$.$ = 0
	equal(v$.$, 0)
	equal(v_a, [1, 2, 3, 0])
	v$.$ = null
	equal(v$.$, null)
	equal(v_a, [1, 2, 3, 0, null])
	v$.$ = undefined
	equal(v$.$, null)
	equal(v_a, [1, 2, 3, 0, null])
})
test.run()
