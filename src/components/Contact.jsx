import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="my-4"
        >
         Address:&nbsp; {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="my-4"
        > Phone: &nbsp;
          <a href="tel:+923454299940" className="my-4">
            {CONTACT.phoneNo}
          </a>
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="my-4"
        >
          Email: &nbsp;
          <a href="mailto:jahangirsoomro30@gmail.com" className="my-4 ">
            {CONTACT.email}
          </a>
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
