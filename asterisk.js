import AsteriskManager from 'asterisk-manager'


const config = {
    asterisk : {
        port  : process.env.ASTERISK_PORT | '5038',
        host : process.env.ASTERISK_HOST | '10.128.0.4',
        user : process.env.ASTERISK_USER | 'admin',
        password : process.env.ASTERISK_PASSWORD | '!pbx@2022Edm!'
    }
}

const ami = new AsteriskManager(config.asterisk.port, config.asterisk.host, config.asterisk.user, config.asterisk.password, true);

console.log(process.env.ASTERISK_HOST)
export  {ami}