var Square_Inch =document.getElementById('Square_Inch'); //si
var Square_feet= document.getElementById('Square_feet'); //sf
var Square_yards = document.getElementById('Square_yards'); //sy
var Square_millimetre= document.getElementById('Square_millimetre'); //smi
var Square_decimeter= document.getElementById('Square_decimeter'); //sd
var Square_centimeter= document.getElementById('Square_centimeter'); //sc
var Square_metre=document.getElementById('Square_metre');  //smt
var Square_kilometre=document.getElementById('Square_kilometre'); //sk
var Square_mile=document.getElementById('Square_mile'); //sme
var Hectare = document.getElementById('Hectare'); //h
var Bigha = document.getElementById('Bigha'); //b
var Guntha = document.getElementById('Guntha'); //gu
var Ground= document.getElementById('Ground');  //gr
var Biswa = document.getElementById('Biswa'); //bi
var  Kanal = document.getElementById( 'Kanal'); //k
var Acre =document.getElementById('Acre');  //ac
 //here is the code for conversion 
 Square_Inch.addEventListener('input',function(){
    //values declared
    let si=this.value;
    let sf=si*0.006944;
    let sy=si*0.000772;
    let smi=si*645.16;
    let sd=si*0.064516;
    let sc=si*6.451600;
    let smt=si*0.000645 ;
    let sk=si*6.451600e-10;
    let sme=si*2.49098e-10;
    let h=si*6.451600e-8;
    let b=si*2.572017e-8;
    let gu=si*0.000006;
    let gr=si*0.000003;
    let bi=si*0.000005;
    let k=si*0.000001;
    let ac=si*1.594224e-7;
     //conversion
     Square_feet.value=sf;
    Square_yards.value=sy;
    Square_millimetre.value=smi;
    Square_decimeter.value=sd;
    Square_centimeter.value=sc;
    Square_metre.value=smt;
    Square_kilometre.value=sk;
    Square_mile.value=sme;
    Hectare.value=h;
    Bigha.value=b;
    Guntha.value=gu;
    Ground.value=gr;
    Biswa.value=bi;
    Kanal.value=k;
    Acre.value=ac;  
    
 });
 Square_feet.addEventListener('input',function(){
    //values declared
    let sf=this.value;
    let si=sf*143.999938; 
    let sy=sf*0.111111;
    let smi=sf*92903;
    let sd=sf*9.2903;
    let sc=sf*929.03;
    let smt=sf*0.092903;
    let sk=sf*9.290300e-8;
    let sme=sf*3.586985e-8;
    let h=sf*0.000009;
    let b=sf*0.000037 ;
    let gu=sf*0.000918;
    let gr=sf*0.000458;
    let bi=sf*0.000741;
    let k=sf*0.000184;
    let ac=sf*0.000023;
     //conversion
     Square_Inch.value=si;
    Square_yards.value=sy;
    Square_millimetre.value=smi;
    Square_decimeter.value=sd;
    Square_centimeter.value=sc;
    Square_metre.value=smt;
    Square_kilometre.value=sk;
    Square_mile.value=sme;
    Hectare.value=h;
    Bigha.value=b;
    Guntha.value=gu;
    Ground.value=gr;
    Biswa.value=bi;
    Kanal.value=k;
    Acre.value=ac;  
    
 });
 Square_yards.addEventListener('input',function(){
    //values declared
    let sy=this.value;
    let sf=sy*9.000000;
    let si=sy*1295.999442 ;
    let smi=sy*836127 ;
    let sd=sy*83.6127;
    let sc=sy*8361.270000;
    let smt=sy*0.836127;
    let sk=sy*8.361270e-7 ;
    let sme=sy*3.228286e-7;
    let h=sy*0.000084 ;
    let b=sy*0.006667 ;
    let gu=sy*0.008264 ;
    let gr=sy*0.004119 ;
    let bi=sy*0.006667 ;
    let k=sy*0.001653;
    let ac=sy*0.000207;
     //conversion
     Square_feet.value=sf;
    Square_Inch.value=si;
    Square_millimetre.value=smi;
    Square_decimeter.value=sd;
    Square_centimeter.value=sc;
    Square_metre.value=smt;
    Square_kilometre.value=sk;
    Square_mile.value=sme;
    Hectare.value=h;
    Bigha.value=b;
    Guntha.value=gu;
    Ground.value=gr;
    Biswa.value=bi;
    Kanal.value=k;
    Acre.value=ac;  
    
 });
 Square_millimetre.addEventListener('input',function(){
    //values declared
    let smi=this.value;
    let sf=smi*1.07639e-5;
    let sy=smi*1.19599e-6;
    let si=smi*0.00155;
    let sd=smi*1e-4;
    let sc=smi*0.01;
    let smt=smi*0.000001;
    let sk=smi*1e-12;
    let sme=smi*3.86102e-13;
    let h=smi*1e-10;
    let b=smi*7.4749377893818e-10;
    let gu=smi*9.8842152586866*10-9;
    let gr=smi*4.4849626736291e-9;
    let bi=smi*3.088817269217E-11;
    let k=smi*1.97684e-9;
    let ac=smi*2.47105e-10;
     //conversion
     Square_feet.value=sf;
    Square_yards.value=sy;
    Square_Inch.value=si;
    Square_decimeter.value=sd;
    Square_centimeter.value=sc;
    Square_metre.value=smt;
    Square_kilometre.value=sk;
    Square_mile.value=sme;
    Hectare.value=h;
    Bigha.value=b;
    Guntha.value=gu;
    Ground.value=gr;
    Biswa.value=bi;
    Kanal.value=k;
    Acre.value=ac;  
    
 });
 Square_decimeter.addEventListener('input',function(){
    //values declared
    let sd=this.value;
    let sf=sd*0.107639;
    let sy=sd*0.0119599;
    let smi=sd*10000;
    let si=sd*15.5;
    let sc=sd*100;
    let smt=sd*0.01;
    let sk=sd*1e-8;
    let sme=sd*3.861e-9;
    let h=sd*1e-6;
    let b=sd*0.000006177634540343;
    let gu=sd*9.8842152586866*10-5;
    let gr=sd*0.01;
    let bi=sd*3.088817269217E-7;
    let k=sd*1.97684e-5;
    let ac=sd*2.47105e-6;
     //conversion
     Square_feet.value=sf;
    Square_yards.value=sy;
    Square_millimetre.value=smi;
    Square_Inch.value=si;
    Square_centimeter.value=sc;
    Square_metre.value=smt;
    Square_kilometre.value=sk;
    Square_mile.value=sme;
    Hectare.value=h;
    Bigha.value=b;
    Guntha.value=gu;
    Ground.value=gr;
    Biswa.value=bi;
    Kanal.value=k;
    Acre.value=ac;  
    
 });
 Square_centimeter.addEventListener('input',function(){
    //values declared
    let sc=this.value;
    let sf=sc*0.001076;
    let sy=sc*0.000120 ;
    let smi=sc*100;
    let sd=sc*0.01;
    let si=sc*0.155;
    let smt=sc*0.000100;
    let sk=sc*1.000000e-10 ;
    let sme=sc*3.861000e-11;
    let h=sc*1.000000e-8 ;
    let b=sc*3.986634e-8 ;
    let gu=sc*9.884215e-7 ;
    let gr=sc*4.926108e-7 ;
    let bi=sc*7.973267e-7;
    let k=sc*1.976843e-7;
    let ac=sc*2.471052e-8;
     //conversion
     Square_feet.value=sf;
    Square_yards.value=sy;
    Square_millimetre.value=smi;
    Square_decimeter.value=sd;
    Square_Inch.value=si;
    Square_metre.value=smt;
    Square_kilometre.value=sk;
    Square_mile.value=sme;
    Hectare.value=h;
    Bigha.value=b;
    Guntha.value=gu;
    Ground.value=gr;
    Biswa.value=bi;
    Kanal.value=k;
    Acre.value=ac;  
    
 });
 Square_metre.addEventListener('input',function(){
    //values declared
    let smt=this.value;
    let sf=smt*10.763915;
    let sy=smt*1.195991 ;
    let smi=smt*1000000;
    let sd=smt*100;
    let sc=smt*10000.000000 ;
    let si=smt*1550.003100;
    let sk=smt*0.000001;
    let sme=smt*3.861000e-7 ;
    let h=smt*0.000100 ;
    let b=smt*0.000399 ;
    let gu=smt*0.009884 ;
    let gr=smt*0.004926 ;
    let bi=smt*0.007973 ;
    let k=smt*0.001977 ;
    let ac=smt*0.000247 ;
     //conversion
     Square_feet.value=sf;
    Square_yards.value=sy;
    Square_millimetre.value=smi;
    Square_decimeter.value=sd;
    Square_centimeter.value=sc;
    Square_Inch.value=si;
    Square_kilometre.value=sk;
    Square_mile.value=sme;
    Hectare.value=h;
    Bigha.value=b;
    Guntha.value=gu;
    Ground.value=gr;
    Biswa.value=bi;
    Kanal.value=k;
    Acre.value=ac;  
    
 });
 Square_kilometre.addEventListener('input',function(){
    //values declared
    let sk=this.value;
    let sf=sk*10763915.051182 ;
    let sy=sk*1195990.561242 ;
    let smi=sk*1e+12;
    let sd=sk*1e+8;
    let sc=sk*10000000000.000000 ;
    let smt=sk*1000000.000000;
    let si=sk*1550003100.006200 ;
    let sme=sk*0.386100;
    let h=sk*100.000000 ;
    let b=sk*398.663361;
    let gu=sk*9884.215313 ;
    let gr=sk*4926.108374;
    let bi=sk*7973.266848;
    let k=sk*1976.843258;
    let ac=sk*247.105163;
     //conversion
     Square_feet.value=sf;
    Square_yards.value=sy;
    Square_millimetre.value=smi;
    Square_decimeter.value=sd;
    Square_centimeter.value=sc;
    Square_metre.value=smt;
    Square_Inch.value=si;
    Square_mile.value=sme;
    Hectare.value=h;
    Bigha.value=b;
    Guntha.value=gu;
    Ground.value=gr;
    Biswa.value=bi;
    Kanal.value=k;
    Acre.value=ac;  
    
 });

Square_mile.addEventListener('input',function(){
    //values declared
    let sme=this.value;
    let sf=sme*27878566.892350 ;
    let sy=sme*3097618.543594;
    let smi=sme*2.59e+12;
    let sd=sme*2.59e+8;
    let sc=sme*25900025000.000000 ;
    let smt=sme*2590002.500000 ;
    let sk=sme*2.590003;
    let si=sme*4014511904.023808 ;
    let h=sme*259.000250 ;
    let b=sme*1032.539103 ;
    let gu=sme*25600.142372 ;
    let gr=sme*12758.633005 ;
    let bi=sme*20650.781070;
    let k=sme*5120.028981;
    let ac=sme*640.002990;
     //conversion
     Square_feet.value=sf;
    Square_yards.value=sy;
    Square_millimetre.value=smi;
    Square_decimeter.value=sd;
    Square_centimeter.value=sc;
    Square_metre.value=smt;
    Square_kilometre.value=sk;
    Square_Inch.value=si;
    Hectare.value=h;
    Bigha.value=b;
    Guntha.value=gu;
    Ground.value=gr;
    Biswa.value=bi;
    Kanal.value=k;
    Acre.value=ac;  
    
 });
 Hectare.addEventListener('input',function(){
    //values declared
    let h=this.value;
    let sf=h*107639.150512 ;
    let sy=h*11959.905612 ;
    let smi=h*1e+10;
    let sd=h*1000000;
    let sc=h*100000000.000000;
    let smt=h*10000.000000 ;
    let sk=h*0.010000 ;
    let sme=h*0.003861 ;
    let si=h*15500031.000062 ;
    let b=h*3.986634 ;
    let gu=h*98.842153 ;
    let gr=h*49.261084 ;
    let bi=h*79.732668;
    let k=h*19.768433 ;
    let ac=h*2.471052;
     //conversion
     Square_feet.value=sf;
    Square_yards.value=sy;
    Square_millimetre.value=smi;
    Square_decimeter.value=sd;
    Square_centimeter.value=sc;
    Square_metre.value=smt;
    Square_kilometre.value=sk;
    Square_mile.value=sme;
    Square_Inch.value=si;
    Bigha.value=b;
    Guntha.value=gu;
    Ground.value=gr;
    Biswa.value=bi;
    Kanal.value=k;
    Acre.value=ac;  
    
 });
 Bigha.addEventListener('input',function(){
    //values declared
    let b=this.value
    let sf=b*27000.010764;
    let sy=b*3000.001196;
    let smi=b*1618742568;
    let sd=b*162043.1996;
    let sc=b*25083820.000000 ;
    let smt=b*2508.382000;
    let sk=b*0.002508 ;
    let sme=b*0.000968 ;
    let h=b*0.250838 ;
    let si=b*3887999.876000 ;
    let gu=b*24.793388 ;
    let gr=b*12.356562 ;
    let bi=b*19.999999;
    let k=b*4.958678;
    let ac=b*0.619834;
     //conversion
     Square_feet.value=sf;
    Square_yards.value=sy;
    Square_millimetre.value=smi;
    Square_decimeter.value=sd;
    Square_centimeter.value=sc;
    Square_metre.value=smt;
    Square_kilometre.value=sk;
    Square_mile.value=sme;
    Hectare.value=h;
    Square_Inch.value=si;
    Guntha.value=gu;
    Ground.value=gr;
    Biswa.value=bi;
    Kanal.value=k;
    Acre.value=ac;  
    
 });
 Guntha.addEventListener('input',function(){
    //values declared
    let gu=this.value;
    let sf=gu*1089.000463 ;
    let sy=gu*121.000051;
    let smi=gu*101170000;
    let sd=gu*10117;
    let sc=gu*1011714.100000 ;
    let smt=gu*101.171410;
    let sk=gu*0.000101;
    let sme=gu*0.000039 ;
    let h=gu*0.010117 ;
    let b=gu*0.806667 ;
    let si=gu*156815.999132 ;
    let gr=gu*0.498381 ;
    let bi=gu*0.806667 ;
    let k=gu*0.200000 ;
    let ac=gu*0.025000 ;
     //conversion
     Square_feet.value=sf;
    Square_yards.value=sy;
    Square_millimetre.value=smi;
    Square_decimeter.value=sd;
    Square_centimeter.value=sc;
    Square_metre.value=smt;
    Square_kilometre.value=sk;
    Square_mile.value=sme;
    Hectare.value=h;
    Bigha.value=b;
    Square_Inch.value=si;
    Ground.value=gr;
    Biswa.value=bi;
    Kanal.value=k;
    Acre.value=ac;  
    
 });
 Ground.addEventListener('input',function(){
    //values declared
    let gr=this.value;
    let sf=gr*2185.074755 ;    
    let sy=gr*242.786084 ;
    let smi=gr*222967296;            
    let sd=gr*100;              
    let sc=gr*2030000.000000 ;              
    let smt=gr*203.000000 ;
    let sk=gr*0.000203;
    let sme=gr*0.000078;
    let h=gr* 0.020300 ;              
    let b=gr* 0.080929 ;              
    let gu=gr*2.006496 ;            
    let si=gr*314650.629301 ;              
    let bi=gr*1.618573;
    let k=gr*0.401299;                
    let ac=gr*0.050162;
     //conversion
     Square_feet.value=sf;
    Square_yards.value=sy;
    Square_millimetre.value=smi;
    Square_decimeter.value=sd;
    Square_centimeter.value=sc;
    Square_metre.value=smt;
    Square_kilometre.value=sk;
    Square_mile.value=sme;
    Hectare.value=h;
    Bigha.value=b;
    Guntha.value=gu;
    Square_Inch.value=si;
    Biswa.value=bi;
    Kanal.value=k;
    Acre.value=ac;  
    
 });
 Biswa.addEventListener('input',function(){
    //values declared
    let bi=this.value;
    let sf=bi*1350.000603; 
    let sy=bi*150.000067;
    let smi=bi*32374851370;
    let sd=bi*3237485.137;
    let sc=bi*1254191.060000;
    let smt=bi*125.419106 ;
    let sk=bi*0.000125 ;
    let sme=bi*0.000048 ;
    let h=bi*0.012542 ;
    let b=bi*0.050000 ;
    let gu=bi*1.239669 ;
    let gr=bi*0.617828 ;
    let si=bi*194400.003100 ;
    let k=bi*0.247934 ;
    let ac=bi*0.030992;
     //conversion
     Square_feet.value=sf;
    Square_yards.value=sy;
    Square_millimetre.value=smi;
    Square_decimeter.value=sd;
    Square_centimeter.value=sc;
    Square_metre.value=smt;
    Square_kilometre.value=sk;
    Square_mile.value=sme;
    Hectare.value=h;
    Bigha.value=b;
    Guntha.value=gu;
    Ground.value=gr;
    Square_Inch.value=si;
    Kanal.value=k;
    Acre.value=ac;  
    
 });
 Kanal.addEventListener('input',function(){
    //values declared
    let k=this.value;
    let sf=k*5445.001776 ;
    let sy=k*605.000197 ;
    let smi=k*5.059e+8;
    let sd=k*50585.7;
    let sc=k*5058570.000000 ;
    let smt=k*505.857000 ;
    let sk=k*0.000506 ;
    let sme=k*0.000195 ;
    let h=k*0.050586 ;
    let b=k*0.201667 ;
    let gu=k*5.000000;
    let gr=k*2.491906 ;
    let bi=k*4.033333 ;
    let si=k*0.201667 ;
    let ac=k*0.125000;
     //conversion
     Square_feet.value=sf;
    Square_yards.value=sy;
    Square_millimetre.value=smi;
    Square_decimeter.value=sd;
    Square_centimeter.value=sc;
    Square_metre.value=smt;
    Square_kilometre.value=sk;
    Square_mile.value=sme;
    Hectare.value=h;
    Bigha.value=b;
    Guntha.value=gu;
    Ground.value=gr;
    Biswa.value=bi;
    Square_Inch.value=si;
    Acre.value=ac;  
    
 });
 Acre.addEventListener('input',function(){
    //values declared
    let ac=this.value;
    let sf=ac*43560.057264 ;
    let sy=ac*4840.006363 ;
    let smi=ac*4.047e+9;
    let sd=ac*404686;
    let sc=ac*40468600.000000;
    let smt=ac*4046.860000 ;
    let sk=ac*0.004047 
    let sme=ac*0.001562 ;
    let h=ac*0.404686 ;
    let b=ac*1.613335 ;
    let gu=ac*40.000036 ;
    let gr=ac*19.935271 ;
    let bi=ac*32.266695 ;
    let k=ac*8.000008;
    let si=ac*6272645.545291 ;
     //conversion
     Square_feet.value=sf;
    Square_yards.value=sy;
    Square_millimetre.value=smi;
    Square_decimeter.value=sd;
    Square_centimeter.value=sc;
    Square_metre.value=smt;
    Square_kilometre.value=sk;
    Square_mile.value=sme;
    Hectare.value=h;
    Bigha.value=b;
    Guntha.value=gu;
    Ground.value=gr;
    Biswa.value=bi;
    Kanal.value=k;
    Square_Inch.value=si;  
    
 });









