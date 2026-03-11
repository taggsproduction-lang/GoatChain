export interface PlayerTeam {
  team: string;
  startYear: number;
  endYear: number;
}

export interface Player {
  id: string;
  name: string;
  teams: PlayerTeam[];
}

export interface Puzzle {
  id: string;
  date: string; // YYYY-MM-DD
  startPlayer: Player;
  endPlayer: Player;
  par: number;
  optimalPath: string[]; // player names in order including bookends
}

// ─── Player Roster ───────────────────────────────────────────────────────────

export const PLAYERS: Record<string, Player> = {
  "aaron-judge": {
    id: "aaron-judge",
    name: "Aaron Judge",
    teams: [{ team: "New York Yankees", startYear: 2016, endYear: 2025 }],
  },
  "jacoby-ellsbury": {
    id: "jacoby-ellsbury",
    name: "Jacoby Ellsbury",
    teams: [
      { team: "Boston Red Sox", startYear: 2007, endYear: 2013 },
      { team: "New York Yankees", startYear: 2014, endYear: 2017 },
    ],
  },
  "david-ortiz": {
    id: "david-ortiz",
    name: "David Ortiz",
    teams: [
      { team: "Minnesota Twins", startYear: 1997, endYear: 2002 },
      { team: "Boston Red Sox", startYear: 2003, endYear: 2016 },
    ],
  },
  "manny-ramirez": {
    id: "manny-ramirez",
    name: "Manny Ramirez",
    teams: [
      { team: "Cleveland Indians", startYear: 1993, endYear: 2000 },
      { team: "Boston Red Sox", startYear: 2001, endYear: 2008 },
      { team: "Los Angeles Dodgers", startYear: 2008, endYear: 2010 },
      { team: "Chicago White Sox", startYear: 2010, endYear: 2010 },
      { team: "Tampa Bay Rays", startYear: 2011, endYear: 2011 },
    ],
  },
  "mike-trout": {
    id: "mike-trout",
    name: "Mike Trout",
    teams: [{ team: "Los Angeles Angels", startYear: 2011, endYear: 2025 }],
  },
  "josh-hamilton": {
    id: "josh-hamilton",
    name: "Josh Hamilton",
    teams: [
      { team: "Cincinnati Reds", startYear: 2007, endYear: 2007 },
      { team: "Texas Rangers", startYear: 2008, endYear: 2012 },
      { team: "Los Angeles Angels", startYear: 2013, endYear: 2014 },
      { team: "Texas Rangers", startYear: 2015, endYear: 2015 },
    ],
  },
  "adrian-beltre": {
    id: "adrian-beltre",
    name: "Adrian Beltre",
    teams: [
      { team: "Los Angeles Dodgers", startYear: 1998, endYear: 2004 },
      { team: "Seattle Mariners", startYear: 2005, endYear: 2009 },
      { team: "Boston Red Sox", startYear: 2010, endYear: 2010 },
      { team: "Texas Rangers", startYear: 2011, endYear: 2018 },
    ],
  },
  "ken-griffey-jr": {
    id: "ken-griffey-jr",
    name: "Ken Griffey Jr.",
    teams: [
      { team: "Seattle Mariners", startYear: 1989, endYear: 1999 },
      { team: "Cincinnati Reds", startYear: 1999, endYear: 2008 },
      { team: "Chicago White Sox", startYear: 2008, endYear: 2008 },
      { team: "Seattle Mariners", startYear: 2009, endYear: 2010 },
    ],
  },
  "randy-johnson": {
    id: "randy-johnson",
    name: "Randy Johnson",
    teams: [
      { team: "Montreal Expos", startYear: 1988, endYear: 1989 },
      { team: "Seattle Mariners", startYear: 1989, endYear: 1998 },
      { team: "Houston Astros", startYear: 1998, endYear: 1998 },
      { team: "Arizona Diamondbacks", startYear: 1999, endYear: 2004 },
      { team: "New York Yankees", startYear: 2005, endYear: 2006 },
      { team: "Arizona Diamondbacks", startYear: 2007, endYear: 2008 },
      { team: "San Francisco Giants", startYear: 2009, endYear: 2009 },
    ],
  },
  "derek-jeter": {
    id: "derek-jeter",
    name: "Derek Jeter",
    teams: [{ team: "New York Yankees", startYear: 1995, endYear: 2014 }],
  },
  "masahiro-tanaka": {
    id: "masahiro-tanaka",
    name: "Masahiro Tanaka",
    teams: [{ team: "New York Yankees", startYear: 2014, endYear: 2020 }],
  },
  "gerrit-cole": {
    id: "gerrit-cole",
    name: "Gerrit Cole",
    teams: [
      { team: "Pittsburgh Pirates", startYear: 2013, endYear: 2017 },
      { team: "Houston Astros", startYear: 2018, endYear: 2019 },
      { team: "New York Yankees", startYear: 2020, endYear: 2025 },
    ],
  },
  "pete-rose": {
    id: "pete-rose",
    name: "Pete Rose",
    teams: [
      { team: "Cincinnati Reds", startYear: 1963, endYear: 1978 },
      { team: "Philadelphia Phillies", startYear: 1979, endYear: 1983 },
      { team: "Montreal Expos", startYear: 1984, endYear: 1984 },
      { team: "Cincinnati Reds", startYear: 1984, endYear: 1986 },
    ],
  },
  "eric-davis": {
    id: "eric-davis",
    name: "Eric Davis",
    teams: [
      { team: "Cincinnati Reds", startYear: 1984, endYear: 1991 },
      { team: "Los Angeles Dodgers", startYear: 1992, endYear: 1993 },
      { team: "Detroit Tigers", startYear: 1993, endYear: 1994 },
      { team: "Cincinnati Reds", startYear: 1996, endYear: 1996 },
      { team: "Baltimore Orioles", startYear: 1997, endYear: 1998 },
      { team: "St. Louis Cardinals", startYear: 1999, endYear: 1999 },
      { team: "San Francisco Giants", startYear: 2001, endYear: 2001 },
    ],
  },
  "barry-larkin": {
    id: "barry-larkin",
    name: "Barry Larkin",
    teams: [{ team: "Cincinnati Reds", startYear: 1986, endYear: 2004 }],
  },
  "jose-guillen": {
    id: "jose-guillen",
    name: "Jose Guillen",
    teams: [
      { team: "Pittsburgh Pirates", startYear: 1997, endYear: 1999 },
      { team: "Tampa Bay Devil Rays", startYear: 1999, endYear: 1999 },
      { team: "Cincinnati Reds", startYear: 2000, endYear: 2003 },
      { team: "Oakland Athletics", startYear: 2003, endYear: 2003 },
      { team: "Anaheim Angels", startYear: 2004, endYear: 2004 },
      { team: "Washington Nationals", startYear: 2005, endYear: 2007 },
      { team: "Seattle Mariners", startYear: 2007, endYear: 2008 },
      { team: "Kansas City Royals", startYear: 2009, endYear: 2009 },
      { team: "San Francisco Giants", startYear: 2010, endYear: 2010 },
      { team: "Washington Nationals", startYear: 2009, endYear: 2009 },
    ],
  },
  "ryan-zimmerman": {
    id: "ryan-zimmerman",
    name: "Ryan Zimmerman",
    teams: [{ team: "Washington Nationals", startYear: 2005, endYear: 2019 }],
  },
  "bryce-harper": {
    id: "bryce-harper",
    name: "Bryce Harper",
    teams: [
      { team: "Washington Nationals", startYear: 2012, endYear: 2018 },
      { team: "Philadelphia Phillies", startYear: 2019, endYear: 2025 },
    ],
  },
  "nolan-ryan": {
    id: "nolan-ryan",
    name: "Nolan Ryan",
    teams: [
      { team: "New York Mets", startYear: 1966, endYear: 1971 },
      { team: "California Angels", startYear: 1972, endYear: 1979 },
      { team: "Houston Astros", startYear: 1980, endYear: 1988 },
      { team: "Texas Rangers", startYear: 1989, endYear: 1993 },
    ],
  },
  "ivan-rodriguez": {
    id: "ivan-rodriguez",
    name: "Ivan Rodriguez",
    teams: [
      { team: "Texas Rangers", startYear: 1991, endYear: 2002 },
      { team: "Florida Marlins", startYear: 2003, endYear: 2003 },
      { team: "Detroit Tigers", startYear: 2004, endYear: 2008 },
      { team: "New York Yankees", startYear: 2008, endYear: 2008 },
      { team: "Houston Astros", startYear: 2009, endYear: 2009 },
      { team: "Texas Rangers", startYear: 2009, endYear: 2009 },
      { team: "Washington Nationals", startYear: 2010, endYear: 2011 },
    ],
  },
  "jayson-werth": {
    id: "jayson-werth",
    name: "Jayson Werth",
    teams: [
      { team: "Toronto Blue Jays", startYear: 2002, endYear: 2004 },
      { team: "Los Angeles Dodgers", startYear: 2004, endYear: 2010 },
      { team: "Philadelphia Phillies", startYear: 2007, endYear: 2010 },
      { team: "Washington Nationals", startYear: 2011, endYear: 2017 },
    ],
  },
  "clayton-kershaw": {
    id: "clayton-kershaw",
    name: "Clayton Kershaw",
    teams: [{ team: "Los Angeles Dodgers", startYear: 2008, endYear: 2025 }],
  },

  // Pittsburgh Pirates
  "andrew-mccutchen": {
    id: "andrew-mccutchen",
    name: "Andrew McCutchen",
    teams: [
      { team: "Pittsburgh Pirates", startYear: 2009, endYear: 2017 },
      { team: "San Francisco Giants", startYear: 2018, endYear: 2018 },
      { team: "New York Yankees", startYear: 2018, endYear: 2018 },
      { team: "Philadelphia Phillies", startYear: 2019, endYear: 2023 },
      { team: "Pittsburgh Pirates", startYear: 2023, endYear: 2023 },
    ],
  },
  "starling-marte": {
    id: "starling-marte",
    name: "Starling Marte",
    teams: [
      { team: "Pittsburgh Pirates", startYear: 2012, endYear: 2020 },
      { team: "Arizona Diamondbacks", startYear: 2020, endYear: 2020 },
      { team: "Miami Marlins", startYear: 2021, endYear: 2021 },
      { team: "Oakland Athletics", startYear: 2021, endYear: 2021 },
      { team: "New York Mets", startYear: 2022, endYear: 2025 },
    ],
  },
  "francisco-liriano": {
    id: "francisco-liriano",
    name: "Francisco Liriano",
    teams: [
      { team: "Minnesota Twins", startYear: 2005, endYear: 2011 },
      { team: "Chicago White Sox", startYear: 2011, endYear: 2011 },
      { team: "Pittsburgh Pirates", startYear: 2013, endYear: 2016 },
      { team: "Toronto Blue Jays", startYear: 2016, endYear: 2017 },
      { team: "Houston Astros", startYear: 2017, endYear: 2017 },
      { team: "Detroit Tigers", startYear: 2018, endYear: 2018 },
    ],
  },
  "neil-walker": {
    id: "neil-walker",
    name: "Neil Walker",
    teams: [
      { team: "Pittsburgh Pirates", startYear: 2009, endYear: 2015 },
      { team: "New York Mets", startYear: 2016, endYear: 2017 },
      { team: "Milwaukee Brewers", startYear: 2017, endYear: 2017 },
      { team: "New York Yankees", startYear: 2018, endYear: 2018 },
      { team: "Miami Marlins", startYear: 2018, endYear: 2018 },
      { team: "Philadelphia Phillies", startYear: 2019, endYear: 2019 },
    ],
  },

  // San Francisco Giants
  "barry-bonds": {
    id: "barry-bonds",
    name: "Barry Bonds",
    teams: [
      { team: "Pittsburgh Pirates", startYear: 1986, endYear: 1992 },
      { team: "San Francisco Giants", startYear: 1993, endYear: 2007 },
    ],
  },
  "buster-posey": {
    id: "buster-posey",
    name: "Buster Posey",
    teams: [{ team: "San Francisco Giants", startYear: 2009, endYear: 2021 }],
  },
  "madison-bumgarner": {
    id: "madison-bumgarner",
    name: "Madison Bumgarner",
    teams: [
      { team: "San Francisco Giants", startYear: 2009, endYear: 2019 },
      { team: "Arizona Diamondbacks", startYear: 2020, endYear: 2023 },
    ],
  },
  "jeff-kent": {
    id: "jeff-kent",
    name: "Jeff Kent",
    teams: [
      { team: "Toronto Blue Jays", startYear: 1992, endYear: 1992 },
      { team: "New York Mets", startYear: 1992, endYear: 1996 },
      { team: "Cleveland Indians", startYear: 1996, endYear: 1996 },
      { team: "San Francisco Giants", startYear: 1997, endYear: 2002 },
      { team: "Houston Astros", startYear: 2003, endYear: 2004 },
      { team: "Los Angeles Dodgers", startYear: 2005, endYear: 2008 },
    ],
  },

  // St. Louis Cardinals
  "albert-pujols": {
    id: "albert-pujols",
    name: "Albert Pujols",
    teams: [
      { team: "St. Louis Cardinals", startYear: 2001, endYear: 2011 },
      { team: "Los Angeles Angels", startYear: 2012, endYear: 2021 },
      { team: "Los Angeles Dodgers", startYear: 2021, endYear: 2021 },
      { team: "St. Louis Cardinals", startYear: 2022, endYear: 2022 },
    ],
  },
  "yadier-molina": {
    id: "yadier-molina",
    name: "Yadier Molina",
    teams: [{ team: "St. Louis Cardinals", startYear: 2004, endYear: 2022 }],
  },
  "adam-wainwright": {
    id: "adam-wainwright",
    name: "Adam Wainwright",
    teams: [{ team: "St. Louis Cardinals", startYear: 2005, endYear: 2023 }],
  },
  "scott-rolen": {
    id: "scott-rolen",
    name: "Scott Rolen",
    teams: [
      { team: "Philadelphia Phillies", startYear: 1996, endYear: 2002 },
      { team: "St. Louis Cardinals", startYear: 2002, endYear: 2007 },
      { team: "Toronto Blue Jays", startYear: 2008, endYear: 2009 },
      { team: "Cincinnati Reds", startYear: 2009, endYear: 2012 },
    ],
  },

  // Philadelphia Phillies
  "chase-utley": {
    id: "chase-utley",
    name: "Chase Utley",
    teams: [
      { team: "Philadelphia Phillies", startYear: 2003, endYear: 2015 },
      { team: "Los Angeles Dodgers", startYear: 2015, endYear: 2018 },
    ],
  },
  "ryan-howard": {
    id: "ryan-howard",
    name: "Ryan Howard",
    teams: [{ team: "Philadelphia Phillies", startYear: 2004, endYear: 2016 }],
  },
  "jimmy-rollins": {
    id: "jimmy-rollins",
    name: "Jimmy Rollins",
    teams: [
      { team: "Philadelphia Phillies", startYear: 2000, endYear: 2014 },
      { team: "Los Angeles Dodgers", startYear: 2015, endYear: 2016 },
      { team: "Chicago White Sox", startYear: 2016, endYear: 2016 },
    ],
  },
  "cole-hamels": {
    id: "cole-hamels",
    name: "Cole Hamels",
    teams: [
      { team: "Philadelphia Phillies", startYear: 2006, endYear: 2015 },
      { team: "Texas Rangers", startYear: 2015, endYear: 2018 },
      { team: "Chicago Cubs", startYear: 2018, endYear: 2019 },
      { team: "Atlanta Braves", startYear: 2020, endYear: 2020 },
    ],
  },
  "roy-halladay": {
    id: "roy-halladay",
    name: "Roy Halladay",
    teams: [
      { team: "Toronto Blue Jays", startYear: 1998, endYear: 2009 },
      { team: "Philadelphia Phillies", startYear: 2010, endYear: 2013 },
    ],
  },

  // Atlanta Braves
  "chipper-jones": {
    id: "chipper-jones",
    name: "Chipper Jones",
    teams: [{ team: "Atlanta Braves", startYear: 1993, endYear: 2012 }],
  },
  "tom-glavine": {
    id: "tom-glavine",
    name: "Tom Glavine",
    teams: [
      { team: "Atlanta Braves", startYear: 1987, endYear: 2002 },
      { team: "New York Mets", startYear: 2003, endYear: 2007 },
      { team: "Atlanta Braves", startYear: 2008, endYear: 2008 },
    ],
  },
  "greg-maddux": {
    id: "greg-maddux",
    name: "Greg Maddux",
    teams: [
      { team: "Chicago Cubs", startYear: 1986, endYear: 1992 },
      { team: "Atlanta Braves", startYear: 1993, endYear: 2003 },
      { team: "Chicago Cubs", startYear: 2004, endYear: 2006 },
      { team: "San Diego Padres", startYear: 2006, endYear: 2008 },
      { team: "Los Angeles Dodgers", startYear: 2008, endYear: 2008 },
    ],
  },
  "john-smoltz": {
    id: "john-smoltz",
    name: "John Smoltz",
    teams: [
      { team: "Atlanta Braves", startYear: 1988, endYear: 2008 },
      { team: "Boston Red Sox", startYear: 2009, endYear: 2009 },
      { team: "St. Louis Cardinals", startYear: 2009, endYear: 2009 },
    ],
  },
  "andruw-jones": {
    id: "andruw-jones",
    name: "Andruw Jones",
    teams: [
      { team: "Atlanta Braves", startYear: 1996, endYear: 2007 },
      { team: "Los Angeles Dodgers", startYear: 2008, endYear: 2008 },
      { team: "Texas Rangers", startYear: 2009, endYear: 2009 },
      { team: "Chicago White Sox", startYear: 2010, endYear: 2010 },
      { team: "New York Yankees", startYear: 2011, endYear: 2012 },
      { team: "St. Louis Cardinals", startYear: 2012, endYear: 2012 },
    ],
  },
  "freddie-freeman": {
    id: "freddie-freeman",
    name: "Freddie Freeman",
    teams: [
      { team: "Atlanta Braves", startYear: 2010, endYear: 2021 },
      { team: "Los Angeles Dodgers", startYear: 2022, endYear: 2025 },
    ],
  },

  // New York Yankees (additional)
  "alex-rodriguez": {
    id: "alex-rodriguez",
    name: "Alex Rodriguez",
    teams: [
      { team: "Seattle Mariners", startYear: 1994, endYear: 2000 },
      { team: "Texas Rangers", startYear: 2001, endYear: 2003 },
      { team: "New York Yankees", startYear: 2004, endYear: 2016 },
    ],
  },
  "mariano-rivera": {
    id: "mariano-rivera",
    name: "Mariano Rivera",
    teams: [{ team: "New York Yankees", startYear: 1995, endYear: 2013 }],
  },
  "andy-pettitte": {
    id: "andy-pettitte",
    name: "Andy Pettitte",
    teams: [
      { team: "New York Yankees", startYear: 1995, endYear: 2003 },
      { team: "Houston Astros", startYear: 2004, endYear: 2006 },
      { team: "New York Yankees", startYear: 2007, endYear: 2013 },
    ],
  },
  "jorge-posada": {
    id: "jorge-posada",
    name: "Jorge Posada",
    teams: [{ team: "New York Yankees", startYear: 1995, endYear: 2011 }],
  },
  "bernie-williams": {
    id: "bernie-williams",
    name: "Bernie Williams",
    teams: [{ team: "New York Yankees", startYear: 1991, endYear: 2006 }],
  },
  "roger-clemens": {
    id: "roger-clemens",
    name: "Roger Clemens",
    teams: [
      { team: "Boston Red Sox", startYear: 1984, endYear: 1996 },
      { team: "Toronto Blue Jays", startYear: 1997, endYear: 1998 },
      { team: "Houston Astros", startYear: 1999, endYear: 2003 },
      { team: "New York Yankees", startYear: 1999, endYear: 2007 },
      { team: "Houston Astros", startYear: 2004, endYear: 2006 },
    ],
  },
  "cc-sabathia": {
    id: "cc-sabathia",
    name: "CC Sabathia",
    teams: [
      { team: "Cleveland Indians", startYear: 2001, endYear: 2008 },
      { team: "Milwaukee Brewers", startYear: 2008, endYear: 2008 },
      { team: "New York Yankees", startYear: 2009, endYear: 2019 },
    ],
  },
  "robinson-cano": {
    id: "robinson-cano",
    name: "Robinson Cano",
    teams: [
      { team: "New York Yankees", startYear: 2005, endYear: 2013 },
      { team: "Seattle Mariners", startYear: 2014, endYear: 2019 },
      { team: "New York Mets", startYear: 2019, endYear: 2021 },
      { team: "Atlanta Braves", startYear: 2022, endYear: 2022 },
    ],
  },
  "giancarlo-stanton": {
    id: "giancarlo-stanton",
    name: "Giancarlo Stanton",
    teams: [
      { team: "Miami Marlins", startYear: 2010, endYear: 2017 },
      { team: "New York Yankees", startYear: 2018, endYear: 2025 },
    ],
  },

  // Seattle Mariners
  "ichiro-suzuki": {
    id: "ichiro-suzuki",
    name: "Ichiro Suzuki",
    teams: [
      { team: "Seattle Mariners", startYear: 2001, endYear: 2012 },
      { team: "New York Yankees", startYear: 2012, endYear: 2014 },
      { team: "Miami Marlins", startYear: 2015, endYear: 2017 },
      { team: "Seattle Mariners", startYear: 2018, endYear: 2019 },
    ],
  },
  "edgar-martinez": {
    id: "edgar-martinez",
    name: "Edgar Martinez",
    teams: [{ team: "Seattle Mariners", startYear: 1987, endYear: 2004 }],
  },
  "felix-hernandez": {
    id: "felix-hernandez",
    name: "Felix Hernandez",
    teams: [
      { team: "Seattle Mariners", startYear: 2005, endYear: 2019 },
      { team: "Atlanta Braves", startYear: 2020, endYear: 2020 },
    ],
  },

  // Boston Red Sox (additional)
  "pedro-martinez": {
    id: "pedro-martinez",
    name: "Pedro Martinez",
    teams: [
      { team: "Los Angeles Dodgers", startYear: 1992, endYear: 1993 },
      { team: "Montreal Expos", startYear: 1994, endYear: 1997 },
      { team: "Boston Red Sox", startYear: 1998, endYear: 2004 },
      { team: "New York Mets", startYear: 2005, endYear: 2008 },
      { team: "Philadelphia Phillies", startYear: 2009, endYear: 2009 },
    ],
  },
  "curt-schilling": {
    id: "curt-schilling",
    name: "Curt Schilling",
    teams: [
      { team: "Baltimore Orioles", startYear: 1988, endYear: 1990 },
      { team: "Houston Astros", startYear: 1991, endYear: 1991 },
      { team: "Philadelphia Phillies", startYear: 1992, endYear: 2000 },
      { team: "Arizona Diamondbacks", startYear: 2000, endYear: 2003 },
      { team: "Boston Red Sox", startYear: 2004, endYear: 2007 },
    ],
  },
  "jon-lester": {
    id: "jon-lester",
    name: "Jon Lester",
    teams: [
      { team: "Boston Red Sox", startYear: 2006, endYear: 2014 },
      { team: "Oakland Athletics", startYear: 2014, endYear: 2014 },
      { team: "Chicago Cubs", startYear: 2015, endYear: 2020 },
      { team: "Washington Nationals", startYear: 2021, endYear: 2021 },
      { team: "St. Louis Cardinals", startYear: 2021, endYear: 2021 },
    ],
  },
  "dustin-pedroia": {
    id: "dustin-pedroia",
    name: "Dustin Pedroia",
    teams: [{ team: "Boston Red Sox", startYear: 2006, endYear: 2019 }],
  },

  // Houston Astros
  "jose-altuve": {
    id: "jose-altuve",
    name: "Jose Altuve",
    teams: [{ team: "Houston Astros", startYear: 2011, endYear: 2025 }],
  },
  "justin-verlander": {
    id: "justin-verlander",
    name: "Justin Verlander",
    teams: [
      { team: "Detroit Tigers", startYear: 2005, endYear: 2017 },
      { team: "Houston Astros", startYear: 2017, endYear: 2022 },
      { team: "New York Mets", startYear: 2023, endYear: 2023 },
      { team: "Houston Astros", startYear: 2024, endYear: 2025 },
    ],
  },
  "carlos-correa": {
    id: "carlos-correa",
    name: "Carlos Correa",
    teams: [
      { team: "Houston Astros", startYear: 2015, endYear: 2021 },
      { team: "Minnesota Twins", startYear: 2022, endYear: 2025 },
    ],
  },

  // Chicago Cubs
  "sammy-sosa": {
    id: "sammy-sosa",
    name: "Sammy Sosa",
    teams: [
      { team: "Texas Rangers", startYear: 1989, endYear: 1989 },
      { team: "Chicago White Sox", startYear: 1989, endYear: 1991 },
      { team: "Chicago Cubs", startYear: 1992, endYear: 2004 },
      { team: "Baltimore Orioles", startYear: 2005, endYear: 2005 },
      { team: "Texas Rangers", startYear: 2007, endYear: 2007 },
    ],
  },
  "kerry-wood": {
    id: "kerry-wood",
    name: "Kerry Wood",
    teams: [
      { team: "Chicago Cubs", startYear: 1998, endYear: 2008 },
      { team: "Cleveland Indians", startYear: 2009, endYear: 2009 },
      { team: "New York Yankees", startYear: 2010, endYear: 2010 },
      { team: "Chicago Cubs", startYear: 2011, endYear: 2012 },
    ],
  },
  "anthony-rizzo": {
    id: "anthony-rizzo",
    name: "Anthony Rizzo",
    teams: [
      { team: "San Diego Padres", startYear: 2011, endYear: 2011 },
      { team: "Chicago Cubs", startYear: 2012, endYear: 2021 },
      { team: "New York Yankees", startYear: 2021, endYear: 2023 },
    ],
  },
  "kris-bryant": {
    id: "kris-bryant",
    name: "Kris Bryant",
    teams: [
      { team: "Chicago Cubs", startYear: 2015, endYear: 2021 },
      { team: "San Francisco Giants", startYear: 2021, endYear: 2021 },
      { team: "Colorado Rockies", startYear: 2022, endYear: 2025 },
    ],
  },

  // New York Mets
  "david-wright": {
    id: "david-wright",
    name: "David Wright",
    teams: [{ team: "New York Mets", startYear: 2004, endYear: 2018 }],
  },
  "carlos-beltran": {
    id: "carlos-beltran",
    name: "Carlos Beltran",
    teams: [
      { team: "Kansas City Royals", startYear: 1998, endYear: 2004 },
      { team: "Houston Astros", startYear: 2004, endYear: 2004 },
      { team: "New York Mets", startYear: 2005, endYear: 2011 },
      { team: "San Francisco Giants", startYear: 2011, endYear: 2011 },
      { team: "St. Louis Cardinals", startYear: 2012, endYear: 2013 },
      { team: "New York Yankees", startYear: 2014, endYear: 2016 },
      { team: "Texas Rangers", startYear: 2016, endYear: 2016 },
      { team: "Houston Astros", startYear: 2017, endYear: 2017 },
    ],
  },

  // Detroit Tigers
  "miguel-cabrera": {
    id: "miguel-cabrera",
    name: "Miguel Cabrera",
    teams: [
      { team: "Florida Marlins", startYear: 2003, endYear: 2007 },
      { team: "Detroit Tigers", startYear: 2008, endYear: 2023 },
    ],
  },
  "torii-hunter": {
    id: "torii-hunter",
    name: "Torii Hunter",
    teams: [
      { team: "Minnesota Twins", startYear: 1997, endYear: 2007 },
      { team: "Los Angeles Angels", startYear: 2008, endYear: 2012 },
      { team: "Detroit Tigers", startYear: 2013, endYear: 2014 },
      { team: "Minnesota Twins", startYear: 2015, endYear: 2015 },
    ],
  },

  // Minnesota Twins
  "joe-mauer": {
    id: "joe-mauer",
    name: "Joe Mauer",
    teams: [{ team: "Minnesota Twins", startYear: 2004, endYear: 2018 }],
  },
  "jim-thome": {
    id: "jim-thome",
    name: "Jim Thome",
    teams: [
      { team: "Cleveland Indians", startYear: 1991, endYear: 2002 },
      { team: "Philadelphia Phillies", startYear: 2003, endYear: 2005 },
      { team: "Chicago White Sox", startYear: 2006, endYear: 2009 },
      { team: "Minnesota Twins", startYear: 2010, endYear: 2011 },
      { team: "Cleveland Indians", startYear: 2011, endYear: 2011 },
      { team: "Philadelphia Phillies", startYear: 2012, endYear: 2012 },
      { team: "Baltimore Orioles", startYear: 2012, endYear: 2012 },
    ],
  },

  // Oakland Athletics
  "jason-giambi": {
    id: "jason-giambi",
    name: "Jason Giambi",
    teams: [
      { team: "Oakland Athletics", startYear: 1995, endYear: 2001 },
      { team: "New York Yankees", startYear: 2002, endYear: 2008 },
      { team: "Oakland Athletics", startYear: 2009, endYear: 2009 },
      { team: "Colorado Rockies", startYear: 2009, endYear: 2012 },
      { team: "Cleveland Indians", startYear: 2013, endYear: 2014 },
    ],
  },

  // Los Angeles Dodgers (additional)
  "mookie-betts": {
    id: "mookie-betts",
    name: "Mookie Betts",
    teams: [
      { team: "Boston Red Sox", startYear: 2014, endYear: 2019 },
      { team: "Los Angeles Dodgers", startYear: 2020, endYear: 2025 },
    ],
  },
  "shohei-ohtani": {
    id: "shohei-ohtani",
    name: "Shohei Ohtani",
    teams: [
      { team: "Los Angeles Angels", startYear: 2018, endYear: 2023 },
      { team: "Los Angeles Dodgers", startYear: 2024, endYear: 2025 },
    ],
  },

  // Miami Marlins
  "hanley-ramirez": {
    id: "hanley-ramirez",
    name: "Hanley Ramirez",
    teams: [
      { team: "Boston Red Sox", startYear: 2005, endYear: 2005 },
      { team: "Florida Marlins", startYear: 2006, endYear: 2012 },
      { team: "Los Angeles Dodgers", startYear: 2012, endYear: 2014 },
      { team: "Boston Red Sox", startYear: 2015, endYear: 2018 },
    ],
  },

  // Colorado Rockies
  "todd-helton": {
    id: "todd-helton",
    name: "Todd Helton",
    teams: [{ team: "Colorado Rockies", startYear: 1997, endYear: 2013 }],
  },
  "larry-walker": {
    id: "larry-walker",
    name: "Larry Walker",
    teams: [
      { team: "Montreal Expos", startYear: 1989, endYear: 1994 },
      { team: "Colorado Rockies", startYear: 1995, endYear: 2004 },
      { team: "St. Louis Cardinals", startYear: 2004, endYear: 2005 },
    ],
  },

  // Baltimore Orioles
  "cal-ripken-jr": {
    id: "cal-ripken-jr",
    name: "Cal Ripken Jr.",
    teams: [{ team: "Baltimore Orioles", startYear: 1981, endYear: 2001 }],
  },
  "eddie-murray": {
    id: "eddie-murray",
    name: "Eddie Murray",
    teams: [
      { team: "Baltimore Orioles", startYear: 1977, endYear: 1988 },
      { team: "Los Angeles Dodgers", startYear: 1989, endYear: 1991 },
      { team: "New York Mets", startYear: 1992, endYear: 1993 },
      { team: "Cleveland Indians", startYear: 1994, endYear: 1996 },
      { team: "Baltimore Orioles", startYear: 1996, endYear: 1997 },
      { team: "Anaheim Angels", startYear: 1997, endYear: 1997 },
    ],
  },

  // Toronto Blue Jays
  "jose-bautista": {
    id: "jose-bautista",
    name: "Jose Bautista",
    teams: [
      { team: "Pittsburgh Pirates", startYear: 2004, endYear: 2008 },
      { team: "Toronto Blue Jays", startYear: 2008, endYear: 2017 },
      { team: "New York Mets", startYear: 2018, endYear: 2018 },
      { team: "Philadelphia Phillies", startYear: 2018, endYear: 2018 },
      { team: "Atlanta Braves", startYear: 2018, endYear: 2018 },
    ],
  },
  "vladimir-guerrero-jr": {
    id: "vladimir-guerrero-jr",
    name: "Vladimir Guerrero Jr.",
    teams: [{ team: "Toronto Blue Jays", startYear: 2019, endYear: 2025 }],
  },

  // Kansas City Royals
  "george-brett": {
    id: "george-brett",
    name: "George Brett",
    teams: [{ team: "Kansas City Royals", startYear: 1973, endYear: 1993 }],
  },
  "salvador-perez": {
    id: "salvador-perez",
    name: "Salvador Perez",
    teams: [{ team: "Kansas City Royals", startYear: 2011, endYear: 2025 }],
  },

  // San Diego Padres
  "tony-gwynn": {
    id: "tony-gwynn",
    name: "Tony Gwynn",
    teams: [{ team: "San Diego Padres", startYear: 1982, endYear: 2001 }],
  },
  "trevor-hoffman": {
    id: "trevor-hoffman",
    name: "Trevor Hoffman",
    teams: [
      { team: "Florida Marlins", startYear: 1993, endYear: 1993 },
      { team: "San Diego Padres", startYear: 1993, endYear: 2008 },
      { team: "Milwaukee Brewers", startYear: 2009, endYear: 2010 },
    ],
  },
  "fernando-tatis-jr": {
    id: "fernando-tatis-jr",
    name: "Fernando Tatis Jr.",
    teams: [{ team: "San Diego Padres", startYear: 2019, endYear: 2025 }],
  },

  // Mike Mussina
  "mike-mussina": {
    id: "mike-mussina",
    name: "Mike Mussina",
    teams: [
      { team: "Baltimore Orioles", startYear: 1991, endYear: 2000 },
      { team: "New York Yankees", startYear: 2001, endYear: 2008 },
    ],
  },

  // Gary Sheffield
  "gary-sheffield": {
    id: "gary-sheffield",
    name: "Gary Sheffield",
    teams: [
      { team: "Milwaukee Brewers", startYear: 1988, endYear: 1991 },
      { team: "San Diego Padres", startYear: 1992, endYear: 1993 },
      { team: "Florida Marlins", startYear: 1993, endYear: 1998 },
      { team: "Los Angeles Dodgers", startYear: 1998, endYear: 2001 },
      { team: "Atlanta Braves", startYear: 2002, endYear: 2003 },
      { team: "New York Yankees", startYear: 2004, endYear: 2006 },
      { team: "Detroit Tigers", startYear: 2007, endYear: 2008 },
      { team: "New York Mets", startYear: 2009, endYear: 2009 },
    ],
  },

  // Vladimir Guerrero Sr.
  "vladimir-guerrero": {
    id: "vladimir-guerrero",
    name: "Vladimir Guerrero",
    teams: [
      { team: "Montreal Expos", startYear: 1996, endYear: 2003 },
      { team: "Anaheim Angels", startYear: 2004, endYear: 2009 },
      { team: "Texas Rangers", startYear: 2010, endYear: 2010 },
      { team: "Baltimore Orioles", startYear: 2011, endYear: 2011 },
    ],
  },
};

// ─── Extended Player Database (generated by scripts/build-players.js) ────────
// Once you run the script, this import replaces the manual PLAYERS list above
// for autocomplete. The PLAYERS list above is still used for puzzle definitions.

let EXTENDED_PLAYERS: Player[] = [];
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const data = require("./players-data.json") as Array<{
    id: string; name: string;
    teams: { team: string; startYear: number; endYear: number }[];
    careerGames: number; elite: boolean;
  }>;
  EXTENDED_PLAYERS = data.map((p) => ({ id: p.id, name: p.name, teams: p.teams }));
} catch {
  // players-data.json not yet generated — fall back to manual PLAYERS above
}

// Merged lookup: extended DB takes priority, manual PLAYERS fills gaps
export const ALL_PLAYERS: Player[] = EXTENDED_PLAYERS.length > 0
  ? EXTENDED_PLAYERS
  : Object.values(PLAYERS);

// ─── Teammate Validation ──────────────────────────────────────────────────────

export function wereTeammates(playerA: Player, playerB: Player): boolean {
  for (const teamA of playerA.teams) {
    for (const teamB of playerB.teams) {
      if (teamA.team === teamB.team) {
        // Check year overlap
        const overlapStart = Math.max(teamA.startYear, teamB.startYear);
        const overlapEnd = Math.min(teamA.endYear, teamB.endYear);
        if (overlapStart <= overlapEnd) return true;
      }
    }
  }
  return false;
}

export function findPlayerByName(name: string): Player | null {
  const normalized = name.toLowerCase().trim();
  // Prefer manual PLAYERS so bookend IDs match for puzzle completion
  const manual = Object.values(PLAYERS).find(
    (p) => p.name.toLowerCase() === normalized
  );
  if (manual) return manual;
  return (
    ALL_PLAYERS.find(
      (p) =>
        p.name.toLowerCase() === normalized ||
        p.id === normalized.replace(/\s+/g, "-")
    ) ?? null
  );
}

// ─── Daily Puzzles (5 days) ───────────────────────────────────────────────────

export const PUZZLES: Puzzle[] = [
  {
    id: "puzzle-1",
    date: "2026-03-11",
    startPlayer: PLAYERS["aaron-judge"],
    endPlayer: PLAYERS["manny-ramirez"],
    par: 2,
    optimalPath: [
      "Aaron Judge",
      "Jacoby Ellsbury",
      "David Ortiz",
    ],
  },
  {
    id: "puzzle-2",
    date: "2026-03-12",
    startPlayer: PLAYERS["mike-trout"],
    endPlayer: PLAYERS["ken-griffey-jr"],
    par: 2,
    optimalPath: [
      "Mike Trout",
      "Josh Hamilton",
      "Adrian Beltre",
    ],
  },
  {
    id: "puzzle-3",
    date: "2026-03-13",
    startPlayer: PLAYERS["randy-johnson"],
    endPlayer: PLAYERS["gerrit-cole"],
    par: 2,
    optimalPath: [
      "Randy Johnson",
      "Derek Jeter",
      "Masahiro Tanaka",
    ],
  },
  {
    id: "puzzle-4",
    date: "2026-03-14",
    startPlayer: PLAYERS["pete-rose"],
    endPlayer: PLAYERS["bryce-harper"],
    par: 4,
    optimalPath: [
      "Pete Rose",
      "Eric Davis",
      "Barry Larkin",
      "Jose Guillen",
      "Ryan Zimmerman",
    ],
  },
  {
    id: "puzzle-5",
    date: "2026-03-15",
    startPlayer: PLAYERS["nolan-ryan"],
    endPlayer: PLAYERS["clayton-kershaw"],
    par: 2,
    optimalPath: [
      "Nolan Ryan",
      "Ivan Rodriguez",
      "Jayson Werth",
    ],
  },
];

export function getTodaysPuzzle(): Puzzle {
  const today = new Date().toISOString().split("T")[0];
  return PUZZLES.find((p) => p.date === today) ?? PUZZLES[0];
}
