import React, {useState, useEffect} from 'react';

export const UserPostsContext = React.createContext({
    posts: [],
});

export default function UserPostsProvider({children}){
    const [posts, setPosts] = useState([]); //At the beginning we have an empty arry of posts
    const [userId, setUserId] = useState("");

  useEffect(() => {  
      if(userId) fetch(`https://jsonplaceholder.typicode.com/user/${userId}/posts`)
     .then(response => response.json())
     .then(data => setPosts(data));
}, [userId]);  
   
    return (
        <UserPostsContext.Provider value={{
            posts,
            setUserId
        }}>
             {children}
        </UserPostsContext.Provider>
    );

}