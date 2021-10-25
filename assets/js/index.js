const toggleModal = () => {
  let modal;
  modal = document.getElementById("itemModal");
  if (modal.style.display == "none") {
    modal.style.display = "flex";
  } else {
    modal.style.display = "none";
  }
};

const toggleSectioModal = () => {
  let modal;
  modal = document.getElementById("sectionModal");
  if (modal.style.display == "none") {
    modal.style.display = "flex";
  } else {
    modal.style.display = "none";
  }
};

const sidebarButton = document.getElementsByClassName("sidebar__toogle")[0];
const toggleIcon = document.querySelector("#toggle_icon");
sidebarButton.addEventListener("click", function () {
  rgbSection.classList.remove("active");
  const sidebar = document.getElementsByClassName("sidebar")[0];
  sidebar.classList.toggle("sidebar__show");
  if (sidebar.classList.contains("sidebar__show")) {
    toggleIcon.classList.remove("fa-angle-double-left");
    toggleIcon.classList.add("fa-angle-double-right");
  } else {
    toggleIcon.classList.remove("fa-angle-double-right");
    toggleIcon.classList.add("fa-angle-double-left");
  }
});

const rgbText = document.querySelector(".rgbToHEX");
function myColour() {
  const red = document.getElementById("red").value;
  const green = document.getElementById("green").value;
  const blue = document.getElementById("blue").value;
  document.querySelector("#redValue").innerHTML = red;
  document.querySelector("#greenValue").innerHTML = green;
  document.querySelector("#blueValue").innerHTML = blue;

  const val = rgbToHex(Number(red), Number(green), Number(blue));
  rgbText.style.backgroundColor = val;
  rgbText.innerHTML = val;
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

document.getElementById("red").addEventListener("input", myColour);
document.getElementById("green").addEventListener("input", myColour);
document.getElementById("blue").addEventListener("input", myColour);

const btnColor = document.querySelector(".btn__color");
const rgbSection = document.querySelector(".rgb-section");
const options = document.querySelectorAll(".rgb-dropdown option");
const select = document.querySelector(".rgb-dropdown");
const rgbHistoryItems = document.querySelector(".rgb-history-items");
const history = document.querySelector(".history");
const wrapperMain = document.querySelector(".wrapper");
const circlePicker = document.querySelector(".circle-picker");
btnColor.addEventListener("click", () => {
  rgbSection.classList.toggle("active");
});
select.addEventListener("change", getOption);
function getOption() {
  if (select.value === "history") {
    rgbHistoryItems.style.display = "block";
    wrapperMain.style.display = "none";
    circlePicker.style.display = "none";
  }
  if (select.value === "bar") {
    rgbHistoryItems.style.display = "none";
    wrapperMain.style.display = "block";
    circlePicker.style.display = "none";
  }
  if (select.value === "circle") {
    rgbHistoryItems.style.display = "none";
    wrapperMain.style.display = "none";
    circlePicker.style.display = "block";
  }
}

var colorWheel = new iro.ColorPicker("#colorWheelDemo", {
  width: 330
});
