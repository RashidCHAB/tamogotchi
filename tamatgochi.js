const tamogotchi = {
    name: 'egg',
    meal: 4,
    energy:  2,
    mood: 3,
    getStatus: function () {
        let meal2 = this.meal
        let energy2 = this.energy
        let mood2 = this.mood

        if (this.meal < 5) {
            this.meal = `Я голоден(${meal2})`;
        }
        else this.meal = `Я не голоден(${meal2})`;


        if (this.energy < 5) {
            this.energy = `Я хочу спать(${energy2})`;
        }
        else this.energy = `Я не хочу спать(${energy2})`;

        if (this.mood < 5) {
            this.mood = `Мне скучно(${mood2})`;
        }
        else this.mood = `Мне весело(${mood2})`;

        if (meal2 <= 0 || energy2 <= 0 || mood2 <= 0) {
            console.log(`${this.name} умер =(`)
            return
        }
        if (meal2 > 8 && energy2 > 8 && mood2 > 8) {
            console.log(`Я балдею, это самое главное =)`)
            return
        }
        if (meal2 > 8 || energy2 > 8 || mood2 > 8) {
            console.log(`Я частично балдею, можно и лучше =)`)
            return
        }
        console.log(`Имя: ${this.name}, Еда: ${this.meal}, Энергия: ${this.energy}, Настроение: ${this.mood}`)


    },
    setName: function (par) {
        this.name = par;
    },
    eat: function () {
        if (this.meal < 5) this.meal++
        if (this.mood < 5) this.mood--
    },
    sleep: function () {
        if (this.energy < 5) this.energy++
        if (this.meal < 5) this.meal--
    },
    play: function () {
        if (this.mood < 5) this.mood--
        if (this.energy < 5) this.energy--
    }
}


tamogotchi.getStatus()
