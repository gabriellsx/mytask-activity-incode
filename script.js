function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");

    const container = document.createElement("div");
    container.classList.add("checkbox-container");

    const checkboxWrapper = document.createElement("label");
    checkboxWrapper.classList.add("checkbox-wrapper");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const customCheckbox = document.createElement("span");
    customCheckbox.classList.add("custom-checkbox");

    checkbox.addEventListener("change", () => {
      li.classList.toggle("completed", checkbox.checked);
    });

    checkboxWrapper.appendChild(checkbox);
    checkboxWrapper.appendChild(customCheckbox);

    const span = document.createElement("span");
    span.textContent = taskText;

    container.appendChild(checkboxWrapper);
    container.appendChild(span);
    li.appendChild(container);

    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
}
