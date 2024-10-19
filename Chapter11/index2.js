// Classes and Objects in JavaScript #76


class RailwayForm{
    submit(){
        alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }
    cancel(){
        alert(this.name + ": Your form is canceled for train number: " + this.trainno)
    }
    fill(givenname, trainno){
        this.name = givenname
        this.trainno = trainno
    }
}


// Create a form for Udoy
let udoy = new RailwayForm()
// Fill the form with Udoy's details
udoy.fill("Udoy", 22994)

// Create a form for Sara
let sara = new RailwayForm()
// Fill the form with Sara's details
sara.fill("Sara", 12222)

udoy.submit()
sara.submit()
sara.cancel()