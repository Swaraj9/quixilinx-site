import React from "react";
import "../styles/services.css";
import { MdOutlineWeb } from "react-icons/md";
import { ImMobile } from "react-icons/im";
import { BsBuildings, BsBrush } from "react-icons/bs";
import { RiGraduationCapLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div id="services" className="svs">
      <div className="svs-title">Our Services</div>
      <div className="svs-main">
        <Serivce
          icon={<MdOutlineWeb />}
          name="Web Development"
          desc='Get your own customized web pages and take your business to the "Internet".'
        />
        <Serivce
          icon={<ImMobile />}
          name="Mobile Development"
          desc="Want your services to be at everyones fingertips, don't worry we've perfectly got you covered."
        />
        <Serivce
          icon={<BsBuildings />}
          name="ERP Development"
          desc="Convert your offline SOPs to a complete online solutions and grow faster."
        />
        <Serivce
          icon={<RiGraduationCapLine />}
          name="Industry Training"
          desc="We train employees as well as students to match industrial technology standards."
        />
        <Serivce
          icon={<BsBrush />}
          name="UI Design"
          desc="Upgrade your application in terms of looks and feels so that your clients enjoy your products."
        />
      </div>
    </div>
  );
};

const Serivce = ({ icon, name, desc }) => {
  return (
    <motion.div
      className="sv"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <div className="sv-header">
        <div className="sv-icon">{icon}</div>
        <div className="sv-title">{name}</div>
      </div>
      <div className="sv-desc">{desc}</div>
    </motion.div>
  );
};

export default Services;
