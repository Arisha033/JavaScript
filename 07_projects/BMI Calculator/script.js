const form = document.querySelector("form");
// this usecase will give you empty value
// const height = document.querySelector("#height").value;

form.addEventListener("submit", function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);    
    const results = document.querySelector("#results");    

    if(height === '' || height < 0 || isNaN(height) ){
        results.innerHTML = `Please enter a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight) ){
        results.innerHTML = `Please enter a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2);
            if (bmi < 18.6){
                results.innerHTML = `Your BMI is ${bmi} and you are Under Weight.`
            }  
            else if (18.6 <= bmi > 24.9){
                results.innerHTML = `Your BMI is ${bmi} and you are normal.`
            }   
            else if (24.9 > bmi){
                results.innerHTML = `Your BMI is ${bmi} and you are Over Weight.`
            }    
        }
    });