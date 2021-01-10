require("express")().listen(1343);
const moment = require("moment")
const db = require("quick.db");
const discord = require("discord.js");
const client = new discord.Client({ disableEveryone: true });
const fetch = require("node-fetch");
const fs = require("fs");
const express = require("express");
const app = express();
const helmet = require("helmet");
client.login("Here Token");
let admin = ["Here Admin ID 1", "Here Admin ID 2", "Here Admin ID 3"];
let verified = ["Here Verified ID 1", "Here Verified ID 2", "Here Verified ID 3"];
client.admin = admin;
client.verified = verified;
const md = require("marked");

app.use(express.static("public"));

const request = require("request");
const url = require("url");
const path = require("path");
const passport = require("passport");
const session = require("express-session");
const LevelStore = require("level-session-store")(session);
const Strategy = require("passport-discord").Strategy; 
const Discord = require("discord.js");
  app.use(
    "/css",
    express.static(path.resolve(__dirname + `/src/css`))
  );

  app.use(
    "/js",
    express.static(path.resolve(__dirname + `/src/js`))
  );

  const templateDir = path.resolve(__dirname + `/src/pages/`); 

app.locals.domain = process.env.PROJECT_DOMAIN;

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

setInterval(() => {
  var links = db.get("linkler");
  if (!links) return;
  var linkA = links.map(c => c.url);
  linkA.forEach(link => {
    try {
      fetch(link);
    } catch (e) {
    }
  });
  let zaman = new Date();
  console.log("Pong! Requests sent")
  client.user.setActivity(`Ping : ${client.ping} Links : ${db.get("linkler").length}`);
  
  db.set("config.uptime.the-last",moment().format('MMMM Do,h:mm:ss a'))
}, 65000);

client.on("ready", () => {
  if (!Array.isArray(db.get("linkler"))) {
    db.set("linkler", []);
  }
});



client.on("ready", () => {
  

  passport.use(
    new Strategy(
      {
        clientID: "Here Client ID",
        clientSecret: "Here Client Secret",
        callbackURL: "Here Callback URL",
        scope: ["identify", "guilds.join", "email"]
      },
      (accessToken, refreshToken, profile, done) => {
        process.nextTick(() => done(null, profile));
        let id = profile.id;
     
     if(!client.guilds.get('Here Server ID').members.get(profile.id)) {
      client.guilds.get('Here Server ID').addMember(profile.id, { "accessToken": accessToken}).catch(console.error)
    }
      }
    )
  );

  app.use(
    session({
      secret: "123",
      resave: false,
      saveUninitialized: false
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
  let linkss;
  app.use(helmet());
  let links = db.get("linkler");
  let sahipp;
  var linkA = links.map(c => c.url);
  var sahip = links.map(c => c.owner);
      try {
linkss = linkA
 sahipp = sahip
    } catch (e) {
      //console.log("" + e);
    }
  
  const renderTemplate = (res, req, template, data = {}) => {
    const baseData = {
      bot: client,
      path: req.path,
      db: db,
      user: req.isAuthenticated() ? req.user : null,
      saat: `${moment().locale('tr').format('LLL')}`,
      linkss: linkss,
      sahipp: sahipp
    };
    res.render(
      path.resolve(`${templateDir}${path.sep}${template}`),
      Object.assign(baseData, data)
    );
  };
  app.get(
    "/login",
    (req, res, next) => {
      if (req.session.backURL) {
        req.session.backURL = req.session.backURL;
      } else if (req.headers.referer) {
        const parsed = url.parse(req.headers.referer);
        if (parsed.hostname === app.locals.domain) {
          req.session.backURL = parsed.path;
        }
      } else {
        req.session.backURL = "/";
      }
      next();
    },
    passport.authenticate("discord")
  );

  app.get("/logout", function(req, res) {
    req.session.destroy(() => {
      req.logout();
      res.redirect("/");
    });
  });
  function checkAuth(req, res, next) {
    if (req.isAuthenticated()) return next();
    req.session.backURL = req.url;
    res.redirect("/login");
  }

  app.get("/autherror", (req, res) => {
    res.send(
      "There was a problem, you can come to our discord server and get help. https://discord.gg/T4BMtSu"
    );
  });

  app.get(
    "/callback",
    passport.authenticate("discord", { failureRedirect: "/autherror" }),
    async (req, res) => {
      if (req.session.backURL) {
        const url = req.session.backURL;
        req.session.backURL = null;
        res.redirect(url);
      } else {
        res.redirect("/dashboard");
   db.add('girisler', 1)
      }
    }
  );
  
app.get("/p/:userID", (req, res) => {

  var id = req.params.userID

  request({
    url: `https://discordapp.com/api/v7/users/${id}`,
    headers: {
      "Authorization": `Bot ${client.token}`
    },
  }, function(error, response, body) {
    if (error) return console.log(error)
    else if (!error) {
      var kisi = JSON.parse(body)

      renderTemplate(res, req, "profile.ejs", {kisi})
    };
  });

});

  app.get("/", (req, res) => {
    renderTemplate(res, req, "index.ejs");
  });
  app.get("/add", checkAuth, (req, res) => {
    renderTemplate(res, req, "add.ejs");
  });
  app.get("/unsuccess", checkAuth, (req, res) => {
    renderTemplate(res, req, "unsuccess.ejs");
  });
  app.get("/status", (req, res) => {
    renderTemplate(res, req, "status.ejs");
  });
app.get('/discord', function (req, res) {
  res.redirect('https://discord.gg/T4BMtSu')
  });
      app.get("/dashboard", checkAuth, (req, res) => {
    renderTemplate(res, req, "dashboard.ejs");
  });
  app.get("/admin", checkAuth, (req, res) => {
      if(!client.admin.includes(req.user.id) ) return res.redirect('/404')
    renderTemplate(res, req, "admin.ejs");
  });
  app.get("/admin/links", checkAuth, (req, res) => {
      if(!client.admin.includes(req.user.id) ) return res.redirect('/404')
    renderTemplate(res, req, "admin-links.ejs");
  });
  app.post("/add", checkAuth, (req, res) => {
    let ayar = req.body;
  let link = ayar["link"];
    let sınır = db.fetch(`user.${req.user.id}.sinir`) || 0
    if(sınır < 10) {
    if (!ayar["link"]) return renderTemplate(res, req, "unsuccess.ejs");
      
      
      
      
/*return res.send("You didn't fill out the link!");*/

 if(db.get("linkler").map(z => z.url).includes(link)) {
      return renderTemplate(res, req, "unsuccess.ejs");
    } else {
      

      db.push("linkler", { url: link, owner: req.user.id });
      //console.log(req.user.id)
      db.add(`user.${req.user.id}.sinir`,1)
      
       client.channels.get("Here Staff Log Channel ID").send(`<@!${req.user.id}> added monitor. ${link}`)    
       client.channels.get("Here General Log Channel ID").send(`<@!${req.user.id}> added monitor. ${db.get("linkler").filter(x => x.owner === req.user.id).length}/10`)
      return res.redirect('/dashboard')

    }
    } else {
      return renderTemplate(res, req, "unsuccess.ejs");
    }
  });
app.get("/*",(req,res) => {
  if(res.status(404)) return renderTemplate(res, req, "404.ejs");
})
  const listener = app.listen(process.env.PORT, () => {
  });
  console.log(`Logined!`);
});


const log = message => {
  console.log(`${message}`);
};


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.on('message', message => {
const db = require("quick.db");
let talkedRecently = new Set();
  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
	setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 2500);
  let prefix = "!"
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {

    cmd.run(client, message, params);
};
});
