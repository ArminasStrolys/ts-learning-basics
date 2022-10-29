type Admin2 = {
  name: string;
  privileges: string[];
};

type Employee2 = {
  name: string;
  startDate: Date;
  privileges: string[];
};

type combine = string | number;
// TYPEGUARD NAME = TYPEOF
const add = (a: combine, b: combine) => {
  typeof a === 'string' || typeof b === 'string'
    ? a.toString() + b.toString()
    : a + b;
};

//--------------------------------------------------- IN TYPE OF GUARD

type unknownEmployee = Admin2 | Employee2;

const emInfor = (emp: unknownEmployee) => {
  console.log('Name: ' + emp.name);
  'privileges' in emp && console.log('Privileges: ' + emp.privileges);
  'startDate' in emp && console.log('Privileges: ' + emp.startDate);
};

//---------------------------------------------------

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Trucking...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();
  // 'loadCargo' in vehicle && vehicle.loadCargo(100);
  vehicle instanceof Truck && vehicle.loadCargo(100);
};
