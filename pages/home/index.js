
const flatsTable = document.getElementById('flats-table');
const flatsTableBody = flatsTable.querySelector('tbody');
renderFlats();

function addRemoveEvents() {
    const removeButtons = document.querySelectorAll('.secondary-button');
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const flatId = button.id;
            const usersController = new Users();
            usersController.removeFavoriteFlat(flatId);
            renderFlats();
        });
    });
}

function renderFlats() {
    const favoriteFlatIds = userController.getFavorites();
    flatsTableBody.innerHTML = '';
    favoriteFlatIds.forEach(insertFlatRow);
    addRemoveEvents();

}
function insertFlatRow(flatId) {
    const newRow = document.createElement('tr');
    const flatsController = new Flats();
    const flats = flatsController.getAllFlats();
    const flat = flats.find(f => f.id == flatId);
    newRow.innerHTML = `
        <td>${flat.city}</td>
        <td>${flat.streetName}</td>
        <td>${flat.streetNumber}</td>
        <td>${flat.areaSize}</td>
        <td>${flat.hasAC}</td>
        <td>${flat.yearBuilt}</td>
        <td>${flat.rentPrice}</td>
        <td>${flat.dateAvailable}</td>
        <td><button class="secondary-button" id="${flat.id}">Remove</button></td>
        `;
    flatsTableBody.appendChild(newRow);
}


