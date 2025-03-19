export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

// In-memory database for simplicity
let users: User[] = [];

export const UserModel = {
  // Create a new user
  create: (userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): User => {
    const newUser: User = {
      id: Math.random().toString(36).substring(2, 11),
      name: userData.name,
      email: userData.email,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    users.push(newUser);
    return newUser;
  },
  
  // Get all users
  findAll: (): User[] => {
    return users;
  },
  
  // Get user by ID
  findById: (id: string): User | undefined => {
    return users.find(user => user.id === id);
  },
  
  // Update user
  update: (id: string, userData: Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>): User | undefined => {
    const index = users.findIndex(user => user.id === id);
    
    if (index === -1) return undefined;
    
    users[index] = {
      ...users[index],
      ...userData,
      updatedAt: new Date()
    };
    
    return users[index];
  },
  
  // Delete user
  delete: (id: string): boolean => {
    const initialLength = users.length;
    users = users.filter(user => user.id !== id);
    return users.length !== initialLength;
  }
};