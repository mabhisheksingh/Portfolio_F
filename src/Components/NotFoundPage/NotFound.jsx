import { Link } from 'react-router-dom';
import './NotFound.css'

const NoPage = () => {
  return (
    <div className="error-container">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};

export default NoPage;
