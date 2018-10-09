'use strict'

var Card= function(icon){
    this.icon=icon;
    this.flipped = false;
    this.matched = false;
};

var Deck = function() {
  var icons =['droplet', 'compass','bug','crying2','spotify','rss','appleinc','twitter' ];
  this.cards = [];
  this.numCards = 16;
  for( var i = 0; i < this.numCards / 2; i++) {
      var card1 = new Card(icons[i]);
      var card2 = new Card(icons[i]);
      this.cards.push(card1);
      this.cards.push(card2);
  }


  this.shuffle = function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

};
