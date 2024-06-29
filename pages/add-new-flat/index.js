
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const city = document.getElementById('city').value;
    const streetName = document.getElementById('streetName').value;
    const streetNumber = document.getElementById('streetNumber').value;
    const areaSize = document.getElementById('areaSize').value;
    const yearBuilt = document.getElementById('yearBuilt').value;
    const rentPrice = document.getElementById('rentPrice').value;
    const dateAvailable = document.getElementById('dateAvailable').value;
    const hasAC = document.getElementById('hasAC').checked;

    if (city.trim() === '') {
        alert('Please enter a city');
        return;
    }

    if (streetName.trim() === '') {
        alert('Please enter a street name');
        return;
    }

    if (streetNumber.trim() === '') {
        alert('Please enter a street number');
        return;
    }

    if (areaSize.trim() === '') {
        alert('Please enter an area size');
        return;
    }

    if (isNaN(areaSize)) {
        alert('Area size must be a number');
        return;
    }

    if (yearBuilt.trim() === '') {
        alert('Please enter a year built');
        return;
    }

    if (isNaN(yearBuilt)) {
        alert('Year built must be a number');
        return;
    }

    if (rentPrice.trim() === '') {
        alert('Please enter a rent price');
        return;
    }

    if (isNaN(rentPrice)) {
        alert('Rent price must be a number');
        return;
    }
    if (rentPrice <= 0) {
        alert('Rent price must be higher than zero');
        return;
    }

    if (dateAvailable.trim() === '') {
        alert('Please enter a date available');
        return;
    }
    const flat = new Flat(city, streetName, streetNumber, areaSize, hasAC, yearBuilt, rentPrice, dateAvailable);
    const flats = new Flats();
    flats.addNewFlat(flat);
    alert('Flat saved successfully');
    window.location.href = '/pages/all-flats';

});