// Constructors in JavaScript #77

/*
class RailwayForm {
  constructor(givenname, trainno) {
    console.log("CONSTRUCTOR CALLED..." + givenname + " " + trainno);
    this.name = givenname;
    this.trainno = trainno;
  }
  submit() {
    alert(
      this.name + ": Your form is submitted for train number: " + this.trainno
    );
  }
  cancel() {
    alert(
      this.name + ": Your form is canceled for train number: " + this.trainno
    );
  }
}

// Create and fill a form for Udoy
let udoy = new RailwayForm("Udoy", 22994);

// Create and fill a form for Sara
let sara = new RailwayForm("Sara", 12222);

udoy.submit();
sara.submit();
sara.cancel();
*/

class RailwayForm {
  constructor(givenname, trainno, address) {
    console.log("CONSTRUCTOR CALLED..." + givenname + " " + trainno);
    this.name = givenname;
    // this.trainno = trainno;
    this.trainno = [trainno];
    this.address = address;
  }
  preview() {
    alert(
      this.name + ": your form is for train number: " + this.trainno + " and your address is: " + this.address
    );
  }
  submit() {
    alert(
      this.name + ": Your form is submitted for train number: " + this.trainno
    );
  }
  cancel() {
    alert(
      this.name + ": Your form is canceled for train number: " + this.trainno
    );
    this.trainno = 0;
  }
}


let udoyForm = new RailwayForm("Udoy", 2299, "Habiganj")
udoyForm.preview()
udoyForm.submit()