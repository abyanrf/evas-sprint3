class  Animal {
    constructor(name,isMammal) {
        this.name=name
        this.isMammal=isMammal
    }
}


class Frog extends Animal{
    constructor(name,isMammal){
        super(name,isMammal)
    }
     jump() {
        console.log('hop hop')
    }
}

let myfrog =  new Frog ()
myfrog.jump()

class ape extends Animal{
    constructor(name,isMammal){
        super(name,isMammal)
    }
    yell() {
        console.log('auoooooooo')
    }
}
 let myApe =new ape()
 myApe.yell()

