/*  DashBoard ClientAdmin  */
export const option = [
  {
    id: `Option-${1}`,
    option: 1,
    colors: [
      { id: `colorUser-${1}`, colorName: "black" },
      { id: `colorUser-${2}`, colorName: "white" },
      { id: `colorUser-${3}`, colorName: "red" },
    ],
    typography: "Arial",
  },
  {
    id: `Option-${2}`,
    option: 2,
    colors: [
      { id: `colorUser-${1}`, colorName: "green" },
      { id: `colorUser-${2}`, colorName: "blue" },
      { id: `colorUser-${3}`, colorName: "orange" },
    ],
    typography: "Comic Sans",
  },
  {
    id: `Option-${3}`,
    option: 3,
    colors: [
      { id: `colorUser-${1}`, colorName: "violet" },
      { id: `colorUser-${2}`, colorName: "brown" },
      { id: `colorUser-${3}`, colorName: "yellow" },
    ],
    typography: "Impact",
  },
];

export const optionDesing = [
  {
    id: `OptionDesing-${1}`,
    idClientAdmin: `clientAdmin-${1}`,
    options: [],
  },
];
export const ClientAdmin = [
  {
    id: `clientAdmin-${1}`,
    fullName: "Emanuel Manriquez",
    users: [],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj9KQjcyUZYwOtSYhKDNCdbzQ18458w7lMyg&usqp=CAU",
    optionsDesing: [],
    catalogue: [],
    email: "ema@ibm.com",
    password: "123456",
    permissions: "clientAdmin",
  },
  {
    id: `clientAdmin-${2}`,
    fullName: "Henry Carrillo",
    users: [],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzDh8eib8h1G8v-xH74vk6y3ptcfhi5HsCA&usqp=CAU",
    optionsDesing: [],
    catalogue: [],
    email: "henry@ibm.com",
    password: "123456",
    permissions: "clientAdmin",
  },
  {
    id: `clientAdmin-${3}`,
    fullName: "Ezequiel Irace",
    users: [],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrEAQFujK_KQRE5ghIYqumOGF6-4IQxQo81L43nA3bcFmLyRhRmvX7A915wA5X1qo04j8&usqp=CAU",
    optionsDesing: [],
    catalogue: [],
    email: "eze@ibm.com",
    password: "123456",
    permissions: "clientAdmin",
  },
];

export const Produtcs = [
  {
    id: 1,
    productName: "HP Gamming 24hz",
    description: "Esto es una description",
    category: ["Pantalla", "Gaming"],
    stocks: 5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShM-iOAwj0aeMjDJabYc9E3F0YBnJNmEQ19x6EO8KBpSo2PVLJPjeNxN_aKIqi_8M08k4&usqp=CAU",
    price: 250,
    rating: 4.5,
  },
  {
    id: 2,
    ProductName: "Dell Gamming 24hz",
    description: "Esto es una description",
    category: ["Pantalla", "Gaming"],
    stocks: 2,
    imageUrl: "https://m.media-amazon.com/images/I/71t5b4HJjwL._AC_SY450_.jpg",
    price: 250,
    rating: 4.5,
  },
  {
    id: 3,
    ProductName: "LG Gamming 24hz",
    description: "Esto es una description",
    category: ["Pantalla", "Gaming"],
    stocks: 8,
    imageUrl:
      "https://www.lg.com/us/images/monitors/md08003480/gallery/D-01.jpg",
    price: 250,
    rating: 4.5,
  },
  {
    id: 4,
    ProductName: "MacBook",
    description: "Esto es una description",
    category: ["Pantalla", "Gaming"],
    stocks: 5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt9GDJ0ZBNKinS9nuS-Fco2muae18ImJP_Ms8jM9M90038VZSZxJpvJXrNtgWztohEgyk&usqp=CAU",
    price: 250,
    rating: 4.5,
  },
];

/*  DashBoard ClientAdmin  */

/*  Admin  */

export const Admin = [
  {
    id: `Admin-${1}`,
    fullName: "UrbanBuy",
    clients: [],
    email: "urbanbuy8@gmail.com",
    password: "123456",
    permissions: "Admin",
  }
];

/*  Admin  */

/*  clients or User  */

export const user = [
    {
        id: `User-${1}`,
        fullName: "Ezequiel Irace",
        email: "test@ibm.com",
        password: "123456",
        permissions: "user",
        order: []
      },
]

export const order = [
    {
        id: `Order-${1}`,
        fullName: "Ezequiel Irace",
        status: "process",
        payment: false,
        permissions: "user",
        email: "test@ibm.com",
        cart: [],
        adrress: 'sanatiago,chile test dirrecion',
        total: 500
      },
]


/*  clients or User  */