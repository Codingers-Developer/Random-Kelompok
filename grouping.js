const member = [
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
let group = [];
let jml = member.length / 2;
for (let i = 1; i <= jml; i++) {
    let temp = [];
    while (temp.length < Math.floor(member.length / jml)) {
        let num = Math.floor(Math.random() * member.length);
        if (!temp.includes(member[num])) {
            let found = false;
            for (let j = 0; j < group.length; j++) {
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
let remainMember = member.filter(function (member) { return !group.flat().includes(member); });
while (remainMember.length > 0) {
    for (let i = 0; i < group.length; i++) {
        if (remainMember.length > 0) {
            let memberIndex = Math.floor(Math.random() * remainMember.length);
            group[i].push(remainMember[memberIndex]);
            remainMember.splice(memberIndex, 1);
        }
    }
}
for (let i = 0; i < group.length; i++) {
    console.log("group ".concat((i + 1).toString()));
    for (let j = 0; j < group[i].length; j++) {
        console.log(group[i][j]);
    }
    console.log();
}
