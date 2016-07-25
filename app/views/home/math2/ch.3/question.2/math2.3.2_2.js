crossproduct(f_n,num[0],num[1],num[2],num[4],num[5],num[6]);
answer[0]=f_n[0];
answer[1]=f_n[1];
answer[2]=f_n[2];
simultaneous_equations(f_n,num[0],num[1],num[3],num[4],num[5],num[7])
answer[3]=f_n[0];
answer[4]=f_n[1];


answer_fixed(0);
$( ".question"+question_number+" .answer_result" ).html(
    
    "<span> x / "+answer[0]+" + "+answer[3]+" / "+answer[0]
    +" = "+" y / "+answer[1]+" + "+answer[4]+" / "+answer[1]+" = "
    +" z / "+answer[2]+"</span>"
    
);