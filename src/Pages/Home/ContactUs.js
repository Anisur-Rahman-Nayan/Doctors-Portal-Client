import React from 'react';

const ContactUs = () => {
    return (
       <form action="">
         <div>
            <h2 className='text-center text-3xl font-bold text-primary'>Contact Us !</h2>
            <h1 className='text-center text-3xl font-bold text-secondary'>Stay Connected With Us !</h1>
    <div class="mb-6">
    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    </div>

    <div class="mb-6">
    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
    <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    </div>
    
    <div>
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
    </div>
    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary mt-6 mb-6  " >Submit</button>
        </div>
       </form>
    );
};

export default ContactUs;