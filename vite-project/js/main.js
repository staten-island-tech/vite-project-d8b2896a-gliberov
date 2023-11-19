/* DOMSelectors.btn.addEventListener('click',function(e){
  e.preventDefault();
  characters.forEach((character)=>{
    DOMSelectors.flexblaxs.insertAdjacentHTML('beforeend',`<div class = "card">
    <img class=card-img src="${character.img}" alt=l>
    <div class=card-content>
      <h2>${character.name}
      </h2>
      <p> Their lightsaber color is ${character.lightsaberColor}
      </p>
    </div>
    </div>`)
  });
}) */
import '../css/style.css'
import {characters} from "./characters";
import { DOMSelectors } from './selectors';
import {Buttons} from './selectors';

const lists = {
jediPeople : characters.filter((dude) => dude.jedi === true),
sithPeople : characters.filter((dude) => dude.sith === true),
prequel : characters.filter((dude) => dude.trilogy.includes('Prequel') ),
original : characters.filter((dude) => dude.trilogy.includes('Original') ),
sequel : characters.filter((dude) => dude.trilogy.includes('Sequel') ),
upper: characters.map((dude) => {return{name: dude.name.toUpperCase(), img:dude.img, lightsaberColor: dude.lightsaberColor.toUpperCase()};})
}
characters.forEach((character)=>{
  DOMSelectors.flexblaxs.insertAdjacentHTML('beforeend',`<div class = "card">
  <img class=card-img src="${character.img}" alt=l>
  <div class=card-content>
    <h2>${character.name}
    </h2>
    <p> Their lightsaber color is ${character.lightsaberColor}
    </p>
  </div>
  </div>`)
});
const upper = characters.map((dude) => {return{name: dude.name.toUpperCase(), img:dude.img, lightsaberColor: dude.lightsaberColor.toUpperCase()}})
DOMSelectors.btn.addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

function printList(b,l) {
  b.addEventListener("click",function(e) {
    e.preventDefault();
    DOMSelectors.flexblaxs.innerHTML = ''
    l.forEach((character)=> { DOMSelectors.flexblaxs.insertAdjacentHTML('beforeend',`<div class = "card">
    <img class=card-img src="${character.img}" alt=l>
    <div class=card-content>
      <h2>${character.name}
      </h2>
      <p> Their lightsaber color is ${character.lightsaberColor}
      </p>
    </div>
    </div>`)})
    });
    }

printList(Buttons.all,characters)
printList(Buttons.prequel,lists.prequel)
printList(Buttons.original,lists.original)
printList(Buttons.sequel,lists.sequel)
printList(Buttons.jedi,lists.jediPeople)
printList(Buttons.sith,lists.sithPeople)

Buttons.upper.addEventListener("click", function(e){
  e.preventDefault();
  DOMSelectors.flexblaxs.innerHTML = ''
  lists.upper.forEach((dude)=>{ DOMSelectors.flexblaxs.insertAdjacentHTML('beforeend',`<div class = "card">
  <img class=card-img src="${dude.img}" alt=l>
  <div class=card-content>
    <h2>${dude.name}
    </h2>
    <p> Their lightsaber color is ${dude.lightsaberColor}
    </p>
  </div>
  </div>`)})
  });