import React, { useEffect, useRef, useState } from 'react';

const Comment = () => {
  const [isReplying, setIsReplying] = useState(false);
  const replyTextAreaRef = useRef(null);

  const handleReplyClick = () => {
    setIsReplying(true);
    setTimeout(() => {
      replyTextAreaRef.current.focus();
    }, 0);
  };

  return (
    <div className="">
      <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 font-bold text-sm text-gray-900 dark:text-white">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt="Michael Gough"
              />
              Imed triki
            </p>
            <p className="text-sm text-gray-600 font-semibold dark:text-gray-400">
              <time pubdate="true" dateTime="2022-02-08" title="February 8th, 2022">
                Feb. 8, 2022
              </time>
            </p>
          </div>
          <div className="relative inline-block cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="red"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        </footer>
        <p className="text-gray-500 dark:text-gray-400">
          Very straight-to-point article. Really worth time reading. Thank you! But tools are just
          the instruments for the UX designers. The knowledge of the design tools is as important
          as the creation of the design strategy.
        </p>
        <div className="flex items-center mt-4 space-x-4">
          <button
            type="button"
            onClick={handleReplyClick}
            className="flex items-center font-semibold text-sm text-gray-500 hover:underline dark:text-gray-400"
          >
            <svg
              aria-hidden="true"
              className="mr-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            Répondre
          </button>
        </div>

        {isReplying && (
          <div className="mt-4">
            <textarea
              ref={replyTextAreaRef}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              rows="3"
              placeholder="Votre réponse..."
            ></textarea>
            <div className="mt-2 flex justify-end">
              <button
                type="button"
                className="text-sm font-semibold text-gray-500 hover:underline mr-5"
              >
                Envoyer
              </button>
              <button
                type="button"
                onClick={() => setIsReplying(false)}
                className="text-sm font-semibold text-gray-500 hover:underline"
              >
                Annuler
              </button>
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default Comment;
