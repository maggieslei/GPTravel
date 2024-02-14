import Chat from '@/components/Chat';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

const ChatPage = () => {
  return (
    <>
      <Chat />
    </>
  );
};

export default ChatPage;
