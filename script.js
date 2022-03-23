function fozzieBear() {
    console.log(`Wocka Wocka!`);
}
fozzieBear();

console.log(`==================`);

function beaker(speak){
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
}
beaker(`Me`)
beaker(`Mee`);
beaker(`Meep`);

console.log(`==================`);


function muppetShow(a, b){
    if(a === `Muppet` && b === `Show`){
        console.log(`It's time to play the music. It's time to light the lights.`);
    }
}

muppetShow(`Muppet`,`Show`);

console.log(`==================`);


function kermit(){
    return `Kermit The Frog`;    
}

let frog = kermit();
console.log(frog);

console.log(`==================`);


function muppetShowSeason(seasons){
    if(seasons === 5){
        return true;
    }
    return false;
}

const tr = muppetShowSeason(5);
console.log(tr);
const fa = muppetShowSeason(4);
console.log(fa);

console.log(`==================`);


function question(){
    const manOrMuppet = `Am I a man or am I a Muppet?`;
    console.log(manOrMuppet);
}
question();

console.log(`==================`);

rainbowConnection = () => console.log(`Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me`);
rainbowConnection();

console.log(`==================`);

// 8
// no

// 9
// yes


const newMuppetMovies = [
    `The Muppets`,
    `Muppets Most Wanted`
];


newMovies = n => `${n.toUpperCase()}`;

const upperMovies = newMuppetMovies.map(newMovies);
console.log(upperMovies);

console.log(`==================`);

const oldMuppetMovies = [
    `The Muppet Movie`,
    `The Muppets Take Manhattan`,
    `The Great Muppet Caper`,
    `The Muppet Christmas Carol`,
    `Muppet Treasure Island`,
    `Muppets From Space`
];


const twoMovies = oldMuppetMovies.filter(two => two.length === 22);
console.log(twoMovies);

console.log(`==================`);

const charactersOne = [
    `Statler`,
    `Waldorf`
];


const charactersTwo = [
    `The Swedish Chef`,
    `Animal`,
    `Rowlf`
];


randomMuppet =  (characters) => {
    console.log(`${characters[Math.floor(Math.random() * characters.length)]}`);
}

randomMuppet(charactersOne);

console.log(`==================`);

randomMuppet(charactersTwo);

console.log(`==================`);



caps = (string) => {
    return string.split('').map((v,i) => i % 2 ? v.toLowerCase(): v.toUpperCase()).join('');
}

console.log(caps(`Hello World`));



