import { ctx_ } from '@ctx-core/object'
import { throws } from 'assert'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { atom_, be_computed_pair_, computed_ } from '../index.js'
test('be_computed_pair_|+base_name|+computed__new', ()=>{
	const base_ = atom_(1)
	const [
		foobar__,
		foobar_,
	] = be_computed_pair_(
		'foobar',
		()=>
			computed_(base_, base=>
				base + 1))
	const ctx = ctx_()
	equal(foobar__(ctx).$, 2)
	equal(foobar_(ctx), 2)
	base_.$ = 2
	equal(foobar__(ctx).$, 3)
	equal(foobar_(ctx), 3)
})
test('be_computed_pair_|+base_name|-computed__new', ()=>{
	throws(
		()=>
			be_computed_pair_(...['foobar'] as any),
		new Error('be_computed_pair_|computed__new argument is required'))
})
test('be_computed_pair_|-base_name|+computed__new', ()=>{
	const base_ = atom_(1)
	const [
		foobar__,
		foobar_,
	] = be_computed_pair_(
		undefined,
		()=>
			computed_(base_,
				base=>base + 1))
	const ctx = ctx_()
	equal(foobar__(ctx).$, 2)
	equal(foobar_(ctx), 2)
	base_.$ = 2
	equal(foobar__(ctx).$, 3)
	equal(foobar_(ctx), 3)
})
test('be_computed_pair_|-base_name|-computed__new', ()=>{
	throws(
		()=>
			be_computed_pair_(...[] as any),
		new Error('be_computed_pair_|computed__new argument is required'))
})
test.run()
