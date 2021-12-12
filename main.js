import ExternalServices from './external_services.js'

const Api_services = new ExternalServices;


function renderBracketList(brackets) {

    const list_element = document.getElementById("list_location");

    brackets.forEach((bracket) =>{
        
        //   const list = document.createElement('ul');
        const one = document.createElement('li');
        one.innerHTML= `<a href = " bracket.html?id=${bracket._id}">${bracket.title}</a>`


        
       
         
        list_element.appendChild(one);
            
                 
            
        
    
    
    });
    // bracket.html?id=[bracketid]
}


async function init() {
    const brackets = await Api_services.getBrackets();
    console.log(brackets);
    renderBracketList(brackets);

 


}

    // data.brackets.forEach((brackets) => {
    
    
        



init();
