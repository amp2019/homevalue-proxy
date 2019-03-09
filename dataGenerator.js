module.exports = {
  generateRandomData
};

const faker = require('faker');

let numberWithCommas = (num) => {
  num = num.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(num)) {
    num = num.replace(pattern, "$1,$2");
  }
  return num;
};
function generateRandomData(userContext, events, done) {
  let i = 10000003
  // generate data with faker:
  _id = Math.floor(i * Math.random()), 
  zestimationPrice = numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000})); 
  startPriceRange = numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000}));
  endPriceRange = numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000}));
  thirtyDayPriceChange = numberWithCommas(faker.random.number({'min': 15000, 'max': 50000}));
  oneYearForcast = numberWithCommas(faker.random.number({'min': 500000, 'max': (500000 + 100000)}));
  propertyLastSalePrice = numberWithCommas(faker.random.number({'min': (500000 - 100000), 'max': (500000)})); 
  propertLastSaleDate = `${faker.random.number({'min': 0, 'max': 12})}/${faker.random.number({'min': 0, 'max': 30})}/${faker.random.number({'min': 2010, 'max': 2019})}`; 
  comparableHomePrice = numberWithCommas(faker.random.number({'min': (500000 - 100000), 'max': (500000 + 100000)})); 
  marketAppreciationPrice = numberWithCommas(faker.random.number({'min': (500000 - 200000), 'max': (500000)}));
  localSalesAvg = numberWithCommas(faker.random.number({'min': (500000 - 100000), 'max': (500000 + 100000)}));
  sellDate = `${faker.random.number({'min': 0, 'max': 12})}/${faker.random.number({'min': 0, 'max': 30})}/${faker.random.number({'min': 2010, 'max': 2019})}`;
  sellPrice = numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000}));
  beds = faker.random.number({'min': 2, 'max': 6});
  baths = faker.random.number({'min': 2, 'max': 4});
  sqft = numberWithCommas(faker.random.number({'min': 1000, 'max': 3500})),
  streetAddress = faker.address.streetAddress();
  priceSqft = numberWithCommas(faker.random.number({'min': 1200, 'max': 2500})), 
  saleToList = faker.random.number({'min': 91, 'max': 105});
  url = `https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/large${i}.jpg`;


  // add variables to virtual user's context:

  userContext.vars._id = _id;
  userContext.vars.zestimationPrice = zestimationPrice;
  userContext.vars.startPriceRange = startPriceRange;userContext.vars.endPriceRange = endPriceRange;
  userContext.vars.thirtyDayPriceChange = thirtyDayPriceChange;
  userContext.vars.oneYearForcast = oneYearForcast;
  userContext.vars.propertyLastSalePrice = propertyLastSalePrice;
  userContext.vars.propertLastSaleDate = propertLastSaleDate;
  userContext.vars.comparableHomePrice = comparableHomePrice;
  userContext.vars.marketAppreciationPrice = marketAppreciationPrice;
  userContext.vars.localSalesAvg = localSalesAvg;
  userContext.vars.sellDate = sellDate;
  userContext.vars.beds = beds;
  userContext.vars.baths = baths;
  userContext.vars.sqft = sqft;
  userContext.vars.streetAddress = streetAddress;
  userContext.vars.saleToList = saleToList;
  userContext.vars.url = url;

  // continue with executing the scenario:
  return done();
}