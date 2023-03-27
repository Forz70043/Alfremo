import { ToggleSwitch } from "flowbite-react"
import React, { useState } from "react"

function handleSwitch(e){
    console.log('clicked', e)
}

export default function Register(props) {
    
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        terms: false,
    });
    const [isLoading, setLoading] = useState(false)
    const [formSuccess, setFormSuccess] = useState(false)
    const [formSuccessMessage, setFormSuccessMessage] = useState("")

    const handleInput = (e) => {
        console.log(e)
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }

    const handleInputRadio = (e) => {
        const fieldName = 'terms';
        const fieldValue = e.target.checked;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }

    const submitForm = (e) => {
        // We don't want the page to refresh
        setLoading(true)
        e.preventDefault()

        const formURL = e.target.action

        console.log(formData);
        console.log("js", JSON.stringify(formData));

        // Turn our formData state into data we can use with a form submission
        //let data = new FormData();
        /*Object.entries(formData).forEach(([key, value]) => {
          data.append(key, value);
        })*/

        // POST the data to the URL of the form
        fetch(formURL, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((data) => {
            setLoading(false);
            /*setFormData({
                email: "",
            })
            */
            console.log("rrr", data.data);
            setFormSuccess(true)
            //setFormSuccessMessage(data.data)
        })
    }

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        {props.registerTitle ?? ''}    
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                {props.titleRegisterLogin ?? 'Crea Account'}
                            </h1>
                            <form method="POST" className="space-y-4 md:space-y-6" action="/api/form" onSubmit={submitForm}>
                                {/* {<div className="flex flex-col gap-4" id="toggle">
                                <ToggleSwitch checked={false} label="Privato" onChange={handleSwitch(this)} />
                                </div>} */}
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        placeholder="name@company.com" 
                                        required="" 
                                        onChange={handleInput} 
                                        value={formData.email}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        id="password" 
                                        placeholder="••••••••" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        required="" 
                                        onChange={handleInput} 
                                        value={formData.password}
                                        />
                                </div>
                                <div>
                                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input 
                                        type="password" 
                                        name="confirmPassword" 
                                        id="confirmPassword" 
                                        placeholder="••••••••" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        required="" 
                                        onChange={handleInput} value={formData.confirmPassword}
                                    />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input 
                                            name="terms" 
                                            id="terms" 
                                            aria-describedby="terms" 
                                            type="checkbox" 
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" 
                                            required="" 
                                            onChange={handleInputRadio} 
                                            value={formData.terms}
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    Crea un account
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Hai già un account ? 
                                    <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                        Accedi
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}