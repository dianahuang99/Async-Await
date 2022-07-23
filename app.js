//Part 1
//Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

async function getFacts() {
  let facts = await Promise.all([
    $.getJSON("http://numbersapi.com/14?json"),
    $.getJSON("http://numbersapi.com/14?json"),
    $.getJSON("http://numbersapi.com/14?json"),
    $.getJSON("http://numbersapi.com/14?json"),
  ]);
  for (fact of facts) {
    $("body").append(`<p>${fact.text}</p>`);
  }
}

// //Part 2

//2

async function pickTwoCards() {
  const res = await $.get(
    "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );

  const card = await $.get(
    `http://deckofcardsapi.com/api/deck/${res.deck_id}/draw/?count=2`
  );
  for (oneCard of card.cards) {
    console.log(`${oneCard.value} of ${oneCard.suit}`);
  }
}

pickTwoCards();

//3

async function getDeckId() {
  const data = await $.get(
    "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );

  $("#button").on("click", async () => {
    card = await $.get(
      `http://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=1`
    );
    $("body").append(`<img src="${card.cards[0].image}" alt="">`);
  });
}

getDeckId();
