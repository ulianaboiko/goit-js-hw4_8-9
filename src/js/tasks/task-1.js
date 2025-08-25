const bookmarkInput = document.querySelector("#bookmarkInput");
const addBookmarkBtn = document.querySelector("#addBookmarkBtn");
const bookmarkList = document.querySelector("#bookmarkList");

const handleAddingBookmark = () => {
  const inputValue = bookmarkInput.value.trim();
  if (inputValue === "") return alert("Введіть URL!");
};

addBookmarkBtn.addEventListener("click", handleAddingBookmark);
