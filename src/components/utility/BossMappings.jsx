// export const bosses = [
//     Boss('zakum',),
//     Boss('magnus'),
//     Boss('hilla', '0'),
//     Boss('papulatus', '132.250'),
//     Boss('pierre'),
//     Boss('vonbon'),
//     Boss('queen'),
//     Boss('vellum', '105.0625'),
//     Boss('pinkbean', '0'),
//     Boss('cygnus','0', 'easy normal'),
//     Boss('princessno', 'normal'),
//     Boss('aketchi', '144', 'normal'),
//     Boss('lotus', '162.5625, 444.675 1397.5','normal hard extreme'),
//     Boss('damien', '169 421.875', 'normal hard'),
//     Boss('slime', '231.6735 600.578125', 'normal hard'),
//     Boss('lucid', '237.009375 253.828125 504', 'easy normal hard'),
//     Boss('will', '246.7444750 279,075 621.810','easy normal hard'),
//     Boss('gloom', '297.675 563.945', 'normal hard'),
//     Boss('vhilla', '581.880 762.105', 'normal hard'),
//     Boss('darknell', '316.875 667.920', 'normal hard'),
//     Boss('seren', '889.021875 1095.62500', 'normal hard extreme'),
//     Boss('kalos', '937.5 1300 2600 5200', 'easy normal hard extreme'),
//     Boss('kaling', '1031.250 1506.5 2990 6026', 'easy normal hard'),
//     Boss('limbo','normal hard'),
// ]

// class Boss {
//     constructor(name, mesos='81', difficulties = 'hard') {
//         this.name = name;
//         this.difficulties = difficulties.split(' ');
//         this.mesos = this.#mesosConverter(mesos);
//         this.values = this.#createValuePair();
//     }

//     #createValuePair() {
//         const temp = {};
//         this.difficulties.map( (diff,index) => {
//             temp.set(diff, this.mesos[index]);
//         });
//         return temp;
//     }

//     #mesosConverter(mesos) {
//         const num = []
//         mesos.map( (val) => {
//             num.push(Number(val));
//         })
//         return num;
//     }
// }


export const bossMap = {
    hilla: { 
        hard: 0
    },
    pinkbean: {
        hard: 0
    },
    cygnus: {
        easy: 0,
        normal: 0
    },
    zakum: { 
        hard: 81
    },
    pierre: { 
        hard: 81
    },
    vonbon: { 
        hard: 81
    },
    queen: { 
        hard: 81
    },
    princessno: {
        normal: 81
    },
    magnus: {
        hard: 0
    },
    vellum: {
        hard: 105.0625
    },
    papulatus: {
        hard: 132.250
    },
    akechi: {
        hard: 144
    },
    lotus: {
        normal: 162.5625,
        hard: 444.675,
        extreme: 1397.5
    },
    damien: {
        normal: 169,
        hard: 421.875
    },
    slime: {
        normal: 231.6735,
        hard: 600.578125
    },
    lucid: {
        easy: 237.009375,
        normal: 253.828125,
        hard: 504
    },
    will: {
        easy: 246.7444750,
        normal: 279.075,
        hard: 621.810
    },
    gloom: {
        normal: 297.675,
        hard: 563.945
    },
    darknell: {
        normal: 316.875,
        hard: 667.920
    },
    vhilla: {
        normal: 581.880,
        hard: 762.105
    },
    seren: {
        normal: 889.021875,
        hard: 1095.62500,
        extreme: 4235
    },
    kalos: {
        easy: 937.5,
        normal: 1300,
        hard: 2600,
        extreme: 5200
    },
    kaling: {
        easy: 1031.250,
        normal: 1506.5,
        hard: 2990,
        extreme: 6026
    },
    limbo: {
        normal: 0,
        hard: 0
    }
}

export const colors = {
    easy: 'secondary',
    normal: 'primary',
    hard: 'danger',
    extreme: 'warning',
}


