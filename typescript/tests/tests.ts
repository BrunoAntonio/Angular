//import {} from './vehicle-type/vehicle-type'
import { CarExterior } from './vehicle-pieces/vehicle-pieces'

let myCarPieces = new CarExterior("Portugal", true)
myCarPieces.addPiece(100)
myCarPieces.addPiece(200)
myCarPieces.setPrice()
console.log(myCarPieces.getPrice())