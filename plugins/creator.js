const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;LordNekell;;;'
                    + 'FN:LordNekellGanteng\n' // full name
                    + 'ORG:Lulzghost Team;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6281351047727:+62 896-9507-3357\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'LordNekell', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
