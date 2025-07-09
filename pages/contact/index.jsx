import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { fadeIn } from "../../variants";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = form.current;
    const name = formData.name.value.trim();
    const email = formData.email.value.trim();
    const message = formData.message.value.trim();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      setIsLoading(false);
      return;
    }

    try {
      // Send to Admin
      await emailjs.send(
        "service_79jm5nb",
        "template_3ke9s64",
        { name, email, message },
        "RklqgDQ4zWUyacbw4"
      );

      // Send Confirmation to User
      await emailjs.send(
        "service_79jm5nb",
        "template_n9hchmf",
        { name, email },
        "RklqgDQ4zWUyacbw4"
      );

      toast.success("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full bg-primary/30 relative">
      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="container mx-auto py-32 h-full flex flex-col xl:flex-row items-center justify-center gap-12">
        {/* Left: Contact Info */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:block flex-1 w-full max-w-[400px] space-y-8 text-center xl:text-left"
        >
          <h2 className="h2 mb-10">
            Let&apos;s <span className="text-accent">connect.</span>
          </h2>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
            <p className="text-white/80 text-lg">aamirwebdev321@gmail.com</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
            <p className="text-white/80 text-lg">+92 323 7400856</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">Location</h3>
            <p className="text-white/80 text-lg">Islamabad, Pakistan</p>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1 w-full mt-32 md:mt-36   md:max-w-[600px]"
        >
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 pb-24"
            autoComplete="off"
          >

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="input bg-white/20 backdrop-blur-md placeholder:text-white/70"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="input bg-white/20 backdrop-blur-md placeholder:text-white/70"
            />
</div>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="textarea bg-white/20 backdrop-blur-md placeholder:text-white/70 resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={isLoading}
              className={`btn btn-lg flex  bg-white/20 border border-transparent w-52 hover:bg-transparent hover:border-white/20   mx-auto rounded-lg items-center justify-center gap-2 ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
