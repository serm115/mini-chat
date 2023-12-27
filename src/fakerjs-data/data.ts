import { faker } from '@faker-js/faker'

interface Chat {
    id: string
    avatar: string
    message: string
    firstName: string
    lastName: string
}

export function createRandomChat(): Chat {
    return {
        id: faker.string.uuid(),
        avatar: faker.image.avatar(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        message: faker.lorem.sentence({ min: 3, max: 20 }),
    }
}

export const CHATS: Chat[] = faker.helpers.multiple(createRandomChat, {
    count: 40,
})
