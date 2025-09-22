const players = {
  PG: {
    "Shai Gilgeous-Alexander": {
      name: "Shai Gilgeous-Alexander",
      team: "Oklahoma City Thunder",
      positions: "PG",
      number: 2,
      Rank: 5,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/NM9YlVt2szZ37mdvRAbu.g--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/6022.png",
      lastSeasonStats: {
        G: 76,
        Min: "34:11",
        "FG%": 51.9,
        "FT%": 89.8,
        "3PM": 163,
        "3P%": 37.5,
        Pts: 2484,
        Reb: 379,
        Ast: 486,
        Stl: 131,
        Blk: 77,
        TO: 183,
        DD: 6,
        TD: 0,
      },
    },
    "Cade Cunningham": {
      name: "Cade Cunningham",
      team: "Detroit Pistons",
      positions: "PG, SG",
      number: 2,
      Rank: 7,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/exAtCyzmoTXFCkxoXiQ3Nw--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10282024/6512.png",
      lastSeasonStats: {
        G: 70,
        Min: "35:02",
        "FG%": 46.9,
        "FT%": 84.6,
        "3PM": 149,
        "3P%": 35.6,
        Pts: 1830,
        Reb: 425,
        Ast: 638,
        Stl: 71,
        Blk: 53,
        TO: 309,
        DD: 31,
        TD: 9,
      },
    },
    "Trae Young": {
      name: "Trae Young",
      team: "Atlanta Hawks",
      positions: "PG, SG",
      number: 11,
      Rank: 11,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/39sAIkEEf6btOFqqQg5CGg--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10212024/6016.png",
      lastSeasonStats: {
        G: 76,
        Min: "36:02",
        "FG%": 41.1,
        "FT%": 87.5,
        "3PM": 218,
        "3P%": 34.0,
        Pts: 1841,
        Reb: 236,
        Ast: 880,
        Stl: 91,
        Blk: 12,
        TO: 355,
        DD: 51,
        TD: 0,
      },
    },
    "Jalen Brunson": {
      name: "Jalen Brunson",
      team: "New York Knicks",
      positions: "PG",
      number: 11,
      Rank: 25,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/A75UGH33dHn5gDCCE6FcPQ--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/6044.png",
      lastSeasonStats: {
        G: 65,
        Min: "35:24",
        "FG%": 48.8,
        "FT%": 82.1,
        "3PM": 152,
        "3P%": 38.3,
        Pts: 1690,
        Reb: 187,
        Ast: 475,
        Stl: 60,
        Blk: 8,
        TO: 164,
        DD: 14,
        TD: 0,
      },
    },
    "Stephen Curry": {
      name: "Stephen Curry",
      team: "Golden State Warriors",
      positions: "PG",
      number: 30,
      Rank: 27,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/HrOwm_ISkIIGHo7ZycOR.g--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/4612.png",
      lastSeasonStats: {
        G: 70,
        Min: "32:10",
        "FG%": 44.8,
        "FT%": 93.3,
        "3PM": 311,
        "3P%": 39.7,
        Pts: 1718,
        Reb: 310,
        Ast: 421,
        Stl: 80,
        Blk: 30,
        TO: 200,
        DD: 9,
        TD: 0,
      },
    },
    "Josh Giddey": {
      name: "Josh Giddey",
      team: "Chicago Bulls",
      positions: "PG, SG",
      number: 3,
      Rank: 35,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/zGB0bnlJASY8MHH.3VhYkg--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10242024/6548.png",
      lastSeasonStats: {
        G: 70,
        Min: "30:15",
        "FG%": 46.5,
        "FT%": 78.1,
        "3PM": 105,
        "3P%": 37.8,
        Pts: 1022,
        Reb: 566,
        Ast: 503,
        Stl: 84,
        Blk: 45,
        TO: 202,
        DD: 30,
        TD: 7,
      },
    },
  },
  SG: {
    "Scottie Barnes": {
      name: "Scottie Barnes",
      team: "Toronto Raptors",
      positions: "SG, SF, PF",
      number: 4,
      Rank: 19,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/SQbMp42NjKLeekaJjS.TIw--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/6515.png",
      lastSeasonStats: {
        G: 65,
        Min: "32:50",
        "FG%": 44.6,
        "FT%": 75.5,
        "3PM": 76,
        "3P%": 27.1,
        Pts: 1252,
        Reb: 502,
        Ast: 378,
        Stl: 93,
        Blk: 63,
        TO: 185,
        DD: 26,
        TD: 1,
      },
    },
    "Tyler Herro": {
      name: "Tyler Herro",
      team: "Miami Heat",
      positions: "PG, SG",
      number: 14,
      Rank: 43,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/4kMyFhAuc6.Sz6aisM.Vew--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/6175.png",
      lastSeasonStats: {
        G: 77,
        Min: "35:23",
        "FG%": 47.2,
        "FT%": 87.8,
        "3PM": 251,
        "3P%": 37.5,
        Pts: 1840,
        Reb: 399,
        Ast: 424,
        Stl: 69,
        Blk: 17,
        TO: 198,
        DD: 9,
        TD: 0,
      },
    },
    "Josh Hart": {
      name: "Josh Hart",
      team: "New York Knicks",
      positions: "SG, SF, PF",
      number: 3,
      Rank: 45,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/rMMVYwF1ZFwLST0GfCx4Hw--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/5843.png",
      lastSeasonStats: {
        G: 77,
        Min: "37:37",
        "FG%": 52.5,
        "FT%": 77.6,
        "3PM": 84,
        "3P%": 33.3,
        Pts: 1051,
        Reb: 737,
        Ast: 453,
        Stl: 119,
        Blk: 27,
        TO: 158,
        DD: 34,
        TD: 9,
      },
    },
    "Derrick White": {
      name: "Derrick White",
      team: "Boston Celtics",
      positions: "PG, SG",
      number: 9,
      Rank: 46,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/LN7xD44IeskEp7FECXKtvw--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10222024/5842.png",
      lastSeasonStats: {
        G: 76,
        Min: "33:52",
        "FG%": 44.2,
        "FT%": 83.9,
        "3PM": 265,
        "3P%": 38.4,
        Pts: 1248,
        Reb: 341,
        Ast: 361,
        Stl: 72,
        Blk: 80,
        TO: 131,
        DD: 4,
        TD: 0,
      },
    },
  },
  PF: {
    "Giannis Antetokounmpo": {
      name: "Giannis Antetokounmpo",
      team: "Milwaukee Bucks",
      positions: "PF, C",
      number: 34,
      Rank: 2,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/GEry1pkEEtsfXbDZJNDINw--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10282024/5185.png",
      lastSeasonStats: {
        G: 67,
        Min: "34:10",
        "FG%": 60.1,
        "FT%": 61.7,
        "3PM": 14,
        "3P%": 22.2,
        Pts: 2036,
        Reb: 798,
        Ast: 433,
        Stl: 58,
        Blk: 78,
        TO: 206,
        DD: 55,
        TD: 11,
      },
    },
    "Anthony Davis": {
      name: "Anthony Davis",
      team: "Dallas Mavericks",
      positions: "PF, C",
      number: 3,
      Rank: 8,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/uj2ZGXaqXotMWbUpAzMLvQ--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/02032025/5007.png",
      lastSeasonStats: {
        G: 51,
        Min: "33:27",
        "FG%": 51.6,
        "FT%": 77.5,
        "3PM": 35,
        "3P%": 28.2,
        Pts: 1261,
        Reb: 590,
        Ast: 181,
        Stl: 59,
        Blk: 110,
        TO: 113,
        DD: 36,
        TD: 1,
      },
    },
    "Paolo Banchero": {
      name: "Paolo Banchero",
      team: "Orlando Magic",
      positions: "PF, C",
      number: 5,
      Rank: 13,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/0mjMfHmGz5Ta64xNrDe_NA--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/6691.png",
      lastSeasonStats: {
        G: 46,
        Min: "34:23",
        "FG%": 45.2,
        "FT%": 72.7,
        "3PM": 87,
        "3P%": 32.0,
        Pts: 1191,
        Reb: 345,
        Ast: 219,
        Stl: 36,
        Blk: 28,
        TO: 136,
        DD: 11,
        TD: 0,
      },
    },
    "Pascal Siakam": {
      name: "Pascal Siakam",
      team: "Indiana Pacers",
      positions: "PF, C",
      number: 43,
      Rank: 24,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/Sb6fQJKv7sNcTFtNWFTHZA--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/5658.png",
      lastSeasonStats: {
        G: 78,
        Min: "32:40",
        "FG%": 51.9,
        "FT%": 73.4,
        "3PM": 126,
        "3P%": 38.9,
        Pts: 1578,
        Reb: 540,
        Ast: 263,
        Stl: 70,
        Blk: 42,
        TO: 109,
        DD: 11,
        TD: 0,
      },
    },
    "Chet Holmgren": {
      name: "Chet Holmgren",
      team: "Oklahoma City Thunder",
      positions: "PF, C",
      number: 7,
      Rank: 32,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/UQ.v8bynxoNsY3dnkKe0Ng--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/6692.png",
      lastSeasonStats: {
        G: 32,
        Min: "27:24",
        "FG%": 49.0,
        "FT%": 75.4,
        "3PM": 44,
        "3P%": 37.9,
        Pts: 479,
        Reb: 257,
        Ast: 63,
        Stl: 23,
        Blk: 71,
        TO: 56,
        DD: 11,
        TD: 0,
      },
    },
  },
  SF: {
    "Jalen Williams": {
      name: "Jalen Williams",
      team: "Oklahoma City Thunder",
      positions: "SF, PF",
      number: 8,
      Rank: 18,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/Gp6ak2G9mybSaicZPwRu3Q--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/6702.png",
      lastSeasonStats: {
        G: 69,
        Min: "32:25",
        "FG%": 48.4,
        "FT%": 78.9,
        "3PM": 124,
        "3P%": 36.5,
        Pts: 1490,
        Reb: 369,
        Ast: 354,
        Stl: 111,
        Blk: 46,
        TO: 150,
        DD: 3,
        TD: 0,
      },
    },
    "Jalen Johnson": {
      name: "Jalen Johnson",
      team: "Atlanta Hawks",
      positions: "SF, PF",
      number: 1,
      Rank: 22,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/DRqFlXQxP7y_eeAOlhseBw--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10212024/6562.png",
      lastSeasonStats: {
        G: 36,
        Min: "35:40",
        "FG%": 50.0,
        "FT%": 74.6,
        "3PM": 44,
        "3P%": 31.2,
        Pts: 680,
        Reb: 359,
        Ast: 181,
        Stl: 56,
        Blk: 36,
        TO: 106,
        DD: 20,
        TD: 1,
      },
    },
    "Amen Thompson": {
      name: "Amen Thompson",
      team: "Houston Rockets",
      positions: "PG, SG, SF",
      number: 1,
      Rank: 38,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/evY6JhVg8UTUX6XOwwQ_VQ--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/10108.png",
      lastSeasonStats: {
        G: 69,
        Min: "32:15",
        "FG%": 55.7,
        "FT%": 68.4,
        "3PM": 25,
        "3P%": 27.5,
        Pts: 970,
        Reb: 564,
        Ast: 265,
        Stl: 97,
        Blk: 89,
        TO: 138,
        DD: 21,
        TD: 3,
      },
    },
  },
  C: {
    "Nikola Jokić": {
      name: "Nikola Jokić",
      team: "Denver Nuggets",
      positions: "C",
      number: 15,
      Rank: 1,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/gABJ8fcfs1PsbnMXySaAsQ--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10282024/5352.png",
      lastSeasonStats: {
        G: 70,
        Min: "34:11",
        "FG%": 57.6,
        "FT%": 80.0,
        "3PM": 138,
        "3P%": 41.7,
        Pts: 2071,
        Reb: 892,
        Ast: 716,
        Stl: 127,
        Blk: 45,
        TO: 230,
        DD: 59,
        TD: 34,
      },
    },
    "Victor Wembanyama": {
      name: "Victor Wembanyama",
      team: "San Antonio Spurs",
      positions: "C",
      number: 1,
      Rank: 3,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/jXu6hmjcQJj7_1FzBVVZ8g--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/10094.png",
      lastSeasonStats: {
        G: 46,
        Min: "33:12",
        "FG%": 47.6,
        "FT%": 83.6,
        "3PM": 142,
        "3P%": 35.2,
        Pts: 1116,
        Reb: 506,
        Ast: 168,
        Stl: 52,
        Blk: 176,
        TO: 149,
        DD: 28,
        TD: 1,
      },
    },
    "Alperen Sengun": {
      name: "Alperen Sengun",
      team: "Houston Rockets",
      positions: "C",
      number: 28,
      Rank: 16,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/9k68bOcTWDdOpUeZrbnIdA--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/6558.png",
      lastSeasonStats: {
        G: 76,
        Min: "31:31",
        "FG%": 49.6,
        "FT%": 69.2,
        "3PM": 21,
        "3P%": 23.3,
        Pts: 1451,
        Reb: 786,
        Ast: 372,
        Stl: 84,
        Blk: 61,
        TO: 194,
        DD: 45,
        TD: 4,
      },
    },
    "Ivica Zubac": {
      name: "Ivica Zubac",
      team: "LA Clippers",
      positions: "C",
      number: 40,
      Rank: 30,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/sTVWTobjinRQlvx.aNi4zQ--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10222024/5663.png",
      lastSeasonStats: {
        G: 80,
        Min: "32:48",
        "FG%": 62.8,
        "FT%": 66.1,
        "3PM": 0,
        "3P%": 0,
        Pts: 1340,
        Reb: 1010,
        Ast: 214,
        Stl: 55,
        Blk: 90,
        TO: 127,
        DD: 59,
        TD: 1,
      },
    },
    "Bam Adebayo": {
      name: "Bam Adebayo",
      team: "Miami Heat",
      positions: "PF, C",
      number: 13,
      Rank: 40,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/aLLZVC9sYWprB9tFeRKbBA--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/5827.png",
      lastSeasonStats: {
        G: 78,
        Min: "34:17",
        "FG%": 48.5,
        "FT%": 76.5,
        "3PM": 79,
        "3P%": 35.7,
        Pts: 1410,
        Reb: 749,
        Ast: 337,
        Stl: 98,
        Blk: 53,
        TO: 161,
        DD: 38,
        TD: 1,
      },
    },
  },
}; // Данные игроков
const statisticTitles = {
  Rank: "Rank",
  G: "Games Played",
  Min: "Minutes Played",
  "FG%": "Field Goal Percentage",
  "FT%": "Free Throw Percentage",
  "3PM": "Three-Points Made",
  "3P%": "Three-Point Percentage",
  Pts: "Points Scored",
  Reb: "Total Rebounds",
  Ast: "Assists",
  Stl: "Steals",
  Blk: "Blocked Shots",
  TO: "Turnovers",
  DD: "Double-doubles",
  TD: "Triple-doubles",
}; // Полные наименования аббревиатур статистики
const clubAbbreviations = {
  "Atlanta Hawks": "ATL",
  "Boston Celtics": "BOS",
  "Chicago Bulls": "CHI",
  "Dallas Mavericks": "DAL",
  "Denver Nuggets": "DEN",
  "Detroit Pistons": "DET",
  "Golden State Warriors": "GSW",
  "Houston Rockets": "HOU",
  "Indiana Pacers": "IND",
  "LA Clippers": "LAC",
  "Miami Heat": "MIA",
  "Milwaukee Bucks": "MIL",
  "New York Knicks": "NYK",
  "Oklahoma City Thunder": "OKC",
  "Orlando Magic": "ORL",
  "San Antonio Spurs": "SAS",
  "Toronto Raptors": "TOR",
}; // Аббревиатуры клубов

let isUpdating = false; // Флаг обновления
let playersCount = 0; // Счетчик игроков

document.addEventListener("DOMContentLoaded", () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }

  setupAndHandleFilter(selectTeams, filterTeams);
  setupAndHandleFilter(selectPositions, filterPositions);

  initializeTable();
}); // Начальная загрузка

const selectTeams = document.querySelector(".select_teams");
const selectPositions = document.querySelector(".select_positions");
function createOptions(
  selectElement,
  dataSource,
  mapFunction = (item) => item,
  options = { sort: false, reverse: false }
) {
  Object.keys(dataSource)
    .map(mapFunction)
    .sort((a, b) => (options.sort ? a.localeCompare(b) : 0))
    .reverse(options.reverse)
    .forEach((item) => {
      const option = document.createElement("option");
      option.value = option.textContent = item;
      selectElement.insertBefore(option, selectElement.firstElementChild);
    });
} // Добавление селектов позиций в HTML
createOptions(selectTeams, clubAbbreviations, (team) => team.split(" ").pop(), {
  sort: true,
  reverse: true,
});
createOptions(selectPositions, players);

const secondLine = document.querySelector(".second_line");
const tableHeaderTemplate = document.querySelector("#table_header").content;
function createTableHeaderRow(key, title) {
  const row = tableHeaderTemplate
    .querySelector(".table_header_row")
    .cloneNode(true);
  const button = row.querySelector(".table_header_button");

  button.textContent = key;
  row.title = title;

  return row;
}
Object.entries(statisticTitles).forEach(([key, title]) => {
  secondLine.append(createTableHeaderRow(key, title));
}); // Создание кнопок в шапке таблицы

const playerRowTemplate = document.querySelector("#player_row").content;
const statsMap = (() => {
  const tr = playerRowTemplate.querySelector("tr");
  const cells = [...tr.querySelectorAll("td:not(:first-child)")];

  return Object.fromEntries(
    Object.entries(statisticTitles).map(([key, title], index) => [
      key,
      {
        title,
        className: cells[index]?.classList[0] || "",
      },
    ])
  );
})(); // Полные наименования аббревиатур статистики + его соответствующие классы из HTML

const searchInput = document.querySelector(".search_input");
const headerButtons = document.querySelectorAll(".table_header_button");
Object.values(players).forEach((positionGroup) => {
  playersCount += Object.entries(positionGroup).length;
}); // Подсчет общего количества игроков
function updatePlayersTable() {
  const searchValue = normalizeString(searchInput.value);
  const selectedTeam = selectTeams.value;
  const defaultTeam = selectTeams.querySelector(
    ".select_teams option[selected]"
  ).value;
  const selectedPosition = selectPositions.value;
  const defaultPosition =
    selectPositions.querySelector("option[selected]").value;

  function normalizeString(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  const flatArray = Object.values(players).flatMap((positionGroup) =>
    Object.entries(positionGroup).map(([name, player]) => ({
      name,
      ...player,
    }))
  );

  let filteredPlayers = flatArray;

  if (searchValue) {
    filteredPlayers = filteredPlayers.filter((player) =>
      normalizeString(player.name).includes(searchValue)
    );
  }

  function applyFilter(value, defaultValue, field, compareFn) {
    if (value !== defaultValue) {
      filteredPlayers = filteredPlayers.filter((player) => {
        return compareFn(player[field], value);
      });
    }
  }
  applyFilter(selectedTeam, defaultTeam, "team", (playerValue, filterValue) =>
    playerValue.toLowerCase().includes(filterValue.toLowerCase())
  );
  applyFilter(
    selectedPosition,
    defaultPosition,
    "positions",
    (playerValue, filterValue) => playerValue.includes(filterValue)
  );

  filteredPlayers.sort((a, b) => {
    let valA, valB;
    const activeButton = Array.from(headerButtons).find((btn) =>
      btn.classList.contains("active-button")
    );
    const sortBy = activeButton?.textContent || "Rank";

    if (sortBy in a.lastSeasonStats) {
      valA = a.lastSeasonStats[sortBy];
      valB = b.lastSeasonStats[sortBy];
      if (sortBy === "Min") {
        const [minA, secA] = valA.split(":").map(Number);
        const [minB, secB] = valB.split(":").map(Number);
        valA = minA * 60 + secA;
        valB = minB * 60 + secB;
      }
    } else if (sortBy in a) {
      valA = a[sortBy];
      valB = b[sortBy];
    } else {
      return 0;
    }

    const isAscending = ["Rank", "TO"].includes(sortBy);

    if (isAscending) {
      return valA - valB;
    } else {
      return valB - valA;
    }
  });

  playersCount = filteredPlayers.length;
  return filteredPlayers;
} // Обновление таблицы игроков

const tableBody = document.querySelector(".table_body");
function createTableRow(item) {
  const player = playerRowTemplate.querySelector(".table_row").cloneNode(true);

  const photo = player.querySelector(".player_photo");
  photo.src = item.photo;
  photo.alt = item.name;
  photo.addEventListener("load", () => {
    photo.style.opacity = "1";
  });

  player.querySelector(".player_name").textContent = item.name;
  player.querySelector(".player_club").textContent =
    clubAbbreviations[item.team];
  player.querySelector(".player_club").title = item.team;
  player.querySelector(".player_position").textContent = item.positions;

  Object.entries(statsMap).forEach(([key, statData]) => {
    const element = player.querySelector(`.${statData.className}`);

    const value = key === "Rank" ? item.Rank : item.lastSeasonStats[key];

    if (key.includes("%")) {
      let numValue = parseFloat(value);
      if (numValue >= 1) {
        numValue /= 100;
      }
      element.textContent = "." + numValue.toFixed(3).replace(/^0\./, "");
    } else if (typeof value === "number" || !isNaN(value)) {
      element.textContent = parseInt(value, 10)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      element.textContent = value;
    }

    if (element.textContent === "0" || element.textContent === ".000") {
      element.classList.add("zero-value");
    }
  });

  return player;
} // Создание строки игрока
function updateRowCounter() {
  const count = playersCount;
  document.querySelector(".counting_rows").textContent = `1-${count}`;
} // Обновление счетчика строк

async function updateTable() {
  if (isUpdating) return;
  isUpdating = true;

  try {
    tableBody.innerHTML = "";
    document.querySelector(".counting_rows").style.display = "none";

    for (let i = 0; i < playersCount; i++) {
      const loaderRow = document.createElement("tr");
      loaderRow.classList.add("loading-row");

      const loaderCell = document.createElement("td");
      loaderCell.setAttribute("colspan", "16");

      const loaderDiv = document.createElement("div");
      loaderCell.appendChild(loaderDiv);

      if (i === playersCount - 1) {
        loaderCell.classList.add("last-loader-td");
      }

      loaderRow.appendChild(loaderCell);
      tableBody.appendChild(loaderRow);
    }

    await new Promise((resolve) => setTimeout(resolve, 300));

    const sortedPlayers = updatePlayersTable();

    tableBody.innerHTML = "";

    sortedPlayers.forEach((player) => {
      tableBody.append(createTableRow(player));
    });

    document.querySelector(".counting_rows").style.display = "flex";

    updateRowCounter();
  } catch (error) {
    console.error("Произошла ошибка:", error);
  } finally {
    isUpdating = false;
  }
} // Обновление таблицы

const clearButton = document.querySelector(".search_clear");
searchInput.addEventListener("input", function () {
  if (this.value.length > 0) {
    clearButton.style.display = "block";
  }
  updateTable();
}); // Поиск
clearButton.addEventListener("click", function () {
  searchInput.value = "";
  updateTable();
}); // Очистка поиска

const filterTeams = document.querySelector(".filter_teams");
const filterPositions = document.querySelector(".filter_positions");
function updateFilterTitle(select, filterContainer) {
  filterContainer.querySelector(".filter_title").textContent = select.value;
}
function setupAndHandleFilter(select, filterContainer) {
  updateFilterTitle(select, filterContainer);
  select.addEventListener("change", (event) => {
    updateFilterTitle(select, filterContainer);
    updateTable();
  });
} // Селекты

headerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    headerButtons.forEach((btn) => {
      btn.classList.remove("active-button");
      btn.disabled = false;
    });

    button.classList.add("active-button");
    button.disabled = true;

    updateTable();
  });
}); // Кнопки фильтров

function initializeTable() {
  const loaderRows = tableBody.querySelectorAll(".loading-row");

  try {
    const sortedPlayers = updatePlayersTable();

    tableBody.innerHTML = "";

    sortedPlayers.forEach((player) => {
      tableBody.append(createTableRow(player));
    });

    document.querySelector(".counting_rows").style.display = "flex";

    updateRowCounter();
  } catch (error) {
    console.error("Ошибка при инициализации таблицы:", error);
  }
} // Начальная отрисовка
