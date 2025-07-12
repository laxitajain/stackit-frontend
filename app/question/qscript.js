function postAnswer() {
  const newAnswer = document.getElementById("newAnswer").value.trim();
  if (newAnswer === "") {
    alert("Answer cannot be empty!");
    return;
  }

  const container = document.createElement("div");
  container.className = "answer";

  const para = document.createElement("p");
  para.textContent = newAnswer;

  const footer = document.createElement("span");
  footer.className = "answered-by";
  footer.textContent = "Answered by You just now";

  container.appendChild(para);
  container.appendChild(footer);

  document.querySelector(".answer-box").insertAdjacentElement("beforebegin", container);
  document.getElementById("newAnswer").value = "";
}
