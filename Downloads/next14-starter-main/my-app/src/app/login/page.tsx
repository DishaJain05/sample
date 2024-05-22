'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormItem, FormMessage } from '@/components/ui/form';

interface LoginFormInputs {
  username: string;
  password: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
  phone: string;
}

interface LoginFormProps {
  onLogin: (users: User[]) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const [error, setError] = useState<string>('');

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users'); // Fetch list of users
      onLogin(response.data);
    } catch (err) {
      console.error('Error fetching user data:', err);
      setError('Failed to fetch user data');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <FormItem>
        <Input
          type="text"
          placeholder="Username"
          {...register('username', { required: 'Please enter a username' })}
        />
        {errors.username && <FormMessage className="error">{errors.username.message}</FormMessage>}
      </FormItem>
      <FormItem>
        <Input
          type="password"
          placeholder="Password"
          {...register('password', { required: 'Please enter a password' })}
        />
        {errors.password && <FormMessage className="error">{errors.password.message}</FormMessage>}
      </FormItem>
      {error && <FormMessage className="error">{error}</FormMessage>}
      <Button type="submit">Login</Button>
    </form>
  );
};

const UserCard: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Address: {`${user.address.street}, ${user.address.city}`}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

const Login: React.FC = () => {
  const [userDetails, setUserDetails] = useState<User[]>([]);

  const handleLogin = (users: User[]) => {
    console.log('Logged in with:', users);
    setUserDetails(users);
  };

  return (
    <div>
      {!userDetails.length ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <div className="user-grid">
          {userDetails.slice(0, 25).map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Login;
