import { ctx__new } from '@ctx-core/object'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_atom_triple_, type WritableAtom_ } from '../index.js'
test('be_atom_triple_', ()=>{
	const [
		foobar$_,
		foobar_,
		foobar__set,
	] = be_atom_triple_(()=>1)
	const ctx = ctx__new()
	equal(foobar$_(ctx).$, 1)
	equal(foobar_(ctx), 1)
	equal(foobar_(ctx), 1)
	foobar__set(ctx, 2)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	equal(foobar_(ctx), 2)
})
test('be_atom_triple_|+id__set|+is_source__def|+oninit__def', ()=>{
	const ctx = ctx__new()
	const [
		foobar$_,
		foobar_,
		foobar__set,
	] = be_atom_triple_<number, WritableAtom_<number>&{custom:string}>(()=>1)
		.config(foobar$=>foobar$
			.id__set('foobar')
			.is_source__def(map_ctx=>map_ctx === ctx))
		.oninit__def(foobar$=>foobar$.custom = 'custom-val')
	equal(foobar$_([ctx__new(), ctx]).$, 1)
	equal(foobar_([ctx__new(), ctx]), 1)
	equal(foobar$_(ctx).$, 1)
	equal(foobar_(ctx), 1)
	equal((ctx.get('foobar') as WritableAtom_<number>).$, 1)
	equal(foobar$_([ctx__new(), ctx]).custom, 'custom-val')
	foobar__set([ctx__new(), ctx], 2)
	equal(foobar$_([ctx__new(), ctx]).$, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	equal(foobar$_(ctx).$, 1)
	equal(foobar_(ctx), 2)
	equal((ctx.get('foobar') as WritableAtom_<number>).$, 2)
	equal(foobar$_([ctx__new(), ctx]).custom, 'custom-val')
})
test.run()
