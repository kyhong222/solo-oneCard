interface Card {
  suit: string;
  card: number;
}

// let hand: Card[] = [];
// let deck: Card[] = [];
// let field: Card[] = [];
// let score: number = 0;

interface IGame {
  hand: Card[];
  deck: Card[];
  field: Card[];
  score: number;

  createDeck(): void;
  draw(): void;
  play(card: Card): void;
  showCards(deck: Card[]): void;
  isPlayable(card: Card, target: Card): boolean;
  gameInit(): void;
}

export class Game implements IGame {
  hand: Card[] = [];
  deck: Card[] = [];
  field: Card[] = [];
  score: number = 0;

  constructor() {
    this.gameInit();
  }
  createDeck(): void {
    // create deck
    // clear deck
    this.deck = [];

    // fill deck  with playing cards
    const suits: string[] = ["spade", "heart", "clover", "diamond"];
    for (let i = 0; i < 4; i++) {
      for (let j = 1; j <= 13; j++) {
        this.deck.push({ suit: suits[i], card: j });
      }
    }

    // print deck before shuffle
    // console.log("Deck created");
    // console.log(deck);
  }

  shuffleDeck(): void {
    // shuffle a deck
    this.deck.sort(() => Math.random() - 0.5);

    // print deck after shuffle
    // console.log("Deck shuffled");
    // console.log(deck);
  }

  draw(): void {
    if (this.deck.length !== 0) {
      this.hand.push(this.deck[0]);
      this.deck.shift();
    } else {
      console.log("deck is empty");
    }
  }

  play(card: Card): void {
    if (this.isPlayable(card)) {
      // delete card from hand
      this.hand = this.hand.filter((x) => x !== card);

      // add card to front of field
      this.field.unshift(card);
    } else {
      console.log("this card cannot be played");
    }
  }

  showCards(deck: Card[]): void {
    deck.map((x) => console.log(x));
  }

  isPlayable(card: Card): boolean {
    return card.card === this.field[0].card || card.suit === this.field[0].suit;
  }

  gameInit(): void {
    console.log("게임을 시작합니다.");
    console.log("덱을 준비중입니다.");

    // create deck
    console.log("덱을 생성합니다.");
    this.createDeck();

    // shuffle deck
    console.log("덱을 섞습니다.");
    this.shuffleDeck();

    // player draws 5 cards
    console.log("플레이어가 카드를 5장 뽑습니다.");
    this.draw();
    this.draw();
    this.draw();
    this.draw();
    this.draw();

    console.log("지급된 카드:");
    this.showCards(this.hand);

    // take 1 card from top of deck to field
    console.log("덱에서 카드 한장을 필드 위에 오픈합니다.");
    console.log("오픈된 카드:", this.deck[0]);
    this.field.unshift(this.deck[0]);
    this.deck.shift();
  }

  gameStart(): void {
    while (this.hand.length && this.deck.length) {
      console.log("========================================");

      let isPlayed = false;

      // check there is playable card
      // if there is playable card(s): play it
      console.log("필드의 카드:", this.field[0], "현재 점수:", this.score);
      console.log("플레이어의 카드:");
      this.showCards(this.hand);
      for (let i = 0; i < this.hand.length; i++) {
        if (this.isPlayable(this.hand[i])) {
          console.log(this.hand[i], "카드를 냅니다.");
          this.play(this.hand[i]);
          isPlayed = true;
          this.score += 1;
          break;
        }
      }

      // else: draw a card from deck
      if (!isPlayed) {
        console.log(this.deck[0], "카드를 덱에서 가져옵니다.");
        this.draw();
        this.score += 2;
      }
    }

    // if there is no card on hand, game ends.
    console.log("게임이 종료되었습니다.");
    console.log("최종 점수:", this.score);
  }
}
