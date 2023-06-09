// indico la url del google sheet
const sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/11BRoqIaOXffdxijnQSf2nwbhEclfnCiHFCaaZ2TGBKU/edit");

// metodo que se lanza al realizar una peticion get
function doGet(request) 
{
  return ContentService.createTextOutput(JSON.stringify(getData()));
}

// metodo que devuelve le valor de la ultima linea del google sheet como una lista
function getData() 
{
  // indico la hoja del google sheet
  var hoja = sheet.getSheetByName("Geolocalizacion");

  // indico cual es la ultima fila ocupada 
  var ultimaFila = hoja.getLastRow();
  // indico cual es la ultima columna ocupada 
  var ultimaColumna = hoja.getLastColumn();

  // guardo una lista de los valores de la ultima fila
  var values = hoja.getRange(ultimaFila, 1, 1, ultimaColumna).getValues();

  // devuelvo el valor de la ultima fila
  return values.flat();
}

/** https://script.google.com/macros/s/AKfycbzjE3qDddl-FzwEcHrPS82XWgAJMoVLiJPo-IKCKrV_AM5Vgk9PExih7TuFHaH3XzQ/exec */