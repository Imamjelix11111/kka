const { Telegraf } = require('telegraf');
const bot = new Telegraf("6337892092:AAER2tnP-sBlt3zNnQN9xu94sA5fP4LEvWM");

 bot.command('start', ctx => {
   bot.telegram.sendMessage(ctx.chat.id, 'Welcome', {
     reply_markup : {
       inline_keyboard : [
         [
           {
             text : 'Order Here!', web_app : { url : 'https://google.com'}
           }]]
     }
   })
 })


 bot.command('order', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, 'Click Tombol di bawah untuk order! ', 
  {
    reply_markup : {
       keyboard : [
         [
           { text : 'order' }
         ]
         ], 
      resize_keyboard : true , 
     input_field_placeholder : "Pencet Tombol Di Bawah ya" 
  
    }
  })
})

bot.launch()