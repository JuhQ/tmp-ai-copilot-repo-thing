import type { Tweet } from './TwitterClone';

interface TweetListProps {
  tweets: Tweet[];
  isLoading: boolean;
}

const TweetList = ({ tweets, isLoading }: TweetListProps) => {
  if (isLoading) {
    return (
      <div className="p-8 text-center">
        <div className="inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-2 text-gray-600">Loading tweets...</p>
      </div>
    );
  }

  if (tweets.length === 0) {
    return (
      <div className="p-8 text-center text-gray-600">
        <p>No tweets yet. Be the first to tweet!</p>
      </div>
    );
  }

  return (
    <div>
      {tweets.map((tweet) => (
        <TweetItem key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

interface TweetItemProps {
  tweet: Tweet;
}

const TweetItem = ({ tweet }: TweetItemProps) => {
  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return `${diffInSeconds}s`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h`;
    return `${Math.floor(diffInSeconds / 86400)}d`;
  };

  return (
    <article className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
      <div className="flex space-x-3">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-gray-600 font-semibold">
            {tweet.author.displayName.charAt(0).toUpperCase()}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold text-gray-900">{tweet.author.displayName}</h3>
            <span className="text-gray-500">@{tweet.author.username}</span>
            <span className="text-gray-500">·</span>
            <time className="text-gray-500 text-sm">
              {formatTimeAgo(tweet.createdAt)}
            </time>
          </div>
          <p className="mt-1 text-gray-900 whitespace-pre-wrap">{tweet.content}</p>
          <div className="flex items-center justify-between mt-3 max-w-md">
            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
              <span>💬</span>
              <span className="text-sm">{tweet.replies}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
              <span>🔄</span>
              <span className="text-sm">{tweet.retweets}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
              <span>❤️</span>
              <span className="text-sm">{tweet.likes}</span>
            </button>
            <button className="text-gray-500 hover:text-blue-500 transition-colors">
              <span>📤</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TweetList;