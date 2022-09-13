"use strict";
exports.__esModule = true;
//import {} from './vehicle-type/vehicle-type'
var vehicle_pieces_1 = require("./vehicle-pieces/vehicle-pieces");
var myCarPieces = new vehicle_pieces_1.CarExterior("Portugal", true);
myCarPieces.addPiece(100);
myCarPieces.addPiece(200);
myCarPieces.setPrice();
console.log(myCarPieces.getPrice());
