// Nextjs
import Image from 'next/image'

// Styles
import styles from './StreamCard.module.scss'

export const StreamCard = (props) => {
  const {
    stream
  } = props

  const thumbUrl = (imageUrl) => {
    return imageUrl.replace('{width}', '160').replace('{height}', '90')
  }

  if (stream.live) {
    return (
      <div
        key={stream.title}
        className={styles.StreamCard}
        onClick={() => { window.open(`https://twitch.tv/${stream.title}`, '_blank') }}
      >
        <figure className={styles.StreamCard__thumb}>
          <Image
            src={thumbUrl(stream.info.thumbnail_url)}
            alt=""
            layout='fill'
          />
        </figure>
        <div className={styles.StreamCard__info}>
          <div className={styles.StreamCard__titlebar}>
            <h2 className={styles.StreamCard__title}>
              đĸ {stream.title}
            </h2>
            <p className={styles.StreamCard__tagline}>đšī¸ {stream.info.game_name} đī¸ {stream.info.viewer_count} pessoas</p>
          </div>
          <p className={styles.StreamCard__description}>{stream.info.title}</p>
        </div>
      </div>
    )
  }

  return (
    <div
      key={stream.title}
      className={styles.StreamCard}
      onClick={() => { window.open(`https://twitch.tv/${stream.title}`, '_blank') }}>
      <h2 className={styles.StreamCard__title}>
        đ´ {stream.title}
      </h2>
    </div>
  )
}
