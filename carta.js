const messages = [
    "Me gustaría tener 10 vidas para poder poder amarte 10 veces.",
    "Un beso tuyo sería el refrán más fácil de recordar.",
    "Que sepas que mi sonrisa te tiene a ti como motivo.",
    "Tú eres lo mejor que encuentro dentro de mi desorden.",
    "Mi felicidad no tiene precio, tiene tu nombre.",
    "Me encantas demasiado mi niña bonita.",
    "¿Es normal quererte tanto todo el rato?",
    "Quien saca 3 en el ALP? deah sjdhjs",



  ];
  
  const messageElement = document.getElementById('message');
  const generateBtn = document.getElementById('generateBtn');
  
  generateBtn.addEventListener('click', generateMessage);
  
  function generateMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    messageElement.textContent = randomMessage;
  }
  
 
setTimeout(function(){
      alert("Recordatorio de que te quiero mucho mi amor pero me caes mal - AbelMR")
  },7500)  
 
setTimeout(function(){
    alert("Oye pero de verdad me debes un besito eh :3 - AbelMR")
},15000)    


setTimeout(function(){
    alert("Ahora me debes un abrazote tmb - AbelMR")
},20000)  

setTimeout(function(){
    alert("Como has llegado hasta acá me debes todo lo anterior pero x1000 jsdhjs - AbelMR")
},28000)  

setTimeout(function(){
    alert("Ya ahora si has llegado hasta dime que me quieres mucho :c que te extraño mi niña - AbelMR")
},35000)  
