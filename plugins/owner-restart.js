

const handler = async (m, { conn, isROwner, text }) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.owner_restart

  if (!process.send) throw tradutor.texto1;
  // conn.readMessages([m.key])
  await m.reply(tradutor.texto2);
  process.send('reset');
};
handler.help = ['restart'];
handler.tags = ['owner'];
handler.command = ['рестарт', 'reiniciar'];
handler.rowner = true;
export default handler;
