/*
Every hour query the weather API and update the DB

...
Past historical data will be filled in differently... or maybe in this same script with certain parameters passed in
ie in shell 
    php -q test.php foo bar
    passed arguments will be stored in $argv, an array 
    [test.php, foo, bar] in this example 
    (what does -q do here?)

    Thinking
    php checkWeatherUpdateDB.php
        (API_Service)
        (StationID)
        (Datebase)
        Table
        type(today, yesterday, specific_date, date_range, next_15_days) -- redundant with Table if I set it up correctly ???






TABLES... with rows and columns... man, JSON seems easier than MySQL in this case
-- Station 1 - Historical Hourly
    what to use for datetime? maybe add a new column infront of datetime, so...
    date datetime
    2022-01-29 00:00:00
    Really... doing this with all the tables seems reasonable

-- Station 1 - Historical Daily
    row # primary key cols datetime, tempmax, tempmin, temp, feelslikemax, feelslikemin, feelslike, dew, humidity, precip, precipcover, windgust, windspeed, winddir, sunrise, sunset, moonphase, conditions, description, icon, stations, source, name
-- Station 1 - Current Conditions
    row # primary key cols datetime, temp, feelslike, humidity, dew, precip, precipprob, snow, snowdepth, preciptype, windgust, windspeed, winddir, pressure, visibility, cloudcover, solarradiation, solarenergy, uvindex, conditions, icon, stations, sunrise, sunset, moonphase, name
-- Station 1 - Next 15 days forecast (daily)
    Refresh/Re-query API Daily, maybe @ 00:00h ?
    row # primary key cols tempmax, tempmin, temp, feelslikemax, feelslikemin, feelslike, dew, humidity, precip, precipprob, precipcover, preciptype, snow, snowdepth, windgust, windspeed, winddir, pressure, cloudcover, visibility, solarradiation, solarenergy, uvindex, severerisk, sunrise, sunset, moonphase, conditions, description, icon, stations, source, name
-- (Station 1 - Next 30 days forecast?)

Clear out old historical data after how long? 3mo?


https://www.kodingmadesimple.com/2014/12/how-to-insert-json-data-into-mysql-php.html
https://www.w3schools.com/php/php_mysql_insert_multiple.asp
https://stackoverflow.com/questions/9802788/call-a-rest-api-in-php
http://guzzle.readthedocs.org/ -- maybe a good option
https://phphttpclient.com/ -- also a good option

*/




/*
Query API
Save data to a variable (object makes most sense) as JSON

    //$curl = curl_init();

    Guzzle
    $client = new GuzzleHttp\Client();
    $res = $client->get('https://api.github.com/user', [
        'auth' =>  ['user', 'pass']
    ]);
    echo $res->getStatusCode();           // 200
    echo $res->getHeader('content-type'); // 'application/json; charset=utf8'
    echo $res->getBody();                 // {"type":"User"...'
    var_export($res->json());             // Outputs the JSON decoded data

    Httpful


    

    convert json object to php associative array
    $data = json_decode($jsondata, true)
*/


/*
Process data to prepare it for upload to DB

    $date = $data['date'];
    $datetime = $data['datetime'];
    ...etc
    $thing = $data['something']['thingaswell'];

    any format changing etc


*/




/*
Send/Save/Upload data to DB
    Connect PHP to DB (MySQL probably)
        $con = mysql_connect("username","password","") or die('Could not connect: ' . mysql_error());
        mysql_select_db("station1_daily", $con);

    Check for / prevent duplicate records by date and datetime

    Insert JSON to MySQL DB
        $sql = "INSERT INTO tbl_station1(date, datetime, etc) VALUES('$date', '$datetime', etc)";
        if(!mysql_query($sql,$con))
        {
            die('Error: ' . mysql_error());
        }

*/