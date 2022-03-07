const daily = document.querySelector('#daily')
const weekly = document.querySelector('#weekly')
const monthly = document.querySelector('#monthly')
const atual1 = document.querySelector('#atual1')
const atual2 = document.querySelector('#atual2')
const atual3 = document.querySelector('#atual3')
const atual4 = document.querySelector('#atual4')
const atual5 = document.querySelector('#atual5')
const atual6 = document.querySelector('#atual6')
const hora1 = document.querySelector('#hora1')
const hora2 = document.querySelector('#hora2')
const hora3 = document.querySelector('#hora3')
const hora4 = document.querySelector('#hora4')
const hora5 = document.querySelector('#hora5')
const hora6 = document.querySelector('#hora6')

day()

function day() {
  for (i = 1; i < 7; i++) {
    idTime = 'previous' + i
    y = document.getElementById(idTime)
    y.innerHTML = 'Yesterday - '
  }
  weekly.style.color = 'var(--Desaturated-blue)'
  monthly.style.color = 'var(--Desaturated-blue)'
  daily.style.color = 'white'
  atual1.innerHTML = '5hrs'
  atual2.innerHTML = '1hrs'
  atual3.innerHTML = '0hrs'
  atual4.innerHTML = '1hrs'
  atual5.innerHTML = '1hrs'
  atual6.innerHTML = '0hrs'
  hora1.innerHTML = '7hrs'
  hora2.innerHTML = '2hrs'
  hora3.innerHTML = '1hrs'
  hora4.innerHTML = '1hrs'
  hora5.innerHTML = '3hrs'
  hora6.innerHTML = '1hrs'
}

function week() {
  for (i = 1; i < 7; i++) {
    idTime = 'previous' + i
    y = document.getElementById(idTime)
    y.innerHTML = 'Last Week - '
  }
  daily.style.color = 'var(--Desaturated-blue)'
  monthly.style.color = 'var(--Desaturated-blue)'
  weekly.style.color = 'white'
  atual1.innerHTML = '32hrs'
  atual2.innerHTML = '10hrs'
  atual3.innerHTML = '4hrs'
  atual4.innerHTML = '4hrs'
  atual5.innerHTML = '2hrs'
  atual6.innerHTML = '5hrs'
  hora1.innerHTML = '36hrs'
  hora2.innerHTML = '8hrs'
  hora3.innerHTML = '7hrs'
  hora4.innerHTML = '5hrs'
  hora5.innerHTML = '10hrs'
  hora6.innerHTML = '2hrs'
}
function month() {
  for (i = 1; i < 7; i++) {
    idTime = 'previous' + i
    y = document.getElementById(idTime)
    y.innerHTML = 'Last month - '
  }
  weekly.style.color = 'var(--Desaturated-blue)'
  daily.style.color = 'var(--Desaturated-blue)'
  monthly.style.color = 'white'
  atual1.innerHTML = '103hrs'
  atual2.innerHTML = '10hrs'
  atual3.innerHTML = '23hrs'
  atual4.innerHTML = '13hrs'
  atual5.innerHTML = '11hrs'
  atual6.innerHTML = '7hrs'
  hora1.innerHTML = '128hrs'
  hora2.innerHTML = '29hrs'
  hora3.innerHTML = '19hrs'
  hora4.innerHTML = '18hrs'
  hora5.innerHTML = '23hrs'
  hora6.innerHTML = '11hrs'
}
