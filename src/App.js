
import './App.css';

import UserPostsProvider from './UserPostsContext.js';
import UserPosts from './UserPosts';

function App() {

  return (
    <div className="App">
      <UserPostsProvider>
      <UserPosts/>
        
      </UserPostsProvider>
    </div>
  );
}
export default App;
