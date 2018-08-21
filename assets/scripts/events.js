'use strict'

const onShowProjectDescription = function(event) {
    console.log(event)
    event.preventDefault()
    console.log(this)
    $(this).toggleClass('show-project-description')
  }

const addHandlers = () => {
    $('.project').on('click', onShowProjectDescription)
}

module.exports = {
    addHandlers
}