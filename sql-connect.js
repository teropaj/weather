var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "weather",
  password: "password",
  database: "WeathereService"
});

let data= JSON.parse(`
                      { "stationID": 3,
                      "sensors":
                          [
                              {  "sensor_id":4,
                                 "measurement": 17},
                              {"sensor_id": 5 ,
                              "measurement": 100},
                              {"sensor_id": 6,
                                "measurement": 0}
                          ]
                        }`);

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//
let datenow = new Date(Date.now()).toLocaleString();
//dataPulseReceived(data,datenow);
//data = '{"sensor":12}'
//dataPulseReceived(data,datenow);

//});

function joo() {
  // let sql =`SELECT measurement FROM sensor_data WHERE sensor_ID =${sensor_ID}`
  // con.query(sql, function(error, results){
  //   if(error) console.log("error")
  //   else{
  //     var resultsInJSON = JSON.parse(JSON.stringify(results));
  //     if(resultsInJSON=)
  //   }
  //})
}



//insertSensorData(3, datenow, 3.4);
//insertSensorData(5,datenow, 3.4);
pullSensorData();



// *********



//con.end();

function insertSensorData(sensorID,time,latest_measurement)   {
  con.connect();
  let sql = `INSERT INTO sensor_data
  (time, latest_measurement)
  VALUES (
    "${time}",
    ${latest_measurement}

  )`
  console.log(sql);
  con.query(sql, function(error, results){
    if(error ==true) console.log("something went wrong");
    else console.log("success, here are the results: " + results);
  });
}

function pullSensorData(){
  // let sql = `SELECT * FROM sensor_data`;
  // console.log(sql);
  // con.query("SELECT * FROM sensor_data", function(error, results,fields){
  //   if(error) throw err;
  //   var resultObject = JSON.parse(JSON.stringify(results));
  //   console.log(results);
  // });
    con.connect();

    con.query("SELECT * FROM sensor_data", function (err, result, fields) {
      if (err) throw err;
      var resultObject = JSON.parse(JSON.stringify(result))
      console.log(resultObject);
  });

    con.end();
}

function testDB (){
      con.query('SELECT 1 + 1 AS solution', function (error, results, fields){
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);

      });
}
