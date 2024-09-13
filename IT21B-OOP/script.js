class Flower {
    constructor(name, color, bloomSeason, isFragrant) {
        this.name = name;
        this.color = color;
        this.bloomSeason = bloomSeason;
        this.isFragrant = isFragrant;
    }
    
    bloom() {
        return "The " + this.name + " blooms in " + this.bloomSeason;
    }
    
    Fragrance() {
        if (this.isFragrant) {
            return "The " + this.name + " is fragrant";
        } else {
            return "The " + this.name + " is not fragrant";
        }
    }
    
    colorDisplay() {
        return "The " + this.name + " has a beautiful " + this.color + " color";
    }
 }
 
 const key = new Flower("Gumamela", "Purple", "Spring, Summer, and Fall", true);
 console.log(key.bloom());
 console.log(key.Fragrance());
 console.log(key.colorDisplay());
 
 
 document.getElementById("bloom-info").innerHTML = key.bloom();
 document.getElementById("fragrance-info").innerHTML = key.Fragrance();
 document.getElementById("color-info").innerHTML = key.colorDisplay();