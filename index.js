function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
  return katzDeliLine
}

function currentLine(katzDeliLine, n, element) {
  if (katzDeliLine === []) {
    return "The line is currently empty."
  } else {
    return `The line is currently: ${n}. ${element}`
  }
}
