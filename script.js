const saveButtonEl = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let myLeads = [];

function saveInput() {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
}

saveButtonEl.addEventListener("click", saveInput);

function renderLeads() {
  let listItems = "";
  for (i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
      <a target='_blank' href='${myLeads[i]}'>
        ${myLeads[i]}
        </a>
    </li>`;
  }
  ulEl.innerHTML = listItems;
}
