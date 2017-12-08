var fibonacci = function (n) {
    if (n == 0) {return 0;}
    if (n == 1) {return 1;}
    else {return finonacci(n - 2) + fibonacci(n - 1);}
}

var gcd = function(a, b) {
    if (a == 0) {return b;}
    if (b == 0) {return a;}
    if (b > a) {return gcd(a, b%a);}
    else {return gcd(b, a%b);}
}

var randomStudent = function() {
    var names = ['Masha', 'Adrian', 'David', 'Eric', 'Josh', 'Jerome', 'Henry', 'Jackie', 'Giorgio', 'Karen', 'Sonal', 'Xavier', 'Bermet', 'Alex', 'Iris', 'Manahal', 'Donia', 'Md', 'Connie', 'Lisa', 'Xing', 'Angelica', 'Angel', 'Augie', 'Dimitriy', 'Yiduo', 'Gordon', 'Tiffany', 'Clive', 'Jonathan', 'Sasha', 'Daniel']
    return names[Math.floor(Math.random() * names.length)];
