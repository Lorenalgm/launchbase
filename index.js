// Criar programa que calcula a média de grades entre os students e exibe na tela

// const name = "Lorena"
// const grade = 9

// const name2 = "Luma"
// const grade2 = 3.5

// const name3 = `Luana e ${name2}`
// const grade3 = 7

// const media = (grade+grade2+grade3)/3

// if(media > 5){
//     console.log(`A média foi de ${media}. Parabéns!`);
// }else{
//     console.log('A média foi menor que 5 :(');
// }

// ------------------------------------------------------

// const student01 = {
//     name: 'Lorena',
//     grade: 4
// }

// console.log(student01.grade);
// ------------------------------------------------------
// const students = [
//     {
//         name: 'Lorena',
//         grade: 5
//     },
//     {
//         name: 'Luana',
//         grade: 9.5
//     }
// ]

// console.log(students[0].grade)

//-------------------------------------------------------

const classA = [
    {
        name: 'Lorena',
        grade: 5
    },
    {
        name: 'Luana',
        grade: 9.5
    }
]

const classB = [
    {
        name: 'Luma',
        grade: 8.9
    },
    {
        name: 'Geovana',
        grade: 10
    },
    {
        name: 'Diego',
        grade: 2
    },
    {
        name: 'Pedro',
        grade: 0
    }
]

function calculateAverage(students) {
    let sum = 0

    for(i = 0; i < students.length; i++){
        sum = sum + students[i].grade
    }
    
    const media = sum / students.length

    return media
}

function sendMessage(media, turma) {
    if(media > 5){
        console.log(`${turma} average: ${media}. Congratulation!`);
    }else{
        console.log(`${turma} average is less than 5 :(`);
    }
}

function markAsFailed(student){
        student.reprovado = false
   
        if(student.grade < 5){
            student.reprovado = true
        }
   }

function sendMessageFailed(student){
    if(student.reprovado){
        console.log(`The student ${student.name} got a(n) ${student.grade} e have failed :(`)
    }
}

function studentFailed(students){
    for(let student of students){
        markAsFailed(student)
        sendMessageFailed(student)
    }
}

const media1 = calculateAverage(classA);
const media2 = calculateAverage(classB);

sendMessage(media1, 'A')
sendMessage(media2, 'B')

studentFailed(classA)
studentFailed(classB)