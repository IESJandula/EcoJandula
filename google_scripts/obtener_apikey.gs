// indico la url del google sheet
const sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/11BRoqIaOXffdxijnQSf2nwbhEclfnCiHFCaaZ2TGBKU/edit#gid=0");

// metodo que se lanza al realizar una peticion get
function doGet(request) 
{
  return ContentService.createTextOutput(JSON.stringify(getData()));
}

// método que devuelve el valor de la celda indicada
function getData() 
{
  // indico la hoja del google sheet
  var hoja = sheet.getSheetByName("Configuracion");

  // guardo el valor de la celda B1
  apikey = hoja.getRange("B1").getValue();

  // devuelvo la apikey
  return apikey;
}

/** https://script.google.com/macros/s/AKfycbwVvFM9miYiWjFPHaMdi8wX_e8Tc6fGw4wmP_lBiY8mH5NFypBN5SqImhOsFTElbukj/exec */
