var num = 1;
for (var i = 1; i <= 4; i++) {
    var row = '';
    for (var j = 1; j <= i; j++) {
        row += num++ + '\t';
    }
    console.log(row.trim());
}
