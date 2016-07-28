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
    
    function crossproduct(f_n,a,b,c,d,e,f){
        f_n[0] = b*f-e*c;
        f_n[1] = -a*f+d*c;
        f_n[2] = a*e-b*d;
    }
    
    function simultaneous_equations(f_n,a,b,c,d,e,f){
        f_n[0] = (e*c-b*f)/(a*e-b*d);
        f_n[1] = (a*f-d*c)/(a*e-b*d);
    }
    
    /*
    function plane_equation(a,b,c,d,e,f){
        var total,test;
        total = -(a*d+b*e+c*f);
        test= (a+"x + "+b+"y + "+c+"z + "+total+"= 0");
        return test;
    {
    
    function line_equation(a,b,c,d,e,f){
        return "<span> x / "+a+" + "+d+" / "+a +" = "+" y / "+b+" + "+e+" / "+b+" = "+" z / "+c+" + "+f+" / "+c+"</span>";
    }
    */