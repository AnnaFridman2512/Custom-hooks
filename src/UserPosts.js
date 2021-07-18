import {UserPostsContext} from './UserPostsContext.js';
import { useContext } from 'react';
import {useRef} from 'react';

export default function UserPosts(){
    let {posts} = useContext(UserPostsContext);
    let {setUserId} = useContext(UserPostsContext);

    const userIdInputRef = useRef("");// useRef returns an object with the key "current" and the value is the one we wrote inside useRef() brackets
    
    function onSendClick(){
       setUserId(userIdInputRef.current.value);
    }
    
    return(
        <div className="posts">
            <label>Enter your userId </label>
      <input id="userId" ref={userIdInputRef}></input>
        <button onClick={onSendClick}>Send</button>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
          ))}
        </div>
    );
}