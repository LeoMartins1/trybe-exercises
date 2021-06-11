
function ifDate (){
  const vDay = document.querySelector('#day').value
  if(vDay<1 || vDay>31){
    alert('dia invalido')
  }

  const vMonth = document.querySelector('#month').value
  if(vMonth<1 || vMonth>12){
    alert('mês invalido')
  }
  const vYear = document.querySelector('#year').value
  if(vYear<0){
    alert('ano invalido')
  }
}

function generateStates(){
  for(let index = 0; index < 26; index ++){
    const state = document.createElement('option')
    document.querySelector('#state').appendChild(state)
  }
  const stateList = document.querySelectorAll('option')
  stateList[0].innerText = 'Acre'
  stateList[1].innerText = 'Alagoas'
  stateList[2].innerText = 'Amapá'
  stateList[3].innerText = 'Amazonas'
  stateList[4].innerText = 'Bahia'
  stateList[5].innerText = 'Ceará'
  stateList[6].innerText = 'Espírito Santo'
  stateList[7].innerText = 'Goiás'
  stateList[8].innerText = 'Maranhão'
  stateList[9].innerText = 'Mato Grosso'
  stateList[10].innerText = 'Mato Grosso do Sul'
  stateList[11].innerText = 'Minas Gerais'
  stateList[12].innerText = 'Pará'
  stateList[13].innerText = 'Paraíba'
  stateList[14].innerText = 'Paraná'
  stateList[15].innerText = 'Pernambuco'
  stateList[16].innerText = 'Piauí'
  stateList[17].innerText = 'Rio de Janeiro'
  stateList[18].innerText = 'Rio Grande do Norte'
  stateList[19].innerText = 'Rio Grande do Sul'
  stateList[20].innerText = 'Rondônia'
  stateList[21].innerText = 'Roraima'
  stateList[22].innerText = 'Santa Catarina'
  stateList[23].innerText = 'São Paulo'
  stateList[24].innerText = 'Sergipe'
  stateList[25].innerText = 'Tocantins'
}
generateStates()

function createDiv() {
  const divForm = document.createElement("div");
  divForm.classList = "divF";
  document.querySelector("body").appendChild(divForm);
}

function firstSet() {
  let first = document.querySelector("#first").children;
  for (let index = 0; index < first.length; index += 1) {
    if (first[index].tagName == "LABEL") {
      const label = document.createElement("div");
      label.innerText = first[index].innerText;
      document.querySelector(".divF").appendChild(label);
      console.log(label);
    } else if (first[index].tagName == "INPUT") {
      const input = document.createElement("div");
      input.innerText = first[index].value;
      document.querySelector(".divF").appendChild(input);
    } else if (first[index].tagName == "BR") {
      const br = document.createElement("p");
      document.querySelector(".divF").appendChild(br);
    }
  }
}

function secondSet() {
  let second = document.querySelector("#second").children;
  for (let index = 0; index < second.length; index += 1) {
    if (second[index].tagName == "LABEL") {
      const label = document.createElement("div");
      label.innerText = second[index].innerText;
      document.querySelector(".divF").appendChild(label);
      console.log(label);
    } else if (second[index].tagName == "INPUT") {
      const input = document.createElement("div");
      input.innerText = second[index].value;
      document.querySelector(".divF").appendChild(input);
    } else if (second[index].tagName == "BR") {
      const br = document.createElement("p");
      document.querySelector(".divF").appendChild(br);
    }
  }
}

  document.querySelector("#btn-fns").addEventListener("click", (event) => {
    ifDate();
    createDiv();
    firstSet();
    secondSet();
    event.preventDefault();
  });


  document.querySelector("#btn-clr").addEventListener("click", () => {
    let first = document.querySelector("#first").children;
    let second = document.querySelector("#second").children;
    for (let index = 0; index < first.length; index += 1) {
      first[index].value = "";
    }
    for (let index = 0; index < second.length; index += 1) {
      second[index].value = "";
    }
    let divF =document.querySelector('.divF')
    divF.remove()
  });