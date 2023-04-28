import { ctx_ } from '@ctx-core/object'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { atom_, be_atom_triple_ } from '../index.js'
test('be_atom_triple_|+base_name|+atom__new', ()=>{
	const [
		foobar__,
		foobar_,
		foobar__set,
	] = be_atom_triple_('foobar', ()=>atom_(1))
	const ctx = ctx_()
	equal(foobar__(ctx).$, 1)
	equal(foobar_(ctx), 1)
	foobar__set(ctx, 2)
	equal(foobar__(ctx).$, 2)
	equal(foobar_(ctx), 2)
})
test('be_atom_triple_|+base_name|-atom__new', ()=>{
	const [
		foobar__,
		foobar_,
		foobar__set,
	] = be_atom_triple_('foobar')
	const ctx = ctx_()
	equal(foobar__(ctx).$, undefined)
	equal(foobar_(ctx), undefined)
	foobar__set(ctx, 2)
	equal(foobar__(ctx).$, 2)
	equal(foobar_(ctx), 2)
})
test('be_atom_triple_|-base_name|+atom__new', ()=>{
	const [
		foobar__,
		foobar_,
		foobar__set,
	] = be_atom_triple_(undefined, ()=>atom_(1))
	const ctx = ctx_()
	equal(foobar__(ctx).$, 1)
	equal(foobar_(ctx), 1)
	foobar__set(ctx, 2)
	equal(foobar__(ctx).$, 2)
	equal(foobar_(ctx), 2)
})
test('be_atom_triple_|-base_name|-atom__new', ()=>{
	const [
		foobar__,
		foobar_,
		foobar__set,
	] = be_atom_triple_()
	const ctx = ctx_()
	equal(foobar__(ctx).$, undefined)
	equal(foobar_(ctx), undefined)
	foobar__set(ctx, 2)
	equal(foobar__(ctx).$, 2)
	equal(foobar_(ctx), 2)
})
test.run()
