// @flow

// just some dumb code for the flow checker to work on
module.exports = function (s:string, n:number) : string {
	var x:string = ''
	for (var i = 0; i < n; i++) x += s
	return x
}
