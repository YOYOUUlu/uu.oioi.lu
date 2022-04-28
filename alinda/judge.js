function judge() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "LoveUAlinda") {
     window.location.href = "love.html"
    }else if(unsername == "jackyfzh" || unsername == "Jackyfzh" || unsername == "fzh") {
      window.location.href = "love.html"
    }else {
        alert("给 爷 爬！")
        event.preventDefault();
    }

}
