import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { computed__set_o_ } from '../index.js'
test('computed__set_o_', ()=>{
	const { computed_, set } = computed__set_o_('foobar')
	equal(computed_.$, 'foobar')
	set('baz')
	equal(computed_.$, 'baz')
})
test.run()
