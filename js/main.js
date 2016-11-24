console.log( 'hey')

var counter = 0

$('.nav').on('click', function() {
    counter = counter + 1
    if (counter > 5) {
        counter = 0
    }
    console.log('Clicks: ' + counter)

    var happiness = 5
    var loop = 0

    console.log('I am')

    while (loop < happiness) {
        loop = loop + 1
        console.log('so') }
        console.log('happy')
})


setInterval(function () {
    console.log('5 seconds have passed')
}, 5000)
