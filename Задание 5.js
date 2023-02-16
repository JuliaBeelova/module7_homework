class Appliance{
  constructor (name, power) {
    this.name = name,
    this.power = power
  }
}

Appliance.prototype.switch = function (name) {
    console.log(this.name + ' is ON')
  }

const tv = new Appliance('tv', 500)
tv.size = 22;


const kettle = new Appliance('kettle', 100)
kettle.color = 'white';

const getSumPower = (obj1, obj2) => {
  console.log('Total power: ' + (obj1.power + obj2.power) + ' wt')
}
tv.switch()
kettle.switch()

console.log(getSumPower(tv, kettle))