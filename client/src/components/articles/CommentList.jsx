import React from 'react';
import Comment from './Comments';


function CommentList() {
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
  return (
    <div className="m-12  mt-10">
      {commentsData.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;
