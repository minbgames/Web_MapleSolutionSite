    function confirm_blank(str){
        var test_blank = false;
        for(var i = 0; i < str.length; i++){
            if(str[i]=="")
            {
                test_blank = true;
            }
        }
        return test_blank;
    }
    
    function change_value(str){
        var confirm_pi = /pi/i;
        for(var i = 0; i < str.length; i++){
            if(confirm_pi.test(str[i]))
            {
                num[i]=eval(str[i].replace(confirm_pi, 'Math.PI'));
            }
            else if(str[i]=='-'){
                num[i]=-1;
            }
            else
            {
                try{
                    num[i]=eval(str[i]);
                }
                catch(e){
                    num[i]=str[i];
                }
                
            }
            
        }
    }
    
    function answer_fixed(num){
        for(var i = 0; i < answer.length; i++){
           answer[i]=parseFloat(answer[i]).toFixed(num);
        }
    }
    
    
    function variable_save(question_number){
        var i = 0;
        while(1){
            str[i] = $(".question"+question_number+" .var"+i.toString()).val();
            if(str[i]== null){
                break;
            }
            i++;
        }
    }
    
    function change_wolframalpha(str){
        var confirm_plus = /\+/g;
        var confirm_divide = /\//g;
        var confirm_equal= /\=/g;
        if(confirm_plus.test(str)){
            str=str.replace(confirm_plus, '%2B');
        }
        if(confirm_divide.test(str)){
            str=str.replace(confirm_divide, '%2F');
        }
        if(confirm_equal.test(str)){
            str=str.replace(confirm_equal, '%3D');
        }
        return "<a href='https://www.wolframalpha.com/input/?i="
                +str
                +"' target='_blank'>wolfram alpha 자세한 답안 보기 click</a>";
    }
    
    
    /****************수학 공식들 **********************/
    
    
    function crossproduct(f_n,a,b,c,d,e,f){
        f_n[0] = b*f-e*c;
        f_n[1] = -a*f+d*c;
        f_n[2] = a*e-b*d;
    }//외적 공식
    
    function dotproduct(f_n,a,b,c,d,e,f){
        f_n[0] = a*d+b*e+c*f;
    }//내적 공식
    
    function simultaneous_equations(f_n,a,b,c,d,e,f){
        f_n[0] = (e*c-b*f)/(a*e-b*d);
        f_n[1] = (a*f-d*c)/(b*d-a*e);
    }//2차원 연립 방정식 구하기
    
    function make_vector(f_n,a,b,c,d,e,f){
        f_n[0] = d-a;
        f_n[1] = e-b;
        f_n[2] = f-c;
    }//벡터 만들기 abc가 시작점 def가 끝점
    
    function make_abssize(f_n,a,b,c){
        f_n[0]=Math.sqrt(Math.pow(a,2)+Math.pow(b,2)+Math.pow(c,2));
    }//크기 구하기
   
    function make_pow2size(f_n,a,b,c){
        f_n[0]=Math.pow(a,2)+Math.pow(b,2)+Math.pow(c,2);
    }//제곱 크기 구하기
    
    
    
    /**************결과 출력 관계 함수********************/
    
    function str_span(str){
        return "<span>"+str+"</span>"
    }
    
    function str_cos(a){
        return "cos( "+a+" )";
    }
    
    function str_sin(a){
        return "sin( "+a+" )";
    }
    
    function str_sqrt(a){
      
            return "sqrt( "+a+" )";
    }
    
    function str_coordinate(a,b,c){
      
            return "( "+a+" , "+b+" , "+c+" )";
    }//좌표를 찍어주는 함수.
    
    function str_plane_equation(mode,a,b,c,d,e,f){
        var total = a*d+b*e+c*f;
        var total2 = -total;
        if(mode==1){
            return  a+"x + "+b+"y + "+c+"z + "+total2+"= 0";
        }
        else{
            return a+"x + "+b+"y + "+c+"z = "+total;
        }
    }
    
    function str_line_equation(mode,a,b,c,d,e,f){
        if(mode==1){
            return "x = "+a+"*t + "+d
                    +" y = "+b+"*t + "+e
                    +" z = "+c+"*t + "+f;
               
        }
        else{
            return "x / "+a+" + "+d+" / "+a +" = "
                    +" y / "+b+" + "+e+" / "+b+" = "
                    +" z / "+c+" + "+f+" / "+c;
                
        }
    }//직선의 방정식(abc가 방향 def가 한점)
    