

interface VehiclePieces{

    location: string
    available: boolean
    
}

export class CarExterior implements VehiclePieces{

    location: string
    available: boolean
    
    totalPieces:number[] = []
    totalPrice:number
    
    pieceCost:object = { 
        Weels: 100,
        Roof: 200,
        Painting: 300
    }

    constructor(location: string, available: boolean){
        this.location = location
        this.available = available
    }

    addPiece(item: number) {
        this.available ? this.totalPieces.push(item): console.log("not available")
        }

    setPrice(){
        this.totalPrice = this.totalPieces.reduce(function (a, b) {return a + b;}, 0);
    }

    getPrice(){
        return this.totalPrice
    }
}



