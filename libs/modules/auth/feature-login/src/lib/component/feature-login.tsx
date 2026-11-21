import { useNavigate } from 'react-router-dom';
import styles from './feature-login.module.css';

export function LoginComponent() {
  const navigate = useNavigate()
  return (
    <div className={styles['container']}>
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/> 
      <button>Login</button>
      <button onClick={() => navigate('/auth/register')}>Sign Up</button>
    </div>
  );
}

export default LoginComponent;
