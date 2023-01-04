import { startSocket } from "./socket.js";

/**
 * Ajout d'un  ligne dans le tableur
 * @param {{}} datas objet contenant les données a afficher
 */
function addRow(datas) {
  let nameCol;
  let selector;
  const newRow = rowTemplate.content.cloneNode(true);
  const keys = Object.keys(datas);
  keys.forEach((key) => {
    if (key == ".idclient") {
      const tr = newRow.querySelector("tr");
      tr.setAttribute("id", datas[key]);
      console.log(tr);
    } else {
      selector = key + " input";
      nameCol = newRow.querySelector(selector);
      nameCol.value = datas[key];
      //a mettre en fonction du role
      nameCol.setAttribute("readonly", true);
      nameCol.setAttribute("value", datas[key]);
    }
  });
  table.appendChild(newRow);
  addCellEvent();
}

/**
 * mise a jour d'un ligne dans le tableur
 * @param {{}} datas objet contenant les données a mettre a jour
 */
function updateRow(datas) {
  console.log("Methode update");
  let nameCol;
  let selector;
  let row;

  let rows = document.querySelectorAll(".idclient");


  rows.forEach(function (currentValue) {
    console.log(currentValue.querySelector("input").closest("tr").id);
    if (currentValue.querySelector("input").closest("tr").id == datas[".idclient"]) {
      row = currentValue.querySelector("input").closest("tr");
    }
  });
  console.log(row);
  if (row) {
    const keys = Object.keys(datas);
    keys.forEach((key) => {
      selector = key + " input";
      nameCol = row.querySelector(selector);
      nameCol.value = datas[key];
      nameCol.setAttribute("value", datas[key]);
    });
  }
}

function deleteRow(datas) {
  console.log("delete");
}

const table = document.querySelector(".table");
const rowTemplate = document.querySelector("#rowTemplate");

function addCellEvent() {
  const td = document.querySelectorAll("td");
  td.forEach((el) => {
    el.addEventListener("click", cellSelected);
  });
}

function cellSelected(e) {
  const input = document.querySelectorAll("input");

  input.forEach((el) => {
    el.style.backgroundColor = "#3b90eb";
  });

  const tr = e.target.closest("tr");
  tr.childNodes.forEach((el) => {
    if (el.nodeName == "TD") {
      console.log(el);
      el.querySelector("input").style.backgroundColor = "#09519e";
    }
  });
}

/**
 * connection au socket
 */
startSocket(addRow, updateRow);
