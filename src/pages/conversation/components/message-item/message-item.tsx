import { FC } from 'react'
import styles from './message-item.module.scss'

type MessageItemProps = {
    position: string
}

export const MessageItem: FC<MessageItemProps> = ({ position }) => {
    return (
        <li className={`${styles.item} ${styles[`chat-${position}`]}`}>
            <div className={styles.message}>Lorem ipset dolor.</div>
            <div className={styles.time}>14/3/1399 12:23:58</div>
        </li>
    )
}
