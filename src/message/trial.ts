import { MessageTagType } from './models/message.dto';

describe('add tag to a message', () => {
  it('should add a tag to a message', () => {
    jest.spyOn(messageLogic, 'addTagToMessage');

    const messageTagDto: MessageTagDto = {
      messageId,
      conversationId,
      messageTag: MessageTagType.Trans,
    };

    resolver.addTagToMessage(messageTagDto, authenticatedUser);
    expect(messageLogic.addTagToMessage).toBeCalledWith(MessageTagDto, {
      accountRole: 'admin',
      userId,
    });
  });
});
