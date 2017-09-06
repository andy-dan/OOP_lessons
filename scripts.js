function Phone(brand, model, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
    this.model = model;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + " model " + this.model + ", color is " + this.color + " and the price is " + this.price + ".");
}


var iPhone6S = new Phone("Apple", "6S", 2250, "silver");
var SamsungS8 = new Phone("Samsung", "S8", 3500, "white");
var LG_K9 = new Phone("LG", "K9", 1700, "gold");

iPhone6S.printInfo();
SamsungS8.printInfo();
LG_K9.printInfo();