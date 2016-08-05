make_pow2size(f_n,num[0],num[1],num[2]);

answer[0]=f_n[0];
answer[1]=num[0];
answer[2]=num[1];
answer[3]=num[2];

answer_fixed(0);


$( ".question"+question_number+" .answer_result" ).html(
    
    str_span("1) cos &alpha; = "+answer[1]+" / "+str_sqrt(answer[0])
    +"<br>2) cos &beta; = "+answer[2]+" / "+str_sqrt(answer[0])
    +"<br>3) cos &gamma; = "+answer[3]+" / "+str_sqrt(answer[0]))
    
    
    
);