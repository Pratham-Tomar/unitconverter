        //here the 
        var feet=document.getElementById('feet');
        var inch=document.getElementById('inches');
        var Meters=document.getElementById('Meters');
        var cm=document.getElementById('cm');
        var Yards=document.getElementById('Yards');
        var Kilometers=document.getElementById('Kilometers');
        var Miles=document.getElementById('Miles');
        //here is the code for conversion 
        feet.addEventListener('input',function(){
            //values declared
            let f=  this.value;
            let k= f*12;
            let m=f*0.3048;
            let l=f*30.48;
            let Y=f*0.333333;
            let t=f*0.0003048;
            let e=f*0.000189394;
            //conversion
            inch.value = k;
            Meters.value=m;
            cm.value=l;
            Yards.value=Y;
            Kilometers.value=t;
            Miles.value=e;

        });
        inch.addEventListener('input',function(){
            let i=  this.value;
            let o= i/12;
            let m=i*0.0254;
            let l=i*2.54;
            let Y=i*0.028;
            let t=i*0.000025;
            let e=i*0.000016;
            //conversion
            feet.value = o;
            Meters.value=m;
            cm.value=l;
            Yards.value=Y;
            Kilometers.value=t;
            Miles.value=e;
            
            
         });
         Meters.addEventListener('input',function(){
            let z=  this.value;
            let o= z*3.28;
            let k=z*39.37;
            let l=z*100;
            let Y=z*1.09;
            let t=z*0.00100;
            let e=z*0.00062;
            //conversion
            feet.value = o;
            inch.value = k;
            cm.value=l;
            Yards.value=Y;
            Kilometers.value=t;
            Miles.value=e;
          
         });
         cm.addEventListener('input',function(){
            let h=  this.value;
            let o= h*0.033;
            let k=h*0.39;
            let m=h*0.010;
            let Y=h*0.011;
            let t=h*0.000010;
            let e=h*0.000006;
            //conversion
            feet.value = o;
            inch.value = k;
            Meters.value=m;
            Yards.value=Y;
            Kilometers.value=t;
            Miles.value=e;
            
         });
         Yards.addEventListener('input',function(){
            let Y=  this.value;
            let o= Y*3;
            let k=Y*36;
            let m=Y*0.91;
            let l=Y*91;
            let t=Y*0.00091;
            let e=Y*0.00057;
            //conversion
            feet.value = o;
            inch.value = k;
            Meters.value=m;
            cm.value=l;
            Kilometers.value=t;
            Miles.value=e;
            
         });
         Kilometers.addEventListener('input',function(){
            let t=  this.value;
            let o= t*3281;
            let k=t*39370;
            let m=t*1000;
            let l=t*100000;
            let Y=t*1094;
            let e=t*0.62;
            //conversion
            feet.value = o;
            inch.value = k;
            Meters.value=m;
            cm.value=l;
            Yards.value=Y;
            Miles.value=e;
            
         });
         Miles.addEventListener('input',function(){
            let e=  this.value;
            let o= e*5280;
            let k=e*63360;
            let m=e*1609;
            let l=e*160935;
            let Y=e*1760;
            let t=e*1.61;
            //conversion
            feet.value = o;
            inch.value = k;
            Meters.value=m;
            cm.value=l;
            Yards.value=Y;
            Kilometers.value=t;
            
         });




