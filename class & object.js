const employe = {
    calcTax() {
        console.log("Tax 10%");
    }
};

const rabby = {
    salary: 50000,
};

rabby.__proto__ = employe;