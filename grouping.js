var member = [
    "Raihan",
    "Ruly",
    "Gezant",
    "Azki",
    "Ramadan",
    "Andika",
    "Ica",
    "Ikbal",
    "Nasrul",
    "Jafar",
    "Dhika",
    "Yasa",
    "Heikal",
    "Yusuf",
    "Renaldy",
    "Dindin",
    "Ilpi",
    "Rizky",
    "Dimas",
    "Nur",
    "Rais",
    "Zefri",
    "Asep",
    "Ramada",
    "Azka",
    "Naufal",
    "Yoga",
    "Fauzi",
    "Rosa",
    "Ahmad",
    "Arya",
    "Sandy",
];
var group = [];
var jml = member.length / 2;
for (var i = 1; i <= jml; i++) {
    var temp = [];
    while (temp.length < Math.floor(member.length / jml)) {
        var num = Math.floor(Math.random() * member.length);
        if (!temp.includes(member[num])) {
            var found = false;
            for (var j = 0; j < group.length; j++) {
                if (group[j].includes(member[num])) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                temp.push(member[num]);
            }
        }
    }
    group.push(temp);
}
var remainMember = member.filter(function (member) { return !group.flat().includes(member); });
while (remainMember.length > 0) {
    for (var i = 0; i < group.length; i++) {
        if (remainMember.length > 0) {
            var memberIndex = Math.floor(Math.random() * remainMember.length);
            group[i].push(remainMember[memberIndex]);
            remainMember.splice(memberIndex, 1);
        }
    }
}
for (var i = 0; i < group.length; i++) {
    console.log("group ".concat((i + 1).toString()));
    for (var j = 0; j < group[i].length; j++) {
        console.log(group[i][j]);
    }
    console.log();
}
