import productImg01 from "/images/couch4.jpg";
import productImg02 from "/images/couch5.jpg";
import productImg03 from "/images/couch6.jpg";

import productImg04 from "/images/couch7.jpg";
import productImg05 from "/images/couch8.jpg";
import productImg06 from "/images/chair4.png";
import productImg007 from "/images/chair5.jpg";

import productImg07 from "/images/chair9.webp";
import productImg08 from "/images/chair2.jpg";
import productImg09 from "/images/chair12.jpeg";
import productImg10 from "/images/chair6.webp";

import productImg11 from "/images/tvstand3.jpg";
import productImg12 from "/images/tvstand4.jpg";
import productImg13 from "/images/tvstand5.jpg";
import productImg14 from "/images/chair6.webp";

const products = [
  {
    id: "01",
    productName: "Stone and Beam Westview ",
    imgUrl: productImg01,
    category: "sofa",
    price: 5399.99,
    shortDesc:
      "A sophisticated modern design with added cushioned comfort thanks to laser-cut high density foam seat & cushions.",
    description:
      "The Stone and Beam Westview 2 Seater Couch is a chic and comfortable addition to any living space. Upholstered in luxurious fabric, it is available in dark grey with options for natural or dark beech wood legs. The sturdy frame is constructed from solid wood and particle board, while the seat features pocket coils and foam for optimal comfort. This elegant sofa combines modern design with durable construction, making it an ideal choice for contemporary homes.",
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "02",
    productName: "Rivet Bigelow Modern ",
    imgUrl: productImg02,
    category: "sofa",
    price: 6999.99,
    shortDesc:
      "A sophisticated modern design with added cushioned comfort thanks to laser-cut high density foam seat & cushions.",
    description:
      "The Rivet Bigelow Modern 2 Seater Couch is a chic and comfortable addition to any living space. Upholstered in luxurious fabric, it is available in dark grey with options for natural or dark beech wood legs. The sturdy frame is constructed from solid wood and particle board, while the seat features pocket coils and foam for optimal comfort. This elegant sofa combines modern design with durable construction, making it an ideal choice for contemporary homes.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    productName: "Amazon Brand Modern Sofa",
    imgUrl: productImg03,
    category: "sofa",
    price: 5999.99,
    shortDesc:
      "A sophisticated modern design with added cushioned comfort thanks to laser-cut high density foam seat & cushions.",
    description:
      "The Amazon Brand Modern 2 Seater Couch is a chic and comfortable addition to any living space. Upholstered in luxurious fabric, it is available in dark grey with options for natural or dark beech wood legs. The sturdy frame is constructed from solid wood and particle board, while the seat features pocket coils and foam for optimal comfort. This elegant sofa combines modern design with durable construction, making it an ideal choice for contemporary homes.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "26",
    productName: "Rivet Bigelow Modern ",
    imgUrl: productImg02,
    category: "sofa",
    price: 5399.99,
    shortDesc:
      "A sophisticated modern design with added cushioned comfort thanks to laser-cut high density foam seat & cushions.",
    description:
      "The Rivet Bigelow Modern 2 Seater Couch combines modern design with exceptional comfort, making it a stylish addition to any living space. Upholstered in luxurious fabric, it is available in cream, dark grey, and platinum. The couch features a sturdy frame made from plywood and solid pine, with durable and slimline legs. The seat construction includes webbing and foam for added comfort. Proudly made in South Africa, the Mateo Fabric 2 Seater offers both quality and style for contemporary interiors.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productName: "Fllufy Sheep Sofa",
    imgUrl: productImg04,
    category: "sofa",
    price: 6399.99,
    shortDesc:
      "A sophisticated modern design with added cushioned comfort thanks to laser-cut high density foam seat & cushions.",
    description:
      "The Fllufy Sheep Sofa is a versatile and stylish addition to any living space. Upholstered in durable and luxurious fabric, it is available in cream, dark grey, and platinum. This couch features a sturdy plywood and solid pine frame with low profile legs. The seat construction includes webbing and foam for comfort. Proudly made in South Africa, the Fllufy Sheep 3 Seater combines modern design with comfortable seating, making it perfect for contemporary interiors.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "05",
    productName: "Faux Velvet Sofa",
    imgUrl: productImg05,
    category: "sofa",
    price: 3499.99,
    shortDesc:
      "A sophisticated modern design with added cushioned comfort thanks to laser-cut high density foam seat & cushions.",
    description:
      "The Faux Velvet Sofa is a luxurious blend of mid-century sophistication, comfort and craftsmanship. Experience timeless style with its low profile, clean lines and metal legs, enriched by intricate welting and channel tufting details. The sturdy construction and pocket spring and foam seat create an indulgent and sturdy seating experience that will last.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "06",
    productName: "Fllufy Sheep Sofa",
    imgUrl: productImg06,
    category: "sofa",
    price: 4999.99,
    shortDesc:
      "Upgrade your living space with the Fllufy Sheep Sofa, a perfect blend of style and functionality",
    description:
      "The Fllufy Sheep Sofa effortlessly combines modern design with luxurious comfort. Upholstered in a premium fabric, it is available in rich Dark Grey and sleek Platinum, making it a versatile addition to any living space. With its clean lines and generously padded cushions, this sofa is perfect for relaxing in style. Proudly made in South Africa, it reflects quality craftsmanship",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "07",
    productName: "Paola Wing Chair",
    imgUrl: productImg07,
    category: "chair",
    price: 2999.99,
    shortDesc:
      "A sophisticated modern design with added cushioned comfort thanks to laser-cut high density foam seat & cushions.",
    description:
      "Indulge in unparalleled comfort with the Caterina Fabric 3 Seater Sofa, upholstered in luxurious corduroy fabric. This stylish sofa offers a contemporary aesthetic, featuring plush cushioning and broad armrests for maximum relaxation. The sumptuous corduroy texture adds a touch of sophistication, making it a perfect addition to any modern or eclectic living room. Whether you're lounging with a book or entertaining guests, the Caterina 3 Seater couch ensures a cosy and elegant seating experience.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "27",
    productName: "Modern Arm Sofa",
    imgUrl: productImg007,
    category: "sofa",
    price: 4399.99,
    shortDesc:
      "A sophisticated modern design with added cushioned comfort thanks to laser-cut high density foam seat & cushions.",
    description:
      "Indulge in unparalleled comfort with the Modern Arm Sofa, upholstered in luxurious corduroy fabric. This stylish sofa offers a contemporary aesthetic, featuring plush cushioning and broad armrests for maximum relaxation. The sumptuous corduroy texture adds a touch of sophistication, making it a perfect addition to any modern or eclectic living room. Whether you're lounging with a book or entertaining guests, the Modern Arm Sofa ensures a cosy and elegant seating experience.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "08",
    productName: "Baltsar Chair",
    imgUrl: productImg08,
    category: "chair",
    price: 1499.99,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "The Lina Fabric 3 Seater Couch is a luxurious blend of mid-century sophistication, comfort and craftsmanship. Experience timeless style with its low profile, clean lines and metal legs, enriched by intricate welting and channel tufting details. The sturdy construction and pocket spring and foam seat create an indulgent and sturdy seating experience that will last.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "09",
    productName: "DUKE Lounge Armchair",
    imgUrl: productImg09,
    category: "chair",
    price: 1999.99,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "25",
    productName: "Sakarias Armchair",
    imgUrl: productImg10,
    category: "chair",
    price: 2999.99,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "26",
    productName: "Red Tv Stand",
    imgUrl: productImg11,
    category: "stand",
    price: 1499.99,
    shortDesc:
      "A sophisticated modern design with added cushioned comfort thanks to laser-cut high density foam seat & cushions.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "27",
    productName: "Wooden Tv Stand",
    imgUrl: productImg12,
    category: "stand",
    price: 2799.99,
    shortDesc:
      "A sophisticated modern design with added cushioned comfort thanks to laser-cut high density foam seat & cushions.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "28",
    productName: "Modern Tv Stand",
    imgUrl: productImg13,
    category: "stand",
    price: 1999.99,
    shortDesc:
      "A sophisticated modern design with added cushioned comfort thanks to laser-cut high density foam seat & cushions.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "29",
    productName: "Modern Tv Stand",
    imgUrl: productImg13,
    category: "stand",
    price: 1999.99,
    shortDesc:
      "A sophisticated modern design with added cushioned comfort thanks to laser-cut high density foam seat & cushions.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
];

export default products;
