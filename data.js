const malla = [
  {
    "codigo": "TRAD1101",
    "nombre": "Fundamentos de la traducción",
    "semestre": 1,
    "creditos": 5,
    "prerreq": []
  },
  {
    "codigo": "TRAD1102",
    "nombre": "Lengua y Cultura Inglesa I",
    "semestre": 1,
    "creditos": 8,
    "prerreq": []
  },
  {
    "codigo": "TRAD1103",
    "nombre": "Fonética Inglesa I",
    "semestre": 1,
    "creditos": 4,
    "prerreq": []
  },
  {
    "codigo": "TRAD1104",
    "nombre": "Informática y Traducción",
    "semestre": 1,
    "creditos": 3,
    "prerreq": []
  },
  {
    "codigo": "TRAD1105",
    "nombre": "Lingüística General",
    "semestre": 1,
    "creditos": 4,
    "prerreq": []
  },
  {
    "codigo": "TRAD1106",
    "nombre": "Español: Lengua y Cultura",
    "semestre": 1,
    "creditos": 6,
    "prerreq": []
  },
  {
    "codigo": "TRAD1107",
    "nombre": "Teoría y Técnicas de Traducción I",
    "semestre": 2,
    "creditos": 6,
    "prerreq": []
  },
  {
    "codigo": "TRAD1108",
    "nombre": "Lengua y Cultura Inglesa II",
    "semestre": 2,
    "creditos": 8,
    "prerreq": []
  },
  {
    "codigo": "TRAD1109",
    "nombre": "Fonética Inglesa II",
    "semestre": 2,
    "creditos": 4,
    "prerreq": [
      "TRAD1103"
    ]
  },
  {
    "codigo": "TRAD1110",
    "nombre": "Documentación y Traducción",
    "semestre": 2,
    "creditos": 3,
    "prerreq": []
  },
  {
    "codigo": "TRAD1111",
    "nombre": "Español: Comprensión de Textos",
    "semestre": 2,
    "creditos": 6,
    "prerreq": [
      "TRAD1106"
    ]
  },
  {
    "codigo": "ELAC",
    "nombre": "Electivo Antropología Cristiana",
    "semestre": 2,
    "creditos": 3,
    "prerreq": []
  },
  {
    "codigo": "TRAD1112",
    "nombre": "Traducción General I",
    "semestre": 3,
    "creditos": 4,
    "prerreq": []
  },
  {
    "codigo": "TRAD1113",
    "nombre": "Lengua y Cultura Inglesa III",
    "semestre": 3,
    "creditos": 8,
    "prerreq": [
      "TRAD1102",
      "TRAD1108"
    ]
  },
  {
    "codigo": "TRAD1114",
    "nombre": "Gramática Inglesa I",
    "semestre": 3,
    "creditos": 4,
    "prerreq": []
  },
  {
    "codigo": "TRAD1115",
    "nombre": "Lingüística y Comunicación",
    "semestre": 3,
    "creditos": 4,
    "prerreq": [
      "TRAD1105"
    ]
  },
  {
    "codigo": "TRAD1116",
    "nombre": "Español: Producción de Textos",
    "semestre": 3,
    "creditos": 6,
    "prerreq": [
      "TRAD1111"
    ]
  },
  {
    "codigo": "ELTE",
    "nombre": "Electivo Teológico",
    "semestre": 3,
    "creditos": 3,
    "prerreq": []
  },
  {
    "codigo": "TRAD1117",
    "nombre": "Traducción General II",
    "semestre": 4,
    "creditos": 4,
    "prerreq": [
      "TRAD1112"
    ]
  },
  {
    "codigo": "TRAD1118",
    "nombre": "Teoría y Técnicas de Traducción II",
    "semestre": 4,
    "creditos": 5,
    "prerreq": [
      "TRAD1107"
    ]
  },
  {
    "codigo": "TRAD1119",
    "nombre": "Lengua y Cultura Inglesa IV",
    "semestre": 4,
    "creditos": 8,
    "prerreq": [
      "TRAD1113"
    ]
  },
  {
    "codigo": "TRAD1120",
    "nombre": "Gramática Inglesa II",
    "semestre": 4,
    "creditos": 4,
    "prerreq": [
      "TRAD1114"
    ]
  },
  {
    "codigo": "TRAD1121",
    "nombre": "Tecnología y Traducción",
    "semestre": 4,
    "creditos": 4,
    "prerreq": [
      "TRAD1101",
      "TRAD1104"
    ]
  },
  {
    "codigo": "TRAD1122",
    "nombre": "Español: Análisis de Textos",
    "semestre": 4,
    "creditos": 6,
    "prerreq": [
      "TRAD1116"
    ]
  },
  {
    "codigo": "TRAD1123",
    "nombre": "Traducción Ciencias Sociales y Humanidades I",
    "semestre": 5,
    "creditos": 4,
    "prerreq": [
      "TRAD1120"
    ]
  },
  {
    "codigo": "TRAD1124",
    "nombre": "Traducción Ciencias y Tecnologías I",
    "semestre": 5,
    "creditos": 4,
    "prerreq": [
      "TRAD1120"
    ]
  },
  {
    "codigo": "TRAD1125",
    "nombre": "Lengua y Cultura Inglesa V",
    "semestre": 5,
    "creditos": 8,
    "prerreq": [
      "TRAD1119"
    ]
  },
  {
    "codigo": "TRAD1126",
    "nombre": "Práctica Inicial",
    "semestre": 5,
    "creditos": 4,
    "prerreq": [
      "TRAD1104",
      "TRAD1117",
      "TRAD1119",
      "TRAD1122"
    ]
  },
  {
    "codigo": "TRAD1127",
    "nombre": "Terminología",
    "semestre": 5,
    "creditos": 5,
    "prerreq": [
      "TRAD1110",
      "TRAD1115"
    ]
  },
  {
    "codigo": "TRAD1128",
    "nombre": "Lingüística y Traducción",
    "semestre": 5,
    "creditos": 5,
    "prerreq": [
      "TRAD1115"
    ]
  },
  {
    "codigo": "TRAD1129",
    "nombre": "Traducción Ciencias Sociales y Humanidades II",
    "semestre": 6,
    "creditos": 5,
    "prerreq": [
      "TRAD1123",
      "TRAD1126"
    ]
  },
  {
    "codigo": "TRAD1130",
    "nombre": "Traducción Ciencias y Tecnologías II",
    "semestre": 6,
    "creditos": 5,
    "prerreq": [
      "TRAD1124",
      "TRAD1126"
    ]
  },
  {
    "codigo": "TRAD1131",
    "nombre": "Lengua y Cultura Inglesa VI",
    "semestre": 6,
    "creditos": 7,
    "prerreq": [
      "TRAD1125"
    ]
  },
  {
    "codigo": "TRAD1132",
    "nombre": "Gramática Inglesa III",
    "semestre": 6,
    "creditos": 4,
    "prerreq": [
      "TRAD1120"
    ]
  },
  {
    "codigo": "TRAD1133",
    "nombre": "Metodología de Investigación en Traducción",
    "semestre": 6,
    "creditos": 5,
    "prerreq": [
      "TRAD1110",
      "TRAD1118"
    ]
  },
  {
    "codigo": "El 1",
    "nombre": "Electivo Diversidad I",
    "semestre": 6,
    "creditos": 3,
    "prerreq": []
  },
  {
    "codigo": "TRAD1134",
    "nombre": "Traducción Ciencias Sociales y Humanidades III",
    "semestre": 7,
    "creditos": 5,
    "prerreq": [
      "TRAD1129"
    ]
  },
  {
    "codigo": "TRAD1135",
    "nombre": "Traducción Ciencias y Tecnologías III",
    "semestre": 7,
    "creditos": 5,
    "prerreq": [
      "TRAD1130"
    ]
  },
  {
    "codigo": "TRAD1136",
    "nombre": "Lengua y Cultura Inglesa VII",
    "semestre": 7,
    "creditos": 7,
    "prerreq": [
      "TRAD1131"
    ]
  },
  {
    "codigo": "TRAD1137",
    "nombre": "Gramática Inglesa IV",
    "semestre": 7,
    "creditos": 4,
    "prerreq": [
      "TRAD1132"
    ]
  },
  {
    "codigo": "TRAD1138",
    "nombre": "Seminario de Grado I",
    "semestre": 7,
    "creditos": 4,
    "prerreq": [
      "TRAD1133"
    ]
  },
  {
    "codigo": "TRAD1139",
    "nombre": "Revisión y Edición de Textos I",
    "semestre": 7,
    "creditos": 5,
    "prerreq": [
      "TRAD1117",
      "TRAD1122"
    ]
  },
  {
    "codigo": "TRAD1140",
    "nombre": "Traducción Ciencias Sociales y Humanidades IV",
    "semestre": 8,
    "creditos": 5,
    "prerreq": [
      "TRAD1134"
    ]
  },
  {
    "codigo": "TRAD1141",
    "nombre": "Traducción Ciencias y Tecnologías IV",
    "semestre": 8,
    "creditos": 5,
    "prerreq": [
      "TRAD1135"
    ]
  },
  {
    "codigo": "TRAD1142",
    "nombre": "Lengua y Cultura Inglesa VIII",
    "semestre": 8,
    "creditos": 7,
    "prerreq": [
      "TRAD1136"
    ]
  },
  {
    "codigo": "TRAD1143",
    "nombre": "Seminario de Grado II",
    "semestre": 8,
    "creditos": 4,
    "prerreq": [
      "TRAD1138",
      "TRAD1128"
    ]
  },
  {
    "codigo": "TRAD1144",
    "nombre": "Revisión y Edición de Textos II",
    "semestre": 8,
    "creditos": 6,
    "prerreq": [
      "TRAD1139"
    ]
  },
  {
    "codigo": "El2",
    "nombre": "Electivo Diversidad II",
    "semestre": 8,
    "creditos": 3,
    "prerreq": []
  },
  {
    "codigo": "TRAD1145",
    "nombre": "Traducción Ciencias Sociales y Humanidades V",
    "semestre": 9,
    "creditos": 5,
    "prerreq": [
      "TRAD1137",
      "TRAD1140"
    ]
  },
  {
    "codigo": "TRAD1146",
    "nombre": "Traducción Ciencias y Tecnologías V",
    "semestre": 9,
    "creditos": 5,
    "prerreq": [
      "TRAD1137",
      "TRAD1141"
    ]
  },
  {
    "codigo": "TRAD1147",
    "nombre": "Lengua y Cultura Inglesa IX",
    "semestre": 9,
    "creditos": 7,
    "prerreq": [
      "TRAD1142"
    ]
  },
  {
    "codigo": "TRAD1148",
    "nombre": "Gestión de Proyectos",
    "semestre": 9,
    "creditos": 6,
    "prerreq": [
      "TRAD1140",
      "TRAD1141",
      "TRAD1144"
    ]
  },
  {
    "codigo": "TRAD1149",
    "nombre": "Traducción Multimedia",
    "semestre": 9,
    "creditos": 4,
    "prerreq": [
      "TRAD1101",
      "TRAD1102",
      "TRAD1103",
      "TRAD1104",
      "TRAD1105",
      "TRAD1106",
      "TRAD1107",
      "TRAD1108",
      "TRAD1109",
      "TRAD1110",
      "TRAD1111",
      "TRAD1112",
      "TRAD1113",
      "TRAD1114",
      "TRAD1115",
      "TRAD1116",
      "TRAD1117",
      "TRAD1118",
      "TRAD1119",
      "TRAD1120",
      "TRAD1121",
      "TRAD1122",
      "TRAD1123",
      "TRAD1124",
      "TRAD1125",
      "TRAD1126",
      "TRAD1127",
      "TRAD1128",
      "TRAD1129",
      "TRAD1130",
      "TRAD1131",
      "TRAD1132",
      "TRAD1133",
      "TRAD1134",
      "TRAD1135",
      "TRAD1136",
      "TRAD1137",
      "TRAD1138",
      "TRAD1139"
    ]
  },
  {
    "codigo": "El3",
    "nombre": "Electivo Diversidad III",
    "semestre": 9,
    "creditos": 3,
    "prerreq": []
  },
  {
    "codigo": "TRAD1150",
    "nombre": "Modalidades de Traducción Avanzada",
    "semestre": 10,
    "creditos": 4,
    "prerreq": [
      "TRAD1101",
      "TRAD1102",
      "TRAD1103",
      "TRAD1104",
      "TRAD1105",
      "TRAD1106",
      "TRAD1107",
      "TRAD1108",
      "TRAD1109",
      "TRAD1110",
      "TRAD1111",
      "TRAD1112",
      "TRAD1113",
      "TRAD1114",
      "TRAD1115",
      "TRAD1116",
      "TRAD1117",
      "TRAD1118",
      "TRAD1119",
      "TRAD1120",
      "TRAD1121",
      "TRAD1122",
      "TRAD1123",
      "TRAD1124",
      "TRAD1125",
      "TRAD1126",
      "TRAD1127",
      "TRAD1128",
      "TRAD1129",
      "TRAD1130",
      "TRAD1131",
      "TRAD1132",
      "TRAD1133",
      "TRAD1134",
      "TRAD1135",
      "TRAD1136",
      "TRAD1137",
      "TRAD1138",
      "TRAD1139",
      "TRAD1140",
      "TRAD1141",
      "TRAD1142",
      "TRAD1143",
      "TRAD1144"
    ]
  },
  {
    "codigo": "TRAD1151",
    "nombre": "Práctica Profesional",
    "semestre": 10,
    "creditos": 23,
    "prerreq": [
      "TRAD1101",
      "TRAD1102",
      "TRAD1103",
      "TRAD1104",
      "TRAD1105",
      "TRAD1106",
      "TRAD1107",
      "TRAD1108",
      "TRAD1109",
      "TRAD1110",
      "TRAD1111",
      "TRAD1112",
      "TRAD1113",
      "TRAD1114",
      "TRAD1115",
      "TRAD1116",
      "TRAD1117",
      "TRAD1118",
      "TRAD1119",
      "TRAD1120",
      "TRAD1121",
      "TRAD1122",
      "TRAD1123",
      "TRAD1124",
      "TRAD1125",
      "TRAD1126",
      "TRAD1127",
      "TRAD1128",
      "TRAD1129",
      "TRAD1130",
      "TRAD1131",
      "TRAD1132",
      "TRAD1133",
      "TRAD1134",
      "TRAD1135",
      "TRAD1136",
      "TRAD1137",
      "TRAD1138",
      "TRAD1139",
      "TRAD1140",
      "TRAD1141",
      "TRAD1142",
      "TRAD1143",
      "TRAD1144",
      "TRAD1145",
      "TRAD1146",
      "TRAD1147",
      "TRAD1148",
      "TRAD1149"
    ]
  },
  {
    "codigo": "IET1433",
    "nombre": "Ética Profesional",
    "semestre": 10,
    "creditos": 3,
    "prerreq": []
  }
];
