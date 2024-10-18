import React from 'react';
import Aboutus from '../assets/images/hr-sidebar.jpg';
import CollapsiblePanel from './CollapsePanel';

const About = () => {
  return (
    <section id="about" className="about py-12">
      <div className="text-center">
        <h1 className="text-[40px] font-bold mb-10">About Our Company</h1>
      </div>

      <div className="container lg:px-[150px] sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={Aboutus}
            alt="About Us"
            className="w-full h-auto md:w-[750px] md:h-[430px] object-cover"
          />
        </div>

        {/* Right Section: Collapsible Panels */}
        <div className="flex flex-col justify-start space-y-4">
          {/* Panel 1 */}
          <CollapsiblePanel title="Who We Are" isInitiallyOpen={true}>
            <p>
              At HR Solutions, our mission is to help organizations unlock the
              full potential of their workforce. We are committed to delivering
              top-notch human resource services that align with our vision of
              empowering businesses and employees alike.
            </p>
          </CollapsiblePanel>

          {/* Panel 2 */}
          <CollapsiblePanel title="Mission">
            <p>
              To provide excellent HR services and ensure that your people are
              your biggest asset. At HR Solutions, our mission is to help
              organizations unlock the full potential of their workforce. We are
              committed to delivering top-notch human resource services that
              align with our vision of empowering businesses and employees
              alike.
            </p>
          </CollapsiblePanel>

          {/* Panel 3 */}
          <CollapsiblePanel title="Vision">
            <p>
              To be a global leader in innovative HR solutions that drive
              organizational success. At HR Solutions, our mission is to help
              organizations unlock the full potential of their workforce. We are
              committed to delivering top-notch human resource services that
              align with our vision of empowering businesses and employees
              alike.
            </p>
          </CollapsiblePanel>

          {/* Panel 4 */}
          <CollapsiblePanel title="Why You Should Choose Us?">
            <p>
              We strive to be a global leader in innovative HR solutions that
              drive organizational success. Our mission is to help organizations
              unlock the full potential of their workforce and deliver
              top-quality services that align with our vision of empowering
              businesses and employees alike.
            </p>
          </CollapsiblePanel>
        </div>
      </div>
    </section>
  );
};

export default About;
