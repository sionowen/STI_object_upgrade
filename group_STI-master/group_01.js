// var atticus = ["Atticus", "2405", "47000", 3];
// var jem = ["Jem", "62347", "63500", 4];
// var boo = ["Boo", "11435", "54000", 3];
// var scout = ["Scout", "6243", "74750", 5];

var Person = function(name, iD, salary, score){
this.name = name;
this.iD = iD;
this.salary = salary;
this.score = score;
}
var atticus = new Person('Atticus', '2405', '47000', 3);
var jem = new Person('Jem', '62347', '63500', 4);
var boo = new Person('Boo', '11435', '54000', 3);
var scout = new Person('Scout', '6243', '74750', 5);
var employees = [atticus, jem, boo, scout];

function getBonus(employee) {
    var bonusPercent = 0;
    var newArray = [];

    newArray[0] = employee.name;

    switch (employee.score) {
        case 0:
        case 1:
        case 2:
            break;
        case 3:
            bonusPercent = 4;
            break;
        case 4:
            bonusPercent = 6;
            break;
        case 5:
            bonusPercent = 10;
            break;
        default:
            alert("Invalid rating for employee " + employee[0]);
    }
    if (employee.iD.length === 4) {
        bonusPercent += 5;
    }
    if (employee.salary > 65000) {
        bonusPercent--;
    }
    if (bonusPercent > 13) {
        bonusPercent = 13;
    }
    if (bonusPercent < 0) {
        bonusPercent = 0;
    }

    newArray[1] = bonusPercent;
    newArray[2] = (Math.round(employee.salary * ((bonusPercent / 100) + 1) * 100)) / 100;
    newArray[3] = Math.round(employee.salary * (bonusPercent / 100));
    return newArray;
}

var outputArray = [];

for (var i = 0; i < employees.length; i++) {
    outputArray = getBonus(employees[i]);
    document.getElementById('table').innerHTML += "<tr> <td> " + outputArray[0] + "</td> <td> "+ outputArray[1] + "</td> <td> " + outputArray[2] + "</td><td> " + outputArray[3] + "</td> </tr>";
}
