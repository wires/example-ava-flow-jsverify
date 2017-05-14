// @flow

const test:* = require('ava')
const jsc:* = require('jsverify')
const check:* = require('ava-jsverify').check

const thing:* = require('../index.js')

test('∀s:string, n:number. (s^n).length = s.length * n',
	check(jsc.string, jsc.nat, function (t:*, s:string, n:number) {
		t.is(thing(s,n).length, s.length * n)
	})
)
