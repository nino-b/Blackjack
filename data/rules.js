const RULES = {
  introduction: {
    introduction_heading: "How to Play Blackjack",
    inroduction_paragraph: "Welcome to Blackjack! The goal of the game is to beat the dealer by having a hand value closest to 21 without going over. Here's how to play:",
  },
  rules: [
    {
      group_name: "Card Values:",
      group_items: [
        "Number cards (2-10) are worth their face value.",
        "Face cards (King, Queen, Jack) are each worth 10 points.",
        "Aces can be worth 1 or 11 points, whichever helps your hand more.",
      ]
    },
    {
      group_name: "Starting the Game:",
      group_items: [
        "Both you and the dealer get two cards. Your cards are dealt face up, while the dealer has one card face up and one face down.",
      ],
    },
    {
      group_name: "Player's Turn:",
      group_items: [
        "Hit: Take another card to try to get closer to 21.",
        "Stand: Keep your current hand.",
        "Double Down: Double your bet and take exactly one more card.",
        "Split: If you have two cards of the same value, you can split them into two separate hands. You can have at most four hands at a time with exception of Aces, where you can have maximum two hands."
      ],
    },
    {
      group_name: "Special Options:",
      group_items: [
        "Insurance: If the dealer's face-up card is an Ace, you can choose to take insurance, a side bet that pays 2 to 1 if the dealer has Blackjack. If dealer does not have Blackjack, you lose your insurance money and game continues with usual rules. You have a choice to disable this feature from settings.",
        "Even Money: If you have Blackjack and the dealer's face-up card is an Ace, you can choose even money. You get a payout of 1:1 regardless of whether the dealer has Blackjack or not. You have a choice to disable this feature from settings.",
      ],
    },
    {
      group_name: "Dealer's Turn:",
      group_items: [
        "The dealer reveals their face-down card.",
        "The dealer must hit until their hand is at least 17 points. The dealer must stand on a soft 17 (a hand with an Ace valued as 11). You have a choice to disable this feature from settings - the dealer will hit on soft 17.",
      ],
    },
    {
      group_name: "Winning the Game",
      group_items: [
        "Blackjack: If your first two cards are an Ace and a 10-point card (10, Jack, Queen, King), you have Blackjack! This pays 3 to 2.",
        "Beat the Dealer: If your hand is closer to 21 than the dealer's without going over, you win. This pays 1 to 1.",
        "Dealer Busts: If the dealer's hand exceeds 21, you win. This pays 1 to 1.",
        "Push: If your hand and the dealer's hand have the same value, it's a tie, and your bet is returned.",
      ],
    },
  ],
  final_words: {
    wrapping_up: "Enjoy the game, and may the cards be in your favor!",
  }
};

export default RULES;