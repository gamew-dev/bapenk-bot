const { EventEmitter } = require('events');
EventEmitter.defaultMaxListeners = 30;
const { Client, Util, MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const client = new Discord.Client();
require('dotenv').config();
//const got = require("got")

let zake = '619126365785948192'
let paris = '695817459206324265'
let paris2 = '631853272944345098'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('life simulator', { type: "PLAYING" })
});
// diatas ini adalah untuk mengganti status bot
/* kalo mau nambah command:
  if (msg.content === 'commandnya'){
    msg.channel.send('hasilnya')
  } 
*/
client.on('message', async msg => {
  const args = msg.content.split(" ");
  let PREFIX = 'h.'
  const searchString = args.slice(1).join(" ");
  let color = "BLUE";
  let command = msg.content.toLowerCase().split(" ")[0];
  command = command.slice(PREFIX.length);
    
   const urlPattern = /https?:\/\/\S+/;
  let messageContent = args.slice(1).join(" "); 

if (command === "ig") { 
  if (urlPattern.test(args[1])) {
    messageContent = args.slice(2).join(" ");
    const axios = require('axios'); 

    const url = `https://api.ryzendesu.vip/api/downloader/igdl?url=${args[1]}`;
    const member = msg.author;
    let memer = member.nickname || member.username;

    try {
      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36'
        }
      });
      const data = response.data.data[0];

      if (!member) return msg.reply('Error unexpected');

      msg.delete();
      console.log(data);

      try {
        let fileSizeLimit = 8 * 1024 * 1024; // Discord membatasi unggahan file max 8MB
        let fileSize = await getFileSize(data.url); // Fungsi untuk mendapatkan ukuran file

        if (fileSize > fileSizeLimit) {
          // Jika file terlalu besar, kirimkan URL saja
            let url = data.url;
			let modifiedUrl = url.replace("dl=1", "dl=0");
          msg.channel.send(`[${messageContent || "_"}](${modifiedUrl})`);
        } else {
          // Jika file masih dalam batas aman, kirim sebagai attachment
          let ttc = new Discord.MessageAttachment(data.url, 'instagram.mp4');
          await msg.channel.send(`${messageContent + "\n-# " + memer}`, ttc);
        }
      } catch (e) {
        if (e.code === 40005) { // Entity request too large
            let url = data.url;
			let modifiedUrl = url.replace("dl=1", "dl=0");
          msg.channel.send(`[${messageContent + "_"}](${modifiedUrl})`);
        } else {
          console.error(e);
          msg.channel.send(`Error, coba lagi!. ||<@${owner}>||`);
        }
      }
    } catch (e) {
      console.error(e);
      msg.channel.send(`Error, coba lagi!. ||<@${owner}>||`);
    }    
  }
}

// Fungsi untuk mendapatkan ukuran file sebelum diunggah
async function getFileSize(url) {
  const axios = require('axios');
  try {
    let response = await axios.head(url);
    return parseInt(response.headers['content-length'], 10);
  } catch (error) {
    console.error("Gagal mendapatkan ukuran file:", error);
    return Infinity; // Kembalikan ukuran besar jika gagal
  }
}

if (command === "x") { 
  if (urlPattern.test(args[1])) {
    messageContent = args.slice(2).join(" ");
    const axios = require('axios'); 

    const url = `https://api.ryzendesu.vip/api/downloader/twitter?url=${args[1]}`;
    const member = msg.author;
    let memer = member.nickname || member.username;

    try {
      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36'
        }
      });
      const data = response.data.media[0];

      if (!member) return msg.reply('Error unexpected');

      msg.delete();
      console.log(data);

      try {
        let fileSizeLimit = 8 * 1024 * 1024; // Discord membatasi unggahan file max 8MB
        let fileSize = await getFileSize(data.url); // Fungsi untuk mendapatkan ukuran file

        if (fileSize > fileSizeLimit) {
          // Jika file terlalu besar, kirimkan URL saja
            let url = data.url;
			let modifiedUrl = url.replace("dl=1", "dl=0");
          msg.channel.send(`[${messageContent || "_"}](${modifiedUrl})`);
        } else {
          // Jika file masih dalam batas aman, kirim sebagai attachment
          let ttc = new Discord.MessageAttachment(data.url, 'twitter.mp4');
          await msg.channel.send(`${messageContent + "\n-# " + memer}`, ttc);
        }
      } catch (e) {
        if (e.code === 40005) { // Entity request too large
            let url = data.url;
			let modifiedUrl = url.replace("dl=1", "dl=0");
          msg.channel.send(`[${messageContent || "_"}](${modifiedUrl})`);
        } else {
          console.error(e);
          msg.channel.send(`Error, coba lagi!. ||<@${owner}>||`);
        }
      }
    } catch (e) {
      console.error(e);
      msg.channel.send(`Error, coba lagi!. ||<@${owner}>||`);
    }    
  }
}

// Fungsi untuk mendapatkan ukuran file sebelum diunggah
async function getFileSize(url) {
  const axios = require('axios');
  try {
    let response = await axios.head(url);
    return parseInt(response.headers['content-length'], 10);
  } catch (error) {
    console.error("Gagal mendapatkan ukuran file:", error);
    return Infinity; // Kembalikan ukuran besar jika gagal
  }
}
  let tgl = new Date()
  if (msg.content === 'malam') {
    msg.channel.send('<:he:888085436948414614>')
    var hri = tgl.getDay()
    if (hri === 0) {
      msg.channel.send('bsok senin <:mengsad:881562924169195550>')
    }
  }

  if (msg.content === 'pagi' || msg.content === "Pagi") {
    msg.channel.send(`Pagi juga ${msg.author.username.toLowerCase()}, semoga harimu daijobu  <:lmao:881567205857300521><:respectbro:881558234010386442>`)
    var hri = tgl.getDay()
    if (hri === 0) {
      msg.channel.send('bsok senin <:mengsad:881562924169195550>')
    }

  }


  if (msg.content === 'sore') {
    msg.channel.send(`sore jgn bobok y ${msg.author.username.toLowerCase()}<:kagett:909771071501262908> <a:lic:884363894519394304>`)
    var hri = tgl.getDay()
    if (hri === 0) {
      msg.channel.send('bsok senin <:mengsad:881562924169195550>')
    }
  }

  if (msg.content === 'no memes in general') {
    msg.channel.send('yoi pmimir stress');
  }

/* if (msg.content === 'menkrep'){
    const url = `https://api.lolhuman.xyz/api/minecraft/gamew.aternos.me?apikey=3f342f50d0fb2f0cbfdc7848`
    const time = `https://timeapi.io/api/Time/current/zone?timeZone=Asia/Jakarta`

    let data = await got(url).then(res => JSON.parse(res.body));
    let datat = await got(time).then(res => JSON.parse(res.body));

    if (data.result.players.max == 0){
    let e = new MessageEmbed()
    .setTitle('Status `gamew.aternos.me`')
    .setThumbnail(message.author.avatar)
        .setColor("RED")
        .setDescription(`Server lagi off yach <:iyah:944751227273633802> <:Anakkecil:963033396425162752>/n/n${datat.hour}:${datat.minute}:${datat.seconds}`)
        .setFooter(`INI TIDAK REALTIME!, dan jngn spam plz`)
      } else {
      let e = new MessageEmbed()
        .setTitle('Status `gamew.aternos.me`')
        .setThumbnail(message.author.avatar)
        .setColor("GREEN")
        .setDescription(`Server sekarang **Online**, silakan join <:hehey:887529578397044796>/nVersi ${data.result.version}/n/n**Ada ${data.result.players.online} yang join**n/n${datat.hour}:${datat.minute}:${datat.seconds}`)
          .setFooter(`INI TIDAK REALTIME!, dan jngn spam plz`)
      }

    message.channel.send(e)

    
  }*/
  
  if (msg.content === 'siang') {
    msg.channel.send('turu');
    var hri = tgl.getDay()
    if (hri === 0) {
      msg.channel.send('bsok senin <:mengsad:881562924169195550>')
    }
  }
  if (msg.content === 'test') {
    /*if (msg.author.id !== paris || msg.author.id !== zake) return msg.channel.send("kamu siapa hah?");*/
    if (msg.author.id === paris) {


      var hri = tgl.getDay()
      var jam = tgl.getHours()
      let opt = { 0: 'Minggu', 1: 'Senin', 2: 'Selasa', 3: 'Rabu', 4: 'Kamis', 5: "Jumat", 6: 'Sabtu', 7: 'Minggu' }


      msg.channel.send(`Hari ${hri} Jam ${jam}`)
      var hri = tgl.getDay()
      if (hri === 0) {
        msg.channel.send('bsok senin <:mengsad:881562924169195550>')
      }

    }// ntar test dlu 
    if (msg.author.id === zake) {
      msg.channel.send('Nggeh ada apa?')
    }
    /* if (msg.author.id !== zake || msg.author.id !== paris){//maksud : jika yg ngirim bukan zake / paris, dia akan ngrim ini. */
  }
  if (msg.content === 'bobok') {
    let list = ["Begadang ae nanggung cuk", "nanggung cuk begadang ae", "Begadang ae cuk, nanggung <a:lic:884363894519394304>", "cuk nanggung, begadang ae", "no", "bobok lh gw g pduli", "silahkan, gada yg larang", "sok a6"];

    let random = Math.floor(Math.random() * list.length)
    msg.channel.send(`${list[random]}`);
    var hri = tgl.getDay()
    if (hri === 0) {
      msg.channel.send('bsok senin <:mengsad:881562924169195550>')
    }
  }
  if (msg.content === 'gtw') {
    msg.channel.send('ancrit bat beliau');
    var hri = tgl.getDay()
    if (hri === 0) {
      msg.channel.send('bsok senin <:mengsad:881562924169195550>')
    }
  }
  if (msg.content === 'ping') {
    let repl = [
      "Pong!",
      "Pang.",
      "What are you doing?",
      "Peng",
      "U-Uh... h-hi",
      "W-Was I fast enough?"
    ];
    let result = Math.floor(Math.random() * repl.length);
    var ping = Date.now() - msg.createdTimestamp;
    if (ping > 500) p = "bot lag";
    if (ping < 500) p = "Nice! <a:lic:884363894519394304>";
    msg.channel.send(
      `:mega: *${repl[result]}* - My ping: **${ping}** ms (${p})`//oi ris ini boleh kuutak atik ga
      // boleh sih
    );
    var hri = tgl.getDay()
    if (hri === 0) {
      msg.channel.send('bsok senin <:mengsad:881562924169195550>')
    }
  }
  if (msg.content === '.say') {
    const args = msg.content.split(" ");
    msg.channel.send(`${args}`)
  }
  if (msg.content === "<:turu:942197383159222332>") {
    msg.channel.send(`turu tros`)
    var hri = tgl.getDay()
    if (hri === 0) {
      msg.channel.send('bsok senin <:mengsad:881562924169195550>')
    }
  }
  if (msg.content === "<:hehey:887529578397044796>") {
    msg.channel.send(`<:iyah:944751227273633802>`)
    var hri = tgl.getDay()
    if (hri === 0) {
      msg.channel.send('bsok senin <:mengsad:881562924169195550>')
    }
  }
  if (msg.content === "sfi" || msg.content === "spi") {
    let sfi = [
      "iyh <:turu:942197383159222332>",
      "",
      "What are you doing?",
      "Peng",
      "U-Uh... h-hi",
      "W-Was I fast enough?"
    ];
    msg.channel.send(`iyh <:turu:942197383159222332>`)
    var hri = tgl.getDay()
    if (hri === 0) {
      msg.channel.send('bsok senin <:mengsad:881562924169195550>')
    }
  }
  if (msg.content === "<:mengsad:881562924169195550>") {
    msg.channel.send(`<:yahaha:876108456782884884>`)
    var hri = tgl.getDay()
    if (hri === 0) {
      msg.channel.send('bsok senin <:mengsad:881562924169195550>')
    }
  }
  if (msg.content === "lic") {
    msg.delete
    msg.channel.send(`<a:lic:884363894519394304>`)
  };

  if (msg.content === "<:enggak:947350160445407252>") {
    msg.react(`<:iyah:944751227273633802>`); msg.react(`<:enggak:947350160445407252>`)//msg.channel.send(`<:iyah:944751227273633802>`)
  }
  if (msg.content === "Tumben g mabaw" || msg.content == "tumben g mabaw" || msg.content == "tumben g wabam" || msg.content == "Tumben g wabam" || msg.content == "wabam g nebmut" || msg.content == "nebmut g wabam") {
    let m = [
      "iyh <:turu:942197383159222332>",
      "ingfokan",
      "ingfokan mabaw",
      "kuy",
      "mabaw wut",
      "turu bilek"
    ];
    let result = Math.floor(Math.random() * m.length);
    msg.channel.send(`${m[result]}`)//msg.channel.send(`<:iyah:944751227273633802>`)
  }
})
//oalah | 

client.login(`hai manis`);
