// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = (props) => {
  // set up state for the likes
  const [likes, setLikes] = useState(props.propsPassedFromParent.likes);
  const incrementLikes = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="post-border">
      <PostHeader
        username={props.propsPassedFromParent.username}
        thumbnailUrl={
          props.propsPassedFromParent.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.propsPassedFromParent.imageUrl}
        />
      </div>
      <LikeSection likes={likes} incrementLikes={incrementLikes}/>
      <CommentSection
        postId={props.propsPassedFromParent.imageUrl}
        comments={props.propsPassedFromParent.comments}
      />
    </div>
  );
};

export default Post;
