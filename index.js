//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers, string) {
    let answer = drivers.filter(newDriver => newDriver.toLowerCase() === string.toLowerCase());
    return answer;
}

function fuzzyMatch(drivers, string2) {
    let answer2 = drivers.filter(randomName => randomName.toLowerCase().indexOf(string2.toLowerCase()) === 0);
    return answer2;
}

function matchName(drivers, string3) {
    let answer3 = drivers.filter((random) => random.name === string3);
    return answer3;
}
