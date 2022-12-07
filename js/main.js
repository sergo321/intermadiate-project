let breedleft = document.querySelector(".breed-left");
let breedmadium = document.querySelector(".breed-madium");
let breedright = document.querySelector(".breed-right");
let breedsection1 = document.querySelector(".forjshide1");
let breedsection2 = document.querySelector(".forjshide2");
let breedsection3 = document.querySelector(".forjshide3");
let dropDownTop = document.querySelector(".btn-top");
let dropDownMiddle = document.querySelector(".btn-middle");
let dropDownBottom = document.querySelector(".btn-bottom");
function addclassbreed() {
  breedleft.addEventListener("click", () => {
    breedleft.classList.add("active-underline");
    breedmadium.classList.remove("active-underline");
    breedright.classList.remove("active-underline");
    // for hide and appair part
    breedsection1.classList.remove("hide");
    breedsection2.classList.add("hide");
    breedsection3.classList.add("hide");
  });
  breedmadium.addEventListener("click", () => {
    breedleft.classList.remove("active-underline");
    breedmadium.classList.add("active-underline");
    breedright.classList.remove("active-underline");
    // for hide and appair part
    breedsection1.classList.add("hide");
    breedsection2.classList.remove("hide");
    breedsection3.classList.add("hide");
  });
  breedright.addEventListener("click", () => {
    breedleft.classList.remove("active-underline");
    breedmadium.classList.remove("active-underline");
    breedright.classList.add("active-underline");
    // for hide and appair part
    breedsection1.classList.add("hide");
    breedsection2.classList.add("hide");
    breedsection3.classList.remove("hide");
  });
}

function drowDown() {
  document.getElementById("myDropdown").classList.toggle("show");
  dropDownTop.addEventListener("click", () => {
    breedleft.classList.add("active-underline");
    breedmadium.classList.remove("active-underline");
    breedright.classList.remove("active-underline");
    // for hide and appair part
    breedsection1.classList.remove("hide");
    breedsection2.classList.add("hide");
    breedsection3.classList.add("hide");
  });
  dropDownMiddle.addEventListener("click", () => {
    breedleft.classList.remove("active-underline");
    breedmadium.classList.add("active-underline");
    breedright.classList.remove("active-underline");
    // for hide and appair part
    breedsection1.classList.add("hide");
    breedsection2.classList.remove("hide");
    breedsection3.classList.add("hide");
  });
  dropDownBottom.addEventListener("click", () => {
    breedleft.classList.remove("active-underline");
    breedmadium.classList.remove("active-underline");
    breedright.classList.add("active-underline");
    // for hide and appair part
    breedsection1.classList.add("hide");
    breedsection2.classList.add("hide");
    breedsection3.classList.remove("hide");
  });
}
