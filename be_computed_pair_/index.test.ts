import { ctx__new } from '@ctx-core/object'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_atom_triple_, be_computed_pair_, type ReadableAtom_ } from '../index.js'
test('be_computed_pair_', ()=>{
	const [
		,
		base_,
		base__set,
	] = be_atom_triple_(()=>1)
	const [
		foobar$_,
		foobar_,
	] = be_computed_pair_(ctx=>base_(ctx) + 1)
	const ctx = ctx__new()
	equal(base_(ctx), 1)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	base__set(ctx, 2)
	equal(base_(ctx), 2)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
})
test('be_computed_pair_|+id|+is_source_|+oninit', ()=>{
	const ctx = ctx__new()
	const [
		,
		base_,
		base__set,
	] = be_atom_triple_(()=>1)
		.config({
			is_source_: map_ctx=>map_ctx === ctx
		})
	const [
		foobar$_,
		foobar_,
	] = be_computed_pair_<number, ReadableAtom_<number>&{ custom:string }>(ctx=>
		base_(ctx) + 1)
		.config({
			id: 'foobar',
			is_source_: map_ctx=>map_ctx === ctx,
		})
		.oninit((_ctx, foobar$)=>{
			if (Array.isArray(_ctx)) equal(_ctx[1], ctx)
			else equal(_ctx, ctx)
			foobar$.custom = 'custom-val'
		})
	equal(foobar$_([ctx__new(), ctx]).$, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
	equal((ctx.get('foobar') as ReadableAtom_<number>)._, 2)
	equal(foobar$_(ctx).custom, 'custom-val')
	base__set(ctx, 2)
	equal(foobar$_([ctx__new(), ctx]).$, 3)
	equal(foobar_([ctx__new(), ctx]), 3)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
	equal(foobar$_(ctx)._, 3)
	equal(foobar_(ctx), 3)
	equal((ctx.get('foobar') as ReadableAtom_<number>)._, 3)
	equal(foobar$_(ctx).custom, 'custom-val')
})
test.run()
