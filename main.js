
const myButton = document.getElementById('1');

myButton.addEventListener('click', () => {
    alert('Про мать было лишнее');
});

 console.log(5);
  console.log(number('5','2'));  
 function number(a,b){
	const c=a+5+'!';
	return c;
 } 
 
 const help=(a,b)=>{
	 console.log('AAAAAAA',a+b);
 };
 help(5,6);
alert('Шутки про мать'); 
setTimeout(()=>{
	alert('Были лишние...');
 },1000);
 setInterval(()=>{
	alert('Бургер кинг говно');
 },1000000000);
 
 const myRoot=document.getElementById('root');
 const myButton2 = document.createElement('button');
 myButton2.innerHTML="Click";
 myRoot.appendChild(myButton2);
 
 let clicks =0;
 const curButton=document.getElementById('counter');
 let name =curButton.innerText + " ";
 curButton.addEventListener('click',()=>{
	 clicks=clicks+1;
	 curButton.innerHTML=name+clicks;
 });
 
 let clicks2=1;
 const rect = document.getElementById('rect');

 rect.addEventListener('click',()=>{
	 rect.style.top=clicks2+"%";
	 rect.style.left=90-clicks2+"%";
	 clicks2++;
 });

 const myButton3 = document.getElementById('clicker');
 let isRotate=false;
 let timerId;
 let count=1;
 myButton3.addEventListener('click',()=>{
	if((!isRotate))
	{
		timerId=setInterval(()=>{
			myButton3.style.position="absolute";
			myButton3.style.transform="rotate("+ count*10 +"deg)";
			myButton3.style.left=count+"%";
			myButton3.style.top=count+"%";
			count++;
		}, 1000);
	}
 })


 


