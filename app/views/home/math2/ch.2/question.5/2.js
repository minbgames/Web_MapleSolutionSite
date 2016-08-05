make_vector(f_n,num[0],num[1],num[2],num[3],num[5],num[7]);
n[0]=f_n[0];
n[1]=f_n[1];
n[2]=f_n[2];
crossproduct(f_n,n[0],n[1],n[2],num[4],num[6],num[8]);
answer[0]=f_n[0];
answer[1]=f_n[1];
answer[2]=f_n[2];
answer[3]=num[0];
answer[4]=num[1];
answer[5]=num[2];
answer_fixed(0);
str_answer[0]=str_plane_equation(1,answer[0],answer[1],answer[2],answer[3],answer[4],answer[5]);
$( ".question"+question_number+" .answer_result" ).html(
    
    
    str_span(str_answer[0])+"<br>"+change_wolframalpha(str_answer[0])
    
    
);