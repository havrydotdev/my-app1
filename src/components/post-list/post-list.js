import React from "react";

import PostListItem from "../post-list-item";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
  const elems = posts.map((i) => {
    if (i.id && i.label) {
      return (
        <li key={i.id}>
          <PostListItem
            label={i.label}
            important={i.important}
            like={i.like}
            onDelete={() => onDelete(i.id)}
            onToggleImportant={() => onToggleImportant(i.id)}
            onToggleLiked={() => onToggleLiked(i.id)}
          />
        </li>
      );
    }
  });

  return <ul className="app-list list-group">{elems}</ul>;
};

export default PostList;
