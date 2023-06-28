import Lottie from "lottie-react";
import animate from "../../assets/lottie.json"
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-hot-toast";





const Contact = () => {
 
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY)
        .then(() => {
            toast.success('Message Sent');
            form.reset()
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
   <>
   
    <p className="text-5xl font-bold text-center text-white mb-5 mt-10">
        Contact Me
      </p>
      <h1 className="font-5xl font-poppins font-extrabold border-b-8  border-dimBlue text-white mb-10"></h1>

   
   <div id="contact"
      className={`xl:mt-12 flex md:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
     
        {/* lottie */}
        <div className="text-center md:mt-16 mt-1  md:w-1/2">
        <Lottie className="" animationData={animate} loop={true} height={100} width={100} />
      </div>
    {/* form */}
      <div
        
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl md:w-1/2'
      >
       

        <form
          ref={form} onSubmit={sendEmail}
          className='mt-12 flex flex-col gap-8 text-black'
        >
         <div className="flex flex-row justify-between gap-3">
         <label className='flex flex-col w-full'>
            <span className='text-white font-medium mb-4'>Name</span>
            <input
              type='text'
              name='name'
             required
              placeholder="*Name"
              className='bg-tertiary py-4 px-6  text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col w-full'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input
              type='email'
              name='email'
              required
              placeholder="*Email"
              className='bg-tertiary py-4 px-6  text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
         </div>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Subject</span>
            <input
              type='text'
              name='subject'
              required
              placeholder="*Subject"
              className='bg-tertiary py-4 px-6  text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
        
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
             required
              placeholder='*Message'
              className='bg-tertiary py-4 px-6  text-black rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button className="btn hover:-hue-rotate-90  btn-primary bg-gradient-to-r from-cyan-500 to blue-900">Send Message </button>
        </form>
      </div>
    </div>
   
   
   </>



    );
};

export default Contact;