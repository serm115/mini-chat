import { Header } from '@components/shared/header'
import { MessageItem } from './components/message-item'
import styles from './conversation.module.scss'

const Conversation = () => {
    return (
        <>
            <Header title="Conversation" />
            <ul className={styles.chat}>
                <MessageItem position='right' />
                <MessageItem position='right' />
                <MessageItem position='left' />
                <MessageItem position='left' />
                <MessageItem position='right' />
                <MessageItem position='right' />
                <MessageItem position='right' />
                <MessageItem position='left' />
                <MessageItem position='right' />
                <MessageItem position='left' />
                <MessageItem position='left' />
                <MessageItem position='left' />
                <MessageItem position='left' />
            </ul>
        </>
    )
}

export default Conversation
