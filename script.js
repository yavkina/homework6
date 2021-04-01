
function HairDryer (name) {
    this.name = name;
    this.temp = 0;
    this.changeTemp = function (button) {
        this.temp = button * 3;
            if (this.temp <= 200) {
                this.temp = button * 3; 
                } else {
                    this.temp = 0;
                }
            
    }
    this.speed = 0;
    this.changeSpeed = function (toggle) {
        this.speed = toggle * 3;
    }
}

const hairDryer = new HairDryer ('Dyson');
console.log (hairDryer.temp);
hairDryer.changeTemp(50);
console.log (hairDryer.temp);

console.log (hairDryer.speed);
hairDryer.changeSpeed(25);
console.log (hairDryer.speed);