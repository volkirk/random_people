document.getElementById('start').addEventListener('click', function(){
    generate();
})
document.getElementById('clear').addEventListener('click', function(){
    document.getElementById('firstNameOutput').innerText = 'Имя';
    document.getElementById('birthYearOutput').innerText = 'гггг';
    document.getElementById('genderOutput').innerText = `пол`;
    document.getElementById('surnameOutput').innerText = "Фамилия";
    document.getElementById('thirdNameOutput').innerText = "Отчество";
    document.getElementById(`jobOutput`).innerText= 'Профессия';
    document.getElementById(`monthsOutput`).innerText= 'мм';
    document.getElementById(`dayOutput`).innerText= 'дд';
})

function generate()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('genderOutput').innerText = initPerson.gender + ` -`;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('thirdNameOutput').innerText = initPerson.thirdName;
    document.getElementById(`jobOutput`).innerText= initPerson.Job;
    document.getElementById(`monthsOutput`).innerText= initPerson.months;
    document.getElementById(`dayOutput`).innerText= initPerson.day;
};

