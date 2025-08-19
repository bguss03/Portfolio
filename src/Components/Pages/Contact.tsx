import { useState, type FormEvent } from "react";

export default function Contact() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowAlert(true); 

    setName('');
    setCompany('');
    setEmail('');
    setMessage('');
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <div className="isolate px-6 pt-5 sm:py-15 lg:px-8" data-aos='fade-up' data-aos-delay={200}>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">Contact Me</h2>
          <p className="mt-2 text-lg/8 text-gray-400">Contact me for cooperation.</p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl sm:mt-16">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className='sm:col-span-2'>
              <label htmlFor="full-name" className="block text-sm/6 font-semibold text-white">Full Name</label>
              <div className="mt-2.5">
                <input id="full-name" name="full-name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm/6 font-semibold text-white">Company</label>
              <div className="mt-2.5">
                <input id="company" name="company" type="text" value={company} onChange={(e) => setCompany(e.target.value)} className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm/6 font-semibold text-white">Email</label>
              <div className="mt-2.5">
                <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm/6 font-semibold text-white">Message</label>
              <div className="mt-2.5">
                <textarea id="message" name="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button type="submit" className="block w-full rounded-md bg-[#77BEF0] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-[#113F67]">
              Submit
            </button>
          </div>
        </form>
      </div>

      {showAlert && (
        <div className="fixed inset-0 z-50 sm:z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div role="alert" className="alert alert-error shadow-lg w-150 h-40 max-w-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-bold text-2xl">Error Message!</h3>
              <div className="font-semibold text-shadow-xs">Sorry, the feature is not yet complete.</div>
            </div>
            <button onClick={handleCloseAlert} className="btn btn-error btn-ghost btn-xl">✕</button>
          </div>
        </div>
      )}
    </>
  );
}