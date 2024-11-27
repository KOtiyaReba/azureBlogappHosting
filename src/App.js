import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to My Blog</h1>
        <p>Your daily dose of insights, stories, and ideas!</p>
        <button>Read More</button>
      </div>

      {/* Featured Posts Section */}
      <section className="featured">
        <h2>Featured Posts</h2>
        <div className="posts">
          <div className="post">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEahGN_iwYNxM_4KVVe18fkJ7PIf_HZtLeaQ&s" alt="Post 1" />
            <h3>Post Title 1</h3>
            <p>Short description of the post goes here.</p>
          </div>
          <div className="post">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEahGN_iwYNxM_4KVVe18fkJ7PIf_HZtLeaQ&s" alt="Post 2" />
            <h3>Post Title 2</h3>
            <p>Short description of the post goes here.</p>
          </div>
          <div className="post">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEahGN_iwYNxM_4KVVe18fkJ7PIf_HZtLeaQ&s" alt="Post 3" />
            <h3>Post Title 3</h3>
            <p>Short description of the post goes here.</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Explore Categories</h2>
        <div className="category-list">
          <div className="category">
            <img src="https://via.placeholder.com/200x150" alt="Tech" />
            <p>Technology</p>
          </div>
          <div className="category">
            <img src="https://via.placeholder.com/200x150" alt="Lifestyle" />
            <p>Lifestyle</p>
          </div>
          <div className="category">
            <img src="https://via.placeholder.com/200x150" alt="Travel" />
            <p>Travel</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
