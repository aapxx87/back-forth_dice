let position = 9
let player = 1



const move_figure = function (number) {

  document.querySelector('.figure').remove()

  const target_step = position + number

  const figure = document.createElement('div')
  figure.classList.add('figure')

  document.getElementById(target_step).append(figure)

  position = target_step



}




btn_move_figure.addEventListener('click', function () {

  if (player === 1) {

    const number = Number(input_step_number.value)

    move_figure(number)

    player = 2

  } else {

    const number = -Number(input_step_number.value)

    move_figure(number)

    player = 1

  }



})