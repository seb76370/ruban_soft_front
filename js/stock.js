import Header from "../customelement/header/header.js";
import Table from "../customelement/table/table.js";

customElements.define("header-element", Header);
customElements.define("table-element", Table);

const container_Stock = document.querySelector(".container__tableStock");

const datas = [
  { id: "codeComposant", text: "Code Composant" },
  { id: "Quantite", text: "Quantité" },
];
const table_element = new Table(datas);
container_Stock.appendChild(table_element);
