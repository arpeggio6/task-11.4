function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

Phone.prototype.applyDiscount = function(discount) {
	this.price -= discount;
}

Phone.prototype.changeColor = function(color) {
	this.color = color;
}

var galaxyS6 = new Phone("Samsung", 1950, "black");
var iPhone6S = new Phone("Apple", 2250, "silver");
var one = new Phone("OnePlus", 1700, "blue");

galaxyS6.printInfo();
iPhone6S.printInfo();
one.printInfo();

galaxyS6.applyDiscount(500);

galaxyS6.changeColor('red')

galaxyS6.printInfo();
