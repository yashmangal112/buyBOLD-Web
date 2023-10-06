import React from 'react'
import Breadcrumb from '../components/Breadcrumb';

const breadcrumbPaths = [{ label: 'Contact', url: '/contact' }];
const ContactDetailsForm = () => {
  return (
    <>
    <Breadcrumb paths={breadcrumbPaths} />
    <div className="bg-gray-100 py-10">
          <div className="container mx-auto px-4">
              <p className="text-4xl mb-4 font-montserrat font-normal pt-3 pb-7">Having trouble thrifting with us?</p>
              <p className="text-base mb-4">For general queries: Drop us a DM on our Instagram page <a href="https://www.instagram.com/buybold/" className="text-blue-600 hover:underline">@BuyBold</a> (We generally respond within a couple of hours).</p>
              <p className="text-base mb-4"> For order related queries: Drop us a message on our WhatsApp Chat Support number <span className="text-blue-600">+91 9000000000</span>. (Don’t forget to mention your order ID)</p>
              <p className="text-base mb-4"> For business queries: Drop us an email at <a href="mailto:info@buybold.in" className="text-blue-600 hover:underline">info@dressiffyr.in</a></p>

              <div className="mt-8">
                  <p className="text-2xl font-medium font-montserrat pt-3 pb-5 mb-4">Fill up the form if you have any other questions</p>
                  <form className="grid grid-cols-1 gap-4">
                      <div>
                          <label htmlFor="name" className="text-lg mb-2 block">Your name</label>
                          <input type="text" id="name" name="name" className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" required />
                      </div>
                      <div>
                          <label htmlFor="email" className="text-lg mb-2 block">Your email</label>
                          <input type="email" id="email" name="email" className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" required />
                      </div>
                      <div>
                          <label htmlFor="subject" className="text-lg mb-2 block">Subject</label>
                          <input type="text" id="subject" name="subject" className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" required />
                      </div>
                      <div>
                          <label htmlFor="message" className="text-lg mb-2 block">Your message (optional)</label>
                          <textarea id="message" name="message" rows="4" className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"></textarea>
                      </div>
                      <div>
                          <button type="submit" className=" text-black py-2 px-4 rounded-lg hover:bg-blue-600 border-2 border-solid border-blue-600">Submit</button>
                      </div>
                  </form>
              </div>
          </div>
      </div></>
  )
}

export default ContactDetailsForm