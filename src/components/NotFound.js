```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-code">404</div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-text">
          Sorry, the page you are looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <Link to="/" className="not-found-link">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
```

```css
/* NotFound.css - Merged styles for 404 page */
.not-found-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #1a1a1a;
}

.not-found-content {
  text-align: center;
  max-width: 500px;
  width: 100%;
}

.not-found-code {
  font-size: 8rem;
  font-weight: bold;
  color: #ff6b6b;
  margin-bottom: 0.5rem;
  line-height: 1;
}

.not-found-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
}

.not-found-text {
  font-size: 1.1rem;
  color: #cccccc;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.not-found-link {
  display: inline-block;
  padding: 12px 30px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.not-found-link:hover {
  background-color: #0056b3;
  text-decoration: none;
}

@media (max-width: 768px) {
  .not-found-code {
    font-size: 6rem;
  }
  
  .not-found-title {
    font-size: 2rem;
  }
  
  .not-found-text {
    font-size: 1rem;
  }
}
```