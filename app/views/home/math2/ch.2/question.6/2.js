crossproduct(f_n,num[0],num[1],num[2],num[3],num[4],num[5]);
answer[0]=f_n[0];
answer[1]=f_n[1];
answer[2]=f_n[2];
crossproduct(f_n,num[3],num[4],num[5],num[0],num[1],num[2]);
answer[3]=f_n[0];
answer[4]=f_n[1];
answer[5]=f_n[2];
answer_fixed(0);
str_answer[0]=str_coordinate(answer[0],answer[1],answer[2]);
str_answer[1]=str_coordinate(answer[3],answer[4],answer[5]);
$( ".question"+question_number+" .answer_result" ).html(
    
    
    str_span("a x b = ")+str_span(str_answer[0])+"<br>"+str_span("b x a = ")+str_span(str_answer[1])
    
);