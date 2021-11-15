let mock = [{
    id: 1,
    title: "The Way of Kings",
    series: "The Stormlight Archive",
    seriesNum: 1,
    year: 2010,
    image: 'Way-of-Kings.jpg'
  },
  {
      id: 2,
      title: "Words of Radiance",
      series: "The Stormlight Archive",
      seriesNum: 2,
      year: 2014,
      image: 'Words-of-Radiance.jpg'
  },
  {
      id: 3,
      title: "Edgedancer",
      series: "The Stormlight Archive",
      seriesNum: 2.5,
      year: 2017,
      image: 'Edgedancer.jpg'
  },
  {
      id: 4,
      title: "Oathbringer",
      series: "The Stormlight Archive",
      seriesNum: 3,
      year: 2017,
      image: 'Oathbringer.jpg'
  },
  {
      id: 5,
      title: "Dawnshard",
      series: "The Stormlight Archive",
      seriesNum: 3.5,
      year: 2020,
      image: 'Dawnshard.jpg'
  },
  {
      id: 6,
      title: "Rhythm of War",
      series: "The Stormlight Archive",
      seriesNum: 4,
      year: 2020,
      image: 'RoW.jpg'
  },
  {
      id: 7,
      title: "The Final Empire",
      series: "The Mistborn Saga",
      seriesNum: 1,
      year: 2006,
      image: 'Mistborn.jpg'
  },
  {
      id: 8,
      title: "The Well of Ascension",
      series: "The Mistborn Saga",
      seriesNum: 2,
      year: 2007,
      image: 'Well-of-Ascension.jpg'
  },
  {
      id: 9,
      title: "The Hero of Ages",
      series: "The Mistborn Saga",
      seriesNum: 3,
      year: 2008,
      image: 'Hero-of-Ages.jpg'
  },
  {
      id: 10,
      title: "The Alloy of Law",
      series: "The Mistborn Saga - The Wax & Wayne Series",
      seriesNum: 1,
      year: 2011,
      image: 'Alloy-of-Law.jpg'
  },
  {
      id: 11,
      title: "Shadows of Self",
      series: "The Mistborn Saga - The Wax & Wayne Series",
      seriesNum: 2,
      year: 2015,
      image: 'Shadows-of-Self.jpg'
  },
  {
      id: 12,
      title: "The Bands of Mourning",
      series: "The Mistborn Saga - The Wax & Wayne Series",
      seriesNum: 3,
      year: 2016,
      image: 'Bands-of-Mourning.jpg'
  },
  {
      id: 13,
      title: "Elantris",
      series: "Standalone",
      seriesNum: 1,
      year: 2005,
      image: 'Elantris.jpg'
  },
  {
      id: 14,
      title: "Warbreaker",
      series: "Standalone",
      seriesNum: 1,
      year: 2009,
      image: 'Warbreaker.jpg'
  },
  {
      id: 15,
      title: "White Sand",
      series: "White Sand",
      seriesNum: 1,
      year: 2016,
      image: 'White-Sand-1.jpg'
  },
  {
      id: 16,
      title: "White Sand Vol II",
      series: "White Sand",
      seriesNum: 2,
      year: 2018,
      image: 'White-Sand-2.jpg'
  },
  {
      id: 17,
      title: "White Sand Vol III",
      series: "White Sand",
      seriesNum: 3,
      year: 2019,
      image: 'White-Sand-3.jpg'
  },
  {
      id: 18,
      title: "Skyward",
      series: "Skyward",
      seriesNum: 1,
      year: 2018,
      image: 'Skyward.jpg'
  },
  {
      id: 19,
      title: "Starsight",
      series: "Skyward",
      seriesNum: 2,
      year: 2019,
      image: 'Starsight.jpg'
  },
  {
      id: 20,
      title: "Steelheart",
      series: "The Reckoners",
      seriesNum: 1,
      year: 2013,
      image: 'Steelheart.jpg'
  },
  {
      id: 21,
      title: "Firefight",
      series: "The Reckoners",
      seriesNum: 2,
      year: 2015,
      image: 'Firefight.jpg'
  },
  {
      id: 22,
      title: "Calamity",
      series: "The Reckoners",
      seriesNum: 3,
      year: 2016,
      image: 'Calamity.jpg'
  },
  {
      id: 23,
      title: "The Evil Librarians",
      series: "Alcatraz Vs the Evil Librarians",
      seriesNum: 1,
      year: 2007,
      image: 'Alcatraz-1.jpg'
  },
  {
      id: 24,
      title: "The Scrivener's Bones",
      series: "Alcatraz Vs the Evil Librarians",
      seriesNum: 2,
      year: 2008,
      image: 'Alcatraz-2.jpg'
  },
  {
      id: 25,
      title: "The Knights of Crystallia",
      series: "Alcatraz Vs the Evil Librarians",
      seriesNum: 3,
      year: 2009,
      image: 'Alcatraz-3.jpg'
  },
  {
      id: 26,
      title: "The Shattered Lens",
      series: "Alcatraz Vs the Evil Librarians",
      seriesNum: 4,
      year: 2010,
      image: 'Alcatraz-4.jpg'
  },
  {
      id: 27,
      title: "The Dark Talent",
      series: "Alcatraz Vs the Evil Librarians",
      seriesNum: 5,
      year: 2016,
      image: 'Alcatraz-5.jpg'
  },
  {
      id: 28,
      title: "The Rithmatist",
      series: "Standalone",
      seriesNum: 1,
      year: 2013,
      image: 'Rithmatist.jpg'
  },
  {
      id: 29,
      title: "First Born",
      series: "Short Fiction",
      seriesNum: 1,
      year: 2008,
      image: 'Firstborn.jpg'
  },
  {
      id: 30,
      title: "Defending Elysium",
      series: "Short Fiction",
      seriesNum: 1,
      year: 2009,
      image: 'Defending-Elysium.jpg'
  },
  {
      id: 31,
      title: "Mitosis",
      series: "Short Fiction",
      seriesNum: 1,
      year: 2013,
      image: 'Mitosis.jpg'
  },
  {
      id: 32,
      title: "Perfect State",
      series: "Short Fiction",
      seriesNum: 1,
      year: 2015,
      image: 'Perfect-State.jpg'
  },
  {
      id: 33,
      title: "Snapshot",
      series: "Short Fiction",
      seriesNum: 1,
      year: 2017,
      image: 'Snapshot.jpg'
  },
  {
      id: 34,
      title: "Dreamer",
      series: "Short Fiction",
      seriesNum: 1,
      year: 2014,
      image: 'Dreamer.jpg'
  },
  {
      id: 35,
      title: "The Gathering Storm",
      series: "The Wheel of Time",
      seriesNum: 12,
      year: 2009,
      image: 'Gathering-Storm.jpg'
  },
  {
      id: 36,
      title: "Towers of Midnight",
      series: "The Wheel of Time",
      seriesNum: 13,
      year: 2010,
      image: 'Towers-of-Midnight.jpg'
  },
  {
      id: 37,
      title: "A Memory of Light",
      series: "The Wheel of Time",
      seriesNum: 14,
      year: 2013,
      image: 'memory-of-light.jpg'
  },
  {
      id: 38,
      title: "River of Souls",
      series: "Unfettered",
      seriesNum: 1,
      year: 2013,
      image: 'River-of-Souls.jpg'
  },
  {
      id: 39,
      title: "A Fire Within the Ways",
      series: "Unfettered",
      seriesNum: 3,
      year: 2019,
      image: 'A-Fire-within-the-Ways.jpg'
  },
  {
      id: 40,
      title: "Awakening",
      series: "Infinity Blade",
      seriesNum: 1,
      year: 2011,
      image: 'Infinity-Blade-Awakening.jpg'
  },
  {
      id: 41,
      title: "Redemption",
      series: "Infinity Blade",
      seriesNum: 2,
      year: 2013,
      image: 'Infinity-Blade-Redemption.jpg'
  }
]

export default mock;
