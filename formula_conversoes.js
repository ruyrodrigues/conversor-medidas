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
  ,

  // Volume
  "Metro Cúbico":
  {
    "Litro": 1000,
    "Mililitro": 1e+6,
    "Galão": 264.172,
    "Quarto": 1056.69,
  }
  ,
  "Litro":
  {
    "Metro Cúbico": 0.001,
    "Mililitro": 1000,
    "Galão": 0.264172,
    "Quarto": 1.05669
  }
  ,
  "Mililitro":
  {
    "Metro Cúbico": 1e-6,
    "Litro": 0.001,
    "Galão": 0.000264172,
    "Quarto": 0.00105669
  }
  ,
  "Galão":
  {
    "Metro Cúbico": 0.00378541,
    "Litro": 3.78541,
    "Mililitro": 3785.41,
    "Quarto": 4
  }
  ,
  "Quarto":
  {
    "Metro Cúbico": 0.000946353,
    "Litro": 0.946353,
    "Mililitro": 946.353,
    "Galão": 0.25
  }
  ,

  // Tempo
  "Segundo":
  {
    "Minuto": 0.0166666667,
    "Hora": 0.0002777778,
    "Dia": 0.0000115741,
    "Semana": 0.0000016534
  }
  ,
  "Minuto":
  {
    "Segundo": 60,
    "Hora": 0.0166667,
    "Dia": 0.0006944444,
    "Semana": 0.0000992063
  }
  ,
  "Hora":
  {
    "Segundo": 3600,
    "Minuto": 60,
    "Dia": 0.0416666667,
    "Semana": 0.0059523808
  }
  ,
  "Dia":
  {
    "Segundo": 86400,
    "Minuto": 1440,
    "Hora": 24,
    "Semana": 0.1428571389
  }
  ,
  "Semana":
  {
    "Segundo": 604800,
    "Minuto": 10080,
    "Hora": 168,
    "Dia": 7
  }
  ,
}

export default conversorFormulas