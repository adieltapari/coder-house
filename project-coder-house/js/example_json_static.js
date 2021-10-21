const URLJSON = "./data/polls.json"

$("body").prepend('<button id="btn1">JSON</button>');


$("#btn1").click(() => {
$.getJSON("./data/polls.json", function (respuesta, estado){
    
    if( estado === "success"){
       let misdatos = respuesta;
       for(const dato of misdatos){
           $("body").prepend(`<div>
                                   <h3>${dato.name}</h3>
                                   <p> ${dato.amountQuestions}</p> 
                                   <p> ${dato.amountDays}</p> 
                                </div>`)
       }
    }
    });
});