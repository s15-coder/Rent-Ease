
class Flat {
    constructor(city, streetName, streetNumber, areaSize, hasAC, yearBuilt, rentPrice, dateAvailable) {
        this.id = Math.floor(Math.random() * 1000000);
        this.city = city;
        this.streetName = streetName;
        this.streetNumber = streetNumber;
        this.areaSize = areaSize;
        this.hasAC = hasAC;
        this.yearBuilt = yearBuilt;
        this.rentPrice = rentPrice;
        this.dateAvailable = dateAvailable;

    }
}