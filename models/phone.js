'use strict';

class PhoneModel {

  constructor() {}

  getPhones() {
    return [{
        id: 1,
        image: 'https://store.storeimages.cdn-apple.com/4662/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-gray-select-2017?wid=470&hei=556&fmt=png-alpha&.v=1515602510330',
        name: 'iPhone X',
        description: 'Maecenas erat justo, suscipit sit amet purus mollis, egestas lacinia eros. Vestibulum pellentesque felis sed felis porttitor pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed mollis nisl ut turpis cursus laoreet. Sed nulla massa, vulputate id elit et, rutrum sagittis orci. Nunc in accumsan massa.',
        price: 900,
        color: 'black',
        size: '14.36x7.09x0.77'
      },
      {
        id: 2,
        image: 'https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/samsung-galaxy-s9-plus/lilac-purple/Samsung-Galaxy-S9-Plus-Lilac-Purple-2-3x.jpg',
        name: 'Samsung Galaxy S9',
        description: 'Maecenas erat justo, suscipit sit amet purus mollis, egestas lacinia eros. Vestibulum pellentesque felis sed felis porttitor pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed mollis nisl ut turpis cursus laoreet. Sed nulla massa, vulputate id elit et, rutrum sagittis orci. Nunc in accumsan massa.',
        price: 800,
        color: 'blue',
        size: '15.20x7.34x0.90'
      }
    ]
  }
}

module.exports = PhoneModel;