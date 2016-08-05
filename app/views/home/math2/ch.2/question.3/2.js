make_vector(f_n,num[0],num[1],num[2],num[3],num[4],num[5]);
answer[0]=f_n[0];
answer[1]=f_n[1];
answer[2]=f_n[2];
answer[3]=num[0];
answer[4]=num[1];
answer[5]=num[2];
answer[6]=-num[0]/f_n[0]*f_n[1]+num[1];
answer[7]=-num[0]/f_n[0]*f_n[2]+num[2];


answer_fixed(0);
str_answer[0] = str_line_equation(0,answer[0],answer[1],answer[2],answer[3],answer[4],answer[5]);
str_answer[1] = str_line_equation(1,answer[0],answer[1],answer[2],answer[3],answer[4],answer[5]);
str_answer[2] = str_coordinate(0, 0,answer[6],answer[7]);
$( ".question"+question_number+" .answer_result" ).html(
    
    "<span>(a)<br>"+str_answer[0]+"</span><br>"+change_wolframalpha(str_answer[0])
    +"<br><span>"+str_answer[1]+"</span><br>"+change_wolframalpha(str_answer[1])
    +"<br><span>(b)<br>"+str_answer[2]+"</span><br>"+change_wolframalpha(str_answer[2])
    
);