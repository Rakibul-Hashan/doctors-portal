import React from "react";
import Subheading from './../../../components/Subheading';
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="hero lg:min-h-[600px]">
        <div className="hero-content lg:w-[500px] flex-col">
          <div className="text-center">
            <Subheading>Contact Us</Subheading>
            <h1 className="text-4xl text-white font-semi-bold">Stay connected with us</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-xl">
            <form className="card-body">
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
               
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered"
                  name="subject"
                />
              </div>
              <div className="form-control">
               <textarea
                  type="text"
                  placeholder="Your message"
                  className="textarea textarea-bordered textarea-xl w-full"
                  name="subject"
                  
                />
              </div>

              <div className="form-control mt-6">
                
                <button className="btn btn-primary self-center bg-gradient-to-r from-primary to-secondary font-bold text-white">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
