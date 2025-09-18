import { useState } from 'react';

interface TweetFormProps {
  onTweet: (content: string) => void;
}

const TweetForm = ({ onTweet }: TweetFormProps) => {
  const [content, setContent] = useState('');
  const maxLength = 280;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim() && content.length <= maxLength) {
      onTweet(content.trim());
      setContent('');
    }
  };

  const remainingChars = maxLength - content.length;

  return (
    <div className="border-b border-gray-200 p-4">
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-3">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-gray-600 font-semibold">U</span>
          </div>
          <div className="flex-1">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's happening?"
              className="w-full p-3 text-xl resize-none border-none outline-none placeholder-gray-500"
              rows={3}
              maxLength={maxLength}
            />
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  className="text-blue-500 hover:text-blue-600"
                  title="Add media"
                >
                  📷
                </button>
                <button
                  type="button"
                  className="text-blue-500 hover:text-blue-600"
                  title="Add emoji"
                >
                  😊
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <span
                  className={`text-sm ${
                    remainingChars < 20
                      ? 'text-red-500'
                      : remainingChars < 50
                      ? 'text-yellow-500'
                      : 'text-gray-500'
                  }`}
                >
                  {remainingChars}
                </span>
                <button
                  type="submit"
                  disabled={!content.trim() || content.length > maxLength}
                  className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TweetForm;