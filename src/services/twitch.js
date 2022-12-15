import Axios from 'axios'

const clientID = process.env.TWITCH_CLIENT_ID
const secret = process.env.TWITCH_SECRET

export const getTwitchToken = async () => {
  return await Axios.post(`https://id.twitch.tv/oauth2/token?client_id=${clientID}&client_secret=${secret}&grant_type=client_credentials`).then((res) => {
    return res.data.access_token
  })
}

export const getPlayerInfo = async (twitchToken, username) => {
  let usernames = ''
  username.forEach((usr, u) => {
    if (u >= username.length - 1) {
      usernames += `user_login=${usr}`
    } else {
      usernames += `user_login=${usr}&`
    }
  });
  return await Axios.get(`https://api.twitch.tv/helix/streams?${usernames}`, {
    headers: {
      'Authorization': `Bearer ${twitchToken}`,
      'Client-Id': clientID
    }
  })

  return response.data
}
