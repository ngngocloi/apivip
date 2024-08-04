const chalkAnimation = require('chalkercli');
let str = String.raw`
LOADING DISME[▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒] 
`;
let logo = String.raw`
        _____ _____  _____ __  __ ______ 
       |  __ \_   _|/ ____|  \/  |  ____|
       | |  | || | | (___ | \  / | |__   
       | |  | || |  \___ \| |\/| |  __|  
       | |__| || |_ ____) | |  | | |____ 
       |_____/_____|_____/|_|  |_|______|


`;
                             
const karaoke = chalkAnimation.karaoke(str);
const rainbow = chalkAnimation.rainbow(logo);
setTimeout(async() => {
    await karaoke.start()
    await rainbow.start()
    console.clear()
}, 1000);

setTimeout(() => {
    karaoke.stop()
    rainbow.stop()
    require('./app/main.js')
}, 7000);
