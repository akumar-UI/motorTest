import React from 'react'
import { useForm } from 'react-hook-form'
import './Contact.css'

export default function Contact() {

    const { register, handleSubmit, errors } = useForm()

    const onSubmit = (val) => {

        console.log(val)

    }

    return (
        <div className="contact">

            <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>

                <label>Name</label>
                <input type="text" name="name" ref={register({
                    required: true,
                })} />
                {
                    errors.name && <small>Name required</small>
                }

                <label>Email</label>
                <input type="email" name="email" ref={register({
                    required: true,

                })} />
                {
                    errors.email && <small>Email required</small>
                }

                <label>Date of Birth</label>

                <input type="date" name="date" ref={register({
                    required: true,
                    message: "Please provide valid date of birth"
                })} />
                {
                    errors.date && <small>DOB required</small>
                }

                <label>Fav Color</label>
                <input type="text" name="favColor" ref={register} />

                <button type="submit">Submit</button>

            </form>

        </div>
    )
}
