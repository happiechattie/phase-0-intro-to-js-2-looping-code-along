const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

const thankYou = [];

function writeCards(names, event){
    for (let i = 0; i <names.length; i++) {
        thankYou[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }
    return thankYou;
}

function countDown(int){
    for (int; int >= 0; int--){
        console.log(int);
    }
}