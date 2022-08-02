export const freeWeights = [
  {
    "equipment": "dumbbell",
    "added": false,
    'icon': require('../../assets/images/dumbbell.jpg')
  },
  {
    "equipment": "barbell",
    "added": false,
    'icon': require('../../assets/images/barbell.png') 
  },
  {
    "equipment": "ez barbell",
    "added": false,
    'icon': require('../../assets/images/ezbarbell.jpg')
  },
  {
    "equipment": "olympic barbell",
    "added": false,
    'icon': require('../../assets/images/olympicbarbell.jpg')
  },
  {
    "equipment": "kettlebell",
    "added": false,
    'icon': require('../../assets/images/kettlebell.jpg')
  },
  {
    "equipment": "trap bar",
    "added": false,
    'icon': require('../../assets/images/trapbar.jpg')
  },
  {
    "equipment": "medicine ball",
    "added": false,
    'icon': require('../../assets/images/medicineball.jpg')
  }
];


export const machines = [
  {
    "equipment": "elliptical machine",
    'icon': require('../../assets/images/ellipticalmachine.jpg')
  },
  {
    "equipment": "cable",
    'icon': require('../../assets/images/cable.jpg')
  },
  {
    "equipment": "stepmill machine",
    'icon': require('../../assets/images/stepmill.jpg')
  },
  {
    "equipment": "leverage machine",
    'icon': require('../../assets/images/leveragemachine.jpg')
  },
  {
    "equipment": "skierg machine",
    'icon': require('../../assets/images/skierg.jpg')
  },
  {
    "equipment": "sled machine",
    'icon': require('../../assets/images/sledmachine.jpg')
  },
  {
    "equipment": "smith machine",
    'icon': require('../../assets/images/smithmachine.jpg')
  },
  {
    "equipment": "stationary bike",
    'icon': require('../../assets/images/stationarybike.jpg')
  },
  {
    "equipment": "upper body ergometer",
    'icon': require('../../assets/images/upperbodyergometer.jpg')
  }
];


export const bandsAndMore = [
  {
    "equipment": "band",
    'icon': require('../../assets/images/band.jpg')
  },
  {
    "equipment": "bosu ball",
    'icon': require('../../assets/images/bosuball.jpg')
  },
  {
    "equipment": "rope",
    'icon': require('../../assets/images/rope.jpg')
  },
  {
    "equipment": "tire",
    'icon': require('../../assets/images/tire.jpg')
  },
  {
    "equipment": "stability ball",
    'icon': require('../../assets/images/stabilityball.jpg')
  },
  {
    "equipment": "wheel roller",
    'icon': require('../../assets/images/wheelroller.jpg')
  },
  ,
  {
    "equipment": "roller",
    'icon': require('../../assets/images/roller.jpg')
  },
  {
    "equipment": "resistance band",
    'icon': require('../../assets/images/resistancebar.jpg')
  },
  {
    "equipment": "hammer",
    'icon': require('../../assets/images/hammer.jpg')
  },
  {
    "equipment": "assisted",
    'icon': require('../../assets/images/assisted.png')
  },
  {
    "equipment": "weighted",
    'icon': require('../../assets/images/weighted.jpg')
  }
];

export const tabs = [
  {
    text: 'FREE WEIGHTS',
    selected: true,
    childElements: freeWeights
  },
  {
    text: 'MACHINES',
    selected: false,
    childElements: machines,
  },
  {
    text: 'BANDS & MORE',
    selected: false,
    childElements: bandsAndMore
  }
]