var katzDeliLine = [];
var counter = 0;
function takeANumber(katzDeliLine) {
  counter += 1 
  katzDeliLine.push(counter)
  return("Welcome. " + " You are number " + (counter) + "." );
}

function currentLine(katzDeliLine, name){
  if (katzDeliLine.length >= 1) {
    let result = "The line is currently: ";
    for (var i = 0; i < katzDeliLine.length; i++) {
      result += i+1 + ". " + katzDeliLine[i] + ", ";
    }
      return(result.slice(0, -2))
} else {
    return("The line is currently empty.");
  }
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length >= 1) {
    return("Currently serving " +  katzDeliLine.shift() + ".");
     
  } else {
    return("There is nobody waiting to be served!")
  }
}