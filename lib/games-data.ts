export interface Game {
    id: number;
    title: string;
    description?: string;
    price: number;
    originalPrice: number;
    image: string;
    discount: number;
    category: string[];
    releaseDate: string;
    publisher: string;
    platform: string[];
    rating?: number;
    isNewRelease?: boolean;
  }
  
  export const gamesData: Game[] = [
    {
      id: 1,
      title: "Cyberpunk 2077: Phantom Liberty",
      description: "The massive expansion to the futuristic open-world RPG with a new spy-thriller adventure set in a new district of Night City.",
      price: 29.99,
      originalPrice: 59.99,
      image: "cyberpunk-2077.png",
      discount: 50,
      category: ["RPG", "Action", "Open World"],
      releaseDate: "2025-01-15",
      publisher: "CD Projekt RED",
      platform: ["PC", "PlayStation 5", "Xbox Series X/S"],
      rating: 4.5,
      isNewRelease: true
    },
    {
      id: 2,
      title: "Elden Ring: Shadow of the Erdtree",
      description: "The highly anticipated expansion to FromSoftware's masterpiece, featuring new areas, bosses, and weapons.",
      price: 39.99,
      originalPrice: 59.99,
      image: "/elden-ring.png",
      discount: 33,
      category: ["RPG", "Action", "Souls-like"],
      releaseDate: "2025-02-28",
      publisher: "Bandai Namco",
      platform: ["PC", "PlayStation 5", "Xbox Series X/S"],
      rating: 4.9,
      isNewRelease: true
    },
    {
      id: 3,
      title: "Red Dead Redemption 2",
      description: "An epic tale of life in America's unforgiving heartland. The game's vast and atmospheric world also provides the foundation for a brand new online multiplayer experience.",
      price: 24.99,
      originalPrice: 49.99,
      image: "/red-dead-redemption-2.png",
      discount: 50,
      category: ["Action", "Adventure", "Open World"],
      releaseDate: "2018-10-26",
      publisher: "Rockstar Games",
      platform: ["PC", "PlayStation 4", "Xbox One"],
      rating: 4.8
    },
    {
      id: 4,
      title: "Call of Duty: Modern Warfare III",
      description: "The sequel to 2022's blockbuster Modern Warfare II, featuring a gripping single-player campaign and revamped multiplayer experience.",
      price: 44.99,
      originalPrice: 69.99,
      image: "cod-mw3.png",
      discount: 36,
      category: ["FPS", "Action", "Multiplayer"],
      releaseDate: "2023-11-10",
      publisher: "Activision",
      platform: ["PC", "PlayStation 5", "Xbox Series X/S"],
      rating: 4.2
    },
    {
      id: 5,
      title: "Baldur's Gate 3",
      description: "Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power.",
      price: 49.99,
      originalPrice: 59.99,
      image: "/bd3.png",
      discount: 17,
      category: ["RPG", "Turn-based", "Fantasy"],
      releaseDate: "2023-08-03",
      publisher: "Larian Studios",
      platform: ["PC", "PlayStation 5", "Xbox Series X/S"],
      rating: 4.9
    },
    {
      id: 6,
      title: "Starfield",
      description: "Bethesda Game Studios' first new universe in 25 years. In this next generation role-playing game set amongst the stars, create any character you want and explore with unparalleled freedom.",
      price: 34.99,
      originalPrice: 69.99,
      image: "/starfield.png",
      discount: 50,
      category: ["RPG", "Open World", "Sci-Fi"],
      releaseDate: "2023-09-06",
      publisher: "Bethesda",
      platform: ["PC", "Xbox Series X/S"],
      rating: 4.3
    },
    {
      id: 7,
      title: "Hogwarts Legacy",
      description: "Embark on a journey through the wizarding world as a student at Hogwarts School of Witchcraft and Wizardry.",
      price: 19.99,
      originalPrice: 59.99,
      image: "/hogwarts.png",
      discount: 67,
      category: ["RPG", "Adventure", "Fantasy"],
      releaseDate: "2023-02-10",
      publisher: "Warner Bros. Games",
      platform: ["PC", "PlayStation 5", "Xbox Series X/S"],
      rating: 4.6
    },
    {
      id: 8,
      title: "GTA V",
      description: "The next installment in the groundbreaking Grand Theft Auto series, featuring a return to Vice City with unprecedented detail and interactivity.",
      price: 69.99,
      originalPrice: 69.99,
      image: "/gtav.png",
      discount: 0,
      category: ["Action", "Adventure", "Open World"],
      releaseDate: "2025-10-24",
      publisher: "Rockstar Games",
      platform: ["PC", "PlayStation 5", "Xbox Series X/S"],
      rating: 5.0,
      isNewRelease: true
    },
    {
      id: 9,
      title: "The Elder Scrolls V",
      description: "The long-awaited next chapter in the Elder Scrolls saga, featuring a new region of Tamriel to explore.",
      price: 69.99,
      originalPrice: 69.99,
      image: "/elder1.png",
      discount: 0,
      category: ["RPG", "Open World", "Fantasy"],
      releaseDate: "2025-11-11",
      publisher: "Bethesda",
      platform: ["PC", "PlayStation 5", "Xbox Series X/S"],
      rating: 4.9,
      isNewRelease: true
    },
    {
      id: 10,
      title: "Fable III",
      description: "Return to the fantasy world of Albion in this reboot of the beloved RPG series, featuring a vibrant open world and meaningful player choices.",
      price: 59.99,
      originalPrice: 69.99,
      image: "/fable3.png",
      discount: 14,
      category: ["RPG", "Fantasy", "Adventure"],
      releaseDate: "2025-03-15",
      publisher: "Xbox Game Studios",
      platform: ["PC", "Xbox Series X/S"],
      rating: 4.7,
      isNewRelease: true
    },
    {
      id: 11,
      title: "Assassin's Creed: Shadows",
      description: "Experience feudal Japan as dual protagonists in this new chapter of the Assassin's Creed saga.",
      price: 49.99,
      originalPrice: 69.99,
      image: "/acs.png",
      discount: 29,
      category: ["Action", "Adventure", "Stealth"],
      releaseDate: "2025-05-12",
      publisher: "Ubisoft",
      platform: ["PC", "PlayStation 5", "Xbox Series X/S"],
      rating: 4.6,
      isNewRelease: true
    },
    {
      id: 12,
      title: "Horizon Zero Dawn",
      description: "Continue Aloy's journey in this sequel to the acclaimed action RPG, featuring new machines and expanded gameplay mechanics.",
      price: 54.99,
      originalPrice: 69.99,
      image: "hzd.png",
      discount: 21,
      category: ["Action", "RPG", "Open World"],
      releaseDate: "2025-08-22",
      publisher: "Sony Interactive Entertainment",
      platform: ["PlayStation 5"],
      rating: 4.8,
      isNewRelease: true
    },
    {
      id: 13,
      title: "EA FC 25",
      description: "The latest installment in EA's popular football simulation series, featuring updated teams, improved gameplay, and enhanced graphics.",
      price: 39.99,
      originalPrice: 69.99,
      image: "ea.png",
      discount: 43,
      category: ["Sports", "Simulation"],
      releaseDate: "2025-09-27",
      publisher: "Electronic Arts",
      platform: ["PC", "PlayStation 5", "Xbox Series X/S"],
      rating: 4.2,
      isNewRelease: true
    },
    {
      id: 14,
      title: "The Witcher III",
      description: "The next chapter in the acclaimed Witcher series, featuring a new protagonist and storyline set in the rich fantasy world.",
      price: 59.99,
      originalPrice: 69.99,
      image: "w3.png",
      discount: 14,
      category: ["RPG", "Fantasy", "Open World"],
      releaseDate: "2025-12-10",
      publisher: "CD Projekt RED",
      platform: ["PC", "PlayStation 5", "Xbox Series X/S"],
      rating: 4.9,
      isNewRelease: true
    },
    {
      id: 15,
      title: "Diablo IV: Vessel of Hatred",
      description: "The first major expansion for Diablo IV, continuing the dark fantasy action RPG with new classes, areas, and loot.",
      price: 29.99,
      originalPrice: 39.99,
      image: "diablo.png",
      discount: 25,
      category: ["Action RPG", "Hack and Slash", "Multiplayer"],
      releaseDate: "2025-06-06",
      publisher: "Blizzard Entertainment",
      platform: ["PC", "PlayStation 5", "Xbox Series X/S"],
      rating: 4.5,
      isNewRelease: true
    },
    {
      id: 16,
      title: "God of War: Ragnarok",
      description: "Embark on a mythic journey for answers and allies before Ragnarök arrives in this sequel to 2018's God of War.",
      price: 29.99,
      originalPrice: 69.99,
      image: "/gow.png",
      discount: 57,
      category: ["Action", "Adventure"],
      releaseDate: "2022-11-09",
      publisher: "Sony Interactive Entertainment",
      platform: ["PlayStation 5", "PlayStation 4"],
      rating: 4.9
    },
    {
      id: 17,
      title: "Resident Evil 4 Remake",
      description: "A reimagining of the 2005 survival horror classic with modernized gameplay and stunning visuals.",
      price: 19.99,
      originalPrice: 59.99,
      image: "/re4.png",
      discount: 67,
      category: ["Horror", "Action", "Survival"],
      releaseDate: "2023-03-24",
      publisher: "Capcom",
      platform: ["PC", "PlayStation 5", "Xbox Series X/S"],
      rating: 4.8
    },
    {
      id: 18,
      title: "Final Fantasy XVI",
      description: "A dark fantasy world where the fate of the land is decided by Eikons and the Dominants who wield them.",
      price: 34.99,
      originalPrice: 69.99,
      image: "/fvx.png",
      discount: 50,
      category: ["RPG", "Action", "Fantasy"],
      releaseDate: "2023-06-22",
      publisher: "Square Enix",
      platform: ["PlayStation 5"],
      rating: 4.7
    },
    {
      id: 19,
      title: "Forza Horizon 5",
      description: "The next evolution of the acclaimed racing franchise, featuring a new open world and hundreds of meticulously detailed vehicles.",
      price: 49.99,
      originalPrice: 69.99,
      image: "/fh5.png",
      discount: 29,
      category: ["Racing", "Open World", "Simulation"],
      releaseDate: "2025-04-18",
      publisher: "Xbox Game Studios",
      platform: ["PC", "Xbox Series X/S"],
      rating: 4.8,
      isNewRelease: true
    },
    {
      id: 20,
      title: "The Last of Us Part II",
      description: "The next chapter in Naughty Dog's acclaimed post-apocalyptic saga, continuing Ellie's emotional journey.",
      price: 69.99,
      originalPrice: 69.99,
      image: "/lou2.png",
      discount: 0,
      category: ["Action", "Adventure", "Survival"],
      releaseDate: "2025-07-29",
      publisher: "Sony Interactive Entertainment",
      platform: ["PlayStation 5"],
      rating: 5.0,
      isNewRelease: true
    },
    {
      id: 21,
      title: "Hollow Knight: Silksong",
      description: "The sequel to the critically acclaimed action-adventure game Hollow Knight, featuring a new protagonist and world to explore.",
      price: 14.99,
      originalPrice: 29.99,
      image: "/hk.png",
      discount: 50,
      category: ["Metroidvania", "Action", "Indie"],
      releaseDate: "2025-02-14",
      publisher: "Team Cherry",
      platform: ["PC", "PlayStation 5", "Xbox Series X/S", "Nintendo Switch"],
      rating: 4.9,
      isNewRelease: true
    },
    {
      id: 22,
      title: "Bioshock 3",
      description: "Return to the acclaimed Bioshock universe with a new setting, characters, and mind-bending story.",
      price: 59.99,
      originalPrice: 69.99,
      image: "b3.png",
      discount: 14,
      category: ["FPS", "Action", "Story-Rich"],
      releaseDate: "2025-10-15",
      publisher: "2K Games",
      platform: ["PC", "PlayStation 5", "Xbox Series X/S"],
      rating: 4.7,
      isNewRelease: true
    },
    {
      id: 23,
      title: "Blade",
      description: "The next evolution of the world's most popular sandbox game, featuring enhanced graphics, new biomes, and expanded multiplayer.",
      price: 29.99,
      originalPrice: 39.99,
      image: "blade.png",
      discount: 25,
      category: ["Sandbox", "Survival", "Multiplayer"],
      releaseDate: "2025-11-18",
      publisher: "Mojang Studios",
      platform: ["PC", "PlayStation 5", "Xbox Series X/S", "Nintendo Switch"],
      rating: 4.8,
      isNewRelease: true
    },
    {
      id: 24,
      title: "Death Stranding 2",
      description: "Hideo Kojima's sequel to the groundbreaking Death Stranding, continuing the story in a fractured world.",
      price: 59.99,
      originalPrice: 69.99,
      image: "ds2.png",
      discount: 14,
      category: ["Action", "Adventure", "Strand Game"],
      releaseDate: "2025-09-05",
      publisher: "Sony Interactive Entertainment",
      platform: ["PlayStation 5"],
      rating: 4.6,
      isNewRelease: true
    }
  ];
  

  export function getAllGames(): Game[] {
    return gamesData;
  }
  
  export function getNewReleases(): Game[] {
    return gamesData.filter(game => game.isNewRelease);
  }
  
  export function getBestDeals(minDiscount: number = 30): Game[] {
    return gamesData
      .filter(game => game.discount >= minDiscount)
      .sort((a, b) => b.discount - a.discount);
  }
  
  export function getFeaturedGame(): Game {

    return gamesData.find(game => game.id === 7) || getBestDeals()[0];
  }
  
  export function getPopularGames(count: number = 6): Game[] {

    return [...gamesData]
      .sort((a, b) => (b.rating || 0) - (a.rating || 0))
      .slice(0, count);
  }
  
  export function getGameById(id: number): Game | undefined {
    return gamesData.find(game => game.id === id);
  }
  
  export function getGamesByCategory(category: string): Game[] {
    return gamesData.filter(game => game.category.includes(category));
  }
  