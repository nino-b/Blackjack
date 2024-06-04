const history = [
  {
    dateTime: {
      date: "30/05/2024",
      time: "11:25",
    },
    dealerHand: {
      cards: "A♣️ Q♠️"
    },
    playerHands: [
      {
        cards: "8♥️ 3♣️ 6♦️",
        outcome: 'You Won',
        bet: {
          main: "Main: 100",
          insurance: null,
        },
        payout: {
          main: "Main: 200",
          insurance: null,
          evenMoney: null,
        }
      }
    ],
    bank: 2100
  },
  {
    dateTime: {
      date: "30/05/2024",
      time: "12:15",
    },
    dealerHand: {
      cards: "K♠️ 9♦️"
    },
    playerHands: [
      {
        cards: "5♣️ 10♥️ 4♦️",
        outcome: 'You Lost',
        bet: {
          main: "Main: 150",
          insurance: null,
        },
        payout: {
          main: "Main: 0",
          insurance: null,
          evenMoney: null,
        }
      }
    ],
    bank: 1950
  },
  {
    dateTime: {
      date: "30/05/2024",
      time: "13:45",
    },
    dealerHand: {
      cards: "2♠️ 3♣️ 7♥️"
    },
    playerHands: [
      {
        cards: "9♠️ 8♦️",
        outcome: 'Push',
        bet: {
          main: "Main: 200",
          insurance: null,
        },
        payout: {
          main: "Main: 200",
          insurance: null,
          evenMoney: null,
        }
      }
    ],
    bank: 1950
  },
  {
    dateTime: {
      date: "31/05/2024",
      time: "10:00",
    },
    dealerHand: {
      cards: "J♣️ 10♦️"
    },
    playerHands: [
      {
        cards: "A♥️ 9♠️",
        outcome: 'Blackjack',
        bet: {
          main: "Main: 300",
          insurance: null,
        },
        payout: {
          main: "Main: 450",
          insurance: null,
          evenMoney: null,
        }
      },
      {
        cards: "8♥️ 9♠️",
        outcome: 'You Lost',
        bet: {
          main: "Main: 300",
          insurance: null,
        },
        payout: {
          main: "0",
          insurance: null,
          evenMoney: null,
        }
      },
      {
        cards: "10♥️ 9♠️",
        outcome: 'You Lost',
        bet: {
          main: "Main: 300",
          insurance: null,
        },
        payout: {
          main: "0",
          insurance: null,
          evenMoney: null,
        }
      }
    ],
    bank: 2100
  },
  {
    dateTime: {
      date: "31/05/2024",
      time: "11:30",
    },
    dealerHand: {
      cards: "4♠️ 5♣️"
    },
    playerHands: [
      {
        cards: "J♥️ 3♦️ 2♠️",
        outcome: 'You Lost',
        bet: {
          main: "Main: 100",
          insurance: "Insurance: 50",
        },
        payout: {
          main: "Main: 0",
          insurance: "Insurance: 100",
          evenMoney: null,
        }
      }
    ],
    bank: 2050
  },
  {
    dateTime: {
      date: "31/05/2024",
      time: "12:45",
    },
    dealerHand: {
      cards: "Q♦️ 2♠️"
    },
    playerHands: [
      {
        cards: "7♥️ 8♠️ 6♣️",
        outcome: 'You Won',
        bet: {
          main: "Main: 200",
          insurance: null,
        },
        payout: {
          main: "Main: 400",
          insurance: null,
          evenMoney: null,
        }
      }
    ],
    bank: 2250
  },
  {
    dateTime: {
      date: "01/06/2024",
      time: "14:10",
    },
    dealerHand: {
      cards: "A♠️ 9♣️"
    },
    playerHands: [
      {
        cards: "10♠️ 10♥️",
        outcome: 'You Won',
        bet: {
          main: "Main: 150",
          insurance: "Insurance: 50",
        },
        payout: {
          main: "Main: 300",
          insurance: "Insurance: 100",
          evenMoney: null,
        }
      }
    ],
    bank: 2600
  },
  {
    dateTime: {
      date: "01/06/2024",
      time: "15:30",
    },
    dealerHand: {
      cards: "7♦️ 8♣️"
    },
    playerHands: [
      {
        cards: "2♠️ 5♣️ 9♥️",
        outcome: 'You Lost',
        bet: {
          main: "Main: 100",
          insurance: null,
        },
        payout: {
          main: "Main: 0",
          insurance: null,
          evenMoney: null,
        }
      }
    ],
    bank: 2500
  },
  {
    dateTime: {
      date: "02/06/2024",
      time: "10:45",
    },
    dealerHand: {
      cards: "K♥️ 6♠️"
    },
    playerHands: [
      {
        cards: "Q♣️ 5♥️",
        outcome: 'You Won',
        bet: {
          main: "Main: 200",
          insurance: null,
        },
        payout: {
          main: "Main: 400",
          insurance: null,
          evenMoney: null,
        }
      }
    ],
    bank: 2900
  },
  {
    dateTime: {
      date: "02/06/2024",
      time: "12:00",
    },
    dealerHand: {
      cards: "8♠️ 4♦️"
    },
    playerHands: [
      {
        cards: "A♦️ 9♣️",
        outcome: 'You Won',
        bet: {
          main: "Main: 150",
          insurance: null,
        },
        payout: {
          main: "Main: 300",
          insurance: null,
          evenMoney: null,
        }
      }
    ],
    bank: 3200
  },
  {
    dateTime: {
      date: "03/06/2024",
      time: "14:20",
    },
    dealerHand: {
      cards: "2♣️ 9♥️"
    },
    playerHands: [
      {
        cards: "3♦️ 6♠️ 7♥️",
        outcome: 'Push',
        bet: {
          main: "Main: 100",
          insurance: null,
        },
        payout: {
          main: "Main: 100",
          insurance: null,
          evenMoney: null,
        }
      }
    ],
    bank: 3200
  },
  {
    dateTime: {
      date: "03/06/2024",
      time: "16:45",
    },
    dealerHand: {
      cards: "Q♦️ 5♣️"
    },
    playerHands: [
      {
        cards: "8♠️ 8♣️",
        outcome: 'You Won',
        bet: {
          main: "Main: 250",
          insurance: "Insurance: 50",
        },
        payout: {
          main: "Main: 500",
          insurance: "Insurance: 100",
          evenMoney: null,
        }
      }
    ],
    bank: 3500
  },
  {
    dateTime: {
      date: "04/06/2024",
      time: "11:30",
    },
    dealerHand: {
      cards: "6♦️ 3♠️"
    },
    playerHands: [
      {
        cards: "4♣️ 4♦️ 5♠️",
        outcome: 'You Lost',
        bet: {
          main: "Main: 200",
          insurance: null,
        },
        payout: {
          main: "Main: 0",
          insurance: null,
          evenMoney: null,
        }
      }
    ],
    bank: 3300
  },
  {
    dateTime: {
      date: "04/06/2024",
      time: "13:00",
    },
    dealerHand: {
      cards: "A♠️ 7♥️"
    },
    playerHands: [
      {
        cards: "10♦️ 10♣️",
        outcome: 'You Won',
        bet: {
          main: "Main: 300",
          insurance: "Insurance: 50",
        },
        payout: {
          main: "Main: 600",
          insurance: "Insurance: 100",
          evenMoney: null,
        }
      }
    ],
    bank: 4000
  },
  {
    dateTime: {
      date: "05/06/2024",
      time: "15:30",
    },
    dealerHand: {
      cards: "5♣️ 5♦️"
    },
    playerHands: [
      {
        cards: "9♥️ 7♠️",
        outcome: 'You Lost',
        bet: {
          main: "Main: 100",
          insurance: null,
        },
        payout: {
          main: "Main: 0",
          insurance: null,
          evenMoney: null,
        }
      }
    ],
    bank: 3900
  },
  {
    dateTime: {
      date: "05/06/2024",
      time: "17:45",
    },
    dealerHand: {
      cards: "J♠️ 9♣️"
    },
    playerHands: [
      {
        cards: "Q♥️ K♠️",
        outcome: 'Push',
        bet: {
          main: "Main: 200",
          insurance: null,
        },
        payout: {
          main: "Main: 200",
          insurance: null,
          evenMoney: null,
        }
      }
    ],
    bank: 3900
  },
  {
    dateTime: {
      date: "06/06/2024",
      time: "10:00",
    },
    dealerHand: {
      cards: "6♣️ 8♠️"
    },
    playerHands: [
      {
        cards: "4♦️ 5♠️ 7♣️",
        outcome: 'You Won',
        bet: {
          main: "Main: 150",
          insurance: null,
        },
        payout: {
          main: "Main: 300",
          insurance: null,
          evenMoney: null,
        }
      }
    ],
    bank: 4050
  },
  {
    dateTime: {
      date: "06/06/2024",
      time: "11:30",
    },
    dealerHand: {
      cards: "K♣️ 3♠️"
    },
    playerHands: [
      {
        cards: "A♦️ J♠️",
        outcome: 'You Won',
        bet: {
          main: "Main: 200",
          insurance: "Insurance: 50",
        },
        payout: {
          main: "Main: 400",
          insurance: "Insurance: 100",
          evenMoney: "Even Money: 100",
        }
      }
    ],
    bank: 4550
  },
  {
    dateTime: {
      date: "07/06/2024",
      time: "14:20",
    },
    dealerHand: {
      cards: "9♥️ 7♦️"
    },
    playerHands: [
      {
        cards: "A♠️ Q♣️",
        outcome: 'You Won',
        bet: {
          main: "Main: 300",
          insurance: null,
        },
        payout: {
          main: "Main: 600",
          insurance: null,
          evenMoney: "Even Money: 150",
        }
      }
    ],
    bank: 5150
  },
  {
    dateTime: {
      date: "08/06/2024",
      time: "16:45",
    },
    dealerHand: {
      cards: "6♠️ 4♦️"
    },
    playerHands: [
      {
        cards: "A♥️ K♦️",
        outcome: 'You Won',
        bet: {
          main: "Main: 250",
          insurance: "Insurance: 50",
        },
        payout: {
          main: "Main: 500",
          insurance: "Insurance: 100",
          evenMoney: "Even Money: 125",
        }
      }
    ],
    bank: 5800
  },
  {
    dateTime: {
      date: "09/06/2024",
      time: "10:00",
    },
    dealerHand: {
      cards: "Q♠️ 5♥️"
    },
    playerHands: [
      {
        cards: "A♣️ 10♦️",
        outcome: 'You Won',
        bet: {
          main: "Main: 200",
          insurance: null,
        },
        payout: {
          main: "Main: 400",
          insurance: null,
          evenMoney: "Even Money: 100",
        }
      }
    ],
    bank: 6300
  },
  {
    dateTime: {
      date: "10/06/2024",
      time: "13:00",
    },
    dealerHand: {
      cards: "8♦️ 2♠️"
    },
    playerHands: [
      {
        cards: "A♥️ Q♥️",
        outcome: 'You Won',
        bet: {
          main: "Main: 300",
          insurance: "Insurance: 50",
        },
        payout: {
          main: "Main: 600",
          insurance: "Insurance: 100",
          evenMoney: "Even Money: 150",
        }
      }
    ],
    bank: 6900
  },
  {
    dateTime: {
      date: "11/06/2024",
      time: "15:30",
    },
    dealerHand: {
      cards: "5♣️ J♠️"
    },
    playerHands: [
      {
        cards: "A♠️ J♣️",
        outcome: 'You Won',
        bet: {
          main: "Main: 200",
          insurance: null,
        },
        payout: {
          main: "Main: 400",
          insurance: null,
          evenMoney: "Even Money: 100",
        }
      }
    ],
    bank: 7400
  },
  {
    dateTime: {
      date: "12/06/2024",
      time: "17:45",
    },
    dealerHand: {
      cards: "9♠️ 6♣️"
    },
    playerHands: [
      {
        cards: "A♥️ K♣️",
        outcome: 'You Won',
        bet: {
          main: "Main: 150",
          insurance: "Insurance: 50",
        },
        payout: {
          main: "Main: 300",
          insurance: "Insurance: 100",
          evenMoney: "Even Money: 75",
        }
      }
    ],
    bank: 7800
  }
];

export default history;