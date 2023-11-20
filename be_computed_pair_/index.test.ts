import { be_, ctx__new } from '@ctx-core/object'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_atom_triple_, be_computed_pair_, computed_, type ReadableAtom_ } from '../index.js'

test('be_computed_pair_|-autosubscribe', ()=>{
	const [
		base$_,
		,
		base__set,
	] = be_atom_triple_(()=>({ foo: 1 }))
	const [
		foobar$_,
		foobar_,
	] =be_computed_pair_(
		ctx=>base$_(ctx),
		base=>base.foo + 1)
	const ctx = ctx__new()
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	base__set(ctx, { foo: 2 })
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
})
test('be_computed_pair_|+autosubscribe', ()=>{
	const [
		,
		base_,
		base__set,
	] = be_atom_triple_<number>(()=>1)
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
test('be_computed_pair_|-autosubscribe|+id|+is_source_', ()=>{
	const ctx = ctx__new()
	const [
		base$_,
		,
		base__set,
	] = be_atom_triple_(()=>1, {
		is_source_: map_ctx=>map_ctx === ctx
	})
	const [
		foobar$_,
		foobar_,
	] = be_computed_pair_(
		ctx=>base$_(ctx),
		base=>base + 1,
		{
			id: 'foobar',
			is_source_: map_ctx=>map_ctx === ctx,
		})
	equal(foobar$_([ctx__new(), ctx]).$, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
	equal((ctx.get('foobar') as ReadableAtom_<number>).$, 2)
	base__set(ctx, 2)
	equal(foobar$_([ctx__new(), ctx]).$, 3)
	equal(foobar_([ctx__new(), ctx]), 3)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
	equal(foobar$_(ctx)._, 3)
	equal(foobar_(ctx), 3)
	equal((ctx.get('foobar') as ReadableAtom_<number>).$, 3)
})
test('be_computed_pair_|+autosubscribe|+id|+is_source_', ()=>{
	const ctx = ctx__new()
	const [
		,
		base_,
		base__set,
	] = be_atom_triple_(()=>1, {
		is_source_: map_ctx=>map_ctx === ctx
	})
	const [
		foobar$_,
		foobar_,
	] = be_computed_pair_(ctx=>base_(ctx) + 1, {
		id: 'foobar',
		is_source_: map_ctx=>map_ctx === ctx,
	})
	equal(foobar$_([ctx__new(), ctx]).$, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
	equal((ctx.get('foobar') as ReadableAtom_<number>).$, 2)
	base__set(ctx, 2)
	equal(foobar$_([ctx__new(), ctx]).$, 3)
	equal(foobar_([ctx__new(), ctx]), 3)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
	equal(foobar$_(ctx)._, 3)
	equal(foobar_(ctx), 3)
	equal((ctx.get('foobar') as ReadableAtom_<number>).$, 3)
})
test('be_computed_pair_|be', ()=>{
	const ctx = ctx__new()
	const [
		,
		base_,
		base__set,
	] = be_atom_triple_(()=>1, {
		is_source_: map_ctx=>map_ctx === ctx
	})
	const [
		foobar$_,
		foobar_,
	] = be_computed_pair_<number, custom_T>(be_(ctx=>{
		const foobar$ = computed_(()=>base_(ctx) + 1) as custom_T
		foobar$.custom = 'custom-val'
		return foobar$
	}, {
		id: 'foobar',
		is_source_: map_ctx=>map_ctx === ctx,
	}))
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
type custom_T = ReadableAtom_<number>&{ custom:string }
