import React from "react";
import { useState, useEffect } from "react";
import "./K18Form.css";
import "./K18Input.jsx";
import K18Input from "./K18Input.jsx";
export default function K18Form() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        code: "",
        phone: "",
    });
    useEffect(() => {
        console.log(form);
    }, [form]);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission if needed
    };
    return (
        <form onSubmit={handleSubmit}>
            <K18Input label="Full Name:" type="text" name="name" onChange={handleInputChange} />
            <K18Input label="Email:" type="email" name="email"  onChange={handleInputChange} />
            <K18Input label="Code:" type="text" name="code"  onChange={handleInputChange} />
            <K18Input label="Phone:" type="text" name="phone"  onChange={handleInputChange} />
            <input type="submit" value="Submit" />
        </form>
    );

}