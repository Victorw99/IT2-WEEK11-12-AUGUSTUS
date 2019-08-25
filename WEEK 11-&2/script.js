var tabEen = document.querySelector("#kolom1");
var tabTwee = document.querySelector("#kolom2");
var tabDrie = document.querySelector("#kolom3");
var tabVier = document.querySelector("#kolom4");

tabEen.onclick = function() {
      this.className = "";
      tabTwee.className = "";
      tabDrie.className = "";
}

tabTwee.onclick = function() {
       if (this.className === "kolom2-weg") {
             this.className = "";
             tabDrie.className = "";
       } else {
            tabEen.classList.add("kolom1-weg");
       }
}

tabDrie.onclick = function() {
      if (this.className === "kolom3-weg") {
            this.className = "";
      } else {
            tabEen.classList.add("kolom1-weg");
            tabTwee.classList.add("kolom2-weg");
      }
}

tabVier.onclick = function() {
      tabEen.classList.add("kolom1-weg");
      tabTwee.classList.add("kolom2-weg");
      tabDrie.classList.add("kolom3-weg");
}
