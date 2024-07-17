let buttons=document.getElementsByTagName("button");

let output=document.getElementById("output");


for (let i=0;i<buttons.length;i++){
    buttons[i].onclick=function(){
        let input=this.innerText;
        display(input);
    }
}

function display(input){
    if(input!="C" && input!="DEL" && input!="="){
        output.innerHTML+=input;
    }
    else{
        if(input==="C"){
            output.innerHTML=" ";
        }
        else if(input==="DEL"){
            a=output.innerHTML;
            a=a.substring(0,a.length-1);
            output.innerHTML=a;
        }
        else{
            try{
                let finaloutput=output.innerHTML;
                output.innerHTML=eval(finaloutput);
            }
            catch{
                output.innerHTML="ERROR";
            }
            
        }
    }
}
