const form = require('./formatting')

function charToFunc(c) {
	return "range += form." + c + "(start)"
}

function charToFuncRangeStart(c) {
	return "range += form." + c + "(start)"
}

function charToFuncRangeEnd(c) {
	return "range += form." + c + "(end)"
}

function getRange(template, start, end) {
	var range = ''

	var startArray = [];
	[...template].forEach((c) => {
  	try {
  		if (startArray.includes(c)) {
  			eval(charToFuncRangeEnd(c))
  		} else {
  			eval(charToFuncRangeStart(c))
  			startArray.push(c)
  		}
  	} catch(e) { range += c }
  })

  return range
}

function date(template, s = null, e = null){

  if (e) {
  	const start = new Date(s)
  	const end = new Date(e)
  	return getRange(template, start, end)

  } else { // If end date not set
  	var range = ''
  	const start = (s) ? new Date(s) : new Date();
	  [...template].forEach((c) => {
	  	try { eval(charToFunc(c)) } catch(e) { range += c }
	  })
	  return range
  }
}

console.log(date('F jS, Y - F jS, Y'))














