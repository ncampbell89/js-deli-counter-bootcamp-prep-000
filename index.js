function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine, name) {
  if (katzDeliLine.length) {
    katzDeliLine.shift()
  } else {
    return "There is nobody waiting to be served!"
  }
  return katzDeliLine

  var newArr = []
  var i = 0
  while (katzDeliLine.length > i) {
    newArr.push(`Currently serving ${name}.`)
    i++
  }
  return newArr
}
