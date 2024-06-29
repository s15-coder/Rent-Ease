class Flats {
    constructor() {
        this.flats = JSON.parse(localStorage.getItem('flats')) || [];
    }
    addNewFlat(flat) {
        this.flats.push(flat);
        localStorage.setItem('flats', JSON.stringify(this.flats));
    }
    getAllFlats() {
        return this.flats;
    }

}