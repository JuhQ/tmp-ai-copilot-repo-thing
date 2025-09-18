import { useState, useEffect } from 'react';
import Header from './Header';
import TweetForm from './TweetForm';
import TweetList from './TweetList';

export interface Tweet {
  id: string;
  content: string;
  author: {
    id: string;
    username: string;
    displayName: string;
  };
  createdAt: string;
  likes: number;
  retweets: number;
  replies: number;
}

const TwitterClone = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [isLoading] = useState(false);

  // Mock data for initial display
  useEffect(() => {
    const mockTweets: Tweet[] = [
      {
        id: '1',
        content: 'Just built my first Twitter clone with React and TypeScript! 🚀',
        author: {
          id: '1',
          username: 'developer',
          displayName: 'Developer'
        },
        createdAt: new Date().toISOString(),
        likes: 5,
        retweets: 2,
        replies: 1
      },
      {
        id: '2',
        content: 'Learning React with TypeScript is amazing! The type safety really helps catch bugs early.',
        author: {
          id: '2',
          username: 'coder',
          displayName: 'Coder'
        },
        createdAt: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
        likes: 12,
        retweets: 3,
        replies: 4
      }
    ];
    setTweets(mockTweets);
  }, []);

  const addTweet = (content: string) => {
    const newTweet: Tweet = {
      id: Date.now().toString(),
      content,
      author: {
        id: 'current-user',
        username: 'you',
        displayName: 'You'
      },
      createdAt: new Date().toISOString(),
      likes: 0,
      retweets: 0,
      replies: 0
    };
    setTweets([newTweet, ...tweets]);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white min-h-screen border-x border-gray-200">
      <Header />
      <TweetForm onTweet={addTweet} />
      <TweetList tweets={tweets} isLoading={isLoading} />
    </div>
  );
};

export default TwitterClone;