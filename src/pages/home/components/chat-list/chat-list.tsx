import { Link } from 'react-router-dom'

import { CHATS } from '../../../../fakerjs-data/data'
import { ChatItem } from '../chat-item'
import styles from './chat-list.module.scss'

export const ChatList = () => {
    const chatItems = CHATS.map((chat) => (
        <Link to="conversation" key={chat.id}>
            <ChatItem
                avatar={chat.avatar}
                firstName={chat.firstName}
                lastName={chat.lastName}
                message={chat.message}
            />
        </Link>
    ))

    return <div className={styles.list}>{chatItems}</div>
}
