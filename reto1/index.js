export const wrapping = (gifts) => {
  return gifts.map((gift) => {
    let wrappedGift = "";
    const topDownWrapper = startsNum(gift.length + 2);
    wrappedGift += topDownWrapper;
    wrappedGift += "\n";
    wrappedGift += `*${gift}*`;
    wrappedGift += "\n";
    wrappedGift += topDownWrapper;
    return wrappedGift;
  });
};

const startsNum = (num) => {
  let starts = "";
  for (let i = 0; i < num; i++) {
    starts += "*";
  }
  return starts;
};

export const gifts = ["book", "game", "socks"];

// const wrapped = wrapping(gifts);
// console.log(wrapped);
