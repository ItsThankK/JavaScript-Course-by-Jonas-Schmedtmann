const Mark = {
    fullname: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmiValue = this.mass/ this.height ** 2;
        return this.bmiValue
    }
};

const John = {
    fullname: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmiValue = this.mass/ this.height ** 2;
        return this.bmiValue
    }
};

const higherBmi = Mark.calcBMI() > John.calcBMI() ? `Mark's (${Mark.calcBMI()}) is higher than John's BMI (${John.calcBMI()})!` : `Mark's BMI (${John.calcBMI()}) is higher than Mark's (${Mark.calcBMI()})!`;

console.log(higherBmi );