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

export const Products = [
  {
    id: 1,
    productName: "HP Gamming 24hz",
    description: "El monitor del computador, también conocido como pantalla, muestra la información de tu equipo como imágenes y textos, que son generados gracias a una tarjeta de video que se encuentra en el interior de la torre del computador.",
    category: ["Pantalla", "Gaming"],
    stocks: 5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShM-iOAwj0aeMjDJabYc9E3F0YBnJNmEQ19x6EO8KBpSo2PVLJPjeNxN_aKIqi_8M08k4&usqp=CAU",
    price: 250,
    rating: 4.5,
  },
  {
    id: 2,
    productName: "Dell Gamming 24hz",
    description: "Esto es una description",
    category: ["Pantalla", "Gaming"],
    stocks: 2,
    imageUrl: "https://m.media-amazon.com/images/I/71t5b4HJjwL._AC_SY450_.jpg",
    price: 250,
    rating: 4.5,
  },
  {
    id: 3,
    productName: "LG Gamming 24hz",
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
    productName: "MacBook",
    description: "Esto es una description",
    category: ["Pantalla", "Gaming"],
    stocks: 5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt9GDJ0ZBNKinS9nuS-Fco2muae18ImJP_Ms8jM9M90038VZSZxJpvJXrNtgWztohEgyk&usqp=CAU",
    price: 250,
    rating: 4.5,
  },
];


export const categoryProducts = ['Pantalla', 'Mouse', 'Memoria', 'Procesador']
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
  },
];

/*  Admin  */

/*  clients or User  */

import avatar from '../src/assets/avatar.jpg'

export const User = [
    {
        id: `User-${1}`,
        fullName: "Ezequiel Irace",
        email: "test@ibm.com",
        password: "123456",
        permissions: "user",
        order: [],
        avatar: avatar
      },
      {
        id: `User-${2}`,
        fullName: "Maria Becerra",
        email: "MaBetest@ibm.com",
        password: "123456",
        permissions: "user",
        order: [],
        avatar: avatar
      },
      {
        id: `User-${3}`,
        fullName: "Soledad Acuña",
        email: "SoAtest@ibm.com",
        password: "123456",
        permissions: "user",
        order: [],
        avatar: avatar
      },
      {
        id: `User-${4}`,
        fullName: "Fernando Aguilar",
        email: "test@ibm.com",
        password: "123456",
        permissions: "user",
        order: [],
        avatar: avatar
      },
      {
        id: `User-${5}`,
        fullName: "Silvio Soldan",
        email: "SilSoltest@ibm.com",
        password: "123456",
        permissions: "user",
        order: [],
        avatar: avatar
      },
      {
        id: `User-${6}`,
        fullName: "Armando Paredes",
        email: "APtest@ibm.com",
        password: "123456",
        permissions: "user",
        order: [],
        avatar: avatar
      },
      {
        id: `User-${7}`,
        fullName: "Camilo Sexto",
        email: "CStest@ibm.com",
        password: "123456",
        permissions: "user",
        order: [],
        avatar: avatar
      },
      {
        id: `User-${8}`,
        fullName: "Soledad Pastoruti",
        email: "SPtest@ibm.com",
        password: "123456",
        permissions: "user",
        order: [],
        avatar: avatar
      },
      {
        id: `User-${9}`,
        fullName: "Claudia Tapia",
        email: "ClauTatest@ibm.com",
        password: "123456",
        permissions: "user",
        order: [],
        avatar: avatar
      },
      {
        id: `User-${10}`,
        fullName: "Mariano Martinez",
        email: "MMtest@ibm.com",
        password: "123456",
        permissions: "user",
        order: [],
        avatar: avatar
      },
      {
        id: `User-${11}`,
        fullName: "Cristiano Ronaldo",
        email: "CR7test@ibm.com",
        password: "123456",
        permissions: "user",
        order: [],
        avatar: avatar
      },
      {
        id: `User-${12}`,
        fullName: "Juan Roman Riquelme",
        email: "JRRtest@ibm.com",
        password: "123456",
        permissions: "user",
        order: [],
        avatar: avatar
      },
      {
        id: `User-${13}`,
        fullName: "Ezequiel Irace",
        email: "test@ibm.com",
        password: "123456",
        permissions: "user",
        order: [],
        avatar: avatar
      },
      {
        id: `User-${14}`,
        fullName: "Maria Becerra",
        email: "MaBetest@ibm.com",
        password: "123456",
        permissions: "user",
        order: [],
        avatar: avatar
      },
      {
        id: `User-${15}`,
        fullName: "Soledad Acuña",
        email: "SoAtest@ibm.com",
        password: "123456",
        permissions: "user",
        order: [],
        avatar: avatar
      },
      {
        id: `User-${16}`,
        fullName: "Fernando Aguilar",
        email: "test@ibm.com",
        password: "123456",
        permissions: "user",
        order: [],
        avatar: avatar
      },
      {
        id: `User-${17}`,
        fullName: "Silvio Soldan",
        email: "SilSoltest@ibm.com",
        password: "123456",
        permissions: "user",
        order: [],
        avatar: avatar
      },
      {
        id: `User-${18}`,
        fullName: "Armando Paredes",
        email: "APtest@ibm.com",
        password: "123456",
        permissions: "user",
        order: [],
        avatar: avatar
      },
      {
        id: `User-${19}`,
        fullName: "Camilo Sexto",
        email: "CStest@ibm.com",
        password: "123456",
        permissions: "user",
        order: [],
        avatar: avatar
      },
      {
        id: `User-${20}`,
        fullName: "Soledad Pastoruti",
        email: "SPtest@ibm.com",
        password: "123456",
        permissions: "user",
        order: [],
        avatar: avatar
      },
      {
        id: `User-${21}`,
        fullName: "Claudia Tapia",
        email: "ClauTatest@ibm.com",
        password: "123456",
        permissions: "user",
        order: [],
        avatar: avatar
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
    adrress: "sanatiago,chile test dirrecion",
    total: 500,
  },
  {
    id: `Order-${2}`,
    fullName: "Ezequiel Irace",
    status: "process",
    payment: false,
    permissions: "user",
    email: "test@ibm.com",
    cart: [],
    adrress: "sanatiago,chile test dirrecion",
    total: 600
  },
  {
      id: `Order-${1}`,
      fullName: "Ezequiel Irace",
      status: "process",
      payment: false,
      permissions: "user",
      email: "test@ibm.com",
      cart: [],
      adrress: "sanatiago,chile test dirrecion",
      total: 1600,
    },
    {
      id: `Order-${1}`,
      fullName: "Ezequiel Irace",
      status: "process",
      payment: false,
      permissions: "user",
      email: "test@ibm.com",
      cart: [],
      adrress: "sanatiago,chile test dirrecion",
      total: 560,
    }
  
];

/*  clients or User  */
