interface Card {
  suit: string;
  card: number;
}

let hand: Card[] = [];
let deck: Card[] = [];
let field: Card[] = [];
let score: number = 0;

function createDeck(): Card[] {
  // create deck
  let deck: Card[] = [];
  for (let i = 0; i < 4; i++) {
    const suits: string[] = ["spade", "heart", "clover", "diamond"];
    for (let j = 1; j <= 13; j++) {
      deck.push({ suit: suits[i], card: j });
    }
  }

  // print deck before shuffle
  // console.log("Deck created");
  // console.log(deck);

  // shuffle a deck
  deck.sort(() => Math.random() - 0.5);

  // print deck after shuffle
  // console.log("Deck shuffled");
  // console.log(deck);

  return deck;
}

function draw(): void {
  if (deck.length !== 0) {
    hand.push(deck[0]);
    deck.shift();
  } else {
    console.log("deck is empty");
  }
}

function play(card: Card): void {
  if (isPlayable(card, field[0])) {
    // delete card from hand
    hand = hand.filter((x) => x !== card);

    // add card to front of field
    field.unshift(card);
  } else {
    console.log("this card cannot be played");
  }
}

function showCards(deck: Card[]): void {
  deck.map((x) => console.log(x));
}

function getTopOfField(): Card {
  return field[0];
}

function isPlayable(card: Card, target: Card): boolean {
  if (card.card === target.card || card.suit === target.suit) {
    return true;
  }
  return false;
}

function gameInit(): void {
  console.log("게임을 시작합니다.");
  console.log("덱을 준비중입니다.");

  // create shuffled deck
  console.log("덱을 생성합니다.");
  deck = createDeck();

  // give 5 cards to player
  console.log("플레이어에게 카드를 5장 지급합니다.");
  draw();
  draw();
  draw();
  draw();
  draw();
  console.log("지급된 카드:");
  showCards(hand);

  // take 1 card from deck to field
  console.log("덱에서 카드 한장을 필드 위에 오픈합니다.");
  console.log("오픈된 카드:", deck[0]);
  field.unshift(deck[0]);
  deck.shift();
}

export function game(): void {
  gameInit();
  while (hand.length && deck.length) {
    console.log("========================================");

    let isPlayed = false;

    // check there is playable card
    console.log("필드의 카드:", field[0], "현재 점수:", score);
    console.log("플레이어의 카드:");
    showCards(hand);
    for (let i = 0; i < hand.length; i++) {
      if (isPlayable(hand[i], field[0])) {
        console.log(hand[i], "카드를 냅니다.");
        play(hand[i]);
        isPlayed = true;
        score += 1;
        break;
      }
    }
    if (!isPlayed) {
      console.log(deck[0], "카드를 덱에서 가져옵니다.");
      draw();
      score += 2;
    }
  }

  console.log("게임이 종료되었습니다.");
  console.log("최종 점수:", score);
  return;
}
