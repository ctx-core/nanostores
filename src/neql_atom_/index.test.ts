import { equal } from 'uvu/assert'
import { test } from 'uvu'
import { neql_atom_ } from '../index.js'
test('neql_atom_._', ()=>{
	const v_ = neql_atom_<number|null|undefined>(1)
	const v_a:any[] = []
	v_.subscribe(v=>v_a.push(v))
	equal(v_._, 1)
	equal(v_a, [1])
	v_._ = 2
	equal(v_._, 2)
	equal(v_a, [1, 2])
	v_._ = 2
	equal(v_._, 2)
	equal(v_a, [1, 2])
	v_._ = 3
	equal(v_._, 3)
	equal(v_a, [1, 2, 3])
	v_._ = null
	equal(v_._, null)
	equal(v_a, [1, 2, 3, null])
	v_._ = undefined
	equal(v_._, undefined)
	equal(v_a, [1, 2, 3, null, undefined])
})
test.run()
