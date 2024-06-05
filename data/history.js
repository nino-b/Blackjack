const history = [
  {
    dateTime: {
      date: "05/06/2024",
      time: "11:25",
    },
    dealerHand: {
      cards: "8♣️ 9♠️"
    },
    hand: {
      cards: "8♥️ 4♣️ 6♦️",
      outcome: "You Won",
      isSplit: "Yes",
      bet: {
        main: "Main: 100",
        insurance: null,
      },
      payout: {
        main: "Main: 200",
        insurance: null,
        evenMoney: null,
      }
    },
    bank: {
      amount: 2200
    }
  },
  {
    dateTime: {
      date: "05/06/2024",
      time: "11:00",
    },
    dealerHand: {
      cards: "8♣️ 9♠️"
    },
    hand: {
      cards: "8♥️ 5♣️ J♦️",
      outcome: "You Lost",
      isSplit: "Yes",
      bet: {
        main: "Main: 100",
        insurance: null,
      },
      payout: {
        main: "Main: 0",
        insurance: null,
        evenMoney: null,
      }
    },
    bank: {
      amount: 2100
    }
  },
  {
    dateTime: {
      date: "04/06/2024",
      time: "11:00",
    },
    dealerHand: {
      cards: "A♣️ 9♠️"
    },
    hand: {
      cards: "8♥️ J♦️",
      outcome: "You Lost",
      isSplit: "No",
      bet: {
        main: "Main: 100",
        insurance: "Insurance: 50",
      },
      payout: {
        main: "Main: 0",
        insurance: "Insurance: 0",
        evenMoney: null,
      }
    },
    bank: {
      amount: 2100
    }
  },
  {
    dateTime: {
      date: "04/06/2024",
      time: "10:45",
    },
    dealerHand: {
      cards: "7♦️ 10♣️"
    },
    hand: {
      cards: "9♣️ 8♠️",
      outcome: "Push",
      isSplit: "No",
      bet: {
        main: "Main: 50",
        insurance: null,
      },
      payout: {
        main: "Main: 50",
        insurance: null,
        evenMoney: null,
      }
    },
    bank: {
      amount: 2100
    }
  },
  {
    dateTime: {
      date: "04/06/2024",
      time: "10:30",
    },
    dealerHand: {
      cards: "K♣️ 6♠️"
    },
    hand: {
      cards: "A♥️ 10♦️",
      outcome: "You Won",
      isSplit: "No",
      bet: {
        main: "Main: 100",
        insurance: null,
      },
      payout: {
        main: "Main: 150",
        insurance: null,
        evenMoney: null,
      }
    },
    bank: {
      amount: 2150
    }
  },
  {
    dateTime: {
      date: "03/06/2024",
      time: "15:15",
    },
    dealerHand: {
      cards: "Q♠️ 7♦️"
    },
    hand: {
      cards: "J♣️ 6♣️ 5♠️",
      outcome: "You Lost",
      isSplit: "No",
      bet: {
        main: "Main: 75",
        insurance: null,
      },
      payout: {
        main: "Main: 0",
        insurance: null,
        evenMoney: null,
      }
    },
    bank: {
      amount: 2000
    }
  },
  {
    dateTime: {
      date: "03/06/2024",
      time: "14:00",
    },
    dealerHand: {
      cards: "5♣️ K♦️"
    },
    hand: {
      cards: "6♠️ 7♣️ 9♦️",
      outcome: "You Won",
      isSplit: "No",
      bet: {
        main: "Main: 50",
        insurance: null,
      },
      payout: {
        main: "Main: 100",
        insurance: null,
        evenMoney: null,
      }
    },
    bank: {
      amount: 2050
    }
  },
  {
    dateTime: {
      date: "02/06/2024",
      time: "16:45",
    },
    dealerHand: {
      cards: "8♠️ 2♣️"
    },
    hand: {
      cards: "K♥️ 9♣️",
      outcome: "You Won",
      isSplit: "No",
      bet: {
        main: "Main: 100",
        insurance: null,
      },
      payout: {
        main: "Main: 150",
        insurance: null,
        evenMoney: null,
      }
    },
    bank: {
      amount: 2100
    }
  },
  {
    dateTime: {
      date: "02/06/2024",
      time: "15:30",
    },
    dealerHand: {
      cards: "9♠️ 9♦️"
    },
    hand: {
      cards: "7♠️ 8♣️",
      outcome: "Push",
      isSplit: "No",
      bet: {
        main: "Main: 50",
        insurance: null,
      },
      payout: {
        main: "Main: 50",
        insurance: null,
        evenMoney: null,
      }
    },
    bank: {
      amount: 2050
    }
  },
  {
    dateTime: {
      date: "01/06/2024",
      time: "10:00",
    },
    dealerHand: {
      cards: "J♠️ 7♦️"
    },
    hand: {
      cards: "Q♣️ 6♣️",
      outcome: "You Lost",
      isSplit: "No",
      bet: {
        main: "Main: 75",
        insurance: null,
      },
      payout: {
        main: "Main: 0",
        insurance: null,
        evenMoney: null,
      }
    },
    bank: {
      amount: 1950
    }
  },
  {
    dateTime: {
      date: "31/05/2024",
      time: "17:20",
    },
    dealerHand: {
      cards: "3♦️ Q♣️"
    },
    hand: {
      cards: "K♠️ 8♦️",
      outcome: "You Won",
      isSplit: "No",
      bet: {
        main: "Main: 50",
        insurance: null,
      },
      payout: {
        main: "Main: 100",
        insurance: null,
        evenMoney: null,
      }
    },
    bank: {
      amount: 2000
    }
  },
  {
    dateTime: {
      date: "31/05/2024",
      time: "16:05",
    },
    dealerHand: {
      cards: "7♠️ J♦️"
    },
    hand: {
      cards: "10♠️ 6♥️",
      outcome: "You Lost",
      isSplit: "No",
      bet: {
        main: "Main: 100",
        insurance: null,
      },
      payout: {
        main: "Main: 0",
        insurance: null,
        evenMoney: null,
      }
    },
    bank: {
      amount: 1900
    }
  },
  {
    dateTime: {
      date: "30/05/2024",
      time: "14:45",
    },
    dealerHand: {
      cards: "6♦️ 10♠️"
    },
    hand: {
      cards: "7♣️ 9♠️",
      outcome: "You Won",
      isSplit: "No",
      bet: {
        main: "Main: 100",
        insurance: null,
      },
      payout: {
        main: "Main: 150",
        insurance: null,
        evenMoney: null,
      }
    },
    bank: {
      amount: 2050
    }
  },
  {
    dateTime: {
      date: "29/05/2024",
      time: "12:30",
    },
    dealerHand: {
      cards: "5♣️ K♠️"
    },
    hand: {
      cards: "8♣️ 7♦️",
      outcome: "Push",
      isSplit: "No",
      bet: {
        main: "Main: 50",
        insurance: null,
      },
      payout: {
        main: "Main: 50",
        insurance: null,
        evenMoney: null,
      }
    },
    bank: {
      amount: 2050
    }
  },
  {
    dateTime: {
      date: "28/05/2024",
      time: "11:15",
    },
    dealerHand: {
      cards: "J♠️ 9♥️"
    },
    hand: {
      cards: "Q♣️ 8♣️",
      outcome: "You Lost",
      isSplit: "No",
      bet: {
        main: "Main: 100",
        insurance: null,
      },
      payout: {
        main: "Main: 0",
        insurance: null,
        evenMoney: null,
      }
    },
    bank: {
      amount: 1950
    }
  },
  {
    dateTime: {
      date: "27/05/2024",
      time: "10:00",
    },
    dealerHand: {
      cards: "6♠️ 5♥️"
    },
    hand: {
      cards: "9♦️ 7♥️",
      outcome: "You Won",
      isSplit: "No",
      bet: {
        main: "Main: 50",
        insurance: null,
      },
      payout: {
        main: "Main: 100",
        insurance: null,
        evenMoney: null,
      }
    },
    bank: {
      amount: 2000
    }
  },
  {
    dateTime: {
      date: "26/05/2024",
      time: "18:20",
    },
    dealerHand: {
      cards: "Q♥️ 2♠️"
    },
    hand: {
      cards: "J♦️ 8♠️",
      outcome: "Push",
      isSplit: "No",
      bet: {
        main: "Main: 75",
        insurance: null,
      },
      payout: {
        main: "Main: 75",
        insurance: null,
        evenMoney: null,
      }
    },
    bank: {
      amount: 2000
    }
  },
  {
    dateTime: {
      date: "25/05/2024",
      time: "17:00",
    },
    dealerHand: {
      cards: "8♣️ 7♦️"
    },
    hand: {
      cards: "10♥️ 9♣️",
      outcome: "You Won",
      isSplit: "No",
      bet: {
        main: "Main: 100",
        insurance: null,
      },
      payout: {
        main: "Main: 150",
        insurance: null,
        evenMoney: null,
      }
    },
    bank: {
      amount: 2050
    }
  },
  {
    dateTime: {
      date: "24/05/2024",
      time: "16:00",
    },
    dealerHand: {
      cards: "J♠️ 8♠️"
    },
    hand: {
      cards: "6♦️ 6♠️ 7♣️",
      outcome: "You Lost",
      isSplit: "No",
      bet: {
        main: "Main: 50",
        insurance: null,
      },
      payout: {
        main: "Main: 0",
        insurance: null,
        evenMoney: null,
      }
    },
    bank: {
      amount: 1900
    }
  },
  {
    dateTime: {
      date: "23/05/2024",
      time: "15:30",
    },
    dealerHand: {
      cards: "5♦️ 10♣️"
    },
    hand: {
      cards: "9♥️ 8♣️",
      outcome: "You Won",
      isSplit: "No",
      bet: {
        main: "Main: 100",
        insurance: null,
      },
      payout: {
        main: "Main: 150",
        insurance: null,
        evenMoney: null,
      }
    },
    bank: {
      amount: 2050
    }
  }
];


export default history;