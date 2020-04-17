const initialState = {
  reverb: true,
  play: false,
  currentStep: 1,
  tempo: 0.8,
  release: 1.5,
  modal: true,
  octave: 4,
  volume: 0.3,
  wave: 0,
  c2: {
    1: {
      status: false,
    },
    2: {
      status: false,
    },
    3: {
      status: false,
    },
    4: {
      status: false,
    },
    5: {
      status: false,
    },
    6: {
      status: false,
    },
    7: {
      status: false,
    },
    8: {
      status: false,
    },
    9: {
      status: false,
    },
    10: {
      status: false,
    },
    11: {
      status: false,
    },
    12: {
      status: false,
    },
    13: {
      status: false,
    },
    14: {
      status: false,
    },
    15: {
      status: false,
    },
    16: {
      status: false,
    },
  },
  d2: {
    1: {
      status: false,
    },
    2: {
      status: false,
    },
    3: {
      status: false,
    },
    4: {
      status: false,
    },
    5: {
      status: false,
    },
    6: {
      status: false,
    },
    7: {
      status: false,
    },
    8: {
      status: false,
    },
    9: {
      status: false,
    },
    10: {
      status: false,
    },
    11: {
      status: false,
    },
    12: {
      status: false,
    },
    13: {
      status: false,
    },
    14: {
      status: false,
    },
    15: {
      status: false,
    },
    16: {
      status: false,
    },
  },
  e2: {
    1: {
      status: false,
    },
    2: {
      status: false,
    },
    3: {
      status: false,
    },
    4: {
      status: false,
    },
    5: {
      status: false,
    },
    6: {
      status: false,
    },
    7: {
      status: false,
    },
    8: {
      status: false,
    },
    9: {
      status: false,
    },
    10: {
      status: false,
    },
    11: {
      status: false,
    },
    12: {
      status: false,
    },
    13: {
      status: false,
    },
    14: {
      status: false,
    },
    15: {
      status: false,
    },
    16: {
      status: false,
    },
  },
  f2: {
    1: {
      status: false,
    },
    2: {
      status: false,
    },
    3: {
      status: false,
    },
    4: {
      status: false,
    },
    5: {
      status: false,
    },
    6: {
      status: false,
    },
    7: {
      status: false,
    },
    8: {
      status: false,
    },
    9: {
      status: false,
    },
    10: {
      status: false,
    },
    11: {
      status: false,
    },
    12: {
      status: false,
    },
    13: {
      status: false,
    },
    14: {
      status: false,
    },
    15: {
      status: false,
    },
    16: {
      status: false,
    },
  },
  g2: {
    1: {
      status: false,
    },
    2: {
      status: false,
    },
    3: {
      status: false,
    },
    4: {
      status: false,
    },
    5: {
      status: false,
    },
    6: {
      status: false,
    },
    7: {
      status: false,
    },
    8: {
      status: false,
    },
    9: {
      status: false,
    },
    10: {
      status: false,
    },
    11: {
      status: false,
    },
    12: {
      status: false,
    },
    13: {
      status: false,
    },
    14: {
      status: false,
    },
    15: {
      status: false,
    },
    16: {
      status: false,
    },
  },
  a2: {
    1: {
      status: false,
    },
    2: {
      status: false,
    },
    3: {
      status: false,
    },
    4: {
      status: false,
    },
    5: {
      status: false,
    },
    6: {
      status: false,
    },
    7: {
      status: false,
    },
    8: {
      status: false,
    },
    9: {
      status: false,
    },
    10: {
      status: false,
    },
    11: {
      status: false,
    },
    12: {
      status: false,
    },
    13: {
      status: false,
    },
    14: {
      status: false,
    },
    15: {
      status: false,
    },
    16: {
      status: false,
    },
  },
  b2:
  {
    1: {
      status: false,
    },
    2: {
      status: false,
    },
    3: {
      status: false,
    },
    4: {
      status: false,
    },
    5: {
      status: false,
    },
    6: {
      status: false,
    },
    7: {
      status: false,
    },
    8: {
      status: false,
    },
    9: {
      status: false,
    },
    10: {
      status: false,
    },
    11: {
      status: false,
    },
    12: {
      status: false,
    },
    13: {
      status: false,
    },
    14: {
      status: false,
    },
    15: {
      status: false,
    },
    16: {
      status: false,
    },
  },
  c3: {
    1: {
      status: false,
    },
    2: {
      status: false,
    },
    3: {
      status: false,
    },
    4: {
      status: false,
    },
    5: {
      status: false,
    },
    6: {
      status: false,
    },
    7: {
      status: false,
    },
    8: {
      status: false,
    },
    9: {
      status: false,
    },
    10: {
      status: false,
    },
    11: {
      status: false,
    },
    12: {
      status: false,
    },
    13: {
      status: false,
    },
    14: {
      status: false,
    },
    15: {
      status: false,
    },
    16: {
      status: false,
    },
  },
  d3: {
    1: {
      status: false,
    },
    2: {
      status: false,
    },
    3: {
      status: false,
    },
    4: {
      status: false,
    },
    5: {
      status: false,
    },
    6: {
      status: false,
    },
    7: {
      status: false,
    },
    8: {
      status: false,
    },
    9: {
      status: false,
    },
    10: {
      status: false,
    },
    11: {
      status: false,
    },
    12: {
      status: false,
    },
    13: {
      status: false,
    },
    14: {
      status: false,
    },
    15: {
      status: false,
    },
    16: {
      status: false,
    },
  },
  e3: {
    1: {
      status: false,
    },
    2: {
      status: false,
    },
    3: {
      status: false,
    },
    4: {
      status: false,
    },
    5: {
      status: false,
    },
    6: {
      status: false,
    },
    7: {
      status: false,
    },
    8: {
      status: false,
    },
    9: {
      status: false,
    },
    10: {
      status: false,
    },
    11: {
      status: false,
    },
    12: {
      status: false,
    },
    13: {
      status: false,
    },
    14: {
      status: false,
    },
    15: {
      status: false,
    },
    16: {
      status: false,
    },
  },
  f3: {
    1: {
      status: false,
    },
    2: {
      status: false,
    },
    3: {
      status: false,
    },
    4: {
      status: false,
    },
    5: {
      status: false,
    },
    6: {
      status: false,
    },
    7: {
      status: false,
    },
    8: {
      status: false,
    },
    9: {
      status: false,
    },
    10: {
      status: false,
    },
    11: {
      status: false,
    },
    12: {
      status: false,
    },
    13: {
      status: false,
    },
    14: {
      status: false,
    },
    15: {
      status: false,
    },
    16: {
      status: false,
    },
  },
  g3: {
    1: {
      status: false,
    },
    2: {
      status: false,
    },
    3: {
      status: false,
    },
    4: {
      status: false,
    },
    5: {
      status: false,
    },
    6: {
      status: false,
    },
    7: {
      status: false,
    },
    8: {
      status: false,
    },
    9: {
      status: false,
    },
    10: {
      status: false,
    },
    11: {
      status: false,
    },
    12: {
      status: false,
    },
    13: {
      status: false,
    },
    14: {
      status: false,
    },
    15: {
      status: false,
    },
    16: {
      status: false,
    },
  },
  a3: {
    1: {
      status: false,
    },
    2: {
      status: false,
    },
    3: {
      status: false,
    },
    4: {
      status: false,
    },
    5: {
      status: false,
    },
    6: {
      status: false,
    },
    7: {
      status: false,
    },
    8: {
      status: false,
    },
    9: {
      status: false,
    },
    10: {
      status: false,
    },
    11: {
      status: false,
    },
    12: {
      status: false,
    },
    13: {
      status: false,
    },
    14: {
      status: false,
    },
    15: {
      status: false,
    },
    16: {
      status: false,
    },
  },
  b3: {
    1: {
      status: false,
    },
    2: {
      status: false,
    },
    3: {
      status: false,
    },
    4: {
      status: false,
    },
    5: {
      status: false,
    },
    6: {
      status: false,
    },
    7: {
      status: false,
    },
    8: {
      status: false,
    },
    9: {
      status: false,
    },
    10: {
      status: false,
    },
    11: {
      status: false,
    },
    12: {
      status: false,
    },
    13: {
      status: false,
    },
    14: {
      status: false,
    },
    15: {
      status: false,
    },
    16: {
      status: false,
    },
  },
  c4: {
    1: {
      status: false,
    },
    2: {
      status: false,
    },
    3: {
      status: false,
    },
    4: {
      status: false,
    },
    5: {
      status: false,
    },
    6: {
      status: false,
    },
    7: {
      status: false,
    },
    8: {
      status: false,
    },
    9: {
      status: false,
    },
    10: {
      status: false,
    },
    11: {
      status: false,
    },
    12: {
      status: false,
    },
    13: {
      status: false,
    },
    14: {
      status: false,
    },
    15: {
      status: false,
    },
    16: {
      status: false,
    },
  },
  d4: {
    1: {
      status: false,
    },
    2: {
      status: false,
    },
    3: {
      status: false,
    },
    4: {
      status: false,
    },
    5: {
      status: false,
    },
    6: {
      status: false,
    },
    7: {
      status: false,
    },
    8: {
      status: false,
    },
    9: {
      status: false,
    },
    10: {
      status: false,
    },
    11: {
      status: false,
    },
    12: {
      status: false,
    },
    13: {
      status: false,
    },
    14: {
      status: false,
    },
    15: {
      status: false,
    },
    16: {
      status: false,
    },
  },


};

export default initialState;
