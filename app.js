//SELECTORS
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const ul = document.querySelector("ul");

//Function

function domaYaz({ id, text, flag }) {
  //const {id,text,flag}=task;
  ul.innerHTML += `<li id=${id} class=${
    flag ? "checked" : ""
  }><i class="fa fa-check"></i><span>${text}</span><i class="fa fa-trash"</li>`;
}

let tasks = [];

//EVETNS
btn.addEventListener("click", () => {
  if (!input.value) {
    alert("Please enter your todo...");
  } else {
    const task = {
      id: new Date().getTime(), //Date.now()
      text: input.value,
      flag: false,
    };
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // localStorage.clear();
    //
    domaYaz(task);
    input.value = "";
    input.focus();
  }
  console.log(tasks);
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});
ul.addEventListener("click", (e) => {
  const id = e.target.parentElement.id;
  if (e.target.classList.contains("fa-trash")) {
    tasks = tasks.filter((task) => task.id != id);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains("fa-check")) {
    tasks.map((task, index) => {
      if ((task.id = id)) {
        tasks[index].flag = tasks[index].flag;
      }
    });
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
  //if(e.target.parentElement.classList.toggle("checked")){}
  if (e.target.parentElement.classList.contains("checked")) {
    e.target.parentElement.classList.remove("checked");
  } else {
    e.target.parentElement.classList.add("checked");
  }
});

window.addEventListener("load", () => {
  console.log("yunus");
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    domaYaz(task);
  });
});
