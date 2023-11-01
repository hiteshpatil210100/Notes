console.log('Hello There!')

// const obj = {};
// console.log(obj);

// const obj2 = new Object();
// console.log(obj2);

const student = {
    name: 'Alok Raj',
    roll: 7,
    subject: 'CSE',
    about: () => {
        console.log('I Love JS')
    },
    favColor: 'black',
    address: {
        state: 'Bihar',
        country: 'IN'
    }
}
// __proto__ vs prototype
// console.log(Object.entries(student))
// console.log(Object.keys(student)); // array of keys
// console.log(Object.values(student)); // array of values
const temp = student;
const temp2 = {};
Object.assign(temp2, student);

student.name = 'Student'
student.address.state = 'BR'

// console.log(temp2)


const employeeData = {
    John: 100,
    Pete: 300,
    Mary: 250,
};

class Util {
    constructor(data) {
        this.data = data
    }
    sumSalaries() {
        const valArr = Object.values(this.data);
        // [100, 300, 250]
        return valArr.reduce((a, b) => a + b, 0)
    }
    averageSalaries() {
        const sum = this.sumSalaries();
        const numberOfEmployee = Object.values(this.data).length;
        return Math.round(sum/numberOfEmployee)
    }
    findSalaryRange() {
        const arr = Object.values(this.data);
        // arr = [100,250,300]; ...arr = 100,250,300
        return Math.max(...arr) - Math.min(...arr)
    }
}

const util = new Util(employeeData);
// console.log(util.data);
// console.log(util.sumSalaries());
// console.log(util.averageSalaries());
// console.log(util.findSalaryRange());

// Parent/Base Class
class Student {
    //Parent class constructor with parameter
    constructor(name, roll) {
        this.fullName = name;
        this.roll = roll;
    }

    //Parent class member method
    markAttendance() {
        console.log(this.fullName, "is present");
    }
}

//Derived or Child class
class SportsCaptain extends Student {
    playFootball() {
        this.markAttendance();
        console.log(this.fullName, 'is captain of Football team');
        console.log(this.roll)
    }
}
const stu = new Student('Abc', 10)
// console.log(stu);

const s1 = new SportsCaptain('Xyz', 7);
// s1.playFootball();

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    markPresent() {
        console.log(this.name, "is present");
    }
}

class Developer extends Employee {
    submitCode() {
        console.log("Code Submitted by", this.name, "from", this.department);
    }
}

const alok = new Developer("Alok", "IT");
// alok.markPresent();
// alok.submitCode();

// Basic credit card -> 1% reward point

// Special credit card -> 3% reward point

class CreditCard {
    constructor(name, expiryDate) {
        this.name = name;
        this.expiryDate = expiryDate;
    }
    discountOffered() {
        console.log("1% reward point");
    }
}

class SpecialCreditCard extends CreditCard {
    constructor(brandName, ...parentConstructor) {
        // console.log(parentConstructor) -> ['AxisBank', '12th March 2025']
        super(...parentConstructor);
        this.brandName = brandName;
    }
    discountOffered() {
        console.log("3% reward point");
    }
    flipkartOffer() {
        console.log("Additional discount on flipkart");
    }
}

class Temp extends SpecialCreditCard {
    flipkartOffer() {
        console.log("Temp -> flipkartOffer");
    }
    logSomething() {
        super.flipkartOffer();
        console.log('Hi')
    }
}