import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import { AuthContext } from '../Auth/AuthContext';
import { toast } from 'react-toastify';

const Register = () => {
  const { createUser, profileupdate } = use(AuthContext);
  const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
  const handleRegister = (e) => {
    e.preventDefault()
    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photo.value;
    // console.log(displayName, email, password, photoURL);
       if (!displayName) {
         toast.error('Name is required!');
         return;
       }

       if (!email) {
         toast.error('Email is required!');
         return;
       }
       if (!photoURL) {
         toast.error('Email is required!');
         return;
       }

      if (
        !/[A-Z]/.test(password) ||
        !/[a-z]/.test(password) ||
        password.length < 6
      ) {
        return toast.error(
          'Password must have 6+ chars, 1 uppercase & 1 lowercase!'
        );
      }

    createUser(email,password)
      .then(result => {
        // console.log(result.user);
        profileupdate(displayName, photoURL)
          .then(() => {
          
            toast.success('Registration Successful!');
             navigate(from, { replace: true });
        })
          .catch(err => {
            // console.log(err.message);
             toast.error(err.message);
          });
        e.target.reset();
      })
      .catch(err => {
        // console.log(err.message);
         toast.error(err.message);
    })
  }
  return (
    <div className="flex justify-center items-center my-10">
      <title> Register | Social Development</title>

      <StyledWrapper>
        <div className="login">
          <div className="hader">
            <span>Join us today!</span>
            <p>Sing up now to become a member.</p>
          </div>
          <form onSubmit={handleRegister}>
            <input type="text" name="name" placeholder="Enter Name" />
            <input type="email" name="email" placeholder="Enter Emaill" />
            <input
              type="password"
              name="password"
              placeholder="Choose A Password"
            />
            <input type="text" name="photo" placeholder="photoURL....." />
            <input type="submit" value="Signup" />
            <span>
              {' '}
              Already a member?{' '}
              <Link to="/login" className="underline">
                Login Here
              </Link>
            </span>
          </form>
        </div>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  .login {
    max-width: 350px;
    border:2px solid green;
    border-radius: 5px;
    padding:20px;

  }
  .hader {
    text-align: center;
    font-size: 22px;
    font-weight: 700;
  }
  .hader p {
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    color: #706b6b;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
  }
  form input {
    height: 40px;
    outline: none;
    border: 1px solid #cccccc;
    padding: 10px;
    font-size: 15px;
    border-radius: 8px;
  }
  form input[type='submit'] {
    background-color: #0a400c;
    color: #ffffff;
    font-size: 17px;
  }
  form span {
    text-align: center;
    font-size: 16px;
    padding-top: 10px;
    color: #706b6b;
  }
  form span a {
    text-decoration: none;
    color: rgba(36, 36, 207, 0.671);
    font-weight: 500;
  }
`;

export default Register;
