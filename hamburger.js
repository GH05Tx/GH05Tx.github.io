
    function showMenu() {
        var bar=document.getElementsByClassName("field");
        if(!bar[0].classList.contains("active"))    {
            for(let i=0; i<bar.length; i++) { 
                bar[i].classList.add("active");
                }
            }
        
        else if(bar[0].classList.contains("active")) {
            for(let i=0; i<bar.length; i++) {
                bar[i].classList.remove("active");
            }
        }
    }
