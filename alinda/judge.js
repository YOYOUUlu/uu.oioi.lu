function getValue(id) {
        return document.getElementById(id).value;
    }
    function checkuser() {
        if(getValue('uname') == "alinda" && getValue('pwd') == "20090223") {
            return true;
        }else {
            alert("用户名：名字 密码：生日")
            return false;
        }
    }
