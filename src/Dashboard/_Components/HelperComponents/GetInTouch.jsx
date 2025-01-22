import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GithubIcon, Instagram, Linkedin, TwitterIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Header from "/src/Header.jsx";

const GetInTouch = () => {
  const socialLinks = [
    {
      name: "Github",
      path: "https://github.com/intellicourse",
      icon: <GithubIcon className="h-8 w-8" />,
    },
    {
      name: "Twitter",
      path: "https://twitter.com/intellicourse",
      icon: <TwitterIcon className="h-8 w-8" />,
    },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/company/intellicourse",
      icon: <Linkedin className="h-8 w-8" />,
    },
    {
      name: "Instagram",
      path: "https://www.instagram.com/intellicourse",
      icon: <Instagram className="h-8 w-8" />,
    },
  ];

  const [state, handleSubmit] = useForm("xvgzpvre");
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    // Start the countdown when the form submission succeeds
    if (state.succeeded) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      // Navigate to home when countdown reaches 0
      if (countdown === 0) {
        clearInterval(timer);
        navigate("/");
      }

      // Cleanup interval on component unmount
      return () => clearInterval(timer);
    }
  }, [state.succeeded, countdown, navigate]);

  if (state.succeeded) {
    return (
      <div className="text-center py-32">
        <motion.h1
          className="text-4xl font-bold text-emerald-600"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Thank You!
        </motion.h1>
        <motion.p
          className="text-lg text-yellow-500"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Your message has been successfully sent. We'll get back to you soon.
        </motion.p>
        <motion.h2
          className="text-sm text-gray-500 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
        >
          Redirecting to home in <span className="font-bold text-emerald-600">{countdown}</span>{" "}
          seconds...
        </motion.h2>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-5 p-8 rounded-3xl shadow-lg bg-gradient-to-br from-teal-50 to-yellow-100 border-emerald-400 border">
          {/* Left Section */}
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
              Get in Touch
            </h1>
            <p className="text-emerald-600 font-medium text-lg">
              Have questions or suggestions? We'd love to hear from you!
            </p>
            <p className="text-emerald-500 text-sm mt-3">
              Contact us via the form below or connect on our social platforms.
            </p>
          </div>

          {/* Right Section */}
          <div className="text-emerald-600 font-medium">
            {/* Formspree Form */}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    className="w-full"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="mb-6">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here..."
                  className="w-full"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-yellow-400 hover:from-yellow-400 hover:to-emerald-500 transition-all duration-300 ease-in-out"
                disabled={state.submitting}
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>

            <hr className="h-1 w-full bg-gradient-to-r from-emerald-500 to-yellow-400 my-6" />

            <div className="flex flex-wrap gap-4 items-center justify-center">
              {socialLinks.map((link, index) => (
                <Link
                  href={link.path}
                  key={index}
                  className="p-3 border-2 border-emerald-500 rounded-full hover:bg-yellow-500 transition-all duration-300 ease-in-out"
                  aria-label={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
