import React, { useState } from 'react';
import Comments from '@components/articles/Comments';
import AddComment from './AddComment';

const commentsData = [
  {
    author: 'M.Perera',
    date: '20 hours ago',
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it.',
    avatar: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    replies: [
      {
        author: 'J.Doe',
        date: '18 hours ago',
        text: 'This is a reply to the original comment. Lorem Ipsum is not simply random text.',
        avatar: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
        replies: [
          {
            author: 'A.Smith',
            date: '16 hours ago',
            text: 'This is a nested reply. Lorem Ipsum is not simply random text.',
            avatar: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
            replies: [],
          },
        ],
      },
    ],
  },
  {
    author: 'S.Jones',
    date: '22 hours ago',
    text: 'Another comment without replies. Lorem Ipsum is not simply random text.',
    avatar: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    replies: [],
  },
];

function CommentList() {
  const [comments, setComments] = useState(commentsData);
  const [showAddReply, setShowAddReply] = useState(false);

  const handleAddComment = (commentText) => {
    const newComments = [
      ...comments,
      {
        author: 'M.Perera',
        date: 'Just now',
        text: commentText,
        avatar: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
        replies: [],
      },
    ];
    setComments(newComments);
  };

  const handleAddReply = (replyText) => {
    // Logic to add reply to the appropriate comment
    // For simplicity, this example just adds a reply to the first comment
    const newComments = [...comments];
    newComments[0].replies.push({
      author: 'M.Perera',
      date: 'Just now',
      text: replyText,
      avatar: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
      replies: [],
    });
    setComments(newComments);
    setShowAddReply(false);
  };

  return (
    <div className="m-12 mt-10">
      <h1>Discussion</h1>
      <hr className="border-yellow border-t-4 w-56"></hr><br></br>
      {comments.map((comment, index) => (
        <Comments
          key={index}
          comment={comment}
          onAddReply={(replyText) => {
            setShowAddReply(false);
            handleAddReply(replyText);
          }}
        />
      ))}
      {!showAddReply && <AddComment onAddComment={handleAddComment} />}
    </div>
  );
}

export default CommentList;
