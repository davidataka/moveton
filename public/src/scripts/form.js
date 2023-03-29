form = document.querySelector(".form");
players = document.querySelector(".form__container");
input = document.querySelector(".form__input");
form_select = document.querySelector(".form__select");

players_key = "players"

let players_list;

window.addEventListener("load", () => {
    //localStorage.clear()
    if (localStorage.getItem(players_key) !== null) {
        players_list = JSON.parse(localStorage.getItem(players_key));
        recoveryPlayers();
    } else {
        players_list = [];
    }

    let delete_buttons = document.querySelectorAll(".form__text-field__button");
    delete_buttons.forEach(function (item, i) {
        item.addEventListener("click", () => {
            let player = players_list[i].name;
            deletePlayer(player);
            let parent = item.parentElement;
            players.removeChild(parent);
        });
    });
});

function recoveryPlayers() {
    players_list.forEach(function (item) {
        insertPlayer(item);
    })
}

function insertPlayer(player) {
    let newCheck = document.createElement("input");
    newCheck.classList.add("form__checkbox");
    newCheck.type = "checkbox";
    if (player.status !== "new") {
        newCheck.setAttribute("checked", "1");
    }
    let newState = document.createAttribute("player_option");
    newState.value = player.status;
    players.insertAdjacentHTML("beforeend",
        `<div class="form__player" ${newState.name}="${newState.value}">
                     ${newCheck.outerHTML}  
                     ${player.name}
                      <span class="form__text-field__button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="#af0000" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                      </span>
                  </div>`
    );
}

function deletePlayer(player_name) {
    players_list = players_list.filter((item) => item.name !== player_name);
    localStorage.setItem(players_key, JSON.stringify(players_list));
}

function checkPlayer(player_name, player_status) {
    if (player_status === "new") {
        players_list[players_list.findIndex((item) => item.name === player_name && item.status === player_status)].status = "completed";
    } else {
        players_list[players_list.findIndex((item) => item.name === player_name && item.status === player_status)].status = "new";
    }
    localStorage.setItem(players_key, JSON.stringify(players_list));
}


function addPlayer(event) {
    event.preventDefault();
    if (input.value) {
        let player = {"name": input.value, "status": "new"};
        players_list.push(player);
        insertPlayer(player);
        //alert(document.getElementById("container").childNodes[players.childElementCount-1].innerHTML)
        localStorage.setItem(players_key, JSON.stringify(players_list));
        let delete_buttons = document.querySelectorAll(".form__text-field__button");
        delete_buttons[delete_buttons.length - 1].addEventListener("click", () => {
            deletePlayer(player.name);
            players.removeChild(delete_buttons[delete_buttons.length - 1].parentElement);
        });
        let check_buttons = document.querySelectorAll(".form__checkbox");
        check_buttons[check_buttons.length - 1].addEventListener("click", () => {
            checkPlayer(player.name, player.status);
            check_buttons[check_buttons.length - 1].parentElement.setAttribute("player_option", player.status);
        });
        input.value = ""
    }
}

form_select.addEventListener("change", (event) => {
    form.setAttribute("form_option", form_select.value);
});

form.addEventListener("submit", addPlayer);
