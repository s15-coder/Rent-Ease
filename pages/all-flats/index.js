
const flatsController = new Flats();
const usersController = new Users();
const flats = flatsController.getAllFlats();
const flatsTable = document.getElementById('flats-table');
const flatsTableBody = flatsTable.querySelector('tbody');

flats.forEach(insertFlatRow);
addFavoriteEvents();


document.getElementById('filter-btn').addEventListener('click', onSearchTapped);

function insertFlatRow(flat) {
    const newRow = document.createElement('tr');
    const isFavorite = usersController.isFavoriteFlat(flat.id);
    console.log(isFavorite);
    newRow.innerHTML = `
    <td>${flat.city}</td>
    <td>${flat.streetName}</td>
    <td>${flat.streetNumber}</td>
    <td>${flat.areaSize}</td>
    <td>${flat.hasAC}</td>
    <td>${flat.yearBuilt}</td>
    <td>${flat.rentPrice}</td>
    <td>${flat.dateAvailable}</td>
    <td><img class="star-image" id="${flat.id}" src="${isFavorite ? '../../assets/star-yellow.png' : '../../assets/star-transparent.png'}" alt="" srcset="" width="30"></td>
`;

    flatsTableBody.appendChild(newRow);
}


function addFavoriteEvents() {
    document.querySelectorAll('.star-image').forEach((starImage) => {
        starImage.addEventListener('click', (event) => {
            const flatId = event.target.id;
            let hasBeenAdded = usersController.addFavoriteFlat(flatId);
            event.target.src = hasBeenAdded ? '../../assets/star-yellow.png' : '../../assets/star-transparent.png';
        });
    });


}

function onSearchTapped() {
    var city = document.getElementById('city-filter').value;
    var priceMin = document.getElementById('price-filter-min').value;
    var priceMax = document.getElementById('price-filter-max').value;
    var areaMin = document.getElementById('area-filter-min').value;
    var areaMax = document.getElementById('area-filter-max').value;




    if (priceMin.trim() !== '' && (isNaN(priceMin) || isNaN(priceMax))) {
        alert('Please enter valid numbers for price.');
        return;
    }

    if (areaMin.trim() !== '' && (isNaN(areaMin) || isNaN(areaMax))) {
        alert('Please enter valid numbers for area.');
        return;
    }

    if (priceMin.trim() !== '' && priceMax.trim() !== '' && Number(priceMin) > Number(priceMax)) {
        alert('The minimum price cannot be greater than the maximum price.');
        return;
    }

    if (areaMin.trim() !== '' && areaMax.trim() !== '' && Number(areaMin) > Number(areaMax)) {
        alert('The minimum area size cannot be greater than the maximum area size.');
        return;
    }

    const filteredFlats = flats.filter(flat => {
        if (city.trim() !== '' && flat.city.toLowerCase().includes(city.toLowerCase()) === false) {
            return false;
        }
        if (priceMin.trim() !== '' && +flat.rentPrice < priceMin) {
            return false;
        }

        if (priceMax.trim() !== '' && +flat.rentPrice > priceMax) {
            return false;
        }

        if (areaMin.trim() !== '' && +flat.areaSize < areaMin) {
            return false;
        }

        if (areaMax.trim() !== '' && +flat.areaSize > areaMax) {
            return false;
        }
        return true;
    });

    // Clear the existing rows
    flatsTableBody.innerHTML = '';

    // Insert the filtered rows
    filteredFlats.forEach(insertFlatRow);
    addFavoriteEvents();
}
