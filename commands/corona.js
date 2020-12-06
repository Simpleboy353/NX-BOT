  if(message.content === "xyz covidall") {
    const data = await api.all()
    const coronaembed = new Discord.MessageEmbed()
    .setColor("#00f8ff")
    .setTitle("Global Cases")
    .setDescription("Number of cases may be differ from other sources")
    .addField("Cases", data.cases, true)
    .addField("Active", data.active, true)
    .addField("Cases Today", data.todayCases, true)
    .addField("Critical Cases", data.critical, true)
    .addField("Deaths", data.deaths, true)
    .addField("Recovered", data.recovered, true)
    message.channel.send(coronaembed)
  } 