import ExternalServices from './external_services.js'
import {getParam} from './utility.js'

const Api_services = new ExternalServices;

{/* <li class="game game-top winner">Lousville <span>79</span></li>
    <li class="game game-spacer">&nbsp;</li>
    <li class="game game-bottom ">NC A&T <span>48</span></li> */}



function renderBracket(bracket) {
  const list_element = document.createElement('ul');
  list_element.classList.add("round");
  const tornament_element = document.querySelector('#tournament');
  tornament_element.appendChild(list_element);
  list_element.innerHTML = insertSpacer();


  
  console.log(bracket);
  bracket.participants.forEach((participant, index) => {
    if(index %2 == 0){
    list_element.innerHTML+=insertBracket(participant);
    } else{
      list_element.innerHTML += insertSpacer();
      list_element.innerHTML+=insertBracket(participant);
    }
  });
  `<li class="game game-top winner">Lousville <span>79</span></li>
  `
}

function insertSpacer(){
  return ' <li class="spacer">&nbsp;</li>';

}

function insertBracket(bracket){
  return  `<li class="game game-top winner">${bracket.name} <span>9</span></li>
  `
}


async function init() {

  const Id = getParam('id');


  const brackets = await Api_services.getBracketById(Id);
  
  renderBracket(brackets);




}


init();