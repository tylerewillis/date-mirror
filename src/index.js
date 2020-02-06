const form = require('./formatting.js')

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

const isFourTwoFour = (date) => {
  if (!date.length == 10) return false
  const divider = date.charAt(4)
  const array = date.split(divider)
  if (array.length == 3) {
    if (array[0].length == 4 && array[1].length == 2 && array[2].length == 2) {
      var newArray = [array[1], array[2], array[0]]
      return newArray.join('-')
    } else {
      return false
    }
  }
  return false
}

function date(template, s = null, e = null){

  if (e) {
    const start = (isFourTwoFour(s)) ? new Date(isFourTwoFour(s)) : new Date(s)
    const end = (isFourTwoFour(e)) ? new Date(isFourTwoFour(e)) : new Date(e)
    return getRange(template, start, end)
  } else {
    var range = ''
    var text = false;
    var start = ''
    if (s) {
      start = (isFourTwoFour(s)) ? new Date(isFourTwoFour(s)) : new Date(s)
    } else start = new Date();
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