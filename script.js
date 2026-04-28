//This gets the draggable items from the html.
const draggableItems = document.querySelectorAll(".card");
//This gets the section where we will be dropping the dragable items.
const dropBox = document.querySelectorAll(".tier-sections");
//this dgar function allows the user to drag items around the screen, it tracks when a item is being dragged and when it's dropped.
draggableItems.forEach((draggable) => {
  //When the item is being dargged.
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
    console.log("Dragging item");
  });
  //When the item in dropped/stops getting dragged.
  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
    console.log("Dropped item");
  });
});
/*This is where the items can be dropped off on the page.
These are to only parts of the page where a item can be dropped, we can't have people dropping them everywhere.
Similar to the other two comments above, this all also checks when a item is over one on the drox zones.*/
dropBox.forEach((container) => {
  container.addEventListener("dragover", (event) => {
    event.preventDefault();
    const draggable = document.querySelector(".dragging");
    container.appendChild(draggable);
  });
});
//This reloads the page to move all the items back into their original place and off the list once the reset button is pressed.
//This was the best I can dop at the moment because it was getting cunfusing to make this work before.
//Either way, simpile method and saved my brain from getting fried.
function resetContent() {
  location.reload();
}
