import * as deck from './deck.js'

const HELP=`
- Click a card to turn it front-side
- You can click a card in the same way again to draw a new card on top of the previous one
- Right-click a drawn card to show its description
`

var slots=['top','left','center','right','bottom']

function turn(slot,event){
  let c=deck.cards.pop()
  if(!c){
    alert('No more cards!')
    return
  }
  slot.card=c
  let arcana=c.querySelector('arcana').innerHTML
  let image=''
  if(arcana=='Minor'){
    let suit=c.querySelector('suit').innerHTML.toLowerCase()
    if(suit=='pentacles') suit='pents'
    image=`${suit}${c.id.substr(1)}`
  }else{
    image=`maj${c.id}`
  }
  slot.style['background-image']=`url(tarot/img/big/${image}.jpg)`
  slot.title=image
}

function describe(slot,event){
  if(!slot.card) return
  alert(slot.card.description)
  event.stopPropagation()
  event.preventDefault()
}

export async function draw(){
  await deck.shuffle()
  slots=slots.map(s=>document.querySelector('#'+s))
  slots.push(...document.querySelector('#side').children)
  for(let s of slots){
    s.classList.add('slot')
    s.addEventListener('click',()=>turn(s))
    s.addEventListener('contextmenu',(e)=>describe(s,e))
  }
  document.querySelector('#help').addEventListener('click',()=>alert(HELP))
}
