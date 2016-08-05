dotproduct(f_n,num[0],num[1],num[2],num[3],num[4],num[5]);
answer[0]=f_n[0];
make_pow2size(f_n,num[0],num[1],num[2]);
answer[1]=f_n[0];
make_pow2size(f_n,num[3],num[4],num[5]);
answer[2]=f_n[0];
answer[3]=Math.sqrt(answer[1]*answer[2]);
answer_fixed(2);
str_answer[0]=str_sqrt(answer[1]);
str_answer[1]=str_sqrt(answer[2]);
$( ".question"+question_number+" .answer_result" ).html(
    
    str_span("1) a &bull; b = "+answer[0] +"<br>2) |a| = "+str_answer[0]+"<br>3) |b| = "+str_answer[1]
    +"<br>4) The angle between the vectors a and b : &theta; = arccos( "+answer[0]+" / "+answer[3]+" )")
    
    
    
);