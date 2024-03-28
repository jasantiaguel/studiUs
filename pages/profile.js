import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from "@/styles/Profile.module.css";
import Image from "next/image";
import { useState, useEffect } from 'react';

export default function profile() {
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        checked: false
    })

    const [isHidden, setIsHidden] = useState(true)
    const [showForm, setShowForm] = useState(true)

    useEffect(() => {
        if (formValues.firstName && formValues.lastName && formValues.email && formValues.checked) {
            setIsHidden(false)
        } else {
            setIsHidden(true)
        }

    }, [formValues])


    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(value)

        if (e.target.type === 'checkbox') {
            console.log(e.target.checked)
            value = e.target.checked;
            setFormValues({
                ...formValues,
                checked: value
            })
            return;
        }

        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowForm(false)
    }



    return (
        <div className="frame">
            <Header />
            <div className={styles.main}>

                <div className='profileTop'>
                    <Image width={32} height={32} className={styles.profilePicture} />
                    <p>profile</p>
                    <p>program display</p>
                    <div>
                        <button>connect</button>
                        <button>message</button>

                    </div>
                </div>

                <div>
                    <p>Bio:</p>
                </div>

                <div className={styles.form}>
                    {showForm ? <form onSubmit={handleSubmit}>
                        <h3>Preferences</h3>
                        <label>Program:</label>
                        <input type="text" value={formValues.program} id="program" name="program" pattern="[A-Za-z]{2,}" onChange={handleChange} />
                        <label>Location:</label>
                        <input type="text" value={formValues.location} id="location" name="location" pattern="[A-Za-z]{2,}" onChange={handleChange} />
                        <label>Language:</label>
                        <input type="text" value={formValues.language} id="language" name="language" pattern="[A-Za-z]{2,}" onChange={handleChange} />
                        <label>Do you agree to the terms?</label>
                        <input type="checkbox" checked={formValues.checked} id="terms" name="terms" onChange={handleChange} />
                        {!isHidden && <button className='contactSubmit' type="submit">Submit</button>}
                    </form> :
                        <div>Thank you, your form has been submitted </div>}
                </div>


            </div>
            <Footer />
        </div>

    )
}
