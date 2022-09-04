

        let rand = Math.floor(Math.random(1, 10) * 6);

        let misspelled = ['ythonp', 'iasavcrptj', 'plussulpc', 'offeec', 'honep', 'rekmar'];
        var p = document.getElementById("text").innerHTML = misspelled[rand];



        function func() {


            let arr = ['Python', 'javascript', 'cplusplus', 'coffee', 'phone', 'marker'];
            let a = document.getElementById("inp").value;
           
                if (a == arr[rand]) {
                    alert("Welldone!You are correct! 🥇 😄");
                    
                }
                else {
                    alert("Try Again");
                }
          
            document.getElementById("inp").value = "";
            location.reload();

        }