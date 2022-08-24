import { getTwitchToken, getPlayerInfo } from '@service/twitch'

const handler = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(405).send({ message: 'Method not allowed' })
    return
  }

  const body = JSON.parse(req.body)
  console.log(body)

  if (body.username === undefined || body.username === null) {
    res.status(400).send({ message: 'Não veio a porra do name' })
  }

  try {
    const twitchToken = await getTwitchToken()
    const playerInfo = await getPlayerInfo(twitchToken, body.username)
    res.status(200).json({ ...playerInfo.data.data[0] })
  } catch (err) {
    console.error(err)
    res.status(400).json({status: 'error'})
  }

}

export default handler
