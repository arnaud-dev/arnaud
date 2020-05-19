
abstract class Figure{
    
    private nbr_cote:number;    // nombre de côté:
    protected lg_side:number;     // longueur de côtés
    private perimetre:number;    // longueur périmètre
    private aire:number;         //aire

    constructor(nbr_cote:number, lg_side:number){
        this.nbr_cote = nbr_cote;
        this.lg_side = lg_side;
    }

    Perimetre(){
        this.perimetre = this.nbr_cote*this.lg_side;
        return this.perimetre;
    }

     abstract  Aire();

     Rapport(){
        let sText : string;
        sText = this.Aire() + " m² et son périmètre vaut " + this.Perimetre();
        return sText;
     }

}

class Triangle extends Figure {       
    constructor(lg_side:number){
        super( 3,lg_side );
    }

    Aire(){
        let aire : number;
        aire = Math.pow(this.lg_side, 2) + Math.pow(3, 0.5) / 4;
        return aire;
    }

    Rapport(){
        return "Le triangle vaut " + super.Rapport();
    }
}

class Losange extends Figure {
private diagonale1 : number;
private diagonale2 : number;
private carre : Boolean = false;

constructor(diagonale1 : number, diagonale2 : number){
    
    super(4, Math.pow(diagonale1 / 2, 2) + Math.pow(diagonale2 / 2, 2));
    this.diagonale1 = diagonale1;
    this.diagonale2 = diagonale2;
}

Carre(){
    
    if (this.diagonale1 == this.diagonale2) {
        !this.carre;
    }
}

Aire(){
    let aire:number;
    aire = this.diagonale1 * this.diagonale2;
    return aire;
}

Rapport(){
    if (this.carre == false) {
        return "Le losange vaut " + super.Rapport();
    }
    else{
        return "Le carré vaut " + super.Rapport();   
    }
}
}

let t1 = new Triangle (5);
let t2 = new Triangle (10);
let l1 = new Losange (5,6);
let l2 = new Losange (4,4);

let figure:Figure[] = [t1,t2,l1,l2];
for(let f of figure){
    console.log(f.Rapport());
}

