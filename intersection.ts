type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Gabe',
  privileges: ['Buy stocks'],
  startDate: new Date(),
};

// OR CAN BE DONE WITH INTERFACES

interface Admin1 {
  name: string;
  privileges: string[];
}

interface Employee1 {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee1 extends Employee1, Admin1 {}
