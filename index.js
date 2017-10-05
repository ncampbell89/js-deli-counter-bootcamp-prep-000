function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine, name) {
  if (katzDeliLine.length) {
    return `Currently serving ${name}.`
    katzDeliLine.shift()
  } else {
    return "There is nobody waiting to be served!"
  }
  return katzDeliLine
}
