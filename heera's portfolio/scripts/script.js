let triggerBtn = document.getElementById("trigger-btn");
let menu = document.getElementById("menu");

let click = false;

triggerBtn.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  
  // click = click ? false : true;
  // triggerBtn.innerHTML = `
  // <span class="material-symbols-outlined"> ${click?'close':'menu'} </span>
  // `;
});
