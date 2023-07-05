import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://web-production-3ae2.up.railway.app/api/wallpaper/islami?apikey=APIKEY'
	conn.sendFile(m.chat, url, null, 'wallpaperislami', m)
}
handler.help = ['wallpaperislami']
handler.tags = ['internet']
handler.command = /^(wallpaperislami)$/i
handler.premium = false
handler.limit = 2
export default handler