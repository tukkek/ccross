export var cards=[]

//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/12646864
function randomize(array){
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

export async function shuffle(){
  let index=await fetch('./tarot/index.xml')
  index=await index.text()
  index=new DOMParser().parseFromString(index,'text/xml')
  cards.push(...index.querySelectorAll('card'))
  randomize(cards)
  let descriptions=await fetch('./tarot/PictorialKey.xml')
  descriptions=await descriptions.text()
  descriptions=new DOMParser().parseFromString(descriptions,'text/xml')
  descriptions=Array.from(descriptions.querySelectorAll('card'))
  for(let c of cards){
    c.description=descriptions.find(d=>d.id==c.id).querySelectorAll('paragraph')
    c.description=Array.from(c.description).map(d=>d.innerHTML).join('\n\n')
  }
}
