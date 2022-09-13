"use strict";
exports.__esModule = true;
exports.CarExterior = void 0;
var CarExterior = /** @class */ (function () {
    function CarExterior(location, available) {
        this.totalPieces = [];
        this.pieceCost = {
            Weels: 100,
            Roof: 200,
            Painting: 300
        };
        this.location = location;
        this.available = available;
    }
    CarExterior.prototype.addPiece = function (item) {
        this.available ? this.totalPieces.push(item) : console.log("not available");
    };
    CarExterior.prototype.setPrice = function () {
        this.totalPrice = this.totalPieces.reduce(function (a, b) { return a + b; }, 0);
    };
    CarExterior.prototype.getPrice = function () {
        return this.totalPrice;
    };
    return CarExterior;
}());
exports.CarExterior = CarExterior;
