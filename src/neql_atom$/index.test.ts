import { equal } from 'uvu/assert'
import { test } from 'uvu'
import { neql_atom$ } from '../index.js'
test('neql_atom$.$', ()=>{
	const v$ = neql_atom$<number|null|undefined>(1)
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
	v$.$ = null
	equal(v$.$, null)
	equal(v_a, [1, 2, 3, null])
	v$.$ = undefined
	equal(v$.$, undefined)
	equal(v_a, [1, 2, 3, null, undefined])
})
test.run()
