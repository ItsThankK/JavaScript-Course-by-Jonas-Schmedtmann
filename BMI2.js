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

const higherBmi = Mark.calcBMI() > John.calcBMI() ? `${Mark.fullname}'s BMI (${Mark.calcBMI()}) is higher than ${John.fullname}'s BMI (${John.calcBMI()})!` : `${John.fullname}'s BMI (${John.calcBMI()}) is higher than ${Mark.fullname}'s BMI (${Mark.calcBMI()})!`;

console.log(higherBmi );