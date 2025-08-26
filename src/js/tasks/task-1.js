const bookmarkInput = document.querySelector("#bookmarkInput");
const addBookmarkBtn = document.querySelector("#addBookmarkBtn");
const bookmarkList = document.querySelector("#bookmarkList");

const handleAddingBookmark = () => {
  const inputValue = bookmarkInput.value.trim();
  if (inputValue === "") return alert("Введіть URL!");

  const newItem = document.createElement("li");
  const newLink = document.createElement("a");
  newLink.href = inputValue;
  newLink.textContent = inputValue;

  const newBtn = document.createElement("button");
  newBtn.textContent = "✖";
  newBtn.classList.add("delete");

  newBtn.addEventListener("click", () => newItem.remove());

  newItem.appendChild(newLink);
  newItem.appendChild(newBtn);
  bookmarkList.append(newItem);
};

addBookmarkBtn.addEventListener("click", handleAddingBookmark);
