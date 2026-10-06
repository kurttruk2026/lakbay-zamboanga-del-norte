export const categories = [
  "All",
  "Beaches",
  "Nature",
  "Historical",
  "Adventure",
  "Cultural",
  "Family",
];

export const sources = {
  dapitan: {
    label: "Dapitan City tourism",
    url: "https://dapitancity.gov.ph/tourismactivities/",
  },
  heritage: {
    label: "Dapitan City heritage landmarks",
    url: "https://dapitancity.gov.ph/tourism/",
  },
  shrine: {
    label: "National Historical Commission of the Philippines",
    url: "https://philhistoricsites.nhcp.gov.ph/registry_database/rizal-shrine-dapitan/",
  },
  dipolog: {
    label: "DILG Region IX · Dipolog",
    url: "https://region9.dilg.gov.ph/dipolog/",
  },
  park: {
    label: "Dipolog City tourism office",
    url: "https://tourism.dipologcity.gov.ph/",
  },
  fantasyland: {
    label: "Glorious Fantasyland · official park website",
    url: "https://gloriousfantasyland.com/theme-park/",
  },
  weather: {
    label: "PAGASA · Mindanao climatological publication",
    url: "https://pubfiles.pagasa.dost.gov.ph/pagasaweb/files/cad/CLIMATOLOGICAL%20PUBLICATIONS/Mindanao%20PRSD.pdf",
  },
};

export const destinations = [
  {
    id: 1,
    slug: "dakak-beach",
    name: "Dakak Beach",
    location: "Dapitan City",
    area: "Taguilon, Dapitan City",
    category: "Beach",
    filters: ["Beaches", "Family"],
    shortDescription:
      "A sheltered stretch of white sand, blue water, and wonderfully unhurried days.",
    description:
      "Tucked into the coast of Barangay Taguilon, Dakak is one of Dapitan’s best-known beach destinations. Its sandy cove is part of Dakak Park and Beach Resort. Make room for a relaxed beach day, a little sea air, and a change of pace.",
    image: "/images/dakak.jpg",
    imageAlt: "The sandy cove and tropical coastline at Dakak Beach in Dapitan",
    highlights: [
      "Take a slow walk along the sandy shore",
      "Enjoy the coastal scenery and photograph the cove",
      "Ask the resort about available water activities",
    ],
    travelTips: [
      "Confirm day-entry arrangements and current fees with the resort.",
      "Bring sun protection, a refillable water bottle, and swimwear.",
      "Follow posted swimming guidance and staff advice.",
    ],
    bestFor: ["Beach lovers", "Couples", "Family outings"],
    source: sources.dapitan,
    featured: true,
  },
  {
    id: 2,
    slug: "rizal-shrine",
    name: "Rizal Shrine",
    location: "Dapitan City",
    area: "Talisay, Dapitan City",
    category: "Historical",
    filters: ["Historical", "Cultural"],
    shortDescription:
      "Walk through a quieter chapter of history in the place Rizal called home.",
    description:
      "This national shrine in Talisay preserves the memory of Dr. José Rizal’s life in Dapitan. The leafy grounds and recreated structures offer a setting for learning about his work as a teacher, physician, and community builder during his exile from 1892 to 1896.",
    image: "/images/rizal.jpg",
    imageAlt:
      "A statue of José Rizal among trees at the Rizal Shrine in Dapitan",
    highlights: [
      "Explore the memorial grounds at a gentle pace",
      "Discover stories of Rizal’s life beyond his writings",
      "Visit the museum when open and read the historical markers",
    ],
    travelTips: [
      "Check museum hours with the site before you visit.",
      "Respect heritage structures and follow photography rules.",
      "Wear comfortable shoes and allow time to read the exhibits.",
    ],
    bestFor: ["History enthusiasts", "Students", "Slow travelers"],
    source: sources.shrine,
    featured: true,
  },
  {
    id: 3,
    slug: "sungkilaw-falls",
    name: "Sungkilaw Falls",
    location: "Dipolog City",
    area: "Diwan, Dipolog City",
    category: "Nature",
    filters: ["Nature", "Adventure"],
    shortDescription:
      "Follow the call of falling water into Dipolog’s lush, green countryside.",
    description:
      "Sungkilaw Falls is a natural attraction in the upland countryside of Dipolog. A visit is a chance to leave the city behind and enjoy a forest setting and the sound of a waterfall. Arrange local guidance and check access conditions before heading out.",
    image: "/images/waterfall.jpg",
    imageAlt:
      "A Philippine waterfall in lush vegetation, used as an illustrative nature photograph",
    imageNote: "Illustrative Philippine waterfall · not Sungkilaw Falls",
    highlights: [
      "Enjoy the waterfall scenery from a suitable viewing area",
      "Look for small details in the surrounding vegetation",
      "Make the countryside journey part of your day",
    ],
    travelTips: [
      "Confirm access, trail conditions, and a return ride in advance.",
      "Wear shoes with good grip; steps and rocks may be slippery.",
      "Avoid the falls in heavy rain and follow local advice about water access.",
    ],
    bestFor: ["Nature lovers", "Outdoor explorers", "Photographers"],
    source: sources.dipolog,
    featured: true,
  },
  {
    id: 4,
    slug: "aliguay-island",
    name: "Aliguay Island",
    location: "Dapitan City",
    area: "Off the coast of Dapitan City",
    category: "Beach",
    filters: ["Beaches", "Adventure", "Nature"],
    shortDescription:
      "An island escape for open horizons, sea breezes, and a slower rhythm.",
    description:
      "Aliguay is an island barangay of Dapitan, known for its coastal scenery and nearby dive sites. Plan your visit with an established local operator, leaving time to enjoy the shore and the feeling of being a little farther from the everyday.",
    image: "/images/aliguay.jpg",
    imageAlt: "Sea and sunset seen from Aliguay Island",
    highlights: [
      "Spend time beside the sea",
      "Photograph the island’s coastline",
      "Ask a qualified operator about suitable snorkeling or diving trips",
    ],
    travelTips: [
      "Arrange boat transport and confirm the return plan before departure.",
      "Check sea conditions; crossings depend on weather.",
      "Use a life jacket and never touch or stand on coral.",
    ],
    bestFor: ["Island explorers", "Ocean lovers", "Small groups"],
    source: sources.dapitan,
    featured: true,
  },
  {
    id: 5,
    slug: "glorias-fantasyland",
    name: "Gloria’s Fantasyland",
    location: "Dapitan City",
    area: "Gloria de Dapitan complex, Dapitan City",
    category: "Family Attraction",
    filters: ["Family", "Adventure"],
    shortDescription:
      "Make room for bright lights, shared laughs, and a little family fun.",
    description:
      "Known today as Glorious Fantasyland, this theme park in Dapitan brings rides and entertainment into your travel itinerary. It makes a lively change of pace after a day of heritage stops or coastal exploring. Check the park’s official announcements for current attractions and opening arrangements.",
    image: "/images/family.jpg",
    imageAlt:
      "An amusement ride in the Philippines, used as an illustrative family travel photograph",
    imageNote: "Illustrative Philippine amusement park · not Fantasyland",
    highlights: [
      "Explore the rides that suit your group",
      "Enjoy a playful evening together",
      "Check which shows or entertainment are available on your date",
    ],
    travelTips: [
      "Check current operating days, tickets, and show schedules directly.",
      "Follow age, height, and health restrictions for each ride.",
      "Choose a meeting point when visiting with a group.",
    ],
    bestFor: ["Families", "Friends", "The young at heart"],
    source: sources.fantasyland,
    featured: true,
  },
  {
    id: 6,
    slug: "dipolog-boulevard",
    name: "Dipolog Boulevard",
    location: "Dipolog City",
    area: "Dipolog City waterfront",
    category: "Cultural",
    filters: ["Cultural", "Family"],
    shortDescription:
      "Sea air, evening strolls, and a glimpse of everyday life by the waterfront.",
    description:
      "Dipolog’s waterfront boulevard is a place to walk, pause, and watch the city settle into its evening rhythm. Leave a little time in your itinerary for this simple pleasure: a stroll beside the sea, with the sky changing overhead.",
    image: "/images/boulevard.jpg",
    imageAlt: "The waterfront esplanade along Dipolog Boulevard",
    highlights: [
      "Walk along the waterfront",
      "Watch the evening sky when the weather is clear",
      "Explore nearby places to eat and sample local flavors",
    ],
    travelTips: [
      "Bring a hat and water for daytime walks.",
      "Keep shared paths clear for walkers and joggers.",
      "Use bins or carry your litter with you.",
    ],
    bestFor: ["Evening walks", "Families", "Everyday discoveries"],
    source: sources.dipolog,
    featured: true,
  },
  {
    id: 7,
    slug: "linabo-peak",
    name: "Linabo Peak",
    location: "Dipolog City",
    area: "Lugdungan, Dipolog City",
    category: "Adventure",
    filters: ["Adventure", "Nature"],
    shortDescription:
      "Take the steps, find your own pace, and make the climb part of the memory.",
    description:
      "Linabo Peak is associated with Dipolog’s well-known 3,003-step climb. It is a destination for visitors who enjoy an active outing, with a route that encourages you to slow down, take breaks, and appreciate the green surroundings.",
    image: "/images/linabo.jpg",
    imageAlt: "The steps and entrance leading toward Linabo Peak",
    highlights: [
      "Challenge yourself on the stepped route",
      "Enjoy a quieter outdoor morning",
      "Look for a rewarding perspective along the climb",
    ],
    travelTips: [
      "Start early and carry enough drinking water.",
      "Choose a pace suited to your fitness and turn back when needed.",
      "Check the weather and current trail access before setting out.",
    ],
    bestFor: ["Active travelers", "Hikers", "Nature lovers"],
    source: sources.dipolog,
  },
  {
    id: 8,
    slug: "st-james-church",
    name: "St. James the Greater Church",
    location: "Dapitan City",
    area: "Dapitan City center",
    category: "Cultural",
    filters: ["Cultural", "Historical"],
    shortDescription:
      "A place of faith and memory in the heart of historic Dapitan.",
    description:
      "St. James the Greater Church stands beside Dapitan’s historic town center, across from the Relief Map of Mindanao. This active place of worship is also part of the city’s Rizal story. Combine a respectful visit with a walk around the plaza.",
    image: "/images/church.jpg",
    imageAlt: "St. James the Greater Church in Dapitan City",
    highlights: [
      "Appreciate the church architecture",
      "Read the historical markers",
      "Continue your walk to the nearby town plaza",
    ],
    travelTips: [
      "Dress respectfully and keep your voice low.",
      "Avoid interrupting services and ask before taking interior photos.",
      "Check visiting access around worship times.",
    ],
    bestFor: ["Heritage walks", "Architecture lovers", "Cultural visits"],
    source: sources.heritage,
  },
  {
    id: 9,
    slug: "dapitan-city-plaza",
    name: "Dapitan City Plaza",
    location: "Dapitan City",
    area: "Historic town center, Dapitan City",
    category: "Historical",
    filters: ["Historical", "Cultural", "Family"],
    shortDescription:
      "A leafy town square where a walk becomes a small history lesson.",
    description:
      "Dapitan’s town plaza is connected with Rizal’s efforts to improve the town during his exile. The nearby Relief Map of Mindanao is a distinctive stop on a heritage walk. Take your time with the markers and enjoy the open-air setting.",
    image: "/images/plaza.jpg",
    imageAlt: "The Relief Map of Mindanao beside the historic Dapitan plaza",
    highlights: [
      "See the Relief Map of Mindanao",
      "Stroll around the town square",
      "Pair your visit with St. James the Greater Church",
    ],
    travelTips: [
      "Keep off the relief map and protected structures.",
      "Bring an umbrella for sun or passing showers.",
      "Be mindful of people using the plaza as their everyday public space.",
    ],
    bestFor: ["Students", "Heritage walks", "Families"],
    source: sources.heritage,
  },
  {
    id: 10,
    slug: "cogon-ecotourism-park",
    name: "Cogon Ecotourism Park",
    location: "Dipolog City",
    area: "Cogon, Dipolog City",
    category: "Nature",
    filters: ["Nature", "Adventure"],
    shortDescription:
      "Trade the bustle for trees, fresh air, and a slower kind of discovery.",
    description:
      "Cogon Ecotourism Park is a forest destination in Dipolog’s countryside. Let a visit be an opportunity to notice the natural surroundings and learn about caring for them. Contact the city tourism office for the latest access information and available guided activities.",
    image: "/images/forest.jpg",
    imageAlt:
      "A forest landscape in the Philippines, used as an illustrative nature photograph",
    imageNote: "Illustrative Philippine forest · not Cogon Park",
    highlights: [
      "Enjoy a walk in a green setting where access is permitted",
      "Photograph plants and forest textures",
      "Ask about local conservation and guided visits",
    ],
    travelTips: [
      "Confirm opening arrangements and local guide availability.",
      "Stay on designated paths and leave plants undisturbed.",
      "Arrange your return transport before leaving the city.",
    ],
    bestFor: ["Nature lovers", "Quiet escapes", "Learning outdoors"],
    source: sources.park,
  },
];

export const experiences = [
  {
    name: "Beaches & Islands",
    category: "Beaches",
    icon: "waves",
    image: "/images/dakak.jpg",
    description: "A little saltwater for the soul.",
    alt: "The tropical coast at Dakak Beach",
  },
  {
    name: "Nature & Waterfalls",
    category: "Nature",
    icon: "trees",
    image: "/images/waterfall.jpg",
    description: "Find your moment in the green.",
    alt: "Illustrative Philippine waterfall",
    note: "Illustrative photo",
  },
  {
    name: "History & Heritage",
    category: "Historical",
    icon: "landmark",
    image: "/images/rizal.jpg",
    description: "Walk where the stories began.",
    alt: "A structure at Dapitan’s Rizal Shrine",
  },
  {
    name: "Adventure",
    category: "Adventure",
    icon: "mountain",
    image: "/images/linabo.jpg",
    description: "Take the path that calls to you.",
    alt: "Steps leading to Linabo Peak",
  },
  {
    name: "Family Trips",
    category: "Family",
    icon: "sun",
    image: "/images/boulevard.jpg",
    description: "Make memories, together.",
    alt: "Dipolog’s waterfront promenade",
  },
];
