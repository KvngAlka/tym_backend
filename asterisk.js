import AsteriskManager from 'asterisk-manager'


const config = {
    asterisk : {
        port  : process.env.ASTERISK_PORT ,
        host : process.env.ASTERISK_HOST ,
        user : process.env.ASTERISK_USER ,
        password : process.env.ASTERISK_PASSWORD 
    }
}

const ami = new AsteriskManager(config.asterisk.port, config.asterisk.host, config.asterisk.user, config.asterisk.password, true);

export  {ami}