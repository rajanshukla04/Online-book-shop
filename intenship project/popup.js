            // POPUP LOGIN PAGE JAVASCRIPT

			document.querySelector('.pop').addEventListener('click',
			function(){
				document.querySelector('.big').style.display="flex";

			});

			document.querySelector('.close').addEventListener('click',
            function(){
                document.querySelector('.big').style.display="none";

             });

			document.getElementById('sign').addEventListener('click',
			function(){
				document.querySelector('.big').style.display="none";
				document.querySelector('.big2').style.display="flex";
			});
			
			// POPUP SIGNUP PAGE JAVASCRIPT

			document.querySelector('.signup').addEventListener('click',
			function(){
				document.querySelector('.big2').style.display="flex";
			});

			document.getElementById('close2').addEventListener('click',
			function(){
			    document.querySelector('.big2').style.display="none";
		    }); 

		    document.getElementById('log').addEventListener('click',
	        function(){
				document.querySelector('.big2').style.display="none";
			    document.querySelector('.big').style.display="flex";
			});
			