function printstars(n) {

    var star = ''
    if (n <= 30) {

        for (var i = 1; i <= n; i++) {
            star += ('\n' + '*')
        }
    } 
    console.log(star)
}

printstars(5)
