import Axios from 'axios'

const clientID = process.env.TWITCH_CLIENT_ID
const secret = process.env.TWITCH_SECRET

export const getTwitchToken = async () => {
  return await Axios.post(`https://id.twitch.tv/oauth2/token?client_id=${clientID}&client_secret=${secret}&grant_type=client_credentials`).then((res) => {
    return res.data.access_token
  })
}

export const getPlayerInfo = async (twitchToken, username) => {
  return await Axios.get(`https://api.twitch.tv/helix/streams?user_login=${username}`, {
    headers: {
      'Authorization': `Bearer ${twitchToken}`,
      'Client-Id': clientID
    }
  })

  return response.data
}
