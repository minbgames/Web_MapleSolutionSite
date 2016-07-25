/* 미적분학2 chapter1 1번문제 답 */ 

answer[0] = num[3];
answer[1] = num[4];
answer[2] = num[5];
answer[3] = -(num[0]*num[3]+num[1]*num[4]+num[2]*num[5]);
answer_fixed(0);
$( ".question"+question_number+" .answer_result" ).html(
    
    
    answer[0]+"x + "+answer[1]+"y + "+answer[2]+"z + "+answer[3]+"= 0"

);