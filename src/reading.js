import * as deck from './deck.js'

const HELP=`
- Click a card to turn it front-side
- Click again to draw a new card on top
`

var slots=['top','left','center','right','bottom']

function turn(slot){
  let c=deck.cards.pop()
  slot.style['background-image']=`url("images/${c}")`
  let name=c.slice(c.indexOf(' ')+1,c.indexOf('.'))
  slot.title=name[0].toUpperCase()+name.slice(1)
}

export function draw(){
  deck.shuffle()
  slots=slots.map(s=>document.querySelector('#'+s))
  slots.push(...document.querySelector('#side').children)
  for(let s of slots){
    s.classList.add('slot')
    s.addEventListener('click',()=>turn(s))
  }
  document.querySelector('#help').addEventListener('click',()=>alert(HELP))
}
