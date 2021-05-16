const table = document.querySelector("#table>tbody");

function tableListener({
  target
}) {
  if (target.tagName === 'BUTTON') {
    target.closest('tr').remove()
  }
  if (target.tagName === 'TD') {
    const input = document.createElement("input");
    input.value = target.innerText;
    target.innerText = ""
    target.append(input);
    input.addEventListener("keyup", (e) => {
      if (e.key === 'Enter') {
        target.innerText = input.value
      }
    })
  }
}
table.addEventListener("click", tableListener)
const addForm = document.getElementById("addForm");

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    target: {
      name: {
        value: nameValue
      },
      email: {
        value: emailValue
      }
    }
  } = e;
  if(nameValue==="" || emailValue === ""){
    alert("Заполните форму");
    return;
  }
  table.append(createRowToTable(nameValue, emailValue));
  addForm.reset()
})

function createRowToTable(name, email) {
  return createElement("tr", {
      classNames: [],
    },
    createElement("td", {
        classNames: [],
      },
      document.createTextNode(name)
    ),
    createElement("td", {
        classNames: [],
      },
      document.createTextNode(email)
    ),
    createElement("td", {
        classNames: [],
      },
      createElement("button", {
        classNames: []
      }, document.createTextNode("Delete"))
    )
  )
}
