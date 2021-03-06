var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(line) {
  var lineList = []
  var i = 0
  if (line.length === 0) {
    return "The line is currently empty."
  } while (i < line.length) {
    lineList.push(` ${i + 1}. ${line[i]}`)
    i += 1
  }
  return `The line is currently:${lineList}`
}
