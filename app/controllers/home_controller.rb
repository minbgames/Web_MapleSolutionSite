class HomeController < ApplicationController
    def index
        @subject="home"
        @main_subject="메인 화면"
    end
    
    def physics1
        @subject="physics1"
        @chapter=params[:post_id]
        @main_subject="물리 및 실험1"
        render file: "home/solution"
    end

    def physics2
        @subject="physics2"
        @chapter=params[:post_id]
        @main_subject="물리 및 실험2"
        render file: "home/solution"
    end

    def math1
        @subject="math1"
        @chapter=params[:post_id]
        @main_subject="미적분학1"
        render file: "home/solution"
    end

    def math2
        @subject="math2"
        @chapter=params[:post_id]
        @main_subject="미적분학2"
        @question_count=[0,0,12];
        render file: "home/solution"
    end
end
