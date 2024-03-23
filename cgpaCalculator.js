let subjectNo = console.log("enter no of subjects : ");
let subjects = new Array(subjectNo);

let elements = console.log("Enter subject grades in Capital letter").split(" ")
if (elements.some(elem => elem !== elem.toLowerCase())) {
    console.warn(`Enter grades in capital letters.`);
    return;
}

for (let i = 0; i < elements.length; i++)
    subjects[i] = elements[i];

let subjectResult = subjectmarks(subjects, true)

let labsNo = console.log("enter no of labs : ");
let labs = new Array(labsNo);

let element = console.log("Enter labs grades in Capital letter").split(" ")

if (elements.some(elem => elem !== elem.toLowerCase())) {
    console.warn(`Enter grades in capital letters.`);
    return;
}

for (let i = 0; i < element.length; i++)
    labs[i] = element[i];

let labResult = subjectmarks(labs, false)

let GPA = (subjectResult + labResult) / 26;
console.log("GPA is : " + GPA.toFixed(2));

function subjectmarks(subjects, isPass) {
    let total = 0;

    for (let index = 0; index < subjects.length; index++) {
        switch (subjects[index]) {
            case "S":
                total += isPass ?
                    10 * 4 : 10 * 2;
                break;
            case "A":
                total += isPass ? 9 * 4 : 9 * 2
                break;
            case "B":
                total += isPass ? 8 * 4 : 8 * 2
                break;
            case "C":
                total += isPass ? 7 * 4 : 7 * 2
                break;
            case "D":
                total += isPass ? 6 * 4 : 6 * 2
                break;
            case "E":
                total += isPass ? 5 * 4 : 5 * 2
                break;
            default:
                console.log(`please enter correct grade`);
        }
    }
    return total;
}