let pollList = [];

$("body").prepend('<button id="btn1" type="button" class="btn btn-outline-primary m-4">Encuestas</button>');


$(document).ready(function () {

    $("#btn1").click( () => {

        $("div1").slideToggle("slow");
        $.getJSON("./data/polls.json", (data, state) => {
        pollList = data.polls;
        if(state === "success"){   
            for(dato of data.polls){
                $("#pollList").append(`<div1 class="row">
                                    <div class="col-sm-6 m-4">
                                        <div class="card text-center">
                                            <h3 class="card-header">${dato.name}</h3>
                                            <div class="card-body">
                                                <p class="card-text">Cantidad de encuestas: ${dato.amountQuestions}</p> 
                                                <p class="card-text">Cantidad de dias: ${dato.amountDays}</p>
                                            </div>
                                        </div>
                                     </div>    
                                   </div1>`)
            }
        }
    });
    });
});
