//Console Start


const Discord = require ('discord.js');

const client =  new Discord.Client();

const prefix = "ae ";

client.once('ready', () => {
    console.log ('AE is online!');
    client.user.setStatus('online')
    client.user.setPresence ({
        game: {
            name: 'test',
            type: 'streaming',
            url: 'https://www.twitch.tv/nasa'
        }
    })
});

var Version = ('2.4.1');



//Standard cmd

//status




//help CMD 


client.on('message',message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return; 
    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();

    if(command === 'help') {
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#00FF00')
	.setTitle('```Help menu of Æ-𝜃```')
	.setURL()
	.setAuthor('Æ-𝜃', 'https://cdn.discordapp.com/attachments/786654358670278656/834730896745693234/letter-a-and-e-logo-ae-ligature-symbol-vector-20420938.jpg')
	.setDescription('﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌')
	.setThumbnail()
	.addFields(
		{ name: '┍ae help', value: '┃Shows Help menu' },
        { name: '┠ae test1', value: '┃Shows first test command' },
        { name: '┠ae test2', value: '┃Shows second test command' },
        { name: '┠ae test3', value: '┃Show third test command' },
        { name: '┠ae saturn', value: '┃Send Emoji of Saturn' },
        { name: '┠ae units', value: '┃Show size comparrison of Universe' },
        { name: '┠ae exo', value: '┃Shows exoplanet classification list' },
        { name: '┠ae voyager1', value: '┃Shows live Voyager 1 status' },
        { name: '┠ae voyager2', value: '┕Shows live Voyager 2 status' },
        { name: '\uFEFF', value: '\uFEFF' },
        { name: '┍ae stats', value: '┃Shows the Bot stats' },
        { name: '┠ae avatar', value: '┃Show youre Avatar' },
        { name: '┠ae update', value: '┃Show last update log' },
        { name: '┠ae host', value: '┃Show host of the Bot' },
        { name: '┠ae about', value: '┕About the bot' },
	)
	.setImage()
	.setTimestamp()
	.setFooter('Bot by N0WH3RE Æ-𝜃', 'https://cdn.discordapp.com/attachments/786654358670278656/834732229048926248/keplar-22b.jpg');

message.channel.send(exampleEmbed)}});






//Space cmd





//if-else CMD Section


client.on('message', message =>{
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();

    if(command === 'test1'){
        message.channel.send('test1');
    }
});


client.on('message', message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();

    if(command === 'test2'){
        message.channel.send('test2');
    }
});


client.on('message', message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();

    if(command === 'test3'){
        message.channel.send('test3')
    }
});


client.on('message',message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return; 
    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();

    if(command === 'saturn') {
        message.channel.send(':ringed_planet:')
    }
})





//units


client.on('message', message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();

    if(command === 'units'){
        message.channel.send('```Earth - Sun: 1AU (149.000.000km) \nSolar System Dialmeter: 1,921.56 AU \nOort Cloud Dialmeter: 5.000-100.000 AU \nNearest Star (Proxima Centauri): 4,247 Lightyears```')
    }
})
client.on('message', message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();

    if(command === 'units'){
        message.channel.send('```Light Year: 63.241,077 AU \nMilky Way Dialmeter: 52.850 Lightyears \nNearest Galaxy (Andromeda Galaxy): 2,5mio Lightyears \nAndromeda Galaxy Dialmeter: 200.000 Lightyears```')
    }
})
client.on('message', message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();

    if(command === 'units'){
        message.channel.send('```Observable Universe Dialmeter: 8,8x10^26 Billion Lightyears```')
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
	.setURL('https://i.ytimg.com/vi/WjXBU367Ea0/maxresdefault.jpg')
	.setAuthor('Voyager 1', 'https://cdn.discordapp.com/attachments/786654358670278656/834730896745693234/letter-a-and-e-logo-ae-ligature-symbol-vector-20420938.jpg')
	.setDescription('Voyager 1 Stats at April 2021')
	.setThumbnail('https://www.antennemuenster.de/assets/images/playerlogos/rot/live.png')
	.addFields(
		{ name: 'Distance from Sun:', value: '152,59 AU' },
        { name: 'Speed:', value: '38.026mph' },
        { name: 'Elapsed Time:', value: '43Yrs, 07Mos' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Voyager 1', value: 'Made', inline: true },
		{ name: 'Live', value: 'by', inline: true },
	)
	.addField('Feed', 'Nasa', true)
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
	.setURL('https://i.ytimg.com/vi/WjXBU367Ea0/maxresdefault.jpg')
	.setAuthor('Voyager 2', 'https://cdn.discordapp.com/attachments/786654358670278656/834730896745693234/letter-a-and-e-logo-ae-ligature-symbol-vector-20420938.jpg')
	.setDescription('Voyager 2 Stats at April 2021')
	.setThumbnail('https://www.antennemuenster.de/assets/images/playerlogos/rot/live.png')
	.addFields(
		{ name: 'Distance from Sun:', value: '126,82 AU' },
        { name: 'Speed:', value: '34,390mph' },
        { name: 'Elapsed Time:', value: '43Yrs, 08Mos' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Voyager 2', value: 'Made', inline: true },
		{ name: 'Live', value: 'by', inline: true },
	)
	.addField('Feed', 'Nasa', true)
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
		{ name: 'Keplar', value: 'Sun of a System including exoplanet candidates' },
        { name: 'Keplar B', value: 'Planet with earth similar structures' },
        { name: 'Keplar C:', value: 'Exoplanet later discovered as Gas PLanet' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Exoplanet', value: 'List', inline: true },
		{ name: 'explenation', value: 'by', inline: true },
	)
	.addField('list', 'Nasa', true)
	.setImage('https://images.derstandard.at/img/2019/02/23/exoplanet.jpg?w=750&s=678daa9d')
	.setTimestamp()
	.setFooter('Bot by N0WH3RE Æ-𝜃', 'https://cdn.discordapp.com/attachments/786654358670278656/834732229048926248/keplar-22b.jpg');

message.channel.send(exampleEmbed)}});





//Normal cmd





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
	.setThumbnail()
	.addFields(
		{ name: 'Project by', value: '<@507511172061200395>' },
		{ name: 'Project target', value: '1 Bot for everything' },
		{ name: 'Sponsored by', value: 'L I F E | Community \nHorizon \nRecraft.net' },
		{ name: 'Partner', value: 'Silent Warrior K \n$𝖑𝐱𝐲 𝐓𝐱𝐳 \n𝐞𝐥𝐢𝐱𝐬𝐬_' },
        { name: '\uFEFF', value: '\uFEFF' },
        
        { name: 'Version', value: Version, inline: true },
        { name: 'Soon', value: 'Mod features', inline: true },
        { name: 'Features', value: 'Astronomical facts, \nProfile commands', inline: true },
	)
	.setTimestamp()
	.setFooter('Bot by N0WH3RE Æ-𝜃', 'https://cdn.discordapp.com/attachments/786654358670278656/834732229048926248/keplar-22b.jpg');

message.channel.send(exampleEmbed)}});





//host


client.on('message', message =>{
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();

    if(command === 'host') {
        message.react('🇳')
        message.react('0️⃣')
        message.react('🇼')
        message.react('🇭')
        message.react('3️⃣')
        message.react('🇷')
        message.react('🇪')
}});
client.on('message', message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();

    if(command === 'host'){
        message.channel.send('<@507511172061200395>')
    }
});
client.on('message', message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();

    if(command === 'host'){
        message.channel.send('⇧⇧      ⇧⇧ \nIs my host ^^')
    }
});





//stats


client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix + 'stats')){
        if(message.author.bot) return;
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#DDFF01')
            .setTitle("Bot's Live Status")
            .setThumbnail('https://cdn.discordapp.com/attachments/834535811042902027/834824411592392764/6360-aearth.gif')
            .addField(" \u200B ", "**Channels** : ` " + `${client.channels.cache.size}` + " `")
            .addField(" \u200B ", "**Servers** : ` " + `${client.guilds.cache.size}` + " `")
            .addField(" \u200B ", "**Users** : ` " + `${client.users.cache.size}` + " `")
            .addField(" \u200B ", "**Bot developer: <@507511172061200395>**")
            .addField(" \u200B ", Version)
        message.channel.send(exampleEmbed);
    }
})



//avatar


client.on('message',message => {
    if(!message.content.startsWith(prefix)||message.author.bot) return; 
    const args = message.content.slice(prefix.length).split(/ +/)
    var command = args.shift().toLowerCase();

	if (command === 'avatar') {
		const user = message.author;
	
		return message.channel.send(`**${user.username}'s avatar:** ${user.displayAvatarURL({ dynamic: true })}`)
}});





//client updates


client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix + 'update')){
        if(message.author.bot) return;
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#DDFF01')
            .setTitle("Updates")
            .setDescription (Version)
            .addFields(
                { name: 'New', value: 'design refresh\nhelp cmd refresh', inline: true },
                { name: 'Removed', value: 'footer of some \nembeds', inline: true },)
        message.channel.send(exampleEmbed);
    }
})












//Mod cmd















//Console Log, Error Report

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});


client.login('ODM0NTA4MjI4NzkxMzY5NzI5.YIB6Wg.4H4rzRQUZPvclx90Q2xk5ZsHsCw');