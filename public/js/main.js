const toggleFormBtn = document.getElementById("toggleForm");
const addNewForm = document.getElementById("addNew");
let formVisible = false;

toggleFormBtn.addEventListener("click", () => {
    if(!formVisible) {
        addNewForm.style.display = "block";
        formVisible = true;
        toggleFormBtn.textContent = "Hide form"
    } else {
        addNewForm.style.display = "none";
        formVisible = false;
        toggleFormBtn.textContent = "Show form"
    }
});