export var cards=[
  '01 storm.png',
  '02 gale.png',
  '03 calm.png',
  '04 gust.png',
  '05 zephyr.png',
  '06 ash.png',
  '07 ember.png',
  '08 kindling.png',
  '09 pyre.png',
  '10 hearth.png',
  '11 desert.png',
  '12 oasis.png',
  '13 mountain.png',
  '14 forest.png',
  '15 jungle.png',
  '16 misery.png',
  '17 poverty.png',
  '18 struggle.png',
  '19 comfort.png',
  '20 abundance.png',
  '21 hell.png',
  '22 umbra.png',
  '23 eden.png',
  '24 astral.png',
  '25 heaven.png'
]

//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/12646864
export function shuffle(){
  var currentIndex = cards.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
  return cards;
}
