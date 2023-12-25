import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { computed_set_o_ } from '../index.js'
test('computed_set_o_', ()=>{
	const { computed, set } = computed_set_o_('foobar')
	equal(computed.get(), 'foobar')
	set('baz')
	equal(computed.get(), 'baz')
})
test.run()
