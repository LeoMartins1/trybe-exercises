
function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const days = document.getElementById('days');
function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for(let index = 0; index < dezDaysList.length; index += 1) {
    const newDay = document.createElement('li');
    newDay.setAttribute('class', 'day')
    newDay.innerHTML = dezDaysList[index];

    days.appendChild(newDay);
  };
};

createDaysOfTheMonth();

const day = document.getElementsByClassName('day')

function holiday() {
  day[26].classList.add('holyday')
  day[27].classList.add('holyday')
  day[32].classList.add('holyday')
}

holiday()

function friday() {
  day[5].classList.add('friday')
  day[26].classList.add('friday')
  day[12].classList.add('friday')
  day[19].classList.add('friday')
}

friday()