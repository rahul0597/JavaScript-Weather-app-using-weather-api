var button=document.getElementById('btn');
var cityvalue=document.getElementById('cityname');
var tempvalue=document.getElementById('temp');
button.addEventListener('click',function(){
var city=document.getElementById('city').value;
	const api='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=4c72bf1f54a0ac2dbadc784eb5c95cea';
	fetch(api).then(response=>
		response.json()).then(data=> {
			// console.log(data)
			var cityname=data['name'];
			var temperature=data['main']['temp'];
			temperature=(temperature-273);
			temperature=Math.round(temperature);
			cityvalue.innerHTML=cityname;
			tempvalue.innerHTML=temperature+'&#176C';

		});
		
		
	
	
})


