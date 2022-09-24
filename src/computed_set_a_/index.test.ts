import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { computed_set_a_ } from '../index.js'
test('computed_set_a_', ()=>{
	const [computed, set] = computed_set_a_('foobar')
	equal(computed.get(), 'foobar')
	set('baz')
	equal(computed.get(), 'baz')
})
test.run()
