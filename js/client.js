import Header from "../customelement/header/header.js";

customElements.define("header-element", Header);

/**
 * Ajout d'un  ligne dans le tableur
 * @param {{}} datas objet contenant les données a afficher
 */
function addRow(datas) {
  console.log(datas);

  let nameCol;
  let selector;
  const newRow = rowTemplate.content.cloneNode(true);
  const keys = Object.keys(datas);

  // console.log(keys);

  keys.forEach((key) => {
    if (key == "id") {
      const tr = newRow.querySelector("tr");
      tr.setAttribute("id", datas[key]);
      // console.log(tr);
    } else {
      selector = "." + key + " input";
      nameCol = newRow.querySelector(selector);
      nameCol.value = datas[key];
      //a mettre en fonction du role
      nameCol.setAttribute("readonly", true);
      nameCol.setAttribute("value", datas[key]);
    }
  });
  table.appendChild(newRow);
  // addCellEvent();
}

/**
 * mise a jour d'un ligne dans le tableur
 * @param {{}} datas objet contenant les données a mettre a jour
 */
function updateRow(datas) {
  console.log("Methode update");
  console.log(datas[".idclient"]);
  let nameCol;
  let selector;
  let row;
  console.log("#" + datas[".idclient"]);
  row = document.getElementById(datas[".idclient"]);
  console.log(row);

  if (row) {
    const keys = Object.keys(datas);
    keys.forEach((key) => {
      selector = "." + key + " input";
      nameCol = row.querySelector(selector);
      if (nameCol) {
        nameCol.value = datas[key];
        nameCol.setAttribute("value", datas[key]);
      }
    });
  }
}

const getClient = function Get_all_client() {
  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  // .then((res) => addAllclients(res))
  fetch("https://dev-passion76.fr:3008/customers/getCustomers", requestOptions)
    .then((response) => response.text())
    .then((res) => addAllclients(JSON.parse(res)))
    .catch((error) => console.log("error", error));
};

const addClient = function add_client_BDD(client) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify(client);

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://dev-passion76.fr:3008/customers/addCustomer", requestOptions)
    .then((response) => response.text())
    .then((textResponse) => JSON.parse(textResponse))
    .then((jsonResponse) => {
      if (jsonResponse["statusCode"] != 409) {
        addRow({
          Firstname: firstname.value,
          Name: name.value,
          email: email.value,
          phonenumber: +tel.value,
          Siret: +siret.value,
          adress: adress.value,
        });
        alert("Client ajouter")
      }else{
        alert("Formulaire non valide\n" + jsonResponse["propertyErrors"] + " invalide")
      }
    })
    .catch((error) =>console.log(error));   
};

const addAllclients = function Add_client_at_start_page(clients) {
  // console.log(typeof clients);
  clients.forEach(function (client) {
    addRow(client);
    // console.log(client);
  });
};

const name = document.getElementById("name_form");
const firstname = document.getElementById("firstname_form");
const email = document.getElementById("mail_form");
const tel = document.getElementById("tel_form");
const adress = document.getElementById("adress_form");
const siret = document.getElementById("siret_form");
const table = document.querySelector(".table");

const btnadd = document.querySelector(".container__formulaire_button button");
btnadd.addEventListener("click", () => {
  addClient({
    Firstname: firstname.value,
    Name: name.value,
    email: email.value,
    phonenumber: +tel.value,
    Siret: +siret.value,
    adress: adress.value,
  });
});

getClient();
