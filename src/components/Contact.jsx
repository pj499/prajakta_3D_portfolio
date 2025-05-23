import {useState, useRef} from 'react'
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';

import {styles} from '../styles';
import {EarthCanvas} from './canvas';
import {SectionWrapper} from '../hoc';
import {slideIn} from '../utils/motion.js';
import linkedin from '../assets/linkedin.png'
import envelope from '../assets/envelope.png'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {target} = e;
    const {name, value} = target;

    setForm({
      ...form,
      [name]: value,
    });

    console.log(form. name, form.email, form.message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_thi9b37',
        'template_4832r7i',
        {
          from_name: form.name,
          to_name: 'Prajakta',
          from_email: form.email,
          to_email: 'pjprojects499@gmail.com',
          message: form.message,
        },
        '7D1YhpyovLwz3eyx8'
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });

          console.log('sent')
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert('Ahh, something went wrong. Please try again.');
        }
      );
  };
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <div className='flex flex-row align-middle justify-between'>
          <p className={styles.sectionSubText}>Get in touch</p>
          <div className='flex justify-evenly align-middle gap-10 -mt-2'>
            <a href="https://www.linkedin.com/in/prajakta-pikale-799456152/" target="_blank" className='inline'>
              <img src={linkedin} alt="linkedin" className='w-10 h-10 object-contain cursor-pointer mt-3'/>
            </a>

            <a href="#" className='inline' onClick={(e) => {
              window.location.href = "mailto:ppikale2@illinois.edu";
              e.preventDefault();
            }}>
              <img src={envelope} alt="email" className='w-10 h-10 object-contain cursor-pointer mt-3'/>
            </a>
          </div>

        </div>


        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
        </form>

        <button
          type="submit"
          className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary mt-5 inline"
          disabled={loading}
          onClick={handleSubmit}>
          Send
        </button>


      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] cursor-pointer">
        <EarthCanvas />
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Contact, "contact")