'use strict'

const events = require('./events.js')

$(() => {
    console.log(events.addHandlers())
    events.addHandlers()
})
