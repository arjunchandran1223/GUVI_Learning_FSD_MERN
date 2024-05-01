/// Write a “person” class to hold all the details. 
class Person {
    constructor(firstName, lastName, email, phone, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.location = location;
    }
}
let person1 = new Person("Arjun", "Chandran", "Ronaldo@example.com", "9876534345", "India");
console.log(person1);


///uber price calculator

class UberPriceCalculator {
    constructor(baseFare, perMileRate, minimumFare) {
        this.baseFare = baseFare;
        this.perMileRate = perMileRate;
        this.minimumFare = minimumFare;
    }

    calculatePrice(distanceInMiles) {
        let fare = this.baseFare + distanceInMiles * this.perMileRate;
        return Math.max(fare, this.minimumFare);
    }
}
const calculator = new UberPriceCalculator(2.0, 1.5, 5.0);
const distance = 10.0;
const price = calculator.calculatePrice(distance);
console.log(`Price for a ${distance} mile Uber ride: $${price}`);
