function theBeatlesPlay(musicians, instruments){
  var play = [];
  for (var i=0; i<musicians.length; i++){
    play[i] = musicians[i] + " plays " + instruments[i];
  }
  return play
}

function johnLennonFacts(array){
  for (var i=0; i<array.length; i++){
    array[i] += "!!!"
  }
  return array
}

function iLoveTheBeatles(n){
  var array = [];
  do {
    array.push("I love the beatles!")
    n++
  } while (n < 15)
  return array
}