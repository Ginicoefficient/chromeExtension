const saveButtonEl = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let myLeads = ["a", "b"];

function saveInput() {
  myLeads.push(inputEl.value);
  console.log(myLeads);
  inputEl.value = "";
}

saveButtonEl.addEventListener("click", saveInput);

for (i = 0; i < myLeads.length; i++) {
  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
}
