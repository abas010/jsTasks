let $ = document;

let inpText = $.querySelector("input");
let ulElem = $.querySelector("ul");
let remove = $.querySelectorAll(".delete");

function addItem(e) {
  if (e.keyCode === 13) {
    e.preventDefault(SubmitEvent);
    var valText = e.target.value.trim();

    if (valText == "") {
      window.alert("not value");
    } 
    else {
      var liElem = $.createElement("li");
      var spnElem = $.createElement("span");
      var iElem = $.createElement("i");

      liElem.setAttribute(
        "class",
        "list-group-item d-flex justify-content-between align-items-center"
      );
      iElem.setAttribute("class", "fa fa-trash-o delete");

      function delItem(e) {
        var parent = this.parentNode;
        parent.remove();
      }

      spnElem.innerHTML = valText;

      ulElem.append(liElem);
      liElem.append(spnElem, iElem);

      inpText.value = "";

      iElem.addEventListener("click", delItem);
    }
  }
}

//حذف اطلاعات قبلی
remove.forEach(function (child) {
  function delpreviousItem() {
    var parent = this.parentNode;
    parent.remove();
  }

  child.addEventListener("click", delpreviousItem);
});

inpText.addEventListener("keydown", addItem);
