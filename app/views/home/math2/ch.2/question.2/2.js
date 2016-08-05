crossproduct(f_n,num[0],num[1],num[2],num[4],num[5],num[6]);
answer[0]=f_n[0];
answer[1]=f_n[1];
answer[2]=f_n[2];
simultaneous_equations(f_n,num[0],num[1],num[3],num[4],num[5],num[7])
answer[3]=f_n[0];
answer[4]=f_n[1];

answer_fixed(0);
str_answer[0] = str_line_equation(2,answer[0],answer[1],answer[2],answer[3],answer[4],0);
$( ".question"+question_number+" .answer_result" ).html(
    
   str_span(str_answer[0])+"<br>"
   +change_wolframalpha(str_answer[0])
);