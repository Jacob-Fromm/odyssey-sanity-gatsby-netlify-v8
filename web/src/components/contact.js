import React from 'react'
import { useForm } from "react-hook-form"

const Contact = () => {
    const { register, handleSubmit, errors, reset } = useForm()
    const handlePost = (formData) => {
        console.log(formData)
    }
    return (
        <>
        <h2>Astrological Chart Readings - Contact me!</h2>
        <form
            onSubmit={handleSubmit(handlePost)}
            name="contact-form"
            method="POST"
            action="/success/"
            data-netlify="true"
            netlify-honeypot="got-ya"
        >
            <input type="hidden" name="form-name" value="contact-form" />
            <input
                type="hidden"
                name="formId"
                value="contact-form"
                ref={register()}
            />
            <label htmlFor="name">
                <p>Name</p>
                {errors.name && <span>Error message</span>}
                <input name="name" ref={register({ required: true })} />
            </label>
            <label htmlFor="email">
                <p>Email</p>
                {errors.email && <span>Please format email correctly</span>}
                <input
                    name="email"
                    ref={register({
                        required: true,
                        pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                    })}
                />
            </label>
            <label htmlFor="message">
                <p>Message</p>
                <textarea rows="4" name="message" ref={register()} />
            </label>
            <label
                htmlFor="got-ya"
                style={{
                    position: "absolute",
                    overflow: "hidden",
                    clip: "rect(0 0 0 0)",
                    height: "1px",
                    width: "1px",
                    margin: "-1px",
                    padding: "0",
                    border: "0",
                }}
            >
                Don’t fill this out if you're human:
        <input tabIndex="-1" name="got-ya" ref={register()} />
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
        </>
    )
}

export default Contact