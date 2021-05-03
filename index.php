<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="main.js"></script>

    <script>
        var stack_p = "";
    </script>

    <title>Open puzzle game</title>
</head>
<body>
    <!-- Open puzzle game -->
    <h1>Open puzzle game</h1>
    <div id="input-start">
        <form action="javascript:get_start();" id="form_start" >
            name : <input type="text" id="player_name" autofocus> 
            <select id="count_number">
                <option value="1">1</option>
                <option value="4">4</option>
                <option value="9">9</option>
                <option value="16">16</option>
            </select>

            <input type="submit">
        </form>
    </div>

    <div id="data">
        <div id="player">
            <h2>
                <p id='data_player_name'></p>
                <p id='data_count_number'></p>
                <p id='Point'></p>
                <p id='Stack_p'></p>
            </h2>
        </div>
    </div>

    <h1>
    <div id="table_game"></div>
    </h1>
    

</body>
</html>