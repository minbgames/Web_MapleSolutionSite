crossproduct(f_n,num[0],num[1],num[2],num[4],num[5],num[6]);
answer[0]=f_n[0];
answer[1]=f_n[1];
answer[2]=f_n[2];
simultaneous_equations(f_n,num[0],num[1],num[3],num[4],num[5],num[7])
answer[3]=f_n[0];
answer[4]=f_n[1];

answer_fixed(0);
$( ".question"+question_number+" .solution_result" ).html(
   
    
"직선의 방정식을 만들기 위해서는 방향벡터와 한점이 필요합니다.<br><br>"
+"뱡향벡터는 두 평면의 법선벡터의 외적으로 구할 수 있고.<br><br>"
+"외적을 통해 나온 방향벡터는 ( "+answer[0]+" , "+answer[1]+" , "+answer[2]+" ) 임을 알 수 있습니다.<br><br>"
+"그렇다면 이제 한 점을 알아야 하는데 문제에 제시한 직선의 방정식을<br><br>"
+"자세히 보면 z 옆에 상수가 없고 그렇다는 뜻은 z = 0 임을 의미 하므로<br><br>"
+"z = 0 을 두 평면의 방정식에 대입하고 연립을 하면 x, y값을 구할 수 있고<br><br>"
+"즉, 한점은 ( "+answer[3]+" , "+answer[4]+" , 0 ) 이므로 한점과 방향벡터를 이용하여<br><br>"
+"직선의 방정식을 구할 수 있습니다.<br>"



);