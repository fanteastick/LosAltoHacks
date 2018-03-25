// require the discord.js module
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const ytdl = require('ytdl-core');//Youtube api stuff
const Music = require('discord.js-musicbot-addon');
const Sequelize = require('sequelize');
// create a new Discord client
const client = new Discord.Client();
var tags = [];
var facts = ["Only 8 species of bears are extant.",
"Unlike many mammals, bears can see in color.",
"Polar bears are the largest land predators on earth, standing over 11' high and weighing over 1,700 lbs.",
"Bears have an excellent sense of smell, better than dogs or possibly any other mammal.",
"All polar bears alive today can trace their ancestry back to one female brown bear who lived in Ireland 50,000 years ago.",
"A group of bears is called a sloth.",
"Of the 8 species of bears, the polar bear is mostly carnivorous, the giant panda feeds almost entirely on bamboo and the remaining six species are omnivorous with varied diets.",
"If you eat a polar bear liver, you'll die. Humans can't handle that much vitamin A.",
"Polar bears can smell its prey on the ice 20 miles (32 km) away.",
"If it's black, fight back, if it's brown, lay down, and if it's white, good night!",
"Grizzly bears have a bite-force of over 8,000,000 pascals, enough to crush a bowling ball.",
"The prehistoric Finns, along with most Siberian peoples, considered the bear as the spirit of one's forefathers.",
"Teddy bears were named after U.S. President Theodore 'Teddy' Roosevelt.",
"There are no polar bears in Antarctica, only in the Arctic‎",
"Tigers are the only predators known to regularly prey on adult bears.",
"A bear fought in the Polish Army in WW2. He carried shells to the frontline and was taught to salute.",
"A grizzly bear has to eat almost 20,000 calories a day.",
"Male bears are called boars and female bears are called sows.",
"Female bears give birth during the hibernation period, and are roused when doing so.",
"During hibernation, the bear's metabolism slows down, its body temperature decreases slightly, and its heart rate slows from a normal value of 55 to just 9 beats per minute.",
"Polar bears can swim 60 miles (96 km) without stopping.",
"Bears do not urinate while they hibernate. Their bodies convert urine into protein and use it as food.",
"Bears have favorite trees and will walk for miles just to scratch their backs on them",];
//tags things
const Enmap = require('enmap');
const EnmapLevel = require('enmap-level');
const tableSource = new EnmapLevel({name: "myTable"});
const myTable = new Enmap({provider: tableSource});
client.myTable = new Enmap({name: "myTable"});

const responseObject = {
  "ayy": "Ayy lmao!",
  "wat": "Say what?",
  "lol": "roflmaotntpmp"
};

// when the client is ready, run this code
// this event will trigger whenever your bot:
// - finishes logging in
// - reconnects after disconnecting

client.once('ready', () => {
    console.log('Ready! GRAB ME MY POOPIE POPPER BOYS WE ARE READY TO GO!');
});

// login to Discord with your app's token
client.on('message', async message => {
  if (message.content.startsWith("<@427243991889608715> help") || message.content.startsWith("help")) {
    message.channel.send(`Hi user! My prefix is ${prefix}`);
    let text = ""
    + "Welcome to help \n \nTODO: Get rich presence. \nTwo functionalities: Emojis and Store Tags \n***Commands(num params):***" + "\n" + "\n"
    +"`settoken(2)` WHEREIN the first word is the tag \"token\", the other words are the \"key\"" + "\n"
    +"`gettoken(1)` WHEREIN you input the token name and the bot will return the key" + "\n"
    +"`allemotes(0)` WHEREIN every single emote on the current server is listed" + "\n"
    +"`emote(1)` WHEREIN the emote name you type out is searched. if found, added as reaction" + "\n"
    +"`help(0)` WHEREIN you get a help menu" + "\n"
    +"`ayy(0)` WHEREIN it returns the best emote response amirite" + "\n"
    +"`avail(0)` WHEREIN all available tags that you've made in the session are printed"
    + "\n"+ "\n"+ "\n"
    + 'command: !ding: vHARD,\n !Mang0 Nation: PPMD,\n !server: where am I?,\n !help: EleGiggle,\n  !Eileen: RIP,\n !Youtube: Like and Subscribe,\n !actualhelp: :thinking:,\n'
    +'!kick: just try it ;),\n !slap: ouch,\n !ping: self explanatory really, check your latency,\n !flirt ( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°),\n !wink ;),\n !fart: Eww...,\n !sneeze: gesundheit!,\n !hug: <3,\n !oi: ????,\n !settoken: set a token/tag,\n !gettoken: get the token'
    +'avail: /shrug, \n !bearfacts: Hmmmm...';

    message.channel.send({embed: {
    color: 3447003,
    description: text + "hello"
  }});
  }


  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();
  const taggedUser = message.mentions.users.first();




  if(responseObject[message.content]) {
      message.channel.send(responseObject[message.content]);
    }

//***************************************BASIC TEXT COMMANDS********************************************
  if (message.content === `${prefix}ding`) {
      message.channel.send("DONG", {
    file: "http://i.imgur.com/ja1a2ly.jpg" //linking images is vERY HARD
    });
  }
  if (message.content === `${prefix}Mang0 Nation`) {
      message.channel.send('*Fox McCloud*');
  }
  if (message.content === `${prefix}server`) {
    message.channel.send(`This server's name is ${message.guild.name}`);
  }
  if (message.content === `${prefix}name`){
    message.channel.send(`Your name is ${message.author.username}`);
  }
  if (message.content === `${prefix}help`){
    message.channel.send(`Sorry, ${message.author.username}, if you asked for help from this bot, you're shit out of luck`);
  }
  if (message.content === `${prefix}Eileen`){
    message.channel.send('On the afternoon of March 24, 2018, Eileen Zhang promised her gr'
    +'oupmates at the Los Altos Hack-a-thon that she would return in 15 minutes. After 25 minutes of waiting,'
    +' detective Charles Frederick Lyster, chief of police Jason Daniel Odell, and local forensics expert'
    +' Aria Joseph Rouzmehr pronounced her deceased at the hour of six fifty-two Post Meridiem, Pacific Standard Time (UTC-8)');
  }
  if (message.content === `${prefix}Youtube`) {
      message.channel.send({embed: {
        color: 3447003,
        title: "4 idiots playing Smash Bros",
        url: "https://www.youtube.com/watch?v=DNlm_OpRiHg",
      }
    });
  }
  if (message.content === `${prefix}actualhelp`){
    message.channel.send('command: !ding: vHARD,\n !Mang0 Nation: PPMD,\n !server: where am I?,\n !help: EleGiggle,\n  !Eileen: RIP,\n !Youtube: Like and Subscribe,\n !actualhelp: :thinking:,\n'
    +'!kick: just try it ;),\n !slap: ouch,\n !ping: self explanatory really, check your latency,\n !flirt ( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°),\n !wink ;),\n !fart: Eww...,\n !sneeze: gesundheit!,\n !hug: <3,\n !oi: ????,\n !settoken: set a token/tag,\n !gettoken: get the token'
    +'avail: /shrug, \n !bearfacts: Hmmmm...');
  }
  if (message.content === `${prefix}Bearfacts`){
    message.channel.send(facts[Math.floor(Math.random()*20)]);
  }


//*************************MORE ADVANCED COMMANDS THAT TAKE IN ARGUMENTS**********************************
  if (command === 'args-info') {
      if (!args.length) { //debug command to test arguments
          return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
      }
      message.channel.send(`Command name: ${command}\nArguments: ${args}`);
  }
  if (command === 'kick') {
    if (!message.mentions.users.size) {
      return message.reply(` attempting to kick themself, does a flip and falls on their face.`);
    }
    message.channel.send(`${message.author.username} kicks ${taggedUser.username} right on the backside, ouch!`);
  }
  if (command === 'slap'){
    if (!message.mentions.users.size){
      return message.reply(` like a buffoon, slaps themself. How silly!`);
    }
    message.channel.send(`*${message.author.username} slaps ${taggedUser.username} across the face, ouch!*`);
  }
  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Latency is ${m.createdTimestamp - message.createdTimestamp} ms. API Latency is ${Math.round(client.ping)} ms`);
  }
  if (command === 'flirt') {
    if (!message.mentions.users.size) {
      return message.send(`Don't be silly, ${message.author.username}, you aren't *that* good looking!`);
    }
    message.channel.send(`${message.author.username} clears their throat, trying to get ${taggedUser.username}'s attention...\n\n\n\n\nSuddenly, they loudly proclaim,\n "THOSE CLOTHES LOOK GREAT ON YOU,\n BUT THEY WOULD LOOK BETTER ON MY BEDSIDE!"`);
  }
  if (command === 'wink'){
    if(!message.mentions.users.size){
      return message.reply(' Who in their right mind just winks randomly at no one?');
    }
    message.channel.send(`${message.author.username} winks at ${taggedUser.username}`);
  }
  if (command === 'fart'){
    if (!message.mentions.users.size){
      return message.reply(` farts loudly...whew, what stinks?`);
    }
    message.channel.send(`${message.author.username} lifts their leg and farts against ${taggedUser.username}, disgusting...`);
  }
  if (command === 'sneeze'){
    if(!message.mentions.users.size){
      return message.reply(` sneezes, A-CHOO!`);
    }
    message.channel.send(`${message.author.username} sneezes at ${taggedUser.username}, ewwww...`);
  }
  if (command === 'hug'){
    if(!message.mentions.users.size){
      return message.reply(` hugs themself like the lonely person they are, what a shame...`);
    }
    message.channel.send(`${message.author.username} hugs ${taggedUser.username}, how romantic!`);
  }
  if(command === 'kick1') {
     // This command must be limited to mods and admins. In this example we just hardcode the role names.
     // Please read on Array.some() to understand this bit:
     // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
     if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
       return message.reply("Sorry, you don't have permissions to use this!");

     // Let's first check if we have a member and if we can kick them!
     // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
     let member = message.mentions.members.first();
     if(!member)
       return message.reply("Please mention a valid member of this server");
     if(!member.kickable)
       return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

     // slice(1) removes the first part, which here should be the user mention!
     let reason = args.slice(1).join(' ');
     if(!reason)
       return message.reply("Please indicate a reason for the kick!");

     // Now, time for a swift kick in the nuts!
     await member.kick(reason)
       .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
     message.reply(`${member.user.tag} has been kicked by ${message.author.tag} for reason: ${reason}`);

   }
   if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");

    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable)
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the ban!");

    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} for reason: ${reason}`);
  }




//****************************** EILLEEN MESSES WITH STUFF WHOOT ***************************************
if (message.content === `${prefix}oi`) {
  message.channel.send(`What do you want from me reeEEeeeEEEee`);
}

////********************* MESSING WITH KEYS ****************
  /*if (message.content.startsWith(config.prefix + "getkey ")) {
    let newtoken = message.content.split(" ").slice(1, 2)[0];
    message.channel.send("" + newtoken); // outputs "bar")
  } else if (message.content.startsWith(config.prefix + "getkey")) {
    message.channel.send("That's not a valid key!! To get a key, type out ```" + config.prefix + "getkey <insert key here>```");
  }*/
  if (message.content.startsWith(`${prefix}settoken `)) {
    let newtoken = message.content.split(" ").slice(1,2)[0];
    let newarray = message.content.split(" ");
    /*if (newarray.length != 3) {
      message.channel.send("There was an incorrect number of arguments, please only have 2 arguments for <key> and <token>");
      return;
    }*/
    let text = ""; // in array: 0 is +settoken
    for (i = 2; i < newarray.length; i++) {
      text += newarray[i] + " ";
    }
    message.channel.send("```" + text + "```");
    /*if (myTable.has(newarray[1])) {
    message.channel.send("That token pair already exists");
    message.channel.send(client.myTable.get(newarray[1]));
    return;
  }*/
  //let newstring = message.content.split(" ");
  //let newkey = newstring.split(" ").slice(1,2)[0];
  message.channel.send("command: " + newarray[0]);
  message.channel.send("newtoken is " + newarray[1] + " and newkey is " + text);
  client.myTable.set(newarray[1], text);// + newkey)
  tags.push(newarray[1]);

  }

  if (message.content.startsWith(`${prefix}gettoken `)) {
    let ttoken = message.content.split(" ").slice(1,2)[0];
    /*if (!myTable.has(ttoken)) {
    return;
  } else{*/
  message.channel.send(client.myTable.get(ttoken));//}
  }

  // AVAILABLE TAGS********************************************************************************
  if (message.content.startsWith(`${prefix}avail`)) {
    let text = "";
    for (j =0; j <tags.length; j++) {
      text += tags[j] + " ";
    }
    message.channel.send("Available tags include: \n" + text);
  }
  if (message.content.startsWith(`${prefix}ayy`)) {
  //const ayy = client.emojis.find("name", "ayyylmao");
  const ayy = client.emojis.get("427384784658890752");
  message.channel.send(`${ayy} LMAO`);
  message.channel.send("Does it work or wha");
  //message.react(client.emojis.get("427384784658890752"));
  message.react(ayy);
}

if(message.content.startsWith(`${prefix}emote `)) {
  let emotelister = message.content.split(" ");
  let emotee = emotelister[1];
  let emoe = client.emojis.find("name", emotee);
  message.channel.send("" + emoe);
  message.react(emoe);
}

//****************************** VOICE CHANNEL COMMANDS ***************************************
if (message.content === `${prefix}join`) {
   // Only try to join the sender's voice channel if they are in one themselves
   if (message.member.voiceChannel) {
     const connection = await message.member.voiceChannel.join();
   }
   else {
     message.reply('You need to join a voice channel first!');
   }
 }
 /*if(message.contains === '!play'){
   play<'https://www.youtube.com/watch?v=jVf4_WglzWA'>
 }*/
});
client.login(token);
