const tagBox = document.getElementById("tagBox");
const tagInput = document.getElementById("tagInput");
let tags = [];

tagInput.addEventListener("keydown", function (e) {
  if ((e.key === "Enter" || e.key === ",") && tagInput.value.trim() !== "") {
    e.preventDefault();
    const tag = tagInput.value.trim();
    if (tags.length < 5 && !tags.includes(tag)) {
      tags.push(tag);
      renderTags();
    }
    tagInput.value = "";
  }
});

function renderTags() {
  tagBox.innerHTML = "";
  tags.forEach((tag, index) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.innerHTML = `${tag} <span class="remove-tag" onclick="removeTag(${index})">&times;</span>`;
    tagBox.appendChild(span);
  });
  tagBox.appendChild(tagInput);
}

function removeTag(index) {
  tags.splice(index, 1);
  renderTags();
}

function resetForm() {
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  tags = [];
  renderTags();
}

function submitForm() {
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  if (!title || !description) {
    alert("Please fill in all fields.");
    return;
  }
  console.log("Title:", title);
  console.log("Description:", description);
  console.log("Tags:", tags);
  alert("Question submitted!");
}
