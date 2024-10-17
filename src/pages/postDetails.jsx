import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setPost(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${id}`);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {post && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src={`http://localhost:5000/uploads/${post.imageUrl}`}
            alt={post.title}
            className="w-full h-[50vh] object-cover rounded"
          />
          <div>
            <h2 className="text-2xl font-bold mt-4">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.description}</p>
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-3 py-2 rounded mt-4"
            >
              <AiOutlineDelete className="font-semibold" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
