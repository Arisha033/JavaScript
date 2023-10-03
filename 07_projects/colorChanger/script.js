const buttonEl = document.querySelectorAll('.button');
const body = document.querySelector('body');
const refresh = document.querySelector(".refresh");

buttonEl.forEach( (button) => {
   // console.log(button);
    button.addEventListener("click", function(e) {
        // console.log(e);
        // console.log(e.target);
        switch (e.target.id) {
            case "gray":
                body.style.backgroundColor = e.target.id
                break;

            case "red":
                body.style.backgroundColor = e.target.id
                break; 

            case "blue":
                body.style.backgroundColor = e.target.id
                break;
                    
            case "yellow":
                body.style.backgroundColor = e.target.id
                break;

            default:
                break;
        }
    });
});


    refresh.addEventListener("click", function(e){
       body.style.backgroundColor = "white"
    });