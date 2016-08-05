dotproduct(f_n,num[0],num[2],num[4],num[6],num[7],num[8]);
n[0]=f_n[0];
dotproduct(f_n,num[1],num[3],num[5],num[6],num[7],num[8]);
n[1]=f_n[0];

n[2]=(num[9]-n[0])/n[1];
answer[0]=num[0]+num[1]*n[2];
answer[1]=num[2]+num[3]*n[2];
answer[2]=num[4]+num[5]*n[2];
answer_fixed(8);
str_answer[0]=str_coordinate(0,answer[0],answer[1],answer[2]);
$( ".question"+question_number+" .answer_result" ).html(
    
    
    str_span("( x , y , z ) = ")+str_span(str_answer[0])
    
    
);