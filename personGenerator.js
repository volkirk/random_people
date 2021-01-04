const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов",
            "id_17": "Дроздова"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 11,
        "list": {     
            "id_1": "Светлана",
            "id_2": "Кристина",
            "id_3": "Александра",
            "id_4": "Олеся",
            "id_5": "Анастасия",
            "id_6": "Виктория",
            "id_7": "Марина",
            "id_8": "Маргарита",
            "id_9": "Полина",
            "id_10": "Юлия",
            "id_11": "Элина"
        }
    }`,
    thirdNameMale: `{
        "count": 10,
        "list": {     
            "id_1": "Олегович",
            "id_2": "Павлович",
            "id_3": "Борисович",
            "id_4": "Кириллович",
            "id_5": "Арсеньевич",
            "id_6": "Геннадьевич",
            "id_7": "Сергеевич",
            "id_8": "Михаилович",
            "id_9": "Леонидович",
            "id_10": "Владимирович"
        }
    }`,
    thirdNameFemale: `{
        "count": 11,
        "list": {     
            "id_1": "Олеговна",
            "id_2": "Павловна",
            "id_3": "Александровна",
            "id_4": "Борисовна",
            "id_5": "Кирилльевна",
            "id_6": "Геннадьевна",
            "id_7": "Сергеевна",
            "id_8": "Михайловна",
            "id_9": "Леодиновна",
            "id_10": "Владимировна",
            "id_11": "Ропавка"
        }
    }`,
    maleJob: `{
        "count": 10,
        "list": {     
            "id_1": "Шахтер",
            "id_2": "Солдат",
            "id_3": "Водитель",
            "id_4": "Слеcарь",
            "id_5": "Охранник",
            "id_6": "Директор Банка",
            "id_7": "Нефтянник",
            "id_8": "Доставщик",
            "id_9": "Моряк",
            "id_10": "Пилот"
        }
    }`,
    femaleJob: `{
        "count": 10,
        "list": {     
            "id_1": "Ткачиха",
            "id_2": "Администратор Кафе",
            "id_3": "Офицант",
            "id_4": "Домохозяйка",
            "id_5": "Врач",
            "id_6": "Учитель",
            "id_7": "Программист",
            "id_8": "Продавец",
            "id_9": "Тренер",
            "id_10": "Менеджер",
            "id_11": "Фотограф"
        }
    }`,
    months: `{
        "count": 12,
        "list": {     
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',
    
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),
    
    randomYear: function(){
        return this.randomIntNumber(1950,2019);
    },
    randomGender: function(){
        if (this.randomIntNumber()==1)
        {return this.GENDER_MALE;}
        else
        {return this.GENDER_FEMALE}
    },
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender=='Женщина')
        return this.randomValue(this.firstNameFemaleJson);
        else 
        return this.randomValue(this.firstNameMaleJson);
    },
    randomJob: function (){
    if (this.person.gender=='Женщина') 
    return this.randomValue(this.femaleJob);
    else 
    return this.randomValue(this.maleJob);
    },
    randomThirdName: function(){
        if (this.person.gender=='Женщина')
        return this.randomValue(this.thirdNameFemale);
        else
        return this.randomValue(this.thirdNameMale);
    },

    randomSurname: function() {

        return this.randomValue(this.surnameJson);

    },
    randomMonth: function(){
        return this.randomValue(this.months);
    },
    randomDay: function() {
        if (this.person.months==1,3,5,7,8,10,12)
        {return this.randomIntNumber(31,1);}
        else if (this.person.months==2)
        {return this.randomIntNumber(28,1);}
        else return this.randomIntNumber(30,1);
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        if (this.person.gender=='Женщина'){
        this.person.surname= this.randomSurname()+`a`;}
        else {this.person.surname= this.randomSurname();}
        this.person.firstName = this.randomFirstName();
        this.person.thirdName = this.randomThirdName();
        this.person.birthYear = this.randomYear();
        this.person.Job= this.randomJob();
        this.person.months=this.randomMonth();
        this.person.day=this.randomDay();
        return this.person;
    }
};
