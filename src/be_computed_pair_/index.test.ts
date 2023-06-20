import { be_, ctx_, type MapCtx } from '@ctx-core/object'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { atom_, be_atom_triple_, be_computed_pair_, computed_ } from '../index.js'
test('be_computed_pair_|+base_name|+computed__new|+be__params', ()=>{
	const ctx = ctx_()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	const [
		base$_,
		_base_,
		base__set,
	] = be_atom_triple_(()=>atom_(1), { is_source_ })
	let custom__be__called = false
	const custom__be_ = ((...argv:Parameters<typeof be_>)=>{
		custom__be__called = true
		return be_(...argv)
	}) as typeof be_
	const [
		foobar$_,
		foobar_,
	] = be_computed_pair_(
		'foobar',
		ctx=>
			computed_(base$_(ctx), base=>
				base + 1),
		{
			is_source_,
			be_: custom__be_,
		})
	equal(custom__be__called, true)
	equal(foobar$_([ctx_(), ctx]).$, 2)
	equal(foobar_([ctx_(), ctx]), 2)
	base__set(ctx, 2)
	equal(foobar$_([ctx_(), ctx]).$, 3)
	equal(foobar_([ctx_(), ctx]), 3)
})
test('be_computed_pair_|+base_name|+computed__new|-be__params', ()=>{
	const [
		base$_,
		_base_,
		base__set,
	] = be_atom_triple_(()=>atom_(1))
	const [
		foobar$_,
		foobar_,
	] = be_computed_pair_(
		'foobar',
		ctx=>
			computed_(base$_(ctx), base=>
				base + 1))
	const ctx = ctx_()
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	base__set(ctx, 2)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
})
test('be_computed_pair_|-base_name|+computed__new|+be__params', ()=>{
	const ctx = ctx_()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	const [
		base$_,
		_base_,
		base__set,
	] = be_atom_triple_(()=>
			atom_(1),
		{ is_source_ })
	let custom__be__called = false
	const custom__be_ = ((...argv:Parameters<typeof be_>)=>{
		custom__be__called = true
		return be_(...argv)
	}) as typeof be_
	const [
		foobar$_,
		foobar_,
	] = be_computed_pair_(
		ctx=>
			computed_(base$_(ctx),
				base=>base + 1),
		{
			is_source_,
			be_: custom__be_,
		})
	equal(custom__be__called, true)
	equal(foobar$_([ctx_(), ctx]).$, 2)
	equal(foobar_([ctx_(), ctx]), 2)
	base__set(ctx, 2)
	equal(foobar$_([ctx_(), ctx]).$, 3)
	equal(foobar_([ctx_(), ctx]), 3)
})
test('be_computed_pair_|-base_name|+computed__new|-be__params', ()=>{
	const [
		base$_,
		_base_,
		base__set,
	] = be_atom_triple_(()=>atom_(1))
	const [
		foobar$_,
		foobar_,
	] = be_computed_pair_(
		ctx=>
			computed_(base$_(ctx),
				base=>base + 1))
	const ctx = ctx_()
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	base__set(ctx, 2)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
})
test.run()
