import '../css/style.css'
import {characters} from "./characters";
import { DOMSelectors } from './selectors'; 

console.log(characters)

const jediPeople = characters.filter((dude) => dude.jedi === true)

DOMSelectors.btn.addEventListener('click',function(e){
  e.preventDefault();
  characters.forEach((character)=>{
    DOMSelectors.flexblaxs.insertAdjacentHTML('beforeend',`
    <h2>${character.name}</h2>
    <img src="${character.img}" `)
  });
})

console.log(jediPeople)
console.log(characters)