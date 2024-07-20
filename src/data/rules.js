const rules = {
  introduction: {
    introduction_heading: "How to Play Blackjack",
    introduction_paragraph: "Welcome to Blackjack! The goal of the game is to beat the dealer by having a hand value closest to 21 without going over. Here's how to play:",
  },
  rules: [
    {
      group_name: "Card Values:",
      group_items: [
        {
          label: "Number cards (2-10)",
          description:" are worth their face value."
        },
        {
          label: "Face cards (King, Queen, Jack)",
          description: " are each worth 10 points.",
        },
        {
          label: "Aces",
          description: " can be worth 1 or 11 points, whichever helps your hand more.",
        },
      ]
    },
    {
      group_name: "Starting the Game:",
      group_items: [
        {
          label: "",
          description: "Both you and the dealer get two cards. Your cards are dealt face up, while the dealer has one card face up and one face down.",
        },
      ],
    },
    {
      group_name: "Player's Turn:",
      group_items: [
        {
          label: "Hit:",
          description: " Take another card to try to get closer to 21.",
        },
        {
          label: "Stand:",
          description: " Keep your current hand.",
        },
        {
          label: "Double Down:",
          description: " Double your bet and take exactly one more card.",
        },
        {
          label: "Split:",
          description: " If you have two cards of the same value, you can split them into two separate hands. You can have at most four hands at a time with exception of Aces, where you can have maximum two hands. If you split Aces, then one card is dealt to each hand and you can't draw any more cards. If you split Aces and you get dealt a card with the value of 10, it is considered as a regular win (not Blackjack).",
        },
      ],
    },
    {
      group_name: "Special Options:",
      group_items: [
        {
          label: "Insurance:",
          description: " If the dealer's face-up card is an Ace, you can choose to take insurance, a side bet that pays 2 to 1 if the dealer has Blackjack. If dealer does not have Blackjack, you lose your insurance money and game continues with usual rules. You have a choice to disable this feature from settings.",
        },
        {
          label: "Even Money:",
          description: " If you have Blackjack and the dealer's face-up card is an Ace, you can choose even money. You get a payout of 1:1 regardless of whether the dealer has Blackjack or not. You have a choice to disable this feature from settings.",
        },
      ],
    },
    {
      group_name: "Dealer's Turn:",
      group_items: [
        {
          label: "",
          description: "The dealer reveals their face-down card.",
        },
        {
          label: "",
          description: "The dealer must hit until their hand is at least 17 points. The dealer must stand on a soft 17 (a hand with an Ace valued as 11). You have a choice to disable this feature from settings - the dealer will hit on soft 17.",
        },
      ],
    },
    {
      group_name: "Winning the Game",
      group_items: [
        {
          label: "Blackjack:",
          description: " If your initial two cards are an Ace and a 10-point card (10, Jack, Queen, King), you have Blackjack! This pays 3 to 2.",
        },
        {
          label: "Beat the Dealer:",
          description: " If your hand is closer to 21 than the dealer's without going over, you win. This pays 1 to 1.",
        },
        {
          label: "Dealer Busts:",
          description: " If the dealer's hand exceeds 21, you win. This pays 1 to 1.",
        },
        {
          label: "Push:",
          description: " If your hand and the dealer's hand have the same value, it's a tie, and your bet is returned.",
        },
      ],
    },
  ],
  wrapping_up: {
    final_words: "Enjoy the game, and may the cards be in your favor!",
  }
};

export default rules;