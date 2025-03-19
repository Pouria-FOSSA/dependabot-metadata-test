import { createUser } from './createUser';
import axios from 'axios';

jest.mock('axios');

describe('createUser', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should create a new user successfully', async () => {
    const mockResponse = { data: { id: 1, name: 'John Doe', email: 'john@example.com' } };
    (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValueOnce(mockResponse);

    const userData = { name: 'John Doe', email: 'john@example.com', password: 'password123' };
    const result = await createUser(userData);

    expect(axios.post).toHaveBeenCalledWith('/api/users', userData);
    expect(result).toEqual(mockResponse.data);
  });

  it('should throw an error if user creation fails', async () => {
    const errorMessage = 'Failed to create user';
    (axios.post as jest.MockedFunction<typeof axios.post>).mockRejectedValueOnce(new Error(errorMessage));

    const userData = { name: 'John Doe', email: 'john@example.com', password: 'password123' };

    await expect(createUser(userData)).rejects.toThrow(errorMessage);
    expect(axios.post).toHaveBeenCalledWith('/api/users', userData);
  });
});