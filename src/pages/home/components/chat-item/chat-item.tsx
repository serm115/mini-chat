import { FC } from 'react'

import { Avatar } from '@components/ui/avatar'
import styles from './chat-item.module.scss'

type ChatProps = {
    avatar: string
    firstName: string
    lastName: string
    message: string
}

export const ChatItem: FC<ChatProps> = ({ avatar, firstName, lastName, message }) => {
    return (
        <div className={styles.item}>
            <Avatar url={avatar} />
            <div className={styles.info}>
                <span className={styles.name}>
                    {firstName} {lastName}
                </span>
                <div className={styles.message}>{message}</div>
            </div>
        </div>
    )
}
