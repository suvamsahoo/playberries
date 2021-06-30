let bcrypt = require("bcryptjs");

const data = {
  users: [
    {
      name: "suvam",
      email: "suvamadmin@gmail.com",
      password: bcrypt.hashSync("suvamadmin1234", 8),
      isAdmin: true,
    },
    {
      name: "sahoo",
      email: "sahoo@gmail.com",
      password: bcrypt.hashSync("sahoo1234", 8),
      isAdmin: false,
    },
  ],

  AllMenus: [
    {
      _id: "1",
      name: "Birthday Party",
      image: "/images/Menus/BirthdayParty.webp",
      description:
        "Some parties are held in honor of a specific person, day, or event, such as a birthday party, a Super Bowl party, or a St. Patrick's Day party. Parties of this kind are often called celebrations. A party is not necessarily a private occasion.",
    },
    {
      _id: "2",
      name: "Wedding Ceremony",
      image: "/images/Menus/WeddingCeremony.webp",
      description:
        "A wedding is a ceremony where two people are united in marriage. Most wedding ceremonies involve an exchange of marriage vows by a couple, presentation of a gift (offering, rings, symbolic item, flowers, money, dress), and a public proclamation of marriage by an authority figure or celebrant.",
    },
    {
      _id: "3",
      name: "Outdoor Concert",
      image: "/images/Menus/OutdoorConcert.jpg",
      description:
        "An open-air concert is a concert taking place outside a hall in the open air. An open-air concert is a concert taking place outside a hall in the open air",
    },
    {
      _id: "4",
      name: "Seminar",
      image: "/images/Menus/Seminar.webp",
      description:
        "A seminar may be defined as a gathering of people for the purpose of discussing a stated topic. Such gatherings are usually interactive sessions where the participants engage in discussions about the delineated topic.",
    },
    {
      _id: "5",
      name: "College Event",
      image: "/images/Menus/CollegeEvent.webp",
      description:
        "The good news is, there are a few brilliant strategies out there that can help you draw massive crowds. Check out a few of the tactics we’ve picked up from our years of booking college entertainment.",
    },
    {
      _id: "6",
      name: "Fare Well",
      image: "/images/Menus/FareWell.jpg",
      description:
        "Farewell is a time for closing of one cycle. An emotional period, one has to be sensitive but not too sentimental while sending invitations for farewell party. The occasion could be retirement, resignation, a family member going abroad for further studies or a group of students giving a party to their seniors.",
    },

    {
      _id: "7",
      name: "Destination",
      image: "/images/Menus/Destination.jpg",
      description:
        "A great party - sometimes referred to as a 'destination party' is the type of party that involves going someplace for your party activities, rather than having your party at home. Often priced at a flat fee, packages can include decorations, cake, servers, someone to be in charge of your party and invitations.",
    },
    {
      _id: "8",
      name: "Ring Ceremony",
      image: "/images/Menus/RingCeremony.jpg",
      description:
        "A very special moment for the bride and groom as this small ring signifies one ring to rule the world with the support of each other. The Engagement Ceremony is a pre wedding ceremony and important part of wedding in many cultures.",
    },
    {
      _id: "9",
      name: "Highway",
      image: "/images/Menus/Highway.jpg",
      description:
        "An open way, usually surfaced with tarmac or concrete, providing passage from one place to another.",
    },
    {
      _id: "10",
      name: "Bachelor Party",
      image: "/images/Menus/BachelorParty.jpg",
      description:
        "Bachelor party signifies the last day of being single and in this day we celebrate our bachelor life's last day and enjoy with all our hearts and joy as from the next day we are going to be a part of a new family. Bachelor party comes once in a lifetime and we make sure to celebrate it in such a way that it is worth.",
    },
    {
      _id: "11",
      name: "Reunion",
      image: "/images/Menus/Reunion.jpg",
      description:
        "A class reunion is a meeting of all the former classmates, often organized at or near their former school or college by one or more class members. Participants often nostalgically reminisce about their old school days or fondly remember their school pranks.",
    },

    {
      _id: "12",
      name: "Festival",
      image: "/images/Menus/Festival.jpg",
      description:
        "A festival is an event ordinarily celebrated by a community and centering on some characteristic aspect of that community and its religion or cultures. It is often marked as a local or national holiday, mela, or eid. Food is such a vital resource that many festivals are associated with harvest time.",
    },
    {
      _id: "13",
      name: "Anniversary Party",
      image: "/images/Menus/AnniversaryParty.jpg",
      description:
        "An anniversary party is the perfect way to celebrate a couple's time spent together with family & friends. Whether you're organising your own or a friend's anniversary party, it can sound a little daunting, but it really doesn't need to be.",
    },

    {
      _id: "14",
      name: "Breakup party",
      image: "/images/Menus/BreakupParty.jpg",
      description:
        "When somebody (usually a girl or gay guy) has a breakup and they have a slumber party with one or a few close friends where they eat tonnes of icecream and fatty foods and bitch about their ex's or let out their emotions.",
    },
  ],

  // SpecialServices: [
  //   {
  //     _id: "1",
  //     name: "Bachelor Party",
  //     image: "/images/Menus/BachelorParty.jpg",
  //     description:
  //       "When somebody (usually a girl or gay guy) has a breakup and they have a slumber party with one or a few close friends where they eat tonnes of icecream and fatty foods and bitch about their ex's or let out their emotions.",
  //     h2_TitleAnimation: "fade-right",
  //     h2_TitleAnimation_delay: 500,
  //     P_ParagraphAnimation_delay: 500,
  //   },
  //   {
  //     _id: "2",
  //     name: "Highway",
  //     image: "/images/Menus/Highway.jpg",
  //     description:
  //       "When somebody (usually a girl or gay guy) has a breakup and they have a slumber party with one or a few close friends where they eat tonnes of icecream and fatty foods and bitch about their ex's or let out their emotions.",
  //       h2_TitleAnimation: "fade-right",
  //       h2_TitleAnimation_delay: 500,
  //     },
  //   {
  //     _id: "3",
  //     name: "Breakup party",
  //     image: "/images/Menus/BreakupParty.jpg",
  //     description:
  //       "When somebody (usually a girl or gay guy) has a breakup and they have a slumber party with one or a few close friends where they eat tonnes of icecream and fatty foods and bitch about their ex's or let out their emotions.",
  //       h2_TitleAnimation: "fade-right",
  //       h2_TitleAnimation_delay: 500,
  //     },
  // ],
  Veg: [
    {
      // _id: "1",
      productNo: 1,
      name: "Grilled Chicken",
      price: 120,
      image: "/images/Veg/Veg1.jpg",
      countInStock: 10,
      category: "Non-Veg",
    },
    {
      // _id: "2",
      productNo: 2,
      name: "Paneer Makhani",
      price: 249,
      image: "/images/Veg/Veg2.jpg",
      countInStock: 10,
      category: "Veg",
    },
    {
      // _id: "3",
      productNo: 3,
      name: "Butter chicken",
      price: 280,
      image: "/images/Veg/Veg3.jpg",
      countInStock: 10,
      category: "Non-Veg",
    },
    {
      // _id: "4",
      productNo: 4,
      name: "Chicken Noodle",
      price: 195,
      image: "/images/Veg/Veg4.jpg",
      countInStock: 10,
      category: "Non-Veg",
    },
    {
      // _id: "1",
      productNo: 5,
      name: "Mushroom Kofta",
      price: 920,
      image: "/images/Veg/Veg3.jpg",
      countInStock: 10,
      category: "Veg",
    },
    {
      // _id: "5",
      productNo: 6,
      name: "Fish Fingers",
      price: 120,
      image: "/images/Veg/Veg1.jpg",
      countInStock: 10,
      category: "Non-Veg",
    },
    {
      // _id: "6",
      productNo: 7,
      name: "Mutton Korma",
      price: 249,
      image: "/images/Veg/Veg2.jpg",
      countInStock: 10,
      category: "Non-Veg",
    },
    {
      // _id: "1",
      productNo: 8,
      name: "Masala Channa",
      price: 999,
      image: "/images/Veg/Veg4.jpg",
      countInStock: 10,
      category: "Veg",
    },
    {
      // _id: "7",
      productNo: 9,
      name: "Lemon Chicken",
      price: 280,
      image: "/images/Veg/Veg3.jpg",
      countInStock: 10,
      category: "Non-Veg",
    },
    {
      // _id: "1",
      productNo: 10,
      name: "Mutton Kuzhambu",
      price: 520,
      image: "/images/Veg/Veg4.jpg",
      countInStock: 10,
      category: "Non-Veg",
    },
    {
      // _id: "8",
      productNo: 11,
      name: "Chicken 65",
      price: 195,
      image: "/images/Veg/Veg4.jpg",
      countInStock: 0,
      category: "Non-Veg",
    },
    {
      // _id: "1",
      productNo: 12,
      name: "Dahi Kebab",
      price: 890,
      image: "/images/Veg/Veg2.jpg",
      countInStock: 10,
      category: "Veg",
    },
  ],
};

module.exports = data;