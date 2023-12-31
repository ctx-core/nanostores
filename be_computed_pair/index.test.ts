import { be_, ctx__new, type Ctx_wide_T, ns_ctx__new } from 'ctx-core/object'
import type { Equal, Expect } from 'ctx-core/test'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_atom_triple_, be_computed_pair_, computed_, type ReadableAtom_ } from '../index.js'
test('be_computed_pair_|-autosubscribe', ()=>{
	const [
		base$_,
		,
		base__set,
	] = be_atom_triple_(ctx=>{
		/* eslint-disable @typescript-eslint/no-unused-vars */
		type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<''>>>
		/* eslint-enable @typescript-eslint/no-unused-vars */
		return { foo: 1 }
	})
	const [
		foobar$_,
		foobar_,
	] = be_computed_pair_(
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
	] = be_computed_pair_(ctx=>{
		/* eslint-disable @typescript-eslint/no-unused-vars */
		type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<''>>>
		/* eslint-enable @typescript-eslint/no-unused-vars */
		return base_(ctx) + 1
	})
	const ctx = ctx__new()
	equal(base_(ctx), 1)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	base__set(ctx, 2)
	equal(base_(ctx), 2)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
})
test('be_computed_pair_|-autosubscribe|+id|+ns', ()=>{
	const ctx = ns_ctx__new('test_ns')
	const [
		base$_,
		,
		base__set,
	] = be_atom_triple_(()=>1, {
		ns: 'test_ns'
	})
	const [
		foobar$_,
		foobar_,
	] = be_computed_pair_(
		ctx=>{
			/* eslint-disable @typescript-eslint/no-unused-vars */
			type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<'test_ns'>>>
			/* eslint-enable @typescript-eslint/no-unused-vars */
			return base$_(ctx)
		},
		base=>base + 1,
		{
			id: 'foobar',
			ns: 'test_ns',
		})
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
	equal((ctx.s.test_ns.get('foobar')![0] as ReadableAtom_<number>).$, 2)
	base__set(ctx, 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 3)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 3)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
	equal(foobar$_(ctx)._, 3)
	equal(foobar_(ctx), 3)
	equal((ctx.s.test_ns.get('foobar')![0] as ReadableAtom_<number>).$, 3)
})
test('be_computed_pair_|+autosubscribe|+id|+is_ns_', ()=>{
	const ctx = ns_ctx__new('test_ns')
	const [
		,
		base_,
		base__set,
	] = be_atom_triple_(()=>1, {
		ns: 'test_ns'
	})
	const [
		foobar$_,
		foobar_,
	] = be_computed_pair_(ctx=>{
		/* eslint-disable @typescript-eslint/no-unused-vars */
		type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<'test_ns'>>>
		/* eslint-enable @typescript-eslint/no-unused-vars */
		return base_(ctx) + 1
	}, {
		id: 'foobar',
		ns: 'test_ns',
	})
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
	equal((ctx.s.test_ns.get('foobar')![0] as ReadableAtom_<number>).$, 2)
	base__set(ctx, 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 3)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 3)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
	equal(foobar$_(ctx)._, 3)
	equal(foobar_(ctx), 3)
	equal((ctx.s.test_ns.get('foobar')![0] as ReadableAtom_<number>).$, 3)
})
test('be_computed_pair_|be', ()=>{
	const ctx = ns_ctx__new('test_ns')
	const [
		,
		base_,
		base__set,
	] = be_atom_triple_(()=>1, {
		ns: 'test_ns'
	})
	const [
		foobar$_,
		foobar_,
	] = be_computed_pair_<number, 'test_ns', custom_T>(be_(ctx=>{
		/* eslint-disable @typescript-eslint/no-unused-vars */
		type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<'test_ns'>>>
		/* eslint-enable @typescript-eslint/no-unused-vars */
		const foobar$ = computed_(()=>base_(ctx) + 1) as custom_T
		foobar$.custom = 'custom-val'
		return foobar$
	}, {
		id: 'foobar',
		ns: 'test_ns',
	}))
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
	equal((ctx.s.test_ns.get('foobar')![0] as ReadableAtom_<number>)._, 2)
	equal(foobar$_(ctx).custom, 'custom-val')
	base__set(ctx, 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 3)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 3)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
	equal(foobar$_(ctx)._, 3)
	equal(foobar_(ctx), 3)
	equal((ctx.s.test_ns.get('foobar')![0] as ReadableAtom_<number>)._, 3)
	equal(foobar$_(ctx).custom, 'custom-val')
})
test.run()
type custom_T = ReadableAtom_<number>&{ custom:string }