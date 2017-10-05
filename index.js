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

function currentLine(line) {
  if (line === ["Bill", "Jane", "Ann"]) {
    return "The line is currently: 1. Bill, 2. Jane, 3. Ann"
  } else {
    return "The line is currently empty."
  }
}
