
class Pokemon {
    number;
    name;
    type;
    types = [];
    photo;

    constructor(obj) {
        if (obj) {
            this.number = obj.id;
            this.name = obj.name;
            this.types = obj.types.map(typeSlot => typeSlot.type.name);
            this.type = this.types[0];
            this.photo = obj.sprites.other.home.front_default;
        }
    }
}

class PokemonDetails extends Pokemon {
    height;
    weight;
    abilities;
    stats;

    constructor(obj) {
        super(obj);
        if (obj) {
           this.height = (obj.height*10).toFixed(2);
           this.weight = (obj.weight/10).toFixed(1);
           this.abilities = obj.abilities.map(abilityItem => abilityItem.ability.name).join(', ');
           this.stats = obj.stats.map(statItem => this.getStats(statItem));
        }
    }

    getStats(statItem) {
        return { name: getStatsName(statItem.stat.name), value: statItem.base_stat };
    }
}

function getStatsName(stat) {
    const statsList = [
        {
            name: 'HP',
            value: 'hp'
        },
        {
            name: 'Attack',
            value: 'attack'
        },
        {
            name: 'Defense',
            value: 'defense'
        },
        {
            name: 'Sp. Atk',
            value: 'special-attack'
        },
        {
            name: 'Sp. Def',
            value: 'special-defense'
        },
        {
            name: 'Speed',
            value: 'speed'
        },
    ]

    return statsList.find(item => item.value == stat).name;
}
