/* eslint-env browser */

(function (global) {
	"use strict"

	function log(value) {
		document.write("<pre>" + value + "</pre>")
	}

	if (!global.console) {
		global.console = {log: log, error: log}
	}

	global.test = test
	async function test(condition, arg) {
		test.total++
		console.log(test.total)
		if(arg===false || test.total < startIndex) return
		if(useRealDom 
			&& /m\.request|m\.route|contenteditable/.test(
				condition.toString())) return
		// if(!name) return
		try {
			if (!await condition()) throw new Error("failed")
		} catch (e) {
			console.error(e) // eslint-disable-line no-console
			console.log(condition)
			test.failures.push(condition)
		}
	}
	var startIndex = 0
	test.total = 0
	test.failures = []
	test.print = function (print) {
		for (var i = 0; i < test.failures.length; i++) {
			print(test.failures[i].toString())
		}

		print("tests: " + test.total + "\nfailures: " + test.failures.length)

		if (test.failures.length > 0) {
			throw new Error(test.failures.length + " tests did not pass")
		}
	}
})(this)
