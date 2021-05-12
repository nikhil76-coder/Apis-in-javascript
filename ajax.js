
        function loadDoc() {
            var xhttp = new XMLHttpRequest();

            let url = "https://api.zippopotam.us/us/33162";

            xhttp.onreadystatechange = function () {

                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("root").innerHTML = this.responseText;
                }
            };
            xhttp.open("GET", url, true);
            xhttp.send();
        }
        loadDoc();
