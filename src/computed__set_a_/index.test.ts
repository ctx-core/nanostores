import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { computed__set_a_ } from '../index.js'
test('computed__set_a_', ()=>{
	const [computed_, set] = computed__set_a_('foobar')
	equal(computed_.$, 'foobar')
	set('baz')
	equal(computed_.$, 'baz')
})
test.run()
