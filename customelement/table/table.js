export default class Table extends HTMLElement {
  constructor(datas) {
    super();
    this.datas = datas;
    this.innerHTML = `
    <table>
        <thead>
          <tr></tr>        
        </thead>
        <tbody class="table">
        </tbody>
    </table>
       `;

    const thead = this.querySelector("thead tr");

    for (const element of this.datas) {
      const th = document.createElement("th");
      th.innerHTML = element["text"];
      th.setAttribute("class", "column");
      th.setAttribute(
        "id",
        `col_${element["id"]}`
      );
      thead.appendChild(th);
    };

    let style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "./customelement/table/table.css");
    this.append(style);
  }
}