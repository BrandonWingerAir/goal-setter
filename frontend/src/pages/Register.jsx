import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });

    const { name, email, password, passwordConfirm } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return <>
        <section className="heading">
            <h1>
                <FaUser/> Register
            </h1>
            <p>Please create an account</p>
        </section>

        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" name="name" 
                        value={name} 
                        placeholder="Name" 
                        onChange={onChange} 
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" name="email" 
                        value={email} 
                        placeholder="Email" 
                        onChange={onChange} 
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" name="password" 
                        value={password} 
                        placeholder="Password" 
                        onChange={onChange} 
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        className="form-control" 
                        id="passwordConfirm" name="passwordConfirm" 
                        value={passwordConfirm} 
                        placeholder="Confirm Password" 
                        onChange={onChange} 
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block">
                        Submit
                    </button>
                </div>
            </form>
        </section>
    </>
}

export default Register