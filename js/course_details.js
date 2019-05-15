

      function getCourse(){
			var angular = document.getElementById("10");
			var html = document.getElementById("11");
			var angular = document.getElementById("12");
			var html = document.getElementById("13");
			var angular = document.getElementById("14");
			var html = document.getElementById("15");

if(angular != null){
			
            var b = document.getElementById("elemB");
		
				document.getElementById(10).innerHTML   ="";
				var names = ['Home','Overview','Environment Setup','Project Setup','Components'];
					var ul = document.createElement('ol');
					document.getElementById('10').appendChild(ul);
	 
					names.forEach(function(name){
							var li = document.createElement('li');
							ul.appendChild(li);
							li.innerHTML += name;
					});

				}

				if(html != null){
			
					var b = document.getElementById("elemB");
					
						document.getElementById(11).innerHTML   ="";
						var names = ['html-Home','html-Overview','Environment Setup','Project Setup','Components'];
							var ul = document.createElement('ol');
							document.getElementById('11').appendChild(ul);
			 
							names.forEach(function(name){
									var li = document.createElement('li');
									ul.appendChild(li);
									li.innerHTML += name;
							});
		
						}
			}
			
			
				
				        //  collapse code 

							var coll = document.getElementsByClassName("collapsible");

							var i , content;
							
							for (i = 0; i < coll.length; i++) {
								coll[i].addEventListener("click", function() {
									this.classList.toggle("active");

								content = this.nextElementSibling;
								alert("content--->"+content)
									if (content.style.maxHeight){
										content.style.maxHeight = null;
									} else {
										content.style.maxHeight = content.scrollHeight + "px";
									} 
								});
							}