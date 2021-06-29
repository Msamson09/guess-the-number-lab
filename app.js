const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    
    
    playersGuess: null,
    prevGuesses: [],
    
    getGuess: function () {
        while (this.secretNum !== this.playersGuess){
        this.playersGuess = Number(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
        
        if (this.playersGuess > this.secretNum){
          alert('Too high, try again')
        } else if (this.playersGuess < this.secretNum) {
          alert('Too low, try again')
        }
        
      }
      if (this.secretNum === this.playersGuess){
        alert(`Winner winner chicken dinner!`)
        
      }
      return
    },
    play: function () {
      // this.secretNum = 
      this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      
      console.log(this.secretNum)
      game.getGuess()
    },
  }
  game.play()