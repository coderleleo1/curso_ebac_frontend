function Champion(nome, tipoDano, classe, lane) {
    this.nome = nome;
    this.tipoDano = tipoDano;
    this.classe = classe;

    let _lane = lane

    this.getLane = function() {
        return _lane
    }

    this.setLane = function(setLane) {
        if (typeof setLane == "string"){
            _lane = setLane;
        }
    }
}

function Mago(nome, classe, lane) {
    Champion.call(this, nome, "Mágico", classe, lane)

    this.setLane('Mid')
}

function Assassino(nome, lane){
    Champion.call(this, nome, "Físico", "Assassino", lane)
}

function Tank(nome, tipoDano, lane) {
    Champion.call(this, nome, tipoDano, "Tanque", lane)
    
    this.setLane('Top')
}

const AurelionSol = new Mago("Aurelion Sol", "Mago de Controle")
const Zed = new Assassino("Zed", "Mid")
const KSante = new Tank("KSante", "Físico", "Top")

// console.log(AurelionSol, AurelionSol.getLane())
// console.log(Zed.getLane())
console.log(KSante.getLane())