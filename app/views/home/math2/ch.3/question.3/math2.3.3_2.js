n[0]=num[3]-num[0];
n[1]=num[4]-num[1];
n[2]=num[5]-num[2];

answer[0]=n[0];
answer[1]=n[1];
answer[2]=n[2];

answer[3]=num[0];
answer[4]=num[1];
answer[5]=num[2];

n[3]=-num[0]/n[0];
answer[6]=num[1]+n[1]*n[3];
answer[7]=num[2]+n[2]*n[3];

answer_fixed(0);
$( ".question"+question_number+" .answer_result" ).html(
    
    
    "개발중"
    
    
);