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
          <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-400">Contact me for cooperation.</p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl sm:mt-16">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className='sm:col-span-2'>
              <label htmlFor="full-name" className="block text-sm/6 font-semibold text-black dark:text-white">Full Name</label>
              <div className="mt-2.5">
                <input id="full-name" name="full-name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-black dark:text-white outline-1 -outline-offset-1 outline-black/20 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm/6 font-semibold text-black dark:text-white">Company</label>
              <div className="mt-2.5">
                <input id="company" name="company" type="text" value={company} onChange={(e) => setCompany(e.target.value)} className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-black dark:text-white outline-1 -outline-offset-1 outline-black/20 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm/6 font-semibold text-black dark:text-white">Email</label>
              <div className="mt-2.5">
                <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-black dark:text-white outline-1 -outline-offset-1 outline-black/20 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm/6 font-semibold text-black dark:text-white">Message</label>
              <div className="mt-2.5">
                <textarea id="message" name="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-black dark:text-white outline-1 -outline-offset-1 outline-black/20 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button type="submit" className="block w-full rounded-md bg-[#1B56FD] hover:bg-[#134deb] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs">
              Submit
            </button>
          </div>
        </form>
      </div>

      {showAlert && (
        <div className="fixed inset-0 z-50 sm:z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div role="alert" className="alert alert-error shadow-lg w-150 h-40 max-w-md bg-[#E50046] rounded-3xl">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"className="h-10 w-10 shrink-0 stroke-current"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>
            <div className="text-white">
              <h3 className="font-bold text-2xl">Error Message!</h3>
              <div className="font-semibold text-shadow-xs">Sorry, the feature is not yet complete.</div>
            </div>
            <button onClick={handleCloseAlert} className="btn btn-error btn-ghost btn-xl text-white">✕</button>
          </div>
        </div>
      )}
    </>
  );
}