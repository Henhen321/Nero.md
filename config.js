/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6285866034212', './Henz', true],
  ['6285866034212']
] // Nomor Owner

global.mods = ['6285866034212'] 
global.prems = ['6285866034212', '6285866034212']

// apikey
global.lann = 'CIYiVxDJ'
// apikeylu di ganti menggunakan apikey yang di dapatkan di website https://api.betabotz.org. contohnya global.lann = 'nans' (contoh). cara mendapatkan apikey. masuk website > scroll ke bawah dan cari harga yang kamu mau ada juga yang free dan tekan > otomatis akan di arahkan untuk registrasi, isi data diri email dll. > kalo sudah klik profil dan di situ akan muncul apikey mu. terima kasih.

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-fgmods.ddns.net': 'D5vR6dj56O',
  'https://api.betabotz.eu.org': 'CIYiVxDJ'
}

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.eu.org'
}

// Watermark
global.nama = './Henz' // nama owner
global.nomor = '6285866034212' // nomor owner
global.nans = 'C-Arv' // nama bot 
global.thumb = 'https://i.ibb.co/g7N1243/IMG-20231212-WA0044.jpg' // thumbnail bot ( foto menu )
global.dygp = 'https://chat.whatsapp.com' // link group yang ada di menu

// Sticker wm
global.packname = 'HENHEN┃ᴮᴼᵀ' 
global.author = '@henhen' 
global.fgig = 'https://www.instagram.com/henhen.drajat' // bebas tapi jangan kosong 
global.fgsc = 'https://github.com/Henhen321' // bebas tapi jangan kosong
global.fgyt = 'https://nansoffc.my.id/' // bebas tapi jangan kosong
global.fgpyp = 'https://nansoffc.my.id' // bebas tapi jangan kosong
global.fglog = 'https://i.ibb.co/kXw4XhL/nansoffc-logo.jpg'

// Other
global.dana = '6285866034212'
global.qris = 'https://i.ibb.co/xGC5Y7j/20230712-173348.jpg'
global.web = ''
global.email = 'henhendrazat@gmail.com'
global.lastm = 'ꜱɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙʏ ヘンヘン'

global.wait = 'Tunggu sebentar....'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})