const form = require('./formatting-min.js')

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
  var text = false

  var startArray = [];
  [...template].forEach((c) => {
    if (c == '[') text = true
    else if (c == ']') text = false
    else
      if (text == false) {
        try {
          if (startArray.includes(c)) {
            eval(charToFuncRangeEnd(c))
          } else {
            eval(charToFuncRangeStart(c))
            startArray.push(c)
          }
        } catch(e) { range += c }
      }
      else range += c
  })

  return range
}

function date(template, s = null, e = null){

  if (e) {
    const start = new Date(s)
    const end = new Date(e)
    return getRange(template, start, end)

  } else {
    var range = ''
    var text = false
    const start = (s) ? new Date(s) : new Date();
    [...template].forEach((c) => {
      if (c == '[') text = true
      else if (c == ']') text = false
      else
        if (text == false) try { eval(charToFunc(c)) } catch(e) { range += c }
        else range += c
    })
    return range
  }
}

module.exports = date