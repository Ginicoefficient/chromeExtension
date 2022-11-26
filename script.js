let myLeads = [];
const saveButtonEl = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const deleteButtonEl = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItems = "";
  for (i = 0; i < leads.length; i++) {
    listItems += `
    <li>
      <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
        </a>
    </li>`;
  }
  ulEl.innerHTML = listItems;
}

saveButtonEl.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

deleteButtonEl.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = "";
  render(myLeads);
});
