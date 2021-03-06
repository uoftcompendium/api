const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {

    console.log('I am ready!');
});


client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  
  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
    
  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    if(!message.member.roles.some(r=>["tank"].includes(r.name)) )
      return message.reply("Error: insufficient_permissions <:snowflake_error:717856466203312128>");    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }

  msg = message.content.toLowerCase();
  if (message.author.bot) return;
  mention = message.mentions.users.first();
  if(command === "notify") {
    if(!message.member.roles.some(r=>["tank"].includes(r.name)) )
      return message.reply("Error: insufficient_permissions <:snowflake_error:717856466203312128>");    const sayMessage = args.join(" ");
      mentionMessage = message.content.slice(8).split(' ')
      mentionMessage.shift()
      mentionMessage = mentionMessage.join(' ')
      mention.sendMessage (mentionMessage);
      message.channel.send ("Notified!");
      console.log(mentionMessage);

  }
    
  if(command === "verify_566273291363287051") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    if(!message.member.roles.some(r=>["tank"].includes(r.name)) )
      return message.reply("Error: insufficient_permissions <:snowflake_error:717856466203312128>");    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    // And we get the bot to say the thing: 
    message.channel.send("(1) result found for query " + "`566273291363287051` <:snowflake_ID:717854309081022528>");
  }

  if(command === "verify_566273291363287001") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    if(!message.member.roles.some(r=>["tank"].includes(r.name)) )
      return message.reply("Error: insufficient_permissions <:snowflake_error:717856466203312128>");    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    // And we get the bot to say the thing: 
    message.channel.send("Error: (0) results found for query " + "`566273291363287001` <:snowflake_error:717856466203312128>");
  }
 
  if(command === "verify_591634071134928927") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    if(!message.member.roles.some(r=>["tank"].includes(r.name)) )
      return message.reply("Error: insufficient_permissions <:snowflake_error:717856466203312128>");    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    // And we get the bot to say the thing: 
    message.channel.send("(1) result found for query " + "`591634071134928927` <:snowflake_ID:717854309081022528>");
  }
    
  if(command === "verify_591634092697714688") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    if(!message.member.roles.some(r=>["tank"].includes(r.name)) )
      return message.reply("Error: insufficient_permissions <:snowflake_error:717856466203312128>");    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    // And we get the bot to say the thing: 
    message.channel.send("(1) result found for query " + "`591634092697714688` <:snowflake_ID:717854309081022528>");
  }
    
  if(command === "verify_592011460075585566") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    if(!message.member.roles.some(r=>["tank"].includes(r.name)) )
      return message.reply("Error: insufficient_permissions <:snowflake_error:717856466203312128>");    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    // And we get the bot to say the thing: 
    message.channel.send("(1) result found for query " + "`592011460075585566` <:snowflake_ID:717854309081022528>");
  }
    
  if(command === "verify_592011489162821669") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    if(!message.member.roles.some(r=>["tank"].includes(r.name)) )
      return message.reply("Error: insufficient_permissions <:snowflake_error:717856466203312128>");    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    // And we get the bot to say the thing: 
    message.channel.send("(1) result found for query " + "`592011489162821669` <:snowflake_ID:717854309081022528>");
  }
    
  if(command === "verify_592011558155059289") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    if(!message.member.roles.some(r=>["tank"].includes(r.name)) )
      return message.reply("Error: insufficient_permissions <:snowflake_error:717856466203312128>");    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    // And we get the bot to say the thing: 
    message.channel.send("(1) result found for query " + "`592011558155059289` <:snowflake_ID:717854309081022528>");
  }
    
  if(command === "verify_592013111746101248") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    if(!message.member.roles.some(r=>["tank"].includes(r.name)) )
      return message.reply("Error: insufficient_permissions <:snowflake_error:717856466203312128>");    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    // And we get the bot to say the thing: 
    message.channel.send("(1) result found for query " + "`592013111746101248` <:snowflake_ID:717854309081022528>");
  }
    
  if(command === "verify_592618517883518977") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    if(!message.member.roles.some(r=>["tank"].includes(r.name)) )
      return message.reply("Error: insufficient_permissions <:snowflake_error:717856466203312128>");    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    // And we get the bot to say the thing: 
    message.channel.send("(1) result found for query " + "`592618517883518977` <:snowflake_ID:717854309081022528>");
  }
    
  if(command === "verify_592618598455967774") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    if(!message.member.roles.some(r=>["tank"].includes(r.name)) )
      return message.reply("Error: insufficient_permissions <:snowflake_error:717856466203312128>");    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    // And we get the bot to say the thing: 
    message.channel.send("(1) result found for query " + "`592618598455967774` <:snowflake_ID:717854309081022528>");
  }
    
  if(command === "verify_592618613756919829") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    if(!message.member.roles.some(r=>["tank"].includes(r.name)) )
      return message.reply("Error: insufficient_permissions <:snowflake_error:717856466203312128>");    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    // And we get the bot to say the thing: 
    message.channel.send("(1) result found for query " + "`592618613756919829` <:snowflake_ID:717854309081022528>");
  }
    
  if(command === "verify_592618722204712979") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    if(!message.member.roles.some(r=>["tank"].includes(r.name)) )
      return message.reply("Error: insufficient_permissions <:snowflake_error:717856466203312128>");    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    // And we get the bot to say the thing: 
    message.channel.send("(1) result found for query " + "`592618722204712979` <:snowflake_ID:717854309081022528>");
  }
    
  if(command === "verify_592618819328016394") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    if(!message.member.roles.some(r=>["tank"].includes(r.name)) )
      return message.reply("Error: insufficient_permissions <:snowflake_error:717856466203312128>");    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    // And we get the bot to say the thing: 
    message.channel.send("(1) result found for query " + "`592618819328016394` <:snowflake_ID:717854309081022528>");
  }
    
  if(command === "verify_593694202882424832") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    if(!message.member.roles.some(r=>["tank"].includes(r.name)) )
      return message.reply("Error: insufficient_permissions <:snowflake_error:717856466203312128>");    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    // And we get the bot to say the thing: 
    message.channel.send("(1) result found for query " + "`593694202882424832` <:snowflake_ID:717854309081022528>");
  }
    
  if(command === "extract_592618722204712979") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    if(!message.member.roles.some(r=>["tank"].includes(r.name)) )
      return message.reply("Error: insufficient_permissions <:snowflake_error:717856466203312128>");    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    // And we get the bot to say the thing: 
    message.channel.send("Indexing API ...");
    message.channel.send("(1) result found for query " + "`592618722204712979` <:snowflake_ID:717854309081022528>\n`instead I felt recoil and laughter and that sick thrill of violence`");
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
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
  
  if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
});
 
 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
