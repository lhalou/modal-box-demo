let btn = document.querySelector(".btn");
let modal = document.querySelector(".modal");
let close = document.querySelector(".header>p>a");
let ct = document.querySelector(".modal-ct");

btn.addEventListener("click", () => {
  modal.classList.add("open");
});

close.addEventListener("click", () => {
  modal.classList.remove("open");
});

modal.addEventListener("click", () => {
  modal.classList.remove("open");
});

//阻止事件冒泡 因为<div class = "modal"></div>处理机制会冒泡到<div class = "modal-ct"></div>
ct.onclick = (e) => {
  e.stopPropagation();
};
