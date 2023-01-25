import Header from "../customelement/header/header.js";


customElements.define("header-element", Header);

const Getcommand = function Get_all_command() {
  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("http://127.0.0.1:3008/commands/getCommand", requestOptions)
    .then((response) => response.text())
    .then((result) => addAllCommand(JSON.parse(result)))
    .catch((error) => console.log("error", error));
};

const addAllCommand = function add_all_command_to_table(commands) {
  commands.forEach(function (command) {
    addrow(command);
  });
};

const addrow = function Add_row_to_table(command) {

  const newRow = rowTemplate.content.cloneNode(true);
  const tr = newRow.querySelector("tr");
  tr.setAttribute("id", command["id"]);
  //siret
  let nameCol = newRow.querySelector(".siret input");
  nameCol.value = command["Siret"];
  nameCol.setAttribute("value", command["Siret"]);
  //produit
  nameCol = newRow.querySelector(".produit input");
  nameCol.value = command["Produit"];
  nameCol.setAttribute("value", command["Produit"]);

  //Prix
  nameCol = newRow.querySelector(".prix input");
  nameCol.value = command["Prix"];
  nameCol.setAttribute("value", command["Prix"]);

  //datecommande
  nameCol = newRow.querySelector(".datecommande input");
  nameCol.value = command["DateCommande"].slice(0, 10);
  nameCol.setAttribute("value", command["DateCommande"]);

  //datesouhaite
  nameCol = newRow.querySelector(".datelivraisonsouhaite input");
  nameCol.value = command["DateSouhaite"].slice(0, 10);
  nameCol.setAttribute("value", command["DateSouhaite"]);


  table.appendChild(newRow);
};

const addCommand = function add_command_to_BDD()
{
    let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

let raw = JSON.stringify({
  "Siret": siret.value,
  "Produit": produit.value,
  "Prix": prix.value,
  "DateCommande": datecommande.value,
  "DateSouhaite": datelivraisonsouhaite.value
});

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://127.0.0.1:3008/commands/addCommand", requestOptions)
  .then(response => response.text())
  .then(result => alert(result))
  .catch(error => alert('error', error));
}



const table = document.querySelector(".table");


Getcommand();

const socket = io("http://localhost:3008");
socket.on("connect", function () {
  console.log("Connected");
});

/**
 * connexion au message 'event' arrivant du server
 */
socket.on("events", function (data) 
{
    const datecommande = data["DateCommande"].toString();
    data["DateCommande"] = datecommande.slice(0,4) + "-" + datecommande.slice(4,6)  + "-" +  datecommande.slice(6,8)

    const datesouhaite = data["DateSouhaite"].toString();
    data["DateSouhaite"] = datesouhaite.slice(0,4) + "-" + datesouhaite.slice(4,6)  + "-" +  datesouhaite.slice(6,8)

    addrow(data);

});

const siret = document.querySelector(".siret input")
const produit = document.querySelector(".produit input")
const prix = document.querySelector(".prix input")
const datecommande = document.querySelector(".datecommande input")
const datelivraisonsouhaite = document.querySelector(".datelivraisonsouhaite input")

const addBtn = document.querySelector("#addBtn")
addBtn.addEventListener("click", addCommand)
console.log(addBtn);