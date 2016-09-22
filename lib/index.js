(function () {
    'use strict'

    console.log('mock-me-chrome installing...')

    !(function mockXHR () {
        const original = XMLHttpRequest.prototype.send

        XMLHttpRequest.prototype.send = function () {
            console.log('mock-me-chrome: xhr')
            return original.apply(this, arguments)
        }
    }())

    !(function mockFetch () {
        const original = window.fetch

        window.fetch = function () {
            console.log('mock-me-chrome: fetch')
            return original.apply(this, arguments)
        }
    })()
})()
