const basketballGame = {
    score: 0,
    foul: 0,
    freeThrow() {
      console.log(`Free Throw action: ${this.score}`);
      this.score ++;
      console.log(`After free Throw action: ${this.score}`);
      return this;
    },
    makeFoul(){
      this.foul ++;
      return this;
    },
    basket() {
      console.log(`Basket action: ${this.score}`);
      this.score += 2;
      console.log(`After Basket action: ${this.score}`);
      return this;
    },
    threePointer() {
      console.log(`Three Pointer action: ${this.score}`);
      this.score += 3;
      console.log(`After Three Pointer action: ${this.score}`);
      return this;
    },
    halfTime() {
      console.log(`Halftime score is ${this.score} and with  ${this.foul} foul`);
      return this;
    },
    fulltime() {
      console.log(`Final score is  ${this.score} and with  ${this.foul} foul`);
      return this;
    }
  };
  //modify each of the above object methods to enable function chaining as below:
  console.log(basketballGame
  .basket().freeThrow().freeThrow().basket().makeFoul().threePointer().makeFoul().halfTime() //Game 1
  .basket().freeThrow().makeFoul().freeThrow().basket().threePointer().halfTime().makeFoul() //Game 2
  .fulltime()
  ); //Show the final score