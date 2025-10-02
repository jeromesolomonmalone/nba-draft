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
      Rank: 9,
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
    "Stephen Curry": {
      name: "Stephen Curry",
      team: "Golden State Warriors",
      positions: "PG",
      number: 30,
      Rank: 23,
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
      Rank: 27,
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
    "Payton Pritchard": {
      name: "Payton Pritchard",
      team: "Boston Celtics",
      positions: "PG",
      number: 11,
      Rank: 71,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/bgTBqG6xudq3X4isNa7DAw--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10102023/6418.png",
      lastSeasonStats: {
        G: 80,
        Min: "28:23",
        "FG%": 47.2,
        "FT%": 84.5,
        "3PM": 255,
        "3P%": 40.7,
        Pts: 1144,
        Reb: 307,
        Ast: 279,
        Stl: 70,
        Blk: 14,
        TO: 83,
        DD: 5,
        TD: 0,
      },
    },
    "Jalen Suggs": {
      name: "Jalen Suggs",
      team: "Orlando Magic",
      positions: "PG",
      number: 4,
      Rank: 96,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/83tVIt9WMctL7EtLaFs0EQ--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/6516.png",
      lastSeasonStats: {
        G: 35,
        Min: "28:38",
        "FG%": 41.0,
        "FT%": 88.2,
        "3PM": 76,
        "3P%": 31.4,
        Pts: 567,
        Reb: 141,
        Ast: 129,
        Stl: 51,
        Blk: 33,
        TO: 102,
        DD: 0,
        TD: 0,
      },
    },
    "Stephon Castle": {
      name: "Stephon Castle",
      team: "San Antonio Spurs",
      positions: "PG, SG",
      number: 5,
      Rank: 127,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/aLQDUwTsdZ2sDq2f8K5Cpg--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/10290.png",
      lastSeasonStats: {
        G: 81,
        Min: "26:41",
        "FG%": 42.8,
        "FT%": 72.4,
        "3PM": 95,
        "3P%": 28.5,
        Pts: 1190,
        Reb: 297,
        Ast: 332,
        Stl: 74,
        Blk: 22,
        TO: 177,
        DD: 6,
        TD: 0,
      },
    },
    "T.J. McConnell": {
      name: "T.J. McConnell",
      team: "Indiana Pacers",
      positions: "PG",
      number: 9,
      Rank: 161,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/kGwTJlFaDvGmj9mrnjolEA--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/5582.png",
      lastSeasonStats: {
        G: 79,
        Min: "17:55",
        "FG%": 51.9,
        "FT%": 74.0,
        "3PM": 15,
        "3P%": 30.6,
        Pts: 720,
        Reb: 193,
        Ast: 351,
        Stl: 83,
        Blk: 21,
        TO: 109,
        DD: 2,
        TD: 0,
      },
    },
  },
  SG: {
    "Tyler Herro": {
      name: "Tyler Herro",
      team: "Miami Heat",
      positions: "PG, SG",
      number: 14,
      Rank: 70,
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
      Rank: 44,
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
      Rank: 45,
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
    "Dyson Daniels": {
      name: "Dyson Daniels",
      team: "Atlanta Hawks",
      positions: "PG, SG, F",
      number: 5,
      Rank: 46,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/m1OyPDCsGnSa2Sv5NlRVyA--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10212024/6698.png",
      lastSeasonStats: {
        G: 76,
        Min: "33:50",
        "FG%": 49.3,
        "FT%": 59.3,
        "3PM": 80,
        "3P%": 34.0,
        Pts: 1073,
        Reb: 449,
        Ast: 333,
        Stl: 229,
        Blk: 55,
        TO: 155,
        DD: 9,
        TD: 0,
      },
    },
    "Andrew Nembhard": {
      name: "Andrew Nembhard",
      team: "Indiana Pacers",
      positions: "PG, SG",
      number: 2,
      Rank: 72,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/nHD.Gz6tl01.HoWuL3tUzw--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/6721.png",
      lastSeasonStats: {
        G: 65,
        Min: "28:56",
        "FG%": 45.8,
        "FT%": 79.4,
        "3PM": 51,
        "3P%": 29.1,
        Pts: 653,
        Reb: 216,
        Ast: 326,
        Stl: 79,
        Blk: 11,
        TO: 112,
        DD: 2,
        TD: 0,
      },
    },
    "Norman Powell": {
      name: "Norman Powell",
      team: "Miami Heat",
      positions: "SG, SF",
      number: 24,
      Rank: 89,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/7iDOCI.TcN.3FS6Sws5gcg--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/07082025/5506.png",
      lastSeasonStats: {
        G: 60,
        Min: "32:38",
        "FG%": 48.4,
        "FT%": 80.4,
        "3PM": 179,
        "3P%": 41.8,
        Pts: 1306,
        Reb: 190,
        Ast: 125,
        Stl: 73,
        Blk: 9,
        TO: 108,
        DD: 1,
        TD: 0,
      },
    },
    "Donte DiVincenzo": {
      name: "Donte DiVincenzo",
      team: "Minnesota Timberwolves",
      positions: "PG, SG",
      number: 0,
      Rank: 110,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/xfSWuF6_Z9xedaOelpyjJQ--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/6028.png",
      lastSeasonStats: {
        G: 62,
        Min: "25:54",
        "FG%": 42.2,
        "FT%": 77.8,
        "3PM": 174,
        "3P%": 39.7,
        Pts: 723,
        Reb: 228,
        Ast: 225,
        Stl: 73,
        Blk: 17,
        TO: 99,
        DD: 1,
        TD: 0,
      },
    },
    "Jaden Ivey": {
      name: "Jaden Ivey",
      team: "Detroit Pistons",
      positions: "PG, SG",
      number: 23,
      Rank: 119,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/1bK9pmbLin0YmNr9iIZYWQ--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10282024/6695.png",
      lastSeasonStats: {
        G: 30,
        Min: "29:56",
        "FG%": 46.0,
        "FT%": 73.3,
        "3PM": 63,
        "3P%": 40.9,
        Pts: 528,
        Reb: 124,
        Ast: 119,
        Stl: 28,
        Blk: 11,
        TO: 89,
        DD: 0,
        TD: 0,
      },
    },
    "N. Alexander-Walker": {
      name: "N. Alexander-Walker",
      team: "Atlanta Hawks",
      positions: "SG, SF",
      number: 7,
      Rank: 125,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/rly1IE.JPMHru3PmesjYBQ--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/6205.png",
      lastSeasonStats: {
        G: 82,
        Min: "25:17",
        "FG%": 43.8,
        "FT%": 78.0,
        "3PM": 141,
        "3P%": 38.1,
        Pts: 773,
        Reb: 265,
        Ast: 223,
        Stl: 50,
        Blk: 34,
        TO: 99,
        DD: 1,
        TD: 0,
      },
    },
    "Alex Caruso": {
      name: "Alex Caruso",
      team: "Oklahoma City Thunder",
      positions: "SG, SF",
      number: 9,
      Rank: 151,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/bHa3puDbSqU6rDaGT4uIdQ--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/5754.png",
      lastSeasonStats: {
        G: 54,
        Min: "19:17",
        "FG%": 44.6,
        "FT%": 82.4,
        "3PM": 60,
        "3P%": 35.3,
        Pts: 382,
        Reb: 159,
        Ast: 137,
        Stl: 87,
        Blk: 30,
        TO: 37,
        DD: 0,
        TD: 0,
      },
    },
    "Cason Wallace": {
      name: "Cason Wallace",
      team: "Oklahoma City Thunder",
      positions: "PG, SG",
      number: 22,
      Rank: 217,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/uSBvdqZjS88ye.KuMWHWFw--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/10107.png",
      lastSeasonStats: {
        G: 68,
        Min: "27:35",
        "FG%": 48.2,
        "FT%": 79.7,
        "3PM": 74,
        "3P%": 35.6,
        Pts: 568,
        Reb: 229,
        Ast: 173,
        Stl: 120,
        Blk: 35,
        TO: 59,
        DD: 0,
        TD: 0,
      },
    },
    "Aaron Wiggins": {
      name: "Aaron Wiggins",
      team: "Oklahoma City Thunder",
      positions: "SG, SF",
      number: 21,
      Rank: 255,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/JcWF6Ur45.0aznFuOgaacA--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/6597.png",
      lastSeasonStats: {
        G: 76,
        Min: "22:57",
        "FG%": 48.8,
        "FT%": 83.1,
        "3PM": 130,
        "3P%": 38.3,
        Pts: 914,
        Reb: 295,
        Ast: 134,
        Stl: 60,
        Blk: 18,
        TO: 69,
        DD: 0,
        TD: 0,
      },
    },
    "Shaedon Sharpe": {
      name: "Shaedon Sharpe",
      team: "Portland Trail Blazers",
      positions: "SG, SF",
      number: 17,
      Rank: 88,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/iJ7YV7cpC4TdN4_LpB_kRQ--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/6697.png",
      lastSeasonStats: {
        G: 72,
        Min: "31:17",
        "FG%": 45.2,
        "FT%": 78.5,
        "3PM": 147,
        "3P%": 31.1,
        Pts: 1335,
        Reb: 324,
        Ast: 198,
        Stl: 62,
        Blk: 16,
        TO: 150,
        DD: 3,
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
    "Paolo Banchero": {
      name: "Paolo Banchero",
      team: "Orlando Magic",
      positions: "PF, C",
      number: 5,
      Rank: 19,
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
      Rank: 34,
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
      Rank: 33,
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
    "Jaden McDaniels": {
      name: "Jaden McDaniels",
      team: "Minnesota Timberwolves",
      positions: "SF, PF",
      number: 3,
      Rank: 102,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/V_QW0FnmXR4S2XieGUoSMA--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/6420.png",
      lastSeasonStats: {
        G: 82,
        Min: "31:53",
        "FG%": 47.7,
        "FT%": 81.3,
        "3PM": 100,
        "3P%": 33.0,
        Pts: 1000,
        Reb: 470,
        Ast: 163,
        Stl: 110,
        Blk: 74,
        TO: 95,
        DD: 10,
        TD: 0,
      },
    },
    "P.J. Washington": {
      name: "P.J. Washington",
      team: "Dallas Mavericks",
      positions: "SF, PF",
      number: 25,
      Rank: 128,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/f2gXF0zDzb33sA52gXlckQ--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10252024/6174.png",
      lastSeasonStats: {
        G: 57,
        Min: "32:12",
        "FG%": 45.3,
        "FT%": 72.2,
        "3PM": 91,
        "3P%": 38.1,
        Pts: 836,
        Reb: 442,
        Ast: 131,
        Stl: 63,
        Blk: 60,
        TO: 118,
        DD: 14,
        TD: 0,
      },
    },
    "Jeremy Sochan": {
      name: "Jeremy Sochan",
      team: "San Antonio Spurs",
      positions: "PF, C",
      number: 10,
      Rank: 132,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/3y7cOegVTF3sO1bNIcCG9A--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/6699.png",
      lastSeasonStats: {
        G: 54,
        Min: "25:16",
        "FG%": 53.5,
        "FT%": 69.6,
        "3PM": 28,
        "3P%": 30.8,
        Pts: 617,
        Reb: 352,
        Ast: 128,
        Stl: 45,
        Blk: 27,
        TO: 84,
        DD: 8,
        TD: 0,
      },
    },
    "Toumani Camara": {
      name: "Toumani Camara",
      team: "Portland Trail Blazers",
      positions: "SF, PF",
      number: 33,
      Rank: 105,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/XV4X42T8p4jw8fC.yMStfQ--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/10065.png",
      lastSeasonStats: {
        G: 78,
        Min: "32:40",
        "FG%": 45.8,
        "FT%": 72.2,
        "3PM": 135,
        "3P%": 37.5,
        Pts: 882,
        Reb: 450,
        Ast: 175,
        Stl: 116,
        Blk: 50,
        TO: 109,
        DD: 4,
        TD: 0,
      },
    },
    "Anthony Davis": {
      name: "Anthony Davis",
      team: "Dallas Mavericks",
      positions: "PF, C",
      number: 3,
      Rank: 7,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/uj2ZGXaqXotMWbUpAzMLvQ--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/02032025/5007.png",
      lastSeasonStats: {
        G: 42,
        Min: "34:17",
        "FG%": 52.8,
        "FT%": 78.8,
        "3PM": 28,
        "3P%": 29.8,
        Pts: 1081,
        Reb: 499,
        Ast: 141,
        Stl: 54,
        Blk: 90,
        TO: 93,
        DD: 36,
        TD: 1,
      },
    },
    "Kevin Durant": {
      name: "Kevin Durant",
      team: "Houston Rockets",
      positions: "SF, PF",
      number: 7,
      Rank: 14,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/eZEaPl63xhzNsw3yUYepXQ--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/07072025/4244.1.png",
      lastSeasonStats: {
        G: 62,
        Min: "36:32",
        "FG%": 52.7,
        "FT%": 83.9,
        "3PM": 160,
        "3P%": 43.0,
        Pts: 1647,
        Reb: 374,
        Ast: 263,
        Stl: 50,
        Blk: 77,
        TO: 190,
        DD: 5,
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
      Rank: 26,
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
      Rank: 20,
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
      Rank: 31,
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
    "Ausar Thompson": {
      name: "Ausar Thompson",
      team: "Detroit Pistons",
      positions: "SF, PF",
      number: 9,
      Rank: 104,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/0xOSpVOZqD5.UOH1AqEqpw--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10282024/10096.png",
      lastSeasonStats: {
        G: 59,
        Min: "22:31",
        "FG%": 53.5,
        "FT%": 64.1,
        "3PM": 11,
        "3P%": 22.4,
        Pts: 594,
        Reb: 303,
        Ast: 134,
        Stl: 98,
        Blk: 40,
        TO: 80,
        DD: 3,
        TD: 0,
      },
    },
    "Trey Murphy III": {
      name: "Trey Murphy III",
      team: "New Orleans Pelicans",
      positions: "SF, PF",
      number: 25,
      Rank: 37,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/88fY519oxuit3a5VB9uzWQ--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/6559.png",
      lastSeasonStats: {
        G: 53,
        Min: "34:59",
        "FG%": 45.4,
        "FT%": 88.7,
        "3PM": 158,
        "3P%": 36.1,
        Pts: 1124,
        Reb: 268,
        Ast: 188,
        Stl: 56,
        Blk: 39,
        TO: 103,
        DD: 2,
        TD: 0,
      },
    },
    "Mikal Bridges": {
      name: "Mikal Bridges",
      team: "New York Knicks",
      positions: "SF, PF",
      number: 25,
      Rank: 100,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/fPpeQrkHfuU6S4Hly63GWw--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/6021.png",
      lastSeasonStats: {
        G: 82,
        Min: "37:01",
        "FG%": 50.0,
        "FT%": 81.4,
        "3PM": 164,
        "3P%": 35.4,
        Pts: 1444,
        Reb: 259,
        Ast: 306,
        Stl: 75,
        Blk: 43,
        TO: 132,
        DD: 1,
        TD: 0,
      },
    },
    "Herbert Jones": {
      name: "Herbert Jones",
      team: "New Orleans Pelicans",
      positions: "SF, PF",
      number: 2,
      Rank: 147,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/P2IHIeD.grTLgDPe9IF2hA--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/6577.png",
      lastSeasonStats: {
        G: 20,
        Min: "32:24",
        "FG%": 43.6,
        "FT%": 82.5,
        "3PM": 22,
        "3P%": 30.6,
        Pts: 205,
        Reb: 78,
        Ast: 65,
        Stl: 37,
        Blk: 9,
        TO: 35,
        DD: 0,
        TD: 0,
      },
    },
    "Aaron Nesmith": {
      name: "Aaron Nesmith",
      team: "Indiana Pacers",
      positions: "SF",
      number: 23,
      Rank: 148,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/8Mr5m66OmgFNbUyXHRaAnQ--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/6406.png",
      lastSeasonStats: {
        G: 45,
        Min: "24:57",
        "FG%": 50.7,
        "FT%": 91.3,
        "3PM": 84,
        "3P%": 43.1,
        Pts: 541,
        Reb: 178,
        Ast: 54,
        Stl: 35,
        Blk: 17,
        TO: 37,
        DD: 0,
        TD: 0,
      },
    },
    "Luguentz Dort": {
      name: "Luguentz Dort",
      team: "Oklahoma City Thunder",
      positions: "SG, SF",
      number: 5,
      Rank: 176,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/aezPDzb5M_..89jebS7yUg--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/6254.png",
      lastSeasonStats: {
        G: 71,
        Min: "29:12",
        "FG%": 40.8,
        "FT%": 71.7,
        "3PM": 170,
        "3P%": 41.2,
        Pts: 719,
        Reb: 293,
        Ast: 115,
        Stl: 79,
        Blk: 39,
        TO: 51,
        DD: 0,
        TD: 0,
      },
    },
    "Bennedict Mathurin": {
      name: "Bennedict Mathurin",
      team: "Indiana Pacers",
      positions: "SG, SF",
      number: 00,
      Rank: 84,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/lrZAsC719pupPvH65E1sKw--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/6696.png",
      lastSeasonStats: {
        G: 72,
        Min: "29:51",
        "FG%": 45.8,
        "FT%": 83.1,
        "3PM": 98,
        "3P%": 34.0,
        Pts: 1156,
        Reb: 383,
        Ast: 136,
        Stl: 47,
        Blk: 24,
        TO: 135,
        DD: 8,
        TD: 0,
      },
    },
    "Jaime Jaquez Jr.": {
      name: "Jaime Jaquez Jr.",
      team: "Miami Heat",
      positions: "SG, SF",
      number: 11,
      Rank: 198,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/AeUgs_9uPL1EkV8mecn4gw--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/10092.png",
      lastSeasonStats: {
        G: 66,
        Min: "20:44",
        "FG%": 46.1,
        "FT%": 75.4,
        "3PM": 37,
        "3P%": 31.1,
        Pts: 570,
        Reb: 290,
        Ast: 166,
        Stl: 61,
        Blk: 14,
        TO: 98,
        DD: 3,
        TD: 1,
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
      Rank: 21,
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
      Rank: 35,
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
    "Jalen Duren": {
      name: "Jalen Duren",
      team: "Detroit Pistons",
      positions: "C",
      number: 0,
      Rank: 58,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/9_XSkViaPtTKYQlG2BBf2Q--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10282024/6703.png",
      lastSeasonStats: {
        G: 78,
        Min: "26:05",
        "FG%": 69.2,
        "FT%": 66.9,
        "3PM": 0,
        "3P%": 0,
        Pts: 918,
        Reb: 807,
        Ast: 209,
        Stl: 54,
        Blk: 89,
        TO: 136,
        DD: 41,
        TD: 0,
      },
    },
    "Myles Turner": {
      name: "Myles Turner",
      team: "Milwaukee Bucks",
      positions: "C",
      number: 3,
      Rank: 74,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/bTrUtiqUpSMaIDVN4H9tng--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/07072025/5471.png",
      lastSeasonStats: {
        G: 72,
        Min: "30:12",
        "FG%": 48.1,
        "FT%": 77.3,
        "3PM": 156,
        "3P%": 39.6,
        Pts: 1120,
        Reb: 471,
        Ast: 111,
        Stl: 54,
        Blk: 144,
        TO: 123,
        DD: 13,
        TD: 0,
      },
    },
    "Daniel Gafford": {
      name: "Daniel Gafford",
      team: "Dallas Mavericks",
      positions: "C",
      number: 21,
      Rank: 135,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/fkQZAaN9JYJXMVxygeb6JQ--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10252024/6226.png",
      lastSeasonStats: {
        G: 57,
        Min: "21:31",
        "FG%": 70.2,
        "FT%": 68.9,
        "3PM": 0,
        "3P%": 0,
        Pts: 701,
        Reb: 388,
        Ast: 80,
        Stl: 23,
        Blk: 102,
        TO: 66,
        DD: 8,
        TD: 0,
      },
    },
    "Al Horford": {
      name: "Al Horford",
      team: "Golden State Warriors",
      positions: "PF, C",
      number: 42,
      Rank: 141,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/3XI_N10gbiDwHVfus955yA--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10222024/4245.png",
      lastSeasonStats: {
        G: 60,
        Min: "27:38",
        "FG%": 42.3,
        "FT%": 89.5,
        "3PM": 114,
        "3P%": 36.3,
        Pts: 538,
        Reb: 369,
        Ast: 128,
        Stl: 36,
        Blk: 51,
        TO: 46,
        DD: 7,
        TD: 0,
      },
    },
    "Kel'el Ware": {
      name: "Kel'el Ware",
      team: "Miami Heat",
      positions: "PF, C",
      number: 7,
      Rank: 94,
      photo:
        "https://s.yimg.com/iu/api/res/1.2/1ppxkG6sRiD12LNW98mJAg--~B/YXBwaWQ9c2hhcmVkO2ZpPWZpbGw7cT0xMDA7aD0xNjA7dz0xNjA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10292024/10274.png",
      lastSeasonStats: {
        G: 64,
        Min: "22:13",
        "FG%": 55.4,
        "FT%": 68.7,
        "3PM": 35,
        "3P%": 31.5,
        Pts: 595,
        Reb: 473,
        Ast: 60,
        Stl: 39,
        Blk: 71,
        TO: 57,
        DD: 15,
        TD: 0,
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
  "Minnesota Timberwolves": "MIN",
  "New Orleans Pelicans": "NOP",
  "New York Knicks": "NYK",
  "Oklahoma City Thunder": "OKC",
  "Orlando Magic": "ORL",
  "Portland Trail Blazers": "POR",
  "San Antonio Spurs": "SAS",
  "Toronto Raptors": "TOR",
}; // Аббревиатуры клубов
const positions = ["PG", "SG", "G", "SF", "PF", "F", "C"]; // Позиции

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
function fillTeams(select, data) {
  const first = select.firstElementChild;
  Object.keys(data)
    .map((team) => team.split(" ").pop())
    .sort()
    .forEach((abbrev) => {
      const opt = document.createElement("option");
      opt.value = opt.textContent = abbrev;
      select.insertBefore(opt, first);
    });
}
function fillPositions(select, pos) {
  const first = select.firstElementChild;
  pos.forEach((pos) => {
    const opt = document.createElement("option");
    opt.value = opt.textContent = pos;
    select.insertBefore(opt, first);
  });
}
fillTeams(selectTeams, clubAbbreviations); // Команды в select
fillPositions(selectPositions, positions); // Позиции в select

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
