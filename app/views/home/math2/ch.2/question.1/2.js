answer[0] = num[0];
answer[1] = num[1];
answer[2] = num[2];
answer[3] = num[3];
answer[4] = num[4];
answer[5] = num[5];
answer_fixed(0);
str_answer[0]=str_plane_equation(1,answer[3],answer[4],answer[5],answer[0],answer[1],answer[2]);
$( ".question"+question_number+" .answer_result" ).html(
    
    str_span(str_answer[0])+"<br>"
    +change_wolframalpha(str_answer[0])
    

);