function getValue(id) {
        return document.getElementById(id).value;
    }
    function checkuser() {
        if(getValue('uname') == "alinda" && getValue('pwd') == "20090223") {
            return true;
        }else {
            alert("Wrong！给 爷 爬！")
            return false;
        }
    }