var player_name = "";
var count_hide = 0;
var game_point = 0;

$(document).ready(function(){
    $('th').click(function () {
        var check_bg = $(this).css("background-color");
        var bg_null = "rgba(0, 0, 0, 0)";

        if(check_bg != bg_null ){
            if(stack_p>1){
                stack_p--;
            }
            if(stack_p==0){
                stack_p = 1;
            }
            $(this).css("background-color", "");
        }

        $('#Stack_p').text('Stack_p : ' + stack_p);
    });
    $('#Stack_p').text('Stack_p : ' + stack_p);
});

function get_start(){
    player_name = $('#player_name').val();
    count_hide = $('#count_number').val();
    //alert(player_name + "\n" + count_hide);

    if(count_hide == 1){
        table_game = "table_1.html";
        stack_p = 1;
    }

    if(count_hide == 4){
        table_game = "table_4.html";
        stack_p = 4;
    }

    if(count_hide == 9){
        table_game = "table_9.html";
        stack_p = 9;
    }
    if(count_hide == 16){
        table_game = "table_16.html";
        stack_p = 16;
    }

    $('#data_player_name').text('Player : ' + player_name);
    $('#data_count_number').text('Card : ' + count_hide);
    $('#Point').text('Point : ' + game_point);
    $('#Stack_p').text('Stack_p : ' + stack_p);

    $('#input-start').hide('slow');
    $("#table_game").load(table_game);
}       