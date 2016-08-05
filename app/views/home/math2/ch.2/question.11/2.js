answer[0]=num[0]*num[1];
answer[1]=180/num[2];
answer_fixed(0);
$( ".question"+question_number+" .answer_result" ).html(
    
    
    str_span(answer[0]+"*"+str_cos("pi / "+answer[1])+" J")
    
    
);