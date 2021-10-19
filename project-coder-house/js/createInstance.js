//Function to show movies menu
$('#showMenu').click(() =>{
    $("#menuAdd").toggle("fast");
});

//event to save survey form
let form = document.getElementById("formPolls");
form.addEventListener("submit",savePoll);

//function to load the LocalStorage listing or start it if there isn't
function loadLIst(){
    let listPolls = JSON.parse(localStorage.getItem("listPolls"));
    if(listPolls == null){
        return [];
    }
    return listPolls;
}

function saveList(listPolls){
    localStorage.setItem("listPolls",JSON.stringify(listPolls));
    showList(listPolls);
}

//function to save poll
function savePoll(e){
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let amountQuestions = document.querySelector("#amountQuestions").value;
    let amountDays = document.querySelector("#amountDays").value;

    let listPolls = loadLIst();

    listPolls.push(new Poll(name,amountQuestions,amountDays));
    
    saveList(listPolls);

    document.getElementById('formPolls').reset();
}

//function to arm card
function creatCard(element){
    const card = document.createElement("div");
    card.classList.add("card");

    const namePoll = document.createElement("h3");
    namePoll.textContent = `${element.name}`
    card.appendChild(namePoll);

    const amountQuestions = document.createElement("div");
    amountQuestions.textContent = `Cantidad de Preguntas:${element.amountQuestions}`
    card.appendChild(amountQuestions);

    const amountDays = document.createElement("div");
    amountDays.textContent = `Cantidad de días activa:${element.amountDays}`
    card.appendChild(amountDays);

    return card;
}

function showList(listPolls){
    let list = document.getElementById("list");
    list.textContent="";
    listPolls.map(element =>{
        list.appendChild(creatCard(element));
    });
}

showList(loadLIst());