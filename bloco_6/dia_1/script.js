
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
document.querySelector('#x').addEventListener('click', ifDate)


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


