function check (n) {
    var check_result = true;
 
    if ( n < 2 ) {
        check_result = false;
    } else if ( n == 2 ) {
        check_result = true;
    } else if ( n % 2 == 0 ) {
        check_result = false;
    } else {
        for (var i = 2; i <= Math.sqrt(n); i ++) {
            if ( n % i == 0 ) {
                check_result = false;
                break;
            }
        }
    }
    return check_result;
}

var result = document.getElementById('result');
result.onclick = function () {
    var n = document.getElementById('n').value*1;
    var print = '';

    for (var i = 1; i <= n; i++) {
        if ( check (i) ){
            print += i + ' ';
        }
    }

    document.getElementById("result1").innerHTML = print;

}

