//Console Start


const Discord = require ('discord.js');
const { Application } = require('opusscript');
const client =  new Discord.Client();

const prefix = "ae ";

const keepAlive = require("./server");
const ytdl = require ('ytdl-core');
const { toLowerCase } = require('ffmpeg-static');
const Sequelize = require("sequelize");
const TicTacToe = require ("discord-tictactoe");
const { validateID } = require('ytdl-core');
const disbut = require('discord-buttons')(client);


client.on('ready' , () =>{
    console.log('AE is Online');
    client.user.setPresence('dnd'); 

    client.user.setActivity("ae help | ver "+Version, {
        type: 'STREAMING', 
        url: "https://www.twitch.tv/nasa"
    })
});


//variables

var Version = ('2.4.3');

var Color = ('#00FF00')
var Status = ('✅ Bot online')


//status


client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix + 'status')){
        if(message.author.bot) return;
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor(Color)
            .setTitle("Status:")
            .addField ("\u200B ", Status)
            .addField ("\u200B ", `**Latency is** ${Date.now() - message.createdTimestamp}ms.`)
        message.channel.send(exampleEmbed);
    }
})





//invite


client.on('message',message => {
    if(message.content.toLowerCase().startsWith(prefix+'invite')){
        if(message.author.bot)return;
    let button = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Invite here')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=834508228791369729&permissions=66448448&scope=bot')
    message.channel.send('>>> Press to invite',button)
    }
})




//Bot Request (Horizon Only)


client.on('message', message => {
    if(message.guild.id === '518893687627841574') {
        if(message.channel.id != '843033025821933608')return;
        if(message.content.toLowerCase().startsWith(prefix + 'request')){
            if(message.author.bot)return;
            const args = message.content.slice(prefix.length).trim().split(' ')
            if(args[1].length !=18)return;

            const embed = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle('Requestet Bot ID '+args[1])
                .setDescription('Your bot will be added soon, if not so \nsend a message in <#842652696242683905>')
                .setTimestamp()
            message.channel.send(embed)
            
            const channel = client.channels.cache.find(channel => channel.id === '843033025821933608')
            const copy = new Discord.MessageEmbed()
            .setColor('FF0000')
            .setTitle('Request by: '+message.author.username)
            .setDescription('Requestet Bot: '+args[1])
            .setTimestamp()
            channel.send(copy)
        }
    }
})
client.on('message', message => {
    if(message.guild.id === '518893687627841574') {
        if(message.channel.id != '843033025821933608')return;
        if(message.content.toLowerCase().startsWith(prefix + 'confirm')){
            if(message.author.bot)return;
            const args = message.content.slice(prefix.length).trim().split(' ')
            if(args[1].length !=18)return;
            
            const channel = client.channels.cache.find(channel => channel.id === '842448142305984522')
            const copy = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('Bot '+args[1]+' confirmed')
            .setDescription('Request by: '+args[2]+'\nConfirmed by: '+'<@'+message.author.id+'>')
            .setTimestamp()
            channel.send(copy)
            message.channel.send(`<https://discord.com/oauth2/authorize?client_id=${args[1]}&scope=bot&permissions=0>`)
        }
    }
})





//get prefix


client.on("message", message =>{
    if(message.content.toLowerCase().startsWith('<@!834508228791369729>')){
        const embed = new Discord.MessageEmbed()
            .setColor('YELLOW')
            .setTitle("My prefix is 'ae'")
            .setDescription("Use 'ae help' to see my commands")
        message.channel.send(embed)
    }
})





//help CMD 


client.on('message',message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return; 
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    var command = args.shift().toLowerCase();
    if(args.length){return}

    if(command === 'help') {
        message.delete()

        const embed = new Discord.MessageEmbed()
            .setColor('YELLOW')
            .setTitle('Press the Button of the help menu you want to acces')
            .setDescription('Message will delete itself after 20 Seconds')
        message.channel.send(embed).then(message =>{
            setTimeout(() => message.delete(),20000)
        })
        const log = new Discord.MessageEmbed()
            .setColor('YELLOW')
            .setTitle('Log')
            .setDescription(message.author.username+' Used help menu')
            .setTimestamp()
        setTimeout(function(){
            message.channel.send(log);
        }, 25000)
        
 

        let space = new disbut.MessageButton()
            .setStyle('blurple')
            .setLabel('😂| Fun')
            .setID('fun')
        
        let user = new disbut.MessageButton()
            .setStyle('blurple')
            .setLabel('👦| User')
            .setID('user')

        let client = new disbut.MessageButton()
            .setStyle('blurple')
            .setLabel('👾| Client')
            .setID('client')

        message.channel.send('>>> Primary Commands help menus', {
                buttons: [
                    space, user, client,
                ]
            }).then(message =>{
                setTimeout(() => message.delete(),20000)
            })

        let voice = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('🔊| Voice')
            .setID('voice')

        let mod = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('🔧| Moderation')
            .setID('mod')

        let fun = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('🌌| Space')
            .setID('space')

        message.channel.send('>>> Secondary Commands help menus', {
                buttons: [
                    voice, mod, fun,
                ]
            }).then(message =>{
                setTimeout(() => message.delete(),20000)
            })

        let host = new disbut.MessageButton()
            .setStyle('red')
            .setLabel('🤴| Host')
            .setID('host')

        let privacy = new disbut.MessageButton()
            .setStyle('red')
            .setLabel('📃| Terms of privacy')
            .setID('privacy')

        let invite = new disbut.MessageButton()
            .setStyle('url')
            .setLabel('📩| Invite')
            .setURL('https://discord.com/api/oauth2/authorize?client_id=834508228791369729&permissions=66448448&scope=bot')

        message.channel.send('>>> Additional Commands help menus', {
                buttons: [
                    host, privacy, invite
                ]
            }).then(message =>{
                setTimeout(() => message.delete(),20000)
            })
}});
client.on('clickButton', async (button) => {
    if (button.id === 'space') {
        button.defer()
        const exampleEmbed = new Discord.MessageEmbed()
	        .setColor('#00FF00')
	        .setTitle('```Space help menu of Æ-𝜃```')
	        .setURL()
	        .setAuthor('Æ-𝜃', 'https://cdn.discordapp.com/attachments/786654358670278656/834730896745693234/letter-a-and-e-logo-ae-ligature-symbol-vector-20420938.jpg')
	        .setDescription('﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌')
	        .setThumbnail()
	        .addFields(
                { name: '┍ae saturn', value: '┃Send emoji of Saturn' },
                { name: '┠ae units', value: '┃Show size comparrison of universe' },
                { name: '┠ae event', value: '┃Shows current space events' },
                { name: '┠ae exo', value: '┃Shows exoplanet classification list' },
                { name: '┠ae voyager1', value: '┃Shows live Voyager 1 status' },
                { name: '┠ae voyager2', value: '┕Shows live Voyager 2 status' },
	        )
	        .setImage()
	        .setTimestamp()
            .setDescription('Message will delete itself after 20 seconds')
      button.channel.send(exampleEmbed).then(message =>{
        setTimeout(() => message.delete(),30000)
    })
    }
});
client.on('clickButton', async (button) => {
    if (button.id === 'user') {
        button.defer()
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#00FF00')
	        .setTitle('```User help menu of Æ-𝜃```')
	        .setURL()
	        .setAuthor('Æ-𝜃', 'https://cdn.discordapp.com/attachments/786654358670278656/834730896745693234/letter-a-and-e-logo-ae-ligature-symbol-vector-20420938.jpg')
	        .setDescription('﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌')
	        .setThumbnail()
	        .addFields(
                { name: '┍ae avatar {@user}', value: '┃Show avatar of mentioned users \n┃(Chains are Possible)' },
                { name: '┠ae partner', value: '┃Shows a nice partner' },
                { name: '┠ae ping', value: '┃See bots latency' },
                { name: '┠ae weather {region}', value: '┃The weather in your desired region \n┃(Only Germany)' },
                { name: '┠ae about', value: '┕About the bot' },
	        )
	        .setImage()
	        .setTimestamp()
            .setDescription('Message will delete itself after 30 seconds').setFooter('Bot by N0WH3RE Æ-𝜃', 'https://cdn.discordapp.com/attachments/786654358670278656/834732229048926248/keplar-22b.jpg');
      button.channel.send(exampleEmbed).then(message =>{
        setTimeout(() => message.delete(),30000)
    })
    }
});
client.on('clickButton', async (button) => {
    if (button.id === 'client') {
        button.defer()
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#00FF00')
            .setTitle('```User help menu of Æ-𝜃```')
            .setURL()
            .setAuthor('Æ-𝜃', 'https://cdn.discordapp.com/attachments/786654358670278656/834730896745693234/letter-a-and-e-logo-ae-ligature-symbol-vector-20420938.jpg')
            .setDescription('﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌')
            .setThumbnail()
            .addFields(
                { name: '┍ae stats', value: '┃Shows the client stats' },
                { name: '┠ae update', value: '┃Show last update log' },
                { name: '┠ae news', value: '┃Show latest news of developement' },
                { name: '┠ae home', value: '┃Shows the home server of Æ-𝜃'},
                { name: '┠ae bug', value: '┃Send link of bug report page' },
                { name: '┠ae status', value: '┕Show bots status' },
            )
            .setImage()
            .setTimestamp()
            .setDescription('Message will delete itself after 30 seconds').setFooter('Bot by N0WH3RE Æ-𝜃', 'https://cdn.discordapp.com/attachments/786654358670278656/834732229048926248/keplar-22b.jpg');
      button.channel.send(exampleEmbed).then(message =>{
        setTimeout(() => message.delete(),30000)
    })
    }
});
client.on('clickButton', async (button) => {
    if (button.id === 'voice') {
        button.defer()
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#00FF00')
            .setTitle('```Voice help menu of Æ-𝜃```')
            .setURL()
            .setAuthor('Æ-𝜃', 'https://cdn.discordapp.com/attachments/786654358670278656/834730896745693234/letter-a-and-e-logo-ae-ligature-symbol-vector-20420938.jpg')
            .setDescription('﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌')
            .setThumbnail()
            .addFields(
                { name: '┍ae join', value: '┃Join your current voice channel' },
                { name: '┃ae leave', value: '┕Leave current voice channel' },
            )
            .setImage()
            .setTimestamp()
            .setDescription('Message will delete itself after 30 seconds').setFooter('Bot by N0WH3RE Æ-𝜃', 'https://cdn.discordapp.com/attachments/786654358670278656/834732229048926248/keplar-22b.jpg');
      button.channel.send(exampleEmbed).then(message =>{
        setTimeout(() => message.delete(),30000)
    })
    }
});
client.on('clickButton', async (button) => {
    if (button.id === 'mod') {
        button.defer()
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#00FF00')
            .setTitle('```Mod help menu of Æ-𝜃```')
            .setURL()
            .setAuthor('Æ-𝜃', 'https://cdn.discordapp.com/attachments/786654358670278656/834730896745693234/letter-a-and-e-logo-ae-ligature-symbol-vector-20420938.jpg')
            .setDescription('﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌')
            .setThumbnail()
            .addFields(
                { name: '┍ae kick {@user}', value: '┕Kick the mentioned user (disabled)' },
            )
            .setImage()
            .setTimestamp()
            .setDescription('Message will delete itself after 30 seconds').setFooter('Bot by N0WH3RE Æ-𝜃', 'https://cdn.discordapp.com/attachments/786654358670278656/834732229048926248/keplar-22b.jpg');
      button.channel.send(exampleEmbed).then(message =>{
        setTimeout(() => message.delete(),30000)
    })
    }
});
client.on('clickButton', async (button) => {
    if (button.id === 'fun') {
        button.defer()
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#00FF00')
            .setTitle('```Fun help menu of Æ-𝜃```')
            .setURL()
            .setAuthor('Æ-𝜃', 'https://cdn.discordapp.com/attachments/786654358670278656/834730896745693234/letter-a-and-e-logo-ae-ligature-symbol-vector-20420938.jpg')
            .setDescription('﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌')
            .setThumbnail()
            .addFields(
                { name: '┍ae rps', value: '┃Play Rock, paper, scissors' },
                { name: '┠ae ram', value: '┃Repeat after me \n┃(Client repeat message)' },
                { name: '┠ae embed', value: '┃Create custom embed \n(Color code/title/description'},
                { name: '┠ae gay', value: '┃Shows how gay the mentioned person is(🔴)' },
                { name: '┠ae kill', value: '┃Kill the mentioned user(🔴)' },
                { name: '┠ae roulette', value: '┃Do 1 spin of russian roulette(🔴)' },
                { name: '┠ae rate', value: '┃rate the mentioned user (🔴)' },
                { name: '┠ae iq', value: '┃Test youre IQ(🔴)' },
                { name: '┠ae ttt (@user for pvp)', value: '┃Start a Tic Tac Toe mini game \n┕(If no user is mentiond against AI)'}        
            )
            .setImage()
            .setTimestamp()
            .setDescription('Message will delete itself after 30 seconds').setFooter('Bot by N0WH3RE Æ-𝜃', 'https://cdn.discordapp.com/attachments/786654358670278656/834732229048926248/keplar-22b.jpg');
      button.channel.send(exampleEmbed).then(message =>{
        setTimeout(() => message.delete(),30000)
    })
    }
});
client.on('clickButton', async (button) => {
    if (button.id === 'host') {
        button.defer()
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#00FF00')
            .setTitle('```Help menu of Æ-𝜃```')
            .setURL()
            .setAuthor('Æ-𝜃', 'https://cdn.discordapp.com/attachments/786654358670278656/834730896745693234/letter-a-and-e-logo-ae-ligature-symbol-vector-20420938.jpg')
            .setDescription('﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌')
            .setThumbnail()
            .addFields(
                { name: '┍ae artworks', value: '┃Show random artworks of N0WH3RE' },
                { name: '┠ae host', value: '┕Show host of the client' },
            )
            .setImage()
            .setTimestamp()
            .setDescription('Message will delete itself after 30 seconds').setFooter('Bot by N0WH3RE Æ-𝜃', 'https://cdn.discordapp.com/attachments/786654358670278656/834732229048926248/keplar-22b.jpg');
      button.channel.send(exampleEmbed).then(message =>{
        setTimeout(() => message.delete(),30000)
    })
    }
});
client.on('clickButton', async (button) => {
    if (button.id === 'privacy') {
        button.defer()
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('YELLOW')
            .setTitle('Æ-𝜃 privacy policies')
            .setURL()
            .setDescription('Last updated - 29.05.2021')
            .addField("1. What data do we store", "None, the bot do not have any databases \nbut it store informations ex. \n - Guild IDs \n - User IDs \n - User Avatars \n - Selected arguments \nin Variables, but they will be deleted \nWhen the command is finished")
            .addField("2. Critical fun commands", "The bot has fun commands which may name a \nuser inappropriately\n(marked with a red circle in the help menu)ex:\n - Test youre IQ(🔴)")
            .addField("3. Do we share youre data with any 3rd parties?", "No, we dont, why should we? Its a bot \nto help you have some fun on Discord")
            .setTimestamp()
            .setFooter('Message will delete itself after 35 seconds')
      button.channel.send(exampleEmbed).then(message =>{
        setTimeout(() => message.delete(),35000)
    })
}});
















//Space cmd







//if-else CMD Section


client.on('message', message =>{
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();

    if(command === 'partner'){
        message.channel.send('<a:7945thinkbutcooler:837298122165190716> I have parnters?');
    }
});





client.on('message', message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send(`**Latency is** ${Date.now() - message.createdTimestamp}ms.`)
    }
});


client.on('message',message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return; 
    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();

    if(command === 'saturn') {
        message.channel.send('🪐').then(function(sentMessage) {
            sentMessage.react('🛰')
        });
        
    }
})





//units


client.on('message', message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();

    if(command === 'units'){
        message.channel.send('```Earth - Sun: 1AU (149.000.000km) \nSolar System dialmeter: 1,921.56 AU \nOort Cloud dialmeter: 5.000-100.000 AU \nNearest Star (Proxima Centauri): 4,247 Lightyears```')
    }
})
client.on('message', message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();

    if(command === 'units'){
        message.channel.send('```Light Year: 63.241,077 AU \nMilky Way dialmeter: 52.850 Lightyears \nNearest Galaxy (Andromeda Galaxy): 2,5mio Lightyears \nAndromeda Galaxy Dialmeter: 200.000 Lightyears```')
    }
})
client.on('message', message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();

    if(command === 'units'){
        message.channel.send('```Observable Universe dialmeter: 8,8x10^26 Billion Lightyears```')
    }
})





//Voyager 1


client.on('message',message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return; 
    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();

    if(command === 'voyager1') {
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0D00FA')
	.setTitle('Live feed')
	.setURL('https://voyager.jpl.nasa.gov/mission/status/')
	.setAuthor('Voyager 1', 'https://cdn.discordapp.com/attachments/786654358670278656/834730896745693234/letter-a-and-e-logo-ae-ligature-symbol-vector-20420938.jpg')
	.setDescription('Voyager 1 Stats at May 2021')
	.setThumbnail('https://www.antennemuenster.de/assets/images/playerlogos/rot/live.png')
	.addFields(
		{ name: 'Distance from Sun:', value: '152,91 AU' },
        { name: 'Speed:', value: '38.026mph' },
        { name: 'Elapsed Time:', value: '43Yrs, 08Mos' },
    )
	.setImage('https://www.nasa.gov/sites/default/files/thumbnails/image/pia22835a_20181206_voyager_in_interstellar_space_annotated_1920x1080_72dpi-final.png')
	.setTimestamp()
	.setFooter('Bot by N0WH3RE Æ-𝜃', 'https://cdn.discordapp.com/attachments/786654358670278656/834732229048926248/keplar-22b.jpg');

message.channel.send(exampleEmbed)}});





//voyager 2


client.on('message',message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return; 
    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();

    if(command === 'voyager2') {
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0D00FA')
	.setTitle('Live feed')
	.setURL('https://voyager.jpl.nasa.gov/mission/status/')
	.setAuthor('Voyager 2', 'https://cdn.discordapp.com/attachments/786654358670278656/834730896745693234/letter-a-and-e-logo-ae-ligature-symbol-vector-20420938.jpg')
	.setDescription('Voyager 2 Stats at April 2021')
	.setThumbnail('https://www.antennemuenster.de/assets/images/playerlogos/rot/live.png')
	.addFields(
		{ name: 'Distance from Sun:', value: '127,10 AU' },
        { name: 'Speed:', value: '34,390mph' },
        { name: 'Elapsed Time:', value: '43Yrs, 09Mos' },
    )
	.setImage('https://www.nasa.gov/sites/default/files/thumbnails/image/pia22835a_20181206_voyager_in_interstellar_space_annotated_1920x1080_72dpi-final.png')
	.setTimestamp()
	.setFooter('Bot by N0WH3RE Æ-𝜃', 'https://cdn.discordapp.com/attachments/786654358670278656/834732229048926248/keplar-22b.jpg');

message.channel.send(exampleEmbed)}});





//Exo Planets


client.on('message',message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return; 
    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();

    if(command === 'exo') {
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0D00FA')
	.setTitle('Exo planet list')
	.setURL('https://i.ytimg.com/vi/WjXBU367Ea0/maxresdefault.jpg')
	.setAuthor('Exo Planets', 'https://cdn.discordapp.com/attachments/786654358670278656/834730896745693234/letter-a-and-e-logo-ae-ligature-symbol-vector-20420938.jpg')
	.setDescription('Explenation of Exo Planet classification')
	.setThumbnail('https://www.digitalfernsehen.de/wp-content/uploads/2019/11/nasa2-696x400.jpg')
	.addFields(
		{ name: 'Keplar', value: 'Sun of a system including exoplanet candidates' },
        { name: 'Keplar B', value: 'Planet with earth similar structures' },
        { name: 'Keplar C', value: 'Exoplanet later discovered as Gas planet' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Exoplanet', value: 'List', inline: true },
		{ name: 'explenation', value: 'by', inline: true },
	)
	.addField('list', 'Nasa', true)
	.setImage('https://images.derstandard.at/img/2019/02/23/exoplanet.jpg?w=750&s=678daa9d')
	.setTimestamp()
	.setFooter('Bot by N0WH3RE Æ-𝜃', 'https://cdn.discordapp.com/attachments/786654358670278656/834732229048926248/keplar-22b.jpg');

message.channel.send(exampleEmbed)}});





//events


client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix + 'event')){
        if(message.author.bot) return;
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0D00FA')
            .setTitle("Space Events")
            .setURL('https://www.timeanddate.com/astronomy/moon/super-full-moon.html')
            .setDescription ('24.05.2021')
            .addField(" \u200B ", "\uFEFF")
            .addFields(
                { name: 'Event', value: 'Super Moon - 26.05.2021', inline: true },
            )
                .addField("\u200B", "**Event by:** The space itself")
                .addField(" \u200B ", "https://www.timeanddate.com/astronomy/moon/super-full-moon.html \nhttps://www.timeanddate.com/eclipse/lunar/2021-may-26")
        message.channel.send(exampleEmbed);
    }
})





//blob


/*
client.on('message', message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    if(!message.author === '507511172061200395') return;
    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();

    if(command === 'blob') {
        message.channel.send ('kuss')
    }
})
*/


//about


client.on('message',message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return; 
    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();

    if(command === 'about') {
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#DDFF01')
	.setURL('https://i.ytimg.com/vi/WjXBU367Ea0/maxresdefault.jpg')
	.setAuthor('Æ-𝜃', 'https://cdn.discordapp.com/attachments/786654358670278656/834730896745693234/letter-a-and-e-logo-ae-ligature-symbol-vector-20420938.jpg')
	.setDescription('Æ-𝜃 = \n149.000.000 - 23,56')
	.setThumbnail('https://cdn.discordapp.com/attachments/835474903888953365/841312880371826698/Animated_GIF-downsized_large.gif')
	.addFields(
		{ name: 'Project by', value: '<@507511172061200395>' },
		{ name: 'Project target', value: '1 Bot for everything' },
        { name: 'Home server', value: '<a:4745_thisr:837316822842867763>[Horizon](https://discord.gg/YpXpHDWMyf)'},
		{ name: 'Partner server', value:'[<a:4745_thisr:837316822842867763>Bot Testing Server](https://discord.gg/ahyzfEv)\n<a:4745_thisr:837316822842867763>[Recraft.net](https://discord.gg/8kKUtA2)'},
		{ name: 'Partner', value: '<:3843_green_blue_arrow:837317710723285083>Silent Warrior K \n<:3843_green_blue_arrow:837317710723285083>Arzt\n<:3843_green_blue_arrow:837317710723285083>𝐗𝖊𝖗𝖚𝖓' },
        { name: '\uFEFF', value: '[__**Invite here**__]( https://discord.com/api/oauth2/authorize?client_id=834508228791369729&permissions=8&scope=bot)' },
        { name: '\uFEFF', value: '**Version:** ' +Version, inline: true },
	)
	.setTimestamp()
	.setFooter('Bot by N0WH3RE Æ-𝜃', 'https://cdn.discordapp.com/attachments/786654358670278656/834732229048926248/keplar-22b.jpg');

message.channel.send(exampleEmbed)}});




 
//stats


client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix + 'stats')){
        if(message.author.bot) return;
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#DDFF01')
            .setTitle("Bot's Live status")
            .setThumbnail('https://cdn.discordapp.com/attachments/835474903888953365/841312880371826698/Animated_GIF-downsized_large.gif')
            .addField(" \u200B ", "**Channels** : ` " + `${client.channels.cache.size}` + " `")
            .addField(" \u200B ", "**Servers** : ` " + `${client.guilds.cache.size}` + " `")
            .addField(" \u200B ", "**Users** : ` " + `${client.users.cache.size+112}` + "`")
            .addField(" \u200B ", "**Bot developer: <@507511172061200395>**")
            .addField(" \u200B ", Version)
        message.channel.send(exampleEmbed);
    }
})
client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix + 'stats')){
        if(message.author.bot) return;
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor(Color)
            .setTitle("Status:")
            .addField ("\u200B ", Status)
            .addField ("\u200B ", `**Latency is** ${Date.now() - message.createdTimestamp}ms.`)
        message.channel.send(exampleEmbed);
    }
})





//client updates


client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix + 'update')){
        if(message.author.bot) return;
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#DDFF00')
            .setTitle("Patchnotes " +Version)
            .setThumbnail('https://cdn.discordapp.com/emojis/837292079734063145.gif?v=1')
            .setDescription (Version)
                .addField("\u200B", "**- CMD updates** \nSome Commands were refreshed")
                .addField("\u200B", "**- Fixed offline Bug** \nThe Bug that the bot will go off \nafter an inactive phase got fixed")
        message.channel.send(exampleEmbed);
    }
})
client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix + 'update')){
        if(message.author.bot) return;
        const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle("Known problems with release:")
                .setDescription (Version)
                .setThumbnail('https://cdn.discordapp.com/emojis/837291967691096145.gif?v=1')
                    .addField("\u200B", "**No known Problems:** \nIf you have some problems \nUse 'ae bug'")
            message.channel.send(exampleEmbed)
    }
})
client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix + 'update')){
        if(message.author.bot) return;
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#00FF00')
            .setTitle("We are working on:")
            .setThumbnail('https://cdn.discordapp.com/attachments/564830738290049024/837208223282495488/2022_vs_code_rainbow.gif')
            .setDescription (Version)
                .addField("\u200B", "**- Music feature:** \nWe are working on the client so you can use it to play music")
                .addField("\u200b", "**- Fun commands:** \nWe are working on more fun commands")
        message.channel.send(exampleEmbed);
    }
})





//avatar


client.on('message', message=> {
if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();

if (command === 'avatar') {
    let user = message.mentions.users.first()  || message.author
    if(!user){
        user = message.author.username
    }
	const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#DDFF00')
        .setTitle("Avatar")
        .setDescription(args+"'s avatar")
        .setImage(user.avatarURL({dynamic: true, size: 512}))
    message.channel.send(exampleEmbed)
}});





//user info

/*
client.on("message", message =>{
    if(message.content.toLowerCase().startsWith(prefix + 'ui')){
        let user = message.mentions.members.first() || message.author
    if(!user){
        user = message.author
    }
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("User info")
            .addField("Name", '<@'+user+'>')
        message.channel.send(exampleEmbed);
    }
})
*/




//news


client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix + 'news')){
        if(message.author.bot) return;
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#00FF00')
        .setTitle("NEWS!")
        .setURL('https://discord.gg/AVtUEfRQQw')
        .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI7SzHO7W5h1ORAvZooBSx1fyU-5x_U_KEvD-DW3LXf5GGJRYUF2rPboEQSZRyGJkOVFM&usqp=CAU')
        .setDescription('Version '+Version)
        .addField("New help menu", "Help menu now fully work with buttons")
        .setTimestamp()
        message.channel.send(exampleEmbed);
        message.delete()
    }
})





//home


client.on('message', message => {
    if(message.content.toLowerCase().startsWith(prefix + 'home')) {
        if(message.author.bot) return;
        const embed = new Discord.MessageEmbed()
            .setColor('#FF000')
            .setTitle('Home server of Æ-𝜃:')
            .setURL('https://discord.gg/YpXpHDWMyf')
            .setThumbnail('https://cdn.discordapp.com/icons/518893687627841574/5cd4cd808a3da88db8b9fad589a1c228.webp')
            .setDescription('Horizon<a:4745_thisr:837316822842867763>https://discord.gg/YpXpHDWMyf')
        message.channel.send(embed)
        }
    }
)





//Bug report


client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix + 'bug')){
        if(message.author.bot) return;
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle("Bug report")
            .setURL('https://docs.google.com/forms/d/e/1FAIpQLSfLwWBr3il8UuSjWNhC-j3OoDk8bGCqI3Yf1G1sZylcFagckA/viewform')
            .setThumbnail('https://www.wallpaperflare.com/static/765/775/653/errors-minimalism-typography-x-wallpaper.jpg')
            .setDescription('Use this Page to help me \nimprove the Bot')
        message.channel.send(exampleEmbed);
    }
})








//musik









//join

client.on('message', message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    if(!Discord.VoiceConnection) return;
    
    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();

    if(command === 'join'){ 
        const connection = message.member.voice.channel.join();
            
    }
});
client.on('message', message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    if(!Discord.VoiceConnection) return; 

    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();


    if(command === 'leave'){ 
        const connection = message.member.voice.channel.leave();
            
    }
});









//personal commands


client.on('message', message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();

    if(command === 'artworks'){
        const messages = [
        "https://gallery.services.forzamotorsport.net/fh4/photo/97e2d9d6-422e-4736-b1a4-d06592a6ebed",
        "https://gallery.services.forzamotorsport.net/fh4/photo/96c7f454-e0ed-4cdd-9ced-7f3834c5f5b1",
        "https://gallery.services.forzamotorsport.net/fh4/photo/a903b440-80c9-4ef2-b380-2ca12969bb61",
        "https://gallery.services.forzamotorsport.net/fh4/photo/c377b8c0-0d4e-453a-8d14-37b855fefcfd",
        "https://gallery.services.forzamotorsport.net/fh4/photo/3961de54-0e31-4951-9d14-3ab7c72b5bb0",
        "https://gallery.services.forzamotorsport.net/fh4/photo/f0f917bd-c0cd-404a-b734-fd4e0b7c7428",
        "https://gallery.services.forzamotorsport.net/fh4/photo/12695cfc-0a4b-4973-be24-f6137ae83ad8",
        "https://gallery.services.forzamotorsport.net/fh4/photo/79bd1c76-2684-4bc0-bf95-fcce84572cfd",
        "https://gallery.services.forzamotorsport.net/fh4/photo/b3c1b87a-13f7-423c-a30c-ae49057ad2ae",
        "https://gallery.services.forzamotorsport.net/fh4/photo/f977a06d-36a2-4f5c-8ba2-e915286b6687",
        "https://gallery.services.forzamotorsport.net/fh4/photo/94360c8c-95a1-45c3-9711-2381a4bf5585", 
        "https://gallery.services.forzamotorsport.net/fh4/photo/15ac33de-046d-4aec-b6d8-77c5c9f5734b", 
        "https://gallery.services.forzamotorsport.net/fh4/photo/11d28780-8b1d-4aca-9848-17c5043fc3ce", 
        "https://gallery.services.forzamotorsport.net/fh4/photo/1f67dc2f-e068-4a84-a259-b6758594545b", 
        "https://gallery.services.forzamotorsport.net/fh4/photo/4f2b86f6-68c8-4ffc-b68c-a83c4edf168a",
        "https://gallery.services.forzamotorsport.net/fh4/photo/de1963bf-a97d-4adc-9df6-9e661dca9483", 
        "https://gallery.services.forzamotorsport.net/fh4/photo/f5b01218-3c2f-4d66-bfba-c41162cc4d5d", 
        "https://gallery.services.forzamotorsport.net/fh4/photo/7ea9fb6a-82a0-442e-b03e-24f0509622a2", 
        "https://gallery.services.forzamotorsport.net/fh4/photo/41b014a2-2741-4956-970c-51e3eed9cd76", 
        "https://gallery.services.forzamotorsport.net/fh4/photo/b8940254-7312-4f3c-a64f-9df643ff0768", 
        "https://gallery.services.forzamotorsport.net/fh4/photo/5c012029-b319-407b-aea4-f7a0b01a6c6e", 
        "https://gallery.services.forzamotorsport.net/fh4/photo/efd7b991-31d5-4105-820c-4404a583cf5a", 
        "https://gallery.services.forzamotorsport.net/fh4/photo/5a19d694-3250-44ba-be79-7d835c20a77e", 
        "https://gallery.services.forzamotorsport.net/fh4/photo/38c3af05-dfe5-4d51-a61c-3876250fa537", 
        "https://gallery.services.forzamotorsport.net/fh4/photo/9d19abdc-410b-4ce9-b2e8-6ba9c445fd9d", 
        "https://gallery.services.forzamotorsport.net/fh4/photo/5e9c8667-f41a-42f5-aa97-ccda8a61bff1", 
        "https://gallery.services.forzamotorsport.net/fh4/photo/b99cac99-e202-46f2-98a4-9430fcf033b7", 
        "https://gallery.services.forzamotorsport.net/fh4/photo/7270b579-86c0-4a98-becd-3ec2c6a99d75", 
        "https://gallery.services.forzamotorsport.net/fh4/photo/9dfa0187-59b1-4bd9-b547-b66ef9a0eec6", 
        "https://gallery.services.forzamotorsport.net/fh4/photo/06057e7b-81a1-4369-927e-68990783cb53", 
        "https://gallery.services.forzamotorsport.net/fh4/photo/f046fe44-4172-4677-a6ae-3fdb76e0e598", 
        "https://gallery.services.forzamotorsport.net/fh4/photo/9900c320-2b59-46bf-a280-77d326db8ce3", 
        "https://gallery.services.forzamotorsport.net/fh4/photo/98a4c39d-f8c0-4235-835d-841c3fd0ea41", 
        "https://gallery.services.forzamotorsport.net/fh4/photo/c3099263-6e2f-45da-ba34-f430627c2fc9", 
        "https://gallery.services.forzamotorsport.net/fh4/photo/7003ecf2-b765-40ab-aafb-88f33f32942d", 
        "https://gallery.services.forzamotorsport.net/fh4/photo/b13a6a60-3e87-42e8-9353-2075112566dc",
        "https://gallery.services.forzamotorsport.net/fh4/photo/65ade5be-f604-4453-8eca-cfb562af81a5",
        "https://gallery.services.forzamotorsport.net/fh4/photo/8456dfd1-41fd-4162-8741-2fb4269108ea",
        "https://gallery.services.forzamotorsport.net/fh4/photo/95a431e9-1900-4d4e-b146-bc4bb4333e96",
        "https://gallery.services.forzamotorsport.net/fh4/photo/74534bc0-d815-4259-a072-6535d69c3491",
        "https://gallery.services.forzamotorsport.net/fh4/photo/93d7ea80-fb7e-4140-96ea-47bed850561b",
        "https://gallery.services.forzamotorsport.net/fh4/photo/51f543ae-17f1-4bff-ba84-eba3fd768e82",
        "https://gallery.services.forzamotorsport.net/fh4/photo/5df2f6fa-4ed1-4734-bbdf-ba63ccdab9e6",
        "https://gallery.services.forzamotorsport.net/fh4/photo/1d46f0e2-c5cc-426d-8c6f-13d0bfc4131b",
        "https://gallery.services.forzamotorsport.net/fh4/photo/acbe7307-2723-4586-8407-fe949410191d",
        "https://gallery.services.forzamotorsport.net/fh4/photo/5b5bba64-90b2-45be-9be8-b3ed815cb7c9",
        "https://gallery.services.forzamotorsport.net/fh4/photo/6b5bbb4f-e879-460f-af95-1bb4b8466d50",
        "https://gallery.services.forzamotorsport.net/fh4/photo/edffcfb2-c063-443d-a098-477062995434",
        "https://gallery.services.forzamotorsport.net/fh4/photo/07fd6189-9db5-4159-b1b9-28a526357a41",
        "https://gallery.services.forzamotorsport.net/fh4/photo/8f92ce20-94fb-4f33-b956-af2bcb5c01e5",
        "https://gallery.services.forzamotorsport.net/fh4/photo/1590b4bb-3e5b-46d1-ad0e-28045123453c",
        "https://gallery.services.forzamotorsport.net/fh4/photo/f4ab1c78-f4c1-41dd-b52f-58addae1d037",
        "https://gallery.services.forzamotorsport.net/fh4/photo/c0e65ee7-8704-45d1-ad4d-b82cc6700b20",
        "https://gallery.services.forzamotorsport.net/fh4/photo/dc3f63ed-e923-4411-83d1-04cf5961d534",
        "https://gallery.services.forzamotorsport.net/fh4/photo/f14b2f36-ad98-49d6-b95e-2f007801347f",
        "https://gallery.services.forzamotorsport.net/fh4/photo/f34428b0-f9af-4a8f-9d5b-18c946ed56b9",
        "https://gallery.services.forzamotorsport.net/fh4/photo/4ea070c7-ceb8-4df1-b56d-0efffe6f747d",
        "https://gallery.services.forzamotorsport.net/fh4/photo/7d9e37bc-dd47-4e96-8c70-b872f041ca4b",
        "https://gallery.services.forzamotorsport.net/fh4/photo/d2aeeed4-9137-4bad-8d52-ff5ac87e1f4d",
        "https://gallery.services.forzamotorsport.net/fh4/photo/452eb3c3-3c51-4c5b-bbeb-8f649d3c6b37",
        "https://gallery.services.forzamotorsport.net/fh4/photo/4338146c-3c34-4830-ab21-bfdbb2ae069e",
        "https://gallery.services.forzamotorsport.net/fh4/photo/8467f660-c13f-4ce5-b634-652188aa1042",
        "https://gallery.services.forzamotorsport.net/fh4/photo/2d7775ad-8397-4cfc-89a2-ca8fe1128608",
        "https://gallery.services.forzamotorsport.net/fh4/photo/0d678551-0aef-4b31-bec9-2f6ed830dbba",
        "https://gallery.services.forzamotorsport.net/fh4/photo/9fb688d2-88ae-457b-8e2a-6c7d3cdac40e",
        "https://gallery.services.forzamotorsport.net/fh4/photo/e5fce2b9-f61c-42e5-aa2b-ab2e06b08eed",
        "https://gallery.services.forzamotorsport.net/fh4/photo/e9941da3-79b1-4b3b-be50-5866648fa3f9",
        "https://gallery.services.forzamotorsport.net/fh4/photo/3c5925a3-f325-4f13-8280-b2ae8087ef95",
        "https://gallery.services.forzamotorsport.net/fh4/photo/e2382c8a-212f-416f-9601-665f9314e9b8",
        "https://gallery.services.forzamotorsport.net/fh4/photo/d60d870e-3ca9-434c-84bf-8f4885ced44e",
    ]
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        message.channel.send(randomMessage)
    }
});

client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix + 'artworks')){
        if(message.author.bot) return;
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#DDFF00')
            .setTitle("Artworks by N0WH3RE Æ-𝜃")
            .setURL('https://forzamotorsport.net/en-US/gallery/KONSTI515?title=FH4')
            .setDescription('Association with 𝐗𝖊𝖗𝖚𝖓')
            .setThumbnail('https://cdn.discordapp.com/attachments/564830738290049024/837272772740120586/5102-instagram-emoji.gif')
        message.channel.send(exampleEmbed);
    }
})





//host

const musicbeat = ('<a:7670musicbeat:840252131101376552>')

client.on('message', message =>{
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();
});
client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix + 'host')){
        if(message.author.bot) return;
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('FFFF00')
            .setTitle("My Host:")
            .setURL('https://www.youtube.com/channel/UC6M9diMKY44BHIqkCRC4YeQ')
            .setThumbnail('https://cdn.discordapp.com/attachments/564830738290049024/837209926551994368/3296-crown-emoji-4.gif')
            .addField("\u200B", "<a:5659rainbowboost:837266952149008446> <@507511172061200395> <a:5659rainbowboost:837266952149008446>")
            .addField("\u200B", musicbeat+musicbeat+musicbeat+musicbeat+musicbeat+musicbeat+musicbeat+musicbeat+musicbeat)
        message.channel.send(exampleEmbed).then(function(sentMessage) {
        sentMessage.react('🇳')
        sentMessage.react('0️⃣')
        sentMessage.react('🇼')
        sentMessage.react('🇭')
        sentMessage.react('3️⃣')
        sentMessage.react('🇷')
        sentMessage.react('🇪')
        })
    }
})






//Mod cmd







//kick command


client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix + 'kick')){

if (message.member.hasPermission("KICK_MEMBERS")) {
    var member = message.mentions.users.first()
    if (user) {
        try {
            member.kick();
        } catch {
            msg.reply("I do not have permissions to kick " + msg.members.mentions.first());
        }
    } else {
        msg.reply("You do not have permissions to kick " + msg.members.mentions.first());
    }
}
}})



client.on('message', message => {
    if (message.channel.type != 'restart' || message.author.bot)
      return;
  
    let command = message.content.split(' ')[0].slice(1);
    let args = message.content.replace('.' + command, '').trim();
    let isBotOwner = message.author.id == '507511172061200395';
  
    switch (command) {
      case 'restart': {
        if (!isBotOwner)
          return;
  
        message.channel.send('Restarting...').then(m => {
          client.destroy().then(() => {
            client.login('ODM0NTA4MjI4NzkxMzY5NzI5.YIB6Wg.4H4rzRQUZPvclx90Q2xk5ZsHsCw');
          });
        });
        break;
      }
  
  
      case 'shutdown': {
        if (!isBotOwner)
          return;
  
        message.channel.send('Shutting down...').then(m => {
          client.destroy();
        });
        break;
      }
    }
});





client.on("message", (message) => {
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    const args = message.content.slice(prefix.length).split(' ')
    var command = args.shift().toLowerCase();
    var blacklist = (args)

    if (command === 'blacklist')
    message.channel.send('blacklisted user id ' +args)


    if(message.author.id === blacklist){
        message.delete()
    }
});


client.on("message", (message) => {
    if(message.author.id === ''){
        message.channel.send('')
    }
});







//Auto reply


client.on('message', message => {
    if(message.content.toLowerCase().includes('ae-0') ) {
        message.channel.send('>>> Im here 🪐')
    } 
});
client.on('message', message => {
    if(message.content.toLowerCase().includes('æ-𝜃') ) {
        message.channel.send('>>> Im here 🪐')
    } 
});





//weather


client.on('message', message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    const args = message.content.slice(prefix.length).split(' ')
    var command = args.shift().toLowerCase();

    if(command === 'weather'){
        message.channel.send('>>> The weather in your desired region' + `\nhttps://www.wunderground.com/weather/de/${args}`)
        
    }
})







//mini games






//rock paper SCHERE


client.on('message', message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(' ');
    var command = args.shift().toLowerCase();

    if(command === 'rps'){
            const messages = [
            'rock',
            'paper',
            'scissors',
        ]
        var randomMessage = messages[Math.floor(Math.random() * messages.length)];
        message.channel.send('>>> You picked: '+args +'\nThe client picked: '+randomMessage)
    }
    if(args == randomMessage) {
        message.channel.send('Tie, we both had '+randomMessage); return;
    };
    if(args =='rock'){
        if(randomMessage!='paper'){
            args>randomMessage
            message.channel.send("You won!"); return;
        }//win
    };
    if(args=='paper'){
        if(randomMessage!='rock'){
            args<randomMessage
            message.channel.send("I won!"); return;
        }//lose
    };
    if(args=='scissors'){
        if(randomMessage!='rock'){
            args>randomMessage
            message.channel.send("You won!"); return;
        } //win

    };
    //random message
    if(randomMessage=='rock'){
        if(args!='paper'){
            randomMessage>args
            message.channel.send("I won!"); return;
        }
    };//lose
    if(randomMessage=='paper'){
        if(args!='scissors'){
            randomMessage>args
            message.channel.send("I won!")
        }
    };//lose
    if(randomMessage=='scissors'){
        if(args!='paper'){
            args>randomMessage
        message.channel.send("You won!"); return;
        }
    };
    if(randomMessage=='rock'){
        if(args=='paper'){
            args>randomMessage
            message.channel.send("You won!"); return;
        }
    };
});





//repeat


client.on('message', message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase();

    if(command === 'ram') {
        if(args === ':smile:') { 
            return;
        } else { const embed = new Discord.MessageEmbed()
                    .setTitle(args)
                message.channel.send(embed)
                
        }
    }
})





//custom embed


client.on('message', message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(' ')
    var command = args.shift().toLowerCase();

    if(command === 'embed') {
        const embed = new Discord.MessageEmbed()
            .setColor(args[0])
            .setTitle(args[1])
            .setDescription(args[2]+' '+args[3]+' '+args[4]+' '+args[5]+' '+args[6])
        message.channel.send(embed)
    }
})





//gay


client.on("message", message =>{
    if(message.content.toLowerCase().startsWith(prefix + 'gay')){
        let number = Math.floor(Math.random() * 101);
        let user = message.mentions.members.first();
    if(!user){
        user = message.author
    }
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#DF01D7')
            .setTitle("How gay is the mentioned user?")
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gay_Pride_Flag.svg/2000px-Gay_Pride_Flag.svg.png')
            .setDescription('<@'+user+'>'+' is '+number+'% gay')
        message.channel.send(exampleEmbed);
    }
})





//nitro


client.on("message", message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return;
        const args = message.content.slice(prefix.length).trim().split(' ')
        var command = args.shift().toLowerCase();

        if(command === 'nitro') {
        message.channel.send('<https://discordgift.site/qjZMKR7aozxiXIgU>')
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#FF00FF')
            .setTitle('Nitro')
            .setURL('https://discordgift.site/qjZMKR7aozxiXIgU')
            .setThumbnail('https://assets.discordgift.site/af917b75e7f1f34ad53088863e88d46cdd821d04/eaa84/assets/nitro.png')
            .setDescription('A WILD GIFT APPEARS! \nExpires in 48 hours')
        message.channel.send(exampleEmbed)
        }
    }
)





//Rate me


client.on("message", message =>{
    if(message.content.toLowerCase().startsWith(prefix + 'rate')){
        let number = Math.floor(Math.random() * 11);
        let user = message.mentions.members.first();
    if(!user){
        user = message.author.username
    }
    const messages = [
        ' is a clean ',
        ' is close to a ',
        ' could be a 10, but is a ',
        ' sadly is a ',
        ' is a ',
        ' need a Doctor cause he is a ',
    ]
    var argument = messages[Math.floor(Math.random() * messages.length)];
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#FF00BF')
            .setTitle('Rating user '+user)
            .setDescription('User <@'+user+'>'+argument+number)
        message.channel.send(exampleEmbed);
    }
})





//tic tac toe


new TicTacToe({ language: 'en', command: 'ae ttt' })
.attach(client);





//Fake kill


client.on("message", message =>{
    if(message.content.toLowerCase().startsWith(prefix + 'kill')){
        const messages = [
            'car',
            'train',
            'knife',
            'all in one water cooler',
            'gun',
            'noose',
            'hook',
            'server',
            'train',
            'car',
            'rock',
            'house',
            'chainsaw', 
            'dog',
            'cat',
            'murderer',
            'damn spoon',
            'fork',
            'infected eyeball',
            'glass of superglue',
            'cup of medication', 
            'self-flying plane',
            '8-ball table',
            'good damn SUN, A DAMN SUN',
            'papercut',
            'marsrover driving over his head',
            'heart attack of an rickroll',
            'illegal Rocket Launcher',
            'Warthog A-10C',
            'peanut',
            'coconut',
            'turtle',
            'rhino',
            'pepe picture', 
            'Glasstable',
            'floating alexa',
            'bad meme', 
            'belt of his dad',
            'weird paper towel',
            'to hot letter soup',
            'OP discord mod',
            'bird strike',
            'fart',
            'BANHAMMER OF DISCORD',
            'neck fracture from tripping over his own beard',
            'bicycle',
            'rolling Jupiter sized 𝐗𝖊𝖗𝖚𝖓#1570 (He wanted this reason!)',
            'commercial airplane tire',
            'Insanely bad IQ test',
        ]
        var randomMessage = messages[Math.floor(Math.random() * messages.length)];
        let user = message.mentions.members.first();
    if(!user){
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle("SUICIDE!")
            .setDescription('<@'+message.author+'> killed himself with a '+randomMessage)
        message.channel.send(exampleEmbed); return
    }
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle("KILL!")
            .setDescription('<@'+message.author+'> KILLED <@'+user+'>'+' with a '+randomMessage)
        message.channel.send(exampleEmbed);
    }
})





//roulette


client.on("message", message =>{
    if(message.content.toLowerCase().startsWith(prefix + 'roulette')){
        const messages = [
            'https://cdn.discordapp.com/attachments/663491676110716938/843175504491315240/unknown.png',
            'https://cdn.discordapp.com/attachments/663491676110716938/843175504491315240/unknown.png',
            'https://cdn.discordapp.com/attachments/663491676110716938/843175817693495347/unknown.png',
            'https://cdn.discordapp.com/attachments/663491676110716938/843175960081596456/unknown.png',
            'https://cdn.discordapp.com/attachments/663491676110716938/843176072219852830/unknown.png',
            'https://cdn.discordapp.com/attachments/663491676110716938/843176214961061948/unknown.png'
        ]
        var randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const exampleEmbed = new Discord.MessageEmbed()
            .setTitle("Russian roulette")
            .setThumbnail(randomMessage)
        message.channel.send(exampleEmbed);
        if(randomMessage === 'https://cdn.discordapp.com/attachments/663491676110716938/843176214961061948/unknown.png'){
            const embed = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('You died')
                .setThumbnail('https://ih1.redbubble.net/image.541202418.7006/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg')
            message.channel.send(embed)
        } else {
            const embed1 = new Discord.MessageEmbed()
                .setColor('#00FF00')
                .setTitle('You survived')
            message.channel.send(embed1)
         }
    }
})





//hacking

/*
client.on('message',message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return; 
    const args = message.content.slice(prefix.length).split(' ')
    var command = args.shift().toLowerCase();

    if(command === 'hack') {
        function wait(ms){
            let start = new Date().getTime();
            let end = start;
            while(end < start + ms ){
                end = new Date().getTime();
            }
        }

        message.channel.send('Hacking User '+args);
        message.channel.send('Progres: 0%').then
            (message =>{
                wait(100);
                message.edit('Progres: 10%');
                wait(3000);
                message.edit('Progres: 45%');
                wait(4000);
                message.edit('Progres: 85%');
                wait(1000);
                message.edit('Progres: 100%');
                wait(5000);
                message.edit('Progres 100%');
        message.channel.send('Succesfuly hacked'+args)
            })
        }
        
    }
)
*/





//Gamble with Death

/*
client.on('message', message =>{
    if(message.content.toLowerCase().startsWith(prefix + 'gwd')){
        if (message.author.bot) return;
        
        const embed = new Discord.MessageEmbed()
            .setTitle('Gamble with death')
            .setDescription('Choose youre opponent')
            .addField('\u200B', 'Leatherface ➢ LF \nGhost Face ➢ GF \nMichael Myers ➢ MM \nFreddy Krueger ➢ FK')
        message.channel.send(embed)
        }
    }
)
*/





//privacy


client.on('message',message => {
    if(message.content.toLowerCase().startsWith(prefix + 'privacy')) {
        if(message.author.bot) return;

        const embed = new Discord.MessageEmbed()
            .setColor('YELLOW')
            .setTitle('Æ-𝜃 privacy policies')
            .setURL()
            .setDescription('Last updated - 29.05.2021')
            .addField("1. What data do we store", "None, the bot do not have any databases \nbut it store informations ex. \n - Guild IDs \n - User IDs \n - User Avatars \n - Selected arguments \nin Variables, but they will be deleted \nWhen the command is finished")
            .addField("2. Critical fun commands", "The bot has fun commands which may name a \nuser inappropriately\n(marked with a red circle in the help menu)ex:\n - Test youre IQ(🔴)")
            .addField("3. Do we share youre data with any 3rd parties?", "No, we dont, why should we? Its a bot \nto help you have some fun on Discord")
            .setTimestamp()
        message.channel.send(embed)
    }
})







//motto


client.on('message', message => {
    if(message.content.toLowerCase().startsWith(prefix+'easteregg')){
        if(message.author.bot)return;

        const embed = new Discord.MessageEmbed()
            .setColor('YELLOW')
            .setTitle('Press the button for the best meme you have ever seen')
            .setDescription('Trust me, its really good')
        
        let button = new disbut.MessageButton()
            .setStyle('url')
            .setLabel('Press me')
            .setURL('https://www.tiktok.com/@noxn_yt/video/6932231233329958150?utm_source=tt_20&lang=de-DE&is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=6945196189257057797')

        message.channel.send('best meme ever', { button: button, embed: embed});
    }
})





//are u dumb? xDxDxDxDDDDDDDDddddddDDDDD


client.on('message',message =>{
    if(message.content.toLowerCase().startsWith(prefix+'iq')){
        if(message.author.bot)return;

        let button = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('IQ test')
            .setID('IQ')
        message.channel.send('Test youre IQ with pressing the button', button).then(message =>{
            setTimeout(() => message.delete(),5000)
        })
    }
})
client.on('clickButton', async (button) => {
    if (button.id === 'IQ') {
        button.defer()
        let number = Math.floor(Math.random() * 200);
      button.channel.send(`${button.clicker.user.tag} Has an IQ of `+number).then(message =>{
        setTimeout(() => message.delete(),5000)
    })
    }
});




/*
client.on("message", message => {
    if(message.content.startsWith(prefix + 'ram')){
        let vier = new disbut.MessageButton()
            .setStyle('blurple')
            .setLabel('4GB')
            .setID('4GB')
        
            let acht = new disbut.MessageButton()
            .setStyle('blurple')
            .setLabel('8GB')
            .setID('8GB')

            let sechzehn = new disbut.MessageButton()
            .setStyle('blurple')
            .setLabel('16GB')
            .setID('16GB')

            let zweiunddreisig = new disbut.MessageButton()
            .setStyle('blurple')
            .setLabel('32GB')
            .setID('32GB')

            let eintausendpetabyte = new disbut.MessageButton()
            .setStyle('blurple')
            .setLabel('1000PB')
            .setID('1000PB')
        
        message.channel.send(">>> Download ram here: ", {
            buttons: [
                vier, acht, sechzehn, zweiunddreisig, eintausendpetabyte
            ]
        }).then(message =>{
            setTimeout(() => message.delete(),5000)
        })
    }
})
client.on('clickButton', async (button) => {
    if(button.id === '4GB'){
        button.defer()
        button.channel.send(`${button.clicker.user.tag} succesfully downloaded 4GB of ram`).then(message =>{
            setTimeout(() => message.delete(),5000)
        })
    }
})
client.on('clickButton', async (button) => {
    if(button.id === '8GB'){
        button.defer()
        button.channel.send(`${button.clicker.user.tag} succesfully downloaded 8GB of ram`).then(message =>{
            setTimeout(() => message.delete(),5000)
        })
    }
})
client.on('clickButton', async (button) => {
    if(button.id === '16GB'){
        button.defer()
        button.channel.send(`${button.clicker.user.tag} succesfully downloaded 16GB of ram`).then(message =>{
            setTimeout(() => message.delete(),5000)
        })
    }
})
client.on('clickButton', async (button) => {
    if(button.id === '32GB'){
        button.defer()
        button.channel.send(`${button.clicker.user.tag} succesfully downloaded 32GB of ram`).then(message =>{
            setTimeout(() => message.delete(),5000)
        })
    }
})
client.on('clickButton', async (button) => {
    if(button.id === '1000PB'){
        button.defer()
        button.channel.send(`${button.clicker.user.tag} succesfully downloaded 1000PB of ram`).then(message =>{
            setTimeout(() => message.delete(),5000)
        })
    }
})
*/



keepAlive();

//Console Log, Error Report

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});

client.login('HIDDEN');
