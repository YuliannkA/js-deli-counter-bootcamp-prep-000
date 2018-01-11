var katzDeli = [];
var otherDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`)
}

function nowServing(deliLine) {
  var i=0;
  while (i < deliLine.length) {
    i++;
  }
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else 
  return `Currently serving ${deliLine.shift()}.`
}


function currentLine(line) {
  
  if (line.length === 0) {
    return "The line is currently empty."
  } else
  return 
}