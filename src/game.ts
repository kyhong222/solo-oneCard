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

export let GameT: IGame;

export class Game implements IGame {
  hand: Card[] = [];
  deck: Card[] = [];
  field: Card[] = [];
  score: number = 0;

  constructor() {}
  createDeck(): void {
    // create deck
    this.deck = [];
    const suits: string[] = ["spade", "heart", "clover", "diamond"];
    for (let i = 0; i < 4; i++) {
      for (let j = 1; j <= 13; j++) {
        this.deck.push({ suit: suits[i], card: j });
      }
    }

    // print deck before shuffle
    // console.log("Deck created");
    // console.log(deck);

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
    if (this.isPlayable(card, this.field[0])) {
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
  isPlayable(card: Card, target: Card): boolean {
    if (card.card === target.card || card.suit === target.suit) {
      return true;
    }
    return false;
  }

  gameInit(): void {
    console.log("게임을 시작합니다.");
    console.log("덱을 준비중입니다.");

    // create shuffled deck
    console.log("덱을 생성합니다.");
    this.createDeck();

    // give 5 cards to player
    console.log("플레이어에게 카드를 5장 지급합니다.");
    this.draw();
    this.draw();
    this.draw();
    this.draw();
    this.draw();
    console.log("지급된 카드:");
    this.showCards(this.hand);

    // take 1 card from deck to field
    console.log("덱에서 카드 한장을 필드 위에 오픈합니다.");
    console.log("오픈된 카드:", this.deck[0]);
    this.field.unshift(this.deck[0]);
    this.deck.shift();
  }

  // start(): void {
  //   this.gameInit();
  //   while (this.hand.length && this.deck.length) {
  //     console.log("========================================");

  //     let isPlayed = false;

  //     // check there is playable card
  //     console.log("필드의 카드:", this.field[0], "현재 점수:", this.score);
  //     console.log("플레이어의 카드:");
  //     this.showCards(this.hand);
  //     for (let i = 0; i < this.hand.length; i++) {
  //       if (this.isPlayable(this.hand[i], this.field[0])) {
  //         console.log(this.hand[i], "카드를 냅니다.");
  //         this.play(this.hand[i]);
  //         isPlayed = true;
  //         this.score += 1;
  //         break;
  //       }
  //     }
  //     if (!isPlayed) {
  //       console.log(this.deck[0], "카드를 덱에서 가져옵니다.");
  //       this.draw();
  //       this.score += 2;
  //     }
  //   }

  //   console.log("게임이 종료되었습니다.");
  //   console.log("최종 점수:", this.score);
  //   return;
  // }
}

// export let Game: IGame;

// function createDeck(): void {
//   // create deck
//   let deck: Card[] = [];
//   for (let i = 0; i < 4; i++) {
//     const suits: string[] = ["spade", "heart", "clover", "diamond"];
//     for (let j = 1; j <= 13; j++) {
//       deck.push({ suit: suits[i], card: j });
//     }
//   }

//   // print deck before shuffle
//   // console.log("Deck created");
//   // console.log(deck);

//   // shuffle a deck
//   deck.sort(() => Math.random() - 0.5);

//   // print deck after shuffle
//   // console.log("Deck shuffled");
//   // console.log(deck);
// }

// function draw(): void {
//   if (deck.length !== 0) {
//     hand.push(deck[0]);
//     deck.shift();
//   } else {
//     console.log("deck is empty");
//   }
// }

// function play(card: Card): void {
//   if (isPlayable(card, field[0])) {
//     // delete card from hand
//     hand = hand.filter((x) => x !== card);

//     // add card to front of field
//     field.unshift(card);
//   } else {
//     console.log("this card cannot be played");
//   }
// }

// function showCards(deck: Card[]): void {
//   deck.map((x) => console.log(x));
// }

// function getTopOfField(): Card {
//   return field[0];
// }

// function isPlayable(card: Card, target: Card): boolean {
//   if (card.card === target.card || card.suit === target.suit) {
//     return true;
//   }
//   return false;
// }

// function gameInit(): void {
//   console.log("게임을 시작합니다.");
//   console.log("덱을 준비중입니다.");

//   // create shuffled deck
//   console.log("덱을 생성합니다.");
//   deck = createDeck();

//   // give 5 cards to player
//   console.log("플레이어에게 카드를 5장 지급합니다.");
//   draw();
//   draw();
//   draw();
//   draw();
//   draw();
//   console.log("지급된 카드:");
//   showCards(hand);

//   // take 1 card from deck to field
//   console.log("덱에서 카드 한장을 필드 위에 오픈합니다.");
//   console.log("오픈된 카드:", deck[0]);
//   field.unshift(deck[0]);
//   deck.shift();
// }

export function gameStart(): IGame {
  let game = new Game();
  game.gameInit();
  while (game.hand.length && game.deck.length) {
    console.log("========================================");

    let isPlayed = false;

    // check there is playable card
    console.log("필드의 카드:", game.field[0], "현재 점수:", game.score);
    console.log("플레이어의 카드:");
    game.showCards(game.hand);
    for (let i = 0; i < game.hand.length; i++) {
      if (game.isPlayable(game.hand[i], game.field[0])) {
        console.log(game.hand[i], "카드를 냅니다.");
        game.play(game.hand[i]);
        isPlayed = true;
        game.score += 1;
        break;
      }
    }
    if (!isPlayed) {
      console.log(game.deck[0], "카드를 덱에서 가져옵니다.");
      game.draw();
      game.score += 2;
    }
  }

  console.log("게임이 종료되었습니다.");
  console.log("최종 점수:", game.score);
  return game;
}
