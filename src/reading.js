import * as deck from './deck.js'

const HELP=`
- Click a card to turn it front-side
- Click again to draw a new card on top
`

var slots=['top','left','center','right','bottom']

function turn(slot,event){slot.style['background-image']=`url("images/${deck.cards.pop()}")`}

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
