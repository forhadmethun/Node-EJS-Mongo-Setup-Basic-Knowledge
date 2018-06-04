function User(){
    this.name = "";
    this.life = 100;
    this.giveLife = function(targetrPlayer){
        targetrPlayer.life +=1;
        this.life-=1;
        console.log(this.name + " give life to  " + targetrPlayer.name);
    }
}

var Forhad = new User();
var Bishwa = new User();
Forhad.name = "forhad";
Bishwa.name = "biswa";


Forhad.giveLife(Bishwa);
console.log("forhad life: " + Forhad.life);
console.log("bishwa life: " + Bishwa.life);


User.prototype.upperCut= function uppercut(targetPlayer){
    targetPlayer.life -=3;
    console.log(this.name + " just uppercuted " + targetPlayer.name);
}


Forhad.upperCut(Bishwa);
console.log("forhad life: " + Forhad.life);
console.log("bishwa life: " + Bishwa.life);


User.prototype.magic = 10;
console.log("forhad magic: " + Forhad.magic);