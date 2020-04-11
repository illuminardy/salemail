import * as manager from './email-manager';

it('returns message by id', () => {
  const message = manager.getMessageById("2");
  expect(message.subject).toEqual("Important information about your account")
});

it('returns all messages associated with a tag', () => {
  const messages = manager.getMessagesByTag("work");
  const empty = manager.getMessagesByTag("");

  expect(messages.length).toEqual(5);
  expect(empty.length).toEqual(0);
});

it('returns unique tags', () => {
  expect(manager.tags.length).toEqual(2);
});