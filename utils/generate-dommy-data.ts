import { faker } from "@faker-js/faker";
import { Thread, User } from "../types/threads";

export function createRandomFollower(): User {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const name = firstName + " " + lastName;

  return {
    id: faker.string.uuid(),
    photo: faker.image.avatar(),
    name,
    verified: Math.random() >= 0.5,
    bio: faker.person.bio(),
    username: faker.internet.userName(),
    link: faker.internet.url(),
  };
}

export function createRandomUser(): User {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const name = firstName + " " + lastName;

  return {
    id: faker.string.uuid(),
    photo: faker.image.avatar(),
    name,
    verified: Math.random() >= 0.5,
    bio: faker.person.bio(),
    followers: new Array(Math.floor(Math.random() * 10))
      .fill(null)
      .map((element) => createRandomFollower()),
    username: faker.internet.userName(),
    link: faker.internet.url(),
  };
}

export function createRandomThread(): Thread {
  const author = createRandomUser();
  const mentionUser = createRandomUser();

  return {
    id: faker.string.uuid(),
    author,
    content: faker.lorem.paragraph(),
    image: Math.random() > 0.5 ? faker.image.url() : undefined,
    replies: new Array(Math.floor(Math.random() * 10)).fill(null).map(() => ({
      id: faker.string.uuid(),
      author: createRandomUser(),
      content: faker.lorem.sentence(),
      likes: Math.floor(Math.random() * 1000),
      createdAt: faker.date.recent().toISOString(),
    })),
    repliesCount: Math.floor(Math.random() * 100),
    likesCount: Math.floor(Math.random() * 1000),
    mention: Math.random() > 0.5,
    mentionUser,
    createdAt: faker.date.recent().toISOString(),
  };
}

export function generateThreads(): Thread[] {
  return new Array(50).fill(null).map(() => createRandomThread());
}
