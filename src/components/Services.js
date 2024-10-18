import React from 'react';
import RecruitImage from '../assets/images/recruitment.jpg';
import EmploymentImage from '../assets/images/employment-traing.jpg';
import HrConsult from '../assets/images/hr-consult.jpg';
import Talentimage from '../assets/images/talent.png';

const Services = () => {
  return (
    <section id="services" className="services py-12 bg-gray-100">
      <div className="container lg:px-[150px] sm:px-6 mx-auto">
        <h2 className="text-center text-[40px] font-bold mb-10">Our Services</h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {/* Service 1: Recruitment */}
          <div className="mx-3 flex flex-col self-start rounded-lg bg-white shadow-lg mb-4">
            <a href="#!">
              <img
                className="rounded-t-lg w-full h-[200px] object-cover"
                src={RecruitImage}
                alt="Recruitment"
              />
            </a>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-medium">Recruitment</h3>
              <p className="mb-4 text-base">
                We help you find the right talent to drive your business forward. <a href="#!">...read more.</a>
              </p>
            </div>
          </div>

          {/* Service 2: Employee Training */}
          <div className="mx-3 flex flex-col self-start rounded-lg bg-white shadow-lg mb-4">
            <a href="#!">
              <img
                className="rounded-t-lg w-full h-[200px] object-cover"
                src={EmploymentImage}
                alt="Employee Training"
              />
            </a>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-medium">Employee Training</h3>
              <p className="mb-4 text-base">
                Enhance the skills of your workforce with our expert training programs. <a href="#!">...read more.</a>
              </p>
            </div>
          </div>

          {/* Service 3: HR Consulting */}
          <div className="mx-3 flex flex-col self-start rounded-lg bg-white shadow-lg mb-4">
            <a href="#!">
              <img
                className="rounded-t-lg w-full h-[200px] object-cover"
                src={HrConsult}
                alt="HR Consulting"
              />
            </a>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-medium">HR Consulting</h3>
              <p className="mb-4 text-base">
                Get personalized HR consulting services to align with your business goals. <a href="#!">...read more.</a>
              </p>
            </div>
          </div>

          {/* Service 4: Talent Management */}
          <div className="mx-3 flex flex-col self-start rounded-lg bg-white shadow-lg mb-4">
            <a href="#!">
              <img
                className="rounded-t-lg w-full h-[200px] object-cover"
                src={Talentimage}
                alt="Talent Management"
              />
            </a>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-medium">Talent Management</h3>
              <p className="mb-4 text-base">
                We offer comprehensive talent management strategies to maximize your team's potential. <a href="#!">...read more.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
