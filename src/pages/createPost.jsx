import { useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';
import axios from 'axios';

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
    const response =   await axios.post('http://localhost:5000/api/posts', formData);
    console.log('====================================');
    console.log(response,"response");
    console.log('====================================');  
    navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreatePost;
