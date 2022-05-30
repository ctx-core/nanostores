import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { neq_atom_ } from '../index.js'
test('neq_atom_._', ()=>{
	const v_ = neq_atom_<number|null|undefined>(1)
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
	v_._ = 0
	equal(v_._, 0)
	equal(v_a, [1, 2, 3, 0])
	v_._ = null
	equal(v_._, null)
	equal(v_a, [1, 2, 3, 0, null])
	v_._ = undefined
	equal(v_._, null)
	equal(v_a, [1, 2, 3, 0, null])
})
test.run()
