  import React from 'react';
  import { useAuth } from '../context/AuthContext';

  const Profile = () => {
    const { user, logout } = useAuth();

    const handleLogout = async () => {
      try {
        await logout();
      } catch (error) {
        console.error('Logout error:', error);
      }
    };

    return (
      <div style={styles.container}>
        <div style={styles.userInfo}>
          <h1 style={styles.title}>Profile</h1>
          <p style={styles.text}>Email: {user?.email}</p>
          <p style={styles.text}>Name: {user?.username || 'Not set'}</p>
        </div>
        <button style={styles.logoutButton} onClick={handleLogout}>
          <span style={styles.logoutText}>Logout</span>
        </button>
      </div>
    );
  };

  const styles = {
    container: {
      flex: 1,
      padding: '20px',
      backgroundColor: '#fff',
    },
    userInfo: {
      marginBottom: '30px',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    text: {
      fontSize: '16px',
      marginBottom: '10px',
      color: '#333',
    },
    logoutButton: {
      backgroundColor: '#ff4444',
      padding: '15px',
      borderRadius: '8px',
      textAlign: 'center',
      border: 'none',
      cursor: 'pointer',
    },
    logoutText: {
      color: '#fff',
      fontSize: '16px',
      fontWeight: 'bold',
    },
  };

  export default Profile;