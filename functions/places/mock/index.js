const antwerp = require("./antwerp");
const chicago = require("./chicago");
const toronto = require("./toronto");
const san_francisco = require("./san_francisco");

module.exports.mocks = {
  "51.219448,4.402464": antwerp,
  "43.653225,-79.383186": toronto,
  "41.878113,-87.629799": chicago,
  "37.7749295,-122.4194155": san_francisco,
};

const mockImages = [
  "https://instagram.fdxb1-1.fna.fbcdn.net/v/t51.2885-15/269021427_1299122303901219_657724448107635224_n.jpg?stp=dst-jpg_e35_p750x750_sh0.08&_nc_ht=instagram.fdxb1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=4r3NOlG03BYAX-Znmqd&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=Mjc1NTg5MzQxNzI4NDU2OTY4NA%3D%3D.2-ccb7-4&oh=00_AT_DPgPrl9yRCsA_kfU7HLPGnHeZAqIOm175-Qbv3Stq_Q&oe=625033D5&_nc_sid=30a2ef",
  "https://instagram.fauh1-1.fna.fbcdn.net/v/t51.2885-15/271972139_344168024219958_6803758488759624005_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fauh1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=K3MZ9MlEsXEAX_PZ3dR&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=Mjc1NDA3NzM5MDAzNzc1NDc2NQ%3D%3D.2-ccb7-4&oh=00_AT_8EhmK_MLbYBPImo8IQwk5kncsz8iRLNsL9QRoIVj6GA&oe=625110D2&_nc_sid=30a2ef",
  "https://instagram.fauh1-1.fna.fbcdn.net/v/t51.2885-15/272443224_353386659645990_737227182702177959_n.jpg?stp=dst-jpg_e35_p750x750_sh0.08&_nc_ht=instagram.fauh1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=jwYXxsAt7_wAX9d2zlY&tn=kl-5kJrIIm-ShsZz&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=Mjc1ODMwOTg2Nzg0MTE1MTY1Mg%3D%3D.2-ccb7-4&oh=00_AT80yubJZ4aCaa93nvrxSThHxsI8VdjZq2M1OEYG__Tnpg&oe=62503E76&_nc_sid=30a2ef",
  "https://instagram.fauh1-1.fna.fbcdn.net/v/t51.2885-15/272669561_4210464815720869_5806766461563972032_n.jpg?stp=dst-jpg_e35_p750x750_sh0.08&_nc_ht=instagram.fauh1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=ic_zHYNYkicAX_R_nN-&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=Mjc1NzcxODM5MzczNjA1NjQ5OQ%3D%3D.2-ccb7-4&oh=00_AT9y3U3XvNWTAUsc_1VTWU7ZNAqQ1OOaNBiYqoE99O2F8Q&oe=6250B1E7&_nc_sid=30a2ef",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-pancakes-600x750.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/02/messy-pizza-on-a-black-table-600x400.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-ready-for-baking-600x400.jpg",
];

module.exports.addMockImage = (restaurant) => {
  const randomImage =
    mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
  restaurant.photos = [randomImage];
  return restaurant;
};
