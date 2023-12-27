import { Header } from '@components/shared/header'
import { ChatList } from './components/chat-list'

const Home = () => {
    return (
        <>
            <Header title="Chats" />
            <ChatList />
        </>
    )
}

export default Home
