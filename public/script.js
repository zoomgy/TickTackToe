var matrix = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
var chance = true;
function isOver(one){
    for(var i = 0 ; i < matrix.length ; i++){
        if(matrix[i][0] == one && matrix[i][1] == one && matrix[i][2] == one){
            return true;
        }
    }
    for(var i = 0 ; i < matrix.length ; i++){
        if(matrix[0][i] == one && matrix[1][i] == one && matrix[2][i] == one){
            return true;
        }
    }
    if(matrix[0][0] == one && matrix[1][1]==one && matrix[2][2]==one){
        return true;
    }
    if(matrix[2][0] == one && matrix[1][1]==one && matrix[0][2]==one){
        return true;
    }
    return false;
}
function isComplete(){
    for(var i = 0 ; i < matrix.length ; i++){
        for(var j = 0 ; j < matrix[i].length ; j++){
            if(matrix[i][j]==-1)return false;
        }
    }
    return true;
}
for(var i = 1 ; i <= 9 ; i++){
    var element = ".tile"+i;
    document.querySelector(element).addEventListener("click",(event)=>{
        var elementID ="."+event.target.className.slice(0,5);
        if(chance){
            var number = parseInt(elementID.slice(elementID.length-1));
            document.querySelector(elementID).innerHTML = "<img src=/1.svg>";
            if(number==1){matrix[0][0]=1};
            if(number==2){matrix[0][1]=1};
            if(number==3){matrix[0][2]=1};
            if(number==4){matrix[1][0]=1};
            if(number==5){matrix[1][1]=1};
            if(number==6){matrix[1][2]=1};
            if(number==7){matrix[2][0]=1};
            if(number==8){matrix[2][1]=1};
            if(number==9){matrix[2][2]=1};
            setTimeout(()=>{
                if(isOver(1)){
                    document.querySelector(".main-container").innerHTML = "<h1>Player 1 Wins</h1><a href='/'>Reload</a>";
                }else{
                    if(isComplete()){
                        document.querySelector(".main-container").innerHTML = "<h1>TIED</h1><a href='/'>Reload</a>";
                    }
                }
            },200);
            chance = false;
        }else{
            var number = parseInt(elementID.slice(elementID.length-1));
            document.querySelector(elementID).innerHTML = "<img src=/0.svg>";
            if(number==1){matrix[0][0]=0};
            if(number==2){matrix[0][1]=0};
            if(number==3){matrix[0][2]=0};
            if(number==4){matrix[1][0]=0};
            if(number==5){matrix[1][1]=0};
            if(number==6){matrix[1][2]=0};
            if(number==7){matrix[2][0]=0};
            if(number==8){matrix[2][1]=0};
            if(number==9){matrix[2][2]=0};
            setTimeout(()=>{
                if(isOver(0)){
                    document.querySelector(".main-container").innerHTML = "<h1>Player 2 Wins</h1><a href='/'>Reload</a>";
                }else{
                    if(isComplete()){
                        document.querySelector(".main-container").innerHTML = "<h1>TIED</h1>";
                    }
                }
            },200);
            chance = true;
        }
    })
}