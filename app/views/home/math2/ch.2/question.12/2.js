make_vector(f_n,num[3],num[4],num[5],num[6],num[7],num[8])
n[0]=f_n[0];
n[1]=f_n[1];
n[2]=f_n[2];
dotproduct(f_n,num[0],num[1],num[2],n[0],n[1],n[2]);
answer[0]=f_n[0];
answer_fixed(0);
$( ".question"+question_number+" .answer_result" ).html(
    
   str_span("W = "+answer[0]+" J")
    
);