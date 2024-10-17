import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/posts');
        console.log(res,"res");
        
        setPosts(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <Link to="/create" className="bg-green-500 text-white px-4 py-2 rounded">
        Create New Post
      </Link>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.length>0 ? posts.map((post) => (
          <div key={post._id} className="bg-white rounded-lg shadow-md p-4">
            <img src={`http://localhost:5000/uploads/${post.imageUrl}`} alt={post.title} className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-bold mt-2">{post.title}</h3>
            <p className="text-gray-600 mt-2">{post.description}</p>
            <div className="mt-4 flex gap-1">
              <Link to={`/post/${post._id}`} className="text-blue-600 hover:underline font-semibold"><AiOutlineEye className="mr-1" /></Link>
              <Link to={`/edit/${post._id}`} className="text-yellow-600 hover:underline font-semibold "> <AiOutlineEdit className="mr-1" /></Link>
            </div>
          </div>
        )):("")}
      </div>
    </div>
  );
};

export default Home;
