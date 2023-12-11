import React from 'react';

interface Props {
    name: string;
    email: string;
    password: string;
}

const UserInfo: React.FC<Props> = ({ name, email, password }) => {
    const isValidEmail = (email: string) => {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div>
            <p>Name: {name}</p>
            <p>Email: {isValidEmail(email) ? email : 'Invalid email'}</p>
            <p>Password: {password}</p>
        </div>
    );
};

export default UserInfo;
