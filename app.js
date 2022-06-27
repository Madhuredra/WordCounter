var input = document.getElementById("text");
var words = document.getElementById("words");
var chars = document.getElementById("chars");
var alphaNum = document.getElementById("alphaNum");
var numNum = document.getElementById("numNum")
var specNum = document.getElementById("specNum");
input.addEventListener('keyup',function(e){
    wordCounter(e.target.value);
})
function wordCounter(text) {
    var text = input.value;
    var wordCount = 0;
    var num = 0;
    var spec = 0;
    var alpha = 0;
    for(let i=0;i<text.length;++i){
        if(text.charAt(i)==' '){
            wordCount++;
        }
        else if((text.charAt(i)>='a' && text.charAt(i)<='z') || (text.charAt(i)>='A' && text.charAt(i)<='Z')){
            alpha++;
        }
        else if(text.charAt(i)>='0' && text.charAt(i)<='9'){
            num++;
        }else{
            spec++;
        }
    }
    wordCount++;
    if(text.length==0){
        wordCount = 0;
    }

    words.innerHTML = wordCount;
    chars.innerHTML = text.length;
    alphaNum.innerHTML= alpha;
    numNum.innerHTML= num;
    specNum.innerHTML= spec;
  }