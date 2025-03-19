import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { User } from './types';
import { fetchUsers, createUser, updateUser, deleteUser } from './api';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  // Load users on component mount
  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        const data = await fetchUsers();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError('Failed to load users');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  // Handle user form submission (create or update)
  const handleSubmit = async (userData: Partial<User>) => {
    try {
      setLoading(true);
      let updatedUserList;

      if (editingUser) {
        // Update existing user
        const updated = await updateUser(editingUser.id, userData);
        updatedUserList = users.map(user => 
          user.id === editingUser.id ? updated : user
        );
        setEditingUser(null);
      } else {
        // Create new user
        const newUser = await createUser(userData);
        updatedUserList = [...users, newUser];
      }

      setUsers(updatedUserList);
      setError(null);
    } catch (err) {
      setError('Failed to save user');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Handle user edit
  const handleEdit = (user: User) => {
    setEditingUser(user);
  };

  // Handle user delete
  const handleDelete = async (id: string) => {
    try {
      setLoading(true);
      await deleteUser(id);
      setUsers(users.filter(user => user.id !== id));
      setError(null);
    } catch (err) {
      setError('Failed to delete user');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>User Management</h1>
      </header>
      
      {error && <div className="error-message">{error}</div>}
      
      <main>
        <section className="user-form-section">
          <h2>{editingUser ? 'Edit User' : 'Add New User'}</h2>
          <UserForm 
            user={editingUser} 
            onSubmit={handleSubmit} 
            onCancel={() => setEditingUser(null)}
            loading={loading}
          />
        </section>
        
        <section className="user-list-section">
          <h2>Users</h2>
          {loading && !users.length ? (
            <p>Loading users...</p>
          ) : (
            <UserList 
              users={users} 
              onEdit={handleEdit} 
              onDelete={handleDelete}
            />
          )}
        </section>
      </main>
    </div>
  );
};

export default App;