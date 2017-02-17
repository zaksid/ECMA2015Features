function applyForVisa(document) {
    console.log('Processing visa request...');

    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > .5 ? resolve({}) : reject('Wrong documents');
        }, 2000);
    });

    return promise;
}

function getVisa(visa) {
    console.info('Visa approved');
    return visa;
}

function bookHotel(visa) {
    console.log(visa);
    console.log('Booking hotel');

    // return {};
    // return new Promise((resolve, reject) => reject('No free rooms'));
    return Promise.reject('No free rooms');
}

function buyTickets(booking) {
    console.log('Buying tickets');
    console.log('Booking', booking);
}

applyForVisa({})
    .then(getVisa)
    .then(bookHotel)
    .then(buyTickets)
    .catch(error => console.error(error))
    .then(() => console.log('Finishing work'));