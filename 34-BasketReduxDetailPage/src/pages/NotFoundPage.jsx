import React from 'react'
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>The page you are looking for was not found...</p>
      <Link to="/" style={styles.link}>Return to home page</Link>
    </div>
  )
}
const styles = {
  container: {
    textAlign: 'center',
    padding: '200px 20px',
  },
  title: {
    fontSize: '72px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  message: {
    fontSize: '20px',
    marginBottom: '30px',
  },
  link: {
    fontSize: '18px',
    color: '#007bff',
    textDecoration: 'none',
  },
};
export default NotFoundPage