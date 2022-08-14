var player = "X";
var numJog = 0;

var audio = new Audio("msc/musica.mp3");
audio.loop = true;


function checkjogo(id){

    audio.play();
    var pc = document.getElementById('cpu').checked;
    var opt = verificaSrc(id);

    if(opt == "transp.png"){
        document.getElementById(id).src = "img/" + player + ".png";
        
        numJog++;
        
        if(winchek() && player == "X"){
            alert("Fim de Jogo!! Vitória do Mário! ")
            return false;
        }
        if(winchek() && player == "O"){
            alert("Fim de Jogo!! Vitória do Luigi ! ")
            return false;
        }
        
        if(numJog >= 9){
            alert("Fim de jogo!! Deu velha!!!");
            return false;
        }
        if(player == "X"){
            player = "O";
        } else {
            player = "X";
        }
    }
   
    if(pc && player == "O"){
        setTimeout(() => {checkjogo(jogoDoPc())}, 400);
    } 


    function jogoDoPc(){
        if(verificaSrc('c5') == "transp.png"){
            return 'c5';
        } 
            return 'c' + Math.floor((Math.random() * 9) + 1); 
    }
}

function verificaSrc(id){
    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);
}

function winchek(){
    //linhas
    if((verificaSrc('c1') == verificaSrc('c2')) && (verificaSrc('c1') == verificaSrc('c3')) && verificaSrc('c1') != "transp.png"){
        return true;
    }
    if((verificaSrc('c4') == verificaSrc('c5')) && (verificaSrc('c4') == verificaSrc('c6')) && verificaSrc('c4') != "transp.png"){
        return true;
    }
    if((verificaSrc('c7') == verificaSrc('c8')) && (verificaSrc('c7') == verificaSrc('c9')) && verificaSrc('c7') != "transp.png"){
        return true;
    }
    //colunas
    if((verificaSrc('c1') == verificaSrc('c4')) && (verificaSrc('c1') == verificaSrc('c7')) && verificaSrc('c1') != "transp.png"){
        return true;
    }
    if((verificaSrc('c2') == verificaSrc('c5')) && (verificaSrc('c2') == verificaSrc('c8')) && verificaSrc('c2') != "transp.png"){
        return true;
    }
    if((verificaSrc('c3') == verificaSrc('c6')) && (verificaSrc('c3') == verificaSrc('c9')) && verificaSrc('c3') != "transp.png"){
        return true;
    }
    //diagonais
    if((verificaSrc('c1') == verificaSrc('c5')) && (verificaSrc('c1') == verificaSrc('c9')) && verificaSrc('c1') != "transp.png"){
        return true;
    }
    if((verificaSrc('c3') == verificaSrc('c5')) && (verificaSrc('c3') == verificaSrc('c7')) && verificaSrc('c3') != "transp.png"){
        return true;
    }
    return false;
}
