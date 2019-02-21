let imgarr = document.getElementsByTagName("img")

for(let i =0;i<imgarr.length;i++){
    console.log("+++++",imgarr[i])
    imgarr[i].onclick=function(){
        alert("111")
    }
}

