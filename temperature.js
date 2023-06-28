var Celsius = document.getElementById('Celsius');
var Kelvin = document.getElementById('Kelvin');
var Fahrenheit = document.getElementById('Fahrenheit');
var Centigrade= document.getElementById('Centigrade');

//here is the code for conversion 
Celsius.addEventListener('input',function(){
    let c=this.value;
    let k=(c*1)+273.15;
    let f=(c*9/5)+32;
    let g=c*1;
    
    //conversion;
    Kelvin.value=k ;
    Fahrenheit.value=f;
    Centigrade.value=g;
    

});
Kelvin.addEventListener('input',function(){
    let k=this.value;
    let c = (k*1) - 273.15;
    let g= k-273.15;
    let f=(k- 273.15) * 9/5 + 32 
    
    //conversion
    Celsius.value=c;
    Centigrade.value=g;
    Fahrenheit.value=f;
   
});
Fahrenheit.addEventListener('input',function(){
    let f=this.value;
    let c=(f-32)*5/9;
    let g=(f-32)*5/9;
    let k=(f-32)*5/9 + 273.15;
    
    //conversion
    Celsius.value=c;
    Centigrade.value=g;
    Kelvin.value=k;
   
});
Centigrade.addEventListener('input',function(){
    let g=this.value;
    let k=g+273.15;
    let f=(g*9/5)+32;
    let c=g*1;
    
    //conversion;
    Kelvin.value=k ;
    Fahrenheit.value=f;
    Celsius.value=c;
    

});

