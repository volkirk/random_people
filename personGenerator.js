const personGenerator = {
    surnameJson: `{  
        "count": 15,
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
            "id_16": "Морозов"
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
        "count": 10,
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
            "id_10": "Юлия"
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
        "count": 10,
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
            "id_10": "Владимировна"
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
    randomThirdName: function(){
        if (this.person.gender=='Женщина')
        return this.randomValue(this.thirdNameFemale);
        else
        return this.randomValue(this.thirdNameMale);
    },

    randomSurname: function() {

        return this.randomValue(this.surnameJson);

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
        return this.person;
    }
};
