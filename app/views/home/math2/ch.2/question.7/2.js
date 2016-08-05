crossproduct(f_n,num[0],num[1],num[2],num[3],num[4],num[5]);
n[0]=f_n[0];
n[1]=f_n[1];
n[2]=f_n[2];
dotproduct(f_n,n[0],n[1],n[2],num[6],num[7],num[8]);
answer[0]=f_n[0];
answer_fixed(0);
$( ".question"+question_number+" .answer_result" ).html(
    
    
    str_span(answer[0])
    
    
);