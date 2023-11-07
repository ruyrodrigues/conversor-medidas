const conversorFormulas = {

  // Comprimento

  "Milímetro":
  {
    "Centímetro": 0.1,
    "Metro": 0.001,
    "Quilômetro": 1e-6,
    "Pé": 0.00328084,
    "Polegada": 0.0393701
  }
  ,
  "Centímetro":
  {
    "Milímetro": 10,
    "Metro": 0.01,
    "Quilômetro": 1e-5,
    "Pé": 0.0328084,
    "Polegada": 0.393701,
  }
  ,
  "Metro":
  {
    "Milímetro": 1000,
    "Centímetro": 100,
    "Quilômetro": 0.001,
    "Pé": 3.28084,
    "Polegada": 39.3701
  }
  ,
  "Quilômetro":
  {
    "Milímetro": 1000000,
    "Centímetro": 100000,
    "Metro": 1000,
    "Pé": 3280.84,
    "Polegada": 39370.1
  }
  ,
  "Pé":
  {
    "Milímetro": 304.8,
    "Centímetro": 30.48,
    "Metro": 0.3048,
    "Quilômetro": 0.0003048,
    "Polegada": 12
  }
  ,
  "Polegada":
  {
    "Milímetro": 25.4,
    "Centímetro": 2.54,
    "Metro": 0.0254,
    "Quilômetro": 2.54e-5,
    "Pé": 0.0833333
  }
  ,

  // Massa

  "Miligrama":
  {
    "Grama": 1e-3,
    "Quilograma": 1e-6,
    "Libra": 1.5747e-7,
    "Onça": 3.5274e-5
  }
  ,
  "Grama":
  {
    "Miligrama": 1000,
    "Quilograma": 0.001,
    "Libra": 0.00220462,
    "Onça": 0.035274
  }
  ,
  "Quilograma":
  {
    "Miligrama": 1e+6,
    "Grama": 1000,
    "Libra": 2.20462,
    "Onça": 35.274
  }
  ,
  "Libra":
  {
    "Miligrama": 453592,
    "Grama": 453.592,
    "Quilograma": 0.453592,
    "Onça": 16
  }
  ,
  "Onça":
  {
    "Miligrama": 28349.5,
    "Grama": 28.3495,
    "Quilograma": 0.0283495,
    "Libra": 0.0625
  }

}

export default conversorFormulas