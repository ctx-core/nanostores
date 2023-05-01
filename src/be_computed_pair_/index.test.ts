import { ctx_, MapCtx } from '@ctx-core/object'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { atom_, be_computed_pair_, computed_ } from '../index.js'
test('be_computed_pair_|+base_name|+computed__new|+be__params', ()=>{
	const base_ = atom_(1)
	const ctx = ctx_()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	const [
		foobar__,
		foobar_,
	] = be_computed_pair_(
		'foobar',
		()=>
			computed_(base_, base=>
				base + 1),
		{ is_source_ })
	equal(foobar__([ctx_(), ctx]).$, 2)
	equal(foobar_([ctx_(), ctx]), 2)
	base_.$ = 2
	equal(foobar__([ctx_(), ctx]).$, 3)
	equal(foobar_([ctx_(), ctx]), 3)
})
test('be_computed_pair_|+base_name|+computed__new|-be__params', ()=>{
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
test('be_computed_pair_|-base_name|+computed__new|+be__params', ()=>{
	const base_ = atom_(1)
	const ctx = ctx_()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	const [
		foobar__,
		foobar_,
	] = be_computed_pair_(
		undefined,
		()=>
			computed_(base_,
				base=>base + 1),
		{ is_source_ })
	equal(foobar__([ctx_(), ctx]).$, 2)
	equal(foobar_([ctx_(), ctx]), 2)
	base_.$ = 2
	equal(foobar__([ctx_(), ctx]).$, 3)
	equal(foobar_([ctx_(), ctx]), 3)
})
test('be_computed_pair_|-base_name|+computed__new|-be__params', ()=>{
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
test.run()
