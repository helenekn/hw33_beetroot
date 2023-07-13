"use strict";
//---------task 1---------//

let btns = document.querySelectorAll(".button");
let answers = document.querySelectorAll(".answer");

btns[0].addEventListener("click", addPhotoCar);

function addPhotoCar() {
   answers[1].innerHTML = "<img src='assets/img/task1.png'>";
}

btns[1].addEventListener("click", addPhotoWatch);

function addPhotoWatch() {
   answers[3].innerHTML = "<img src='assets/img/task2.png'>";
}

//------task 1-------------//

let car = {
   brand: "Honda",
   model: "HRV",
   yearOfmanufacture: 2020,
   volumeFuelTank: 50,
   consumptionGas: 10,
   displayData() {
      for (let key in car) {
         if (typeof this[key] !== "function") {
            console.log(`${key}: ${this[key]}`);
         }
      }
   },
   addDriver(name) {
      this.driver = [name];
   },
   checkDriver(nameDriver) {
      if (nameDriver == this.driver) {
         console.log("The driver is on the list");
      } else this.driver.push(nameDriver);
   },
   calcTimePetrolTravel(v, s) {
      let timeTravel = Math.round((s / v) * 100) / 100;
      if (timeTravel >= 4) {
         let timeRelax = Math.round(timeTravel / 4) - 1;
         timeTravel += timeRelax;
      }
      let amountOfGas = (s * this.consumptionGas) / 100;
      console.log(timeTravel, amountOfGas);
   },
};
console.log(car.addDriver("Helen"));
console.log(car.displayData());
console.log(car.checkDriver("Olga"));
console.log(car.displayData());
console.log(car.calcTimePetrolTravel(100, 500));

//-----------task 2---------//

let watch = {
   hours: 0,
   minutes: 0,
   seconds: 0,
   showTime() {
      for (let i in this) {
         if (this[i] < 10) {
            this[i] = "0" + this[i];
         }
      }
      console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
   },
   addSeconds(sec) {
      this.seconds += sec;
      if (this.seconds >= 60) {
         this.minutes += Math.floor(this.seconds / 60);
         this.seconds = this.seconds % 60;
      }
      if (this.minutes >= 60) {
         this.hours += Math.floor(this.minutes / 60);
         this.minutes = this.minutes % 60;
      }
   },
};
watch.addSeconds(6547);
watch.showTime();
