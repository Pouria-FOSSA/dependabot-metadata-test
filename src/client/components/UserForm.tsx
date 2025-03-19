import React, { useState, useEffect } from 'react';
import { User } from '../types';

interface UserFormProps {
  user: User | null;
  onSubmit: (userData: Partial<User>) => void;
  onCancel: () => void;
  loading: boolean;
}

const UserForm: React.FC<UserFormProps> = ({ user, onSubmit, onCancel, loading }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Set form values when editing an existing user
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    } else {
      setName('');
      setEmail('');
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      return;
    }
    
    onSubmit({ name, email });
    
    // Only clear form if not editing
    if (!user) {
      setName('');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          disabled={loading}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          disabled={loading}
        />
      </div>

      <div className="form-actions">
        <button type="submit" disabled={loading || !name.trim() || !email.trim()}>
          {loading ? 'Saving...' : user ? 'Update' : 'Create'}
        </button>
        
        {user && (
          <button type="button" onClick={onCancel} disabled={loading}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default UserForm;