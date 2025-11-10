function updateclock(){
const now = new Date(); 

let hours  =now.getHours(); 
let minutes = now.getMinutes();
let seconds = now.getSeconds(); 

let ampm = hours >= 12 ? 'PM' : 'AM'; 

hours = hours % 12; 
hours = hours ? hours : 12; 


hours = hours < 10 ? '0'+hours: hours; 
minutes = minutes < 10 ? '0'+minutes: minutes; 
seconds = seconds < 10 ? '0'+seconds: seconds; 


const timestring = `${hours}:${minutes}:${seconds} <span class="ampm">${ampm}</span>`;

const options = { weekday: 'long',  year:'numeric', month:'long',day:'numeric'}; 
const datestring = now.toLocaleDateString('en-US',options); 

document.querySelector('.clock').innerHTML = timestring; 
document.querySelector('.date').textContent = datestring; 


}
updateclock(); 

setInterval(updateclock,1000); 