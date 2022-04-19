function newImage(photoLocation, left, bottom) {
  let object = document.createElement("img");
  object.src = photoLocation;
  object.style.position = "fixed";
  object.style.left = left + "px";
  object.style.bottom = bottom + "px";
  document.body.append(object);
  return object;
}

function newItem(itemLocation, left, bottom) {
  let object = newImage(itemLocation, left, bottom);
  object.addEventListener("dblclick", function () {
    object.remove();
  });
}

newImage("assets/green-character.gif", 100, 100);
newImage("assets/pine-tree.png", 450, 200);
newImage("assets/pillar.png", 350, 100);
newImage("assets/crate.png", 150, 200);
newImage("assets/well.png", 500, 425);

newItem("assets/sword.png", 500, 405);
newItem("assets/shield.png", 165, 185);
newItem("assets/staff.png", 600, 100);
