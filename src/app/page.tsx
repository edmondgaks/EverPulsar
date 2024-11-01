"use client";
import Image from "next/image";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  image: string;
}
const images = [
  '/ev-charging.webp',
  '/ev-charging2.webp',
  '/ev-charging3.webp',
];

const timelineData: TimelineItem[] = [
  {
    date: 'Jan 10, 2023',
    title: 'Prix inspirations demain 2023',
    description: 'Brief description of the project milestone. This could be an overview of what was accomplished or significant highlights.',
    image: '/timeline1.jpg', 
  },
  {
    date: 'May 15, 2024',
    title: 'Europe tech incubator euratechnologie',
    description: 'Brief description of the second project milestone. Explain the project’s impact, achievements, or key takeaways.',
    image: '/timeline2.png', 
  },
  {
    date: 'May 15, 2024',
    title: '«Inspirons demain»',
    description: 'Brief description of the second project milestone. Explain the project’s impact, achievements, or key takeaways.',
    image: '/timeline3.png', 
  },
  {
    date: 'May 15, 2024',
    title: '«Inspirons demain»',
    description: 'Brief description of the second project milestone. Explain the project’s impact, achievements, or key takeaways.',
    image: '/timeline4.jpg', 
  },
  // Add more items as needed
];



interface Slide {
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: '/solar-collection.webp',
    title: 'Step 1: Solar Power Collection',
    description: 'Solar panels capture sunlight, generating renewable energy to power the charging stations sustainably.'
  },
  {
    image: '/energy-conversion.webp',
    title: 'Step 2: Energy Conversion',
    description: 'Captured solar energy is converted and stored, ready to be used for EV charging anytime, ensuring efficient energy use.'
  },
  {
    image: '/wireless-charging.webp',
    title: 'Step 3: Wireless Charging',
    description: 'When an EV is parked over the charging pad, energy is transferred wirelessly, providing seamless, cable-free charging.'
  }
];

export default function Home() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [services, setServices] = useState<string[]>([]);
    const [selectedStep, setSelectedStep] = useState(1);
    const [activeSection, setActiveSection] = useState<string>('home');
    const [currentpic, setCurrentSlidePic] = useState(0);

  const handleNext = () => {
    setCurrentSlidePic((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentSlidePic((prev) => (prev - 1 + images.length) % images.length);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = -80; // Adjust this value based on the height of your navbar
      const y = section.getBoundingClientRect().top + window.pageYOffset + offset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  const steps = [
    {
      title: "Step 1: Solar Power Collection",
      description:
        "Solar panels collect energy from sunlight, powering the entire station with renewable energy.",
      image: "/solar-collection.webp",
      alt: "Solar Panel Energy Collection",
    },
    {
      title: "Step 2: Energy Conversion",
      description:
        "Solar energy is stored in battery systems and converted to power for wireless transfer.",
      image: "/energy-conversion.webp",
      alt: "Energy Conversion Process",
    },
    {
      title: "Step 3: Wireless Charging",
      description:
        "Vehicles parked on the charging pad receive power wirelessly, with no need for cables.",
      image: "/wireless-charging.webp",
      alt: "Wireless Charging Process",
    },
  ];

  
  
    


    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      // const formData = {
      //     fullName,
      //     email,
      //     message,
      //     services,
      // };
  
      // const response = await fetch('/api/contact', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify(formData),
      // });
  
      // if (response.ok) {
      //     toast.success('Message sent successfully!', {
      //         position: "top-right",
      //         autoClose: 3000,
      //         hideProgressBar: false,
      //         closeOnClick: true,
      //         pauseOnHover: true,
      //         draggable: true,
      //         progress: undefined,
      //     });
      //     // Optionally reset the form data here
      //     setFullName('');
      //     setEmail('');
      //     setMessage('');
      //     // setServices([]);
      // } else {
      //     toast.error('Failed to send message.', {
      //         position: "top-right",
      //         autoClose: 3000,
      //         hideProgressBar: false,
      //         closeOnClick: true,
      //         pauseOnHover: true,
      //         draggable: true,
      //         progress: undefined,
      //     });
      // }
  };

  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-white text-gray-900 min-h-screen">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md">
        <Image src={"/ev-logo.png"} width={100} height={100} alt="logo" className="h-10 w-auto" />
        <nav className="hidden md:flex space-x-8">
          <a href="#" key="discover" onClick={() => handleScroll('discover')} className="hover:text-yellow-400">DISCOVER</a>
          <a href="#" key="services" onClick={() => handleScroll('services')} className="hover:text-yellow-400">SERVICES</a>
          <a href="#" key="story" onClick={() => handleScroll('story')} className={`hover:text-yellow-400 ${activeSection ? "" : ""}`}>STORY</a>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <button className="hover:text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.44 4.44a1 1 0 01-1.415 1.415L15 13.414M15 10V6m0 4l4-4M5 6v2a4 4 0 00.513 1.986M5 6L3.111 4.111A2 2 0 015 6zM3 9a5.002 5.002 0 006.002 4.991M3 9l.109-.109" />
            </svg>
          </button>
          <button key={"contact"} onClick={() => handleScroll('contact')} className="border px-4 py-2 rounded bg-white text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white transition duration-300">
            Contact
          </button>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-black focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section key="home"  className="flex flex-col md:flex-row items-center justify-between p-6 md:p-16 bg-gray-100">
      {/* Text Section */}
      <div className="flex-1 max-w-lg space-y-6 text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Embrace the <span className="text-yellow-500">Electric Revolution</span>
        </h2>
        <p className="text-gray-700 text-lg">
          Unleash the power of tomorrow with Ev-Pulsar, the forefront of electric mobility. We are a pioneering electric vehicle company, driven by the passion to redefine the future of transportation.
        </p>
        <button className="mt-4 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold text-lg transition">
          Learn More
        </button>
      </div>

      {/* Slider Section */}
      <div className="relative flex-1 w-full max-w-xl md:max-w-lg mx-auto">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentpic * 100}%)` }}
          >
            {images.map((src, index) => (
              <div key={index} className="min-w-full">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={1000}  
                  height={800} 
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </section>
      <section id="discover" className="bg-gray-100 py-12 px-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold">Discover Ev-Pulsar in Action</h3>
          <p className="text-gray-700 mt-2">Watch our latest video to learn how we’re driving the future forward.</p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg relative group">
            {/* Video Overlay with Play Button */}
            
            <iframe
              className="w-full h-[300px] md:h-[500px]"
              src="https://www.youtube.com/embed/A9PtPN8UvQc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-semibold">Accelerate into a New Era</h3>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-8">
          <div className="flex flex-col gap-y-2 items-center">
            <Image src={"/icon-energy.png"} width={100} height={100} alt="icon energy" />
            <h4 className="font-semibold">Cutting-Edge Technology</h4>
            <p className="text-gray-600 text-center">Leveraging state-of-the-art technology for seamless performance.</p>
          </div>
          <div className="flex flex-col gap-y-2 items-center">
            <Image src={"/icon-tech.png"} width={100} height={100} alt="icon energy" />
            <h4 className="font-semibold">Sustainable Innovation</h4>
            <p className="text-gray-600 text-center">Committed to green solutions and sustainable practices.</p>
          </div>
          <div className="flex flex-col gap-y-2 items-center">
            <Image src={"/icon-performance.png"} width={100} height={100} alt="icon energy" />
            <h4 className="font-semibold">Uncompromising Performance</h4>
            <p className="text-gray-600 text-center">Delivering top performance for a premium experience.</p>
          </div>
        </div>
      </section>
      <section id="services" className="py-20 bg-gray-50 text-gray-800">
        <div className="container mx-auto px-6">
          {/* Title and Intro */}
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
            How ev-Pulsar Works
          </h2>
          <p className="mb-12 text-base max-w-2xl mx-auto text-gray-600 text-center">
            Discover our innovative approach to EV charging, powered by renewable energy and designed for convenience.
          </p>

          {/* Content Layout */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Image Section */}
            <div className="flex-1">
              <Image
                src={steps[selectedStep - 1].image}
                alt={steps[selectedStep - 1].alt}
                width={450}
                height={450}
                className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
              />
            </div>

            {/* Steps Section */}
            <div className="flex-1">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4 text-center lg:text-left">
                How It Works
              </h3>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedStep(index + 1)}
                    className={`p-6 cursor-pointer rounded-lg transition-all duration-300 transform ${
                      selectedStep === index + 1
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <h4 className="text-lg font-semibold">{step.title}</h4>
                    <p className="mt-2 text-base">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Features Section */}
          <div className="bg-blue-50 p-10 rounded-lg shadow-lg mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Why Choose ev-Pulsar?
            </h3>
            <ul className="text-lg text-gray-700 space-y-4 max-w-2xl mx-auto">
              <li>🌞 Renewable Solar Power: Sustainable energy for your EV.</li>
              <li>⚡ Wireless Charging: Simply park and power up without cables.</li>
              <li>🌍 Environmentally Friendly: Reduces dependence on fossil fuels.</li>
              <li>🚗 Convenient and Hassle-Free: The future of EV charging is wireless.</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* <h3 className="text-base md:text-2xl bg-white md:w-[30%] w-[50%] mx-auto p-4 shadow-lg rounded-md translate-y-6 text-center font-semibold">Why Ev-Pulsar?</h3>
      <section className="flex flex-col md:flex-row items-center justify-center p-8 bg-[#FCDC55]">
        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-white p-3 rounded-full shadow-md">
              <Image src={"/icon-tech.png"} width={20} height={20} alt="icon energy" />
              </div>
              <p className="text-lg font-semibold">Impressive Range</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white p-3 rounded-full shadow-md">
              <Image src={"/icon-performance.png"} width={20} height={20} alt="icon energy" />
              </div>
              <p className="text-lg font-semibold">Holistic Ecosystem</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white p-3 rounded-full shadow-md">
              <Image src={"/icon-energy.png"} width={20} height={20} alt="icon energy" />
              </div>
              <p className="text-lg font-semibold">Contribution to a Greener Planet</p>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-0 md:ml-12">
          <Image
            src="/driver-image.png" // Replace with actual image path
            alt="Driver in EV"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section> */}
      
      <div id="story" className="container mx-auto my-16 px-4">
        <div className="w-full flex flex-col gap-4 justify-center items-center p-4">
          <h1 className="text-3xl font-sans font-semibold antialiased relative text-center">
            Our Story
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 h-[2px] bg-yellow-300"></span>
          </h1>
          <p className="font-light text-sm md:text-base text-center w-4/5 md:w-2/3">
            We are on a mission to engineer the future of global digitalization today, with a passion.
          </p>
        </div>

        <div className="relative flex flex-col items-center">
          {/* Timeline Line */}
          <div className="absolute w-1 bg-gray-300 left-1/2 transform -translate-x-1/2 h-full"></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center w-full mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Date Badge */}
              <div
                className={`flex items-center justify-center w-full md:w-1/2 px-4 py-2 mb-4 md:mb-0 ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div
                  className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg relative md:top-0 md:translate-y-1/2"
                  style={{ transform: "translateY(-50%)" }}
                >
                  {item.date}
                </div>
              </div>

              {/* Timeline Card */}
              <div className="w-full md:w-1/2 px-4 py-6">
                <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105">
                  <img
                    src={item.image}
                    alt="Milestone image"
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="text-blue-500 font-semibold">Visit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Testimonials Section */}
      <section className="py-12 px-8 text-center">
        <h3 className="text-3xl font-bold mb-8">Testimonials</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="border p-6 rounded-lg shadow-lg max-w-sm">
            <div className="flex items-center justify-center mb-4">
              <Image src="/user1.png" alt="User 1" width={50} height={50} className="rounded-full" />
            </div>
            <p className="font-semibold">Johnathan S. - Los Angeles, CA</p>
            <p className="text-gray-600 mt-2">&quot;Switching to ev-Pulsar was the best decision I've made for both the environment and my daily commute. I feel great knowing that I&apos;m contributing to a cleaner planet, and the charging network makes it easy to stay powered up wherever I go.&quot;</p>
          </div>
          <div className="border p-6 rounded-lg shadow-lg max-w-sm">
            <div className="flex items-center justify-center mb-4">
              <Image src="/user2.png" alt="User 2" width={50} height={50} className="rounded-full" />
            </div>
            <p className="font-semibold">Sarah L. - Miami, FL</p>
            <p className="text-gray-600 mt-2">&quot;With rising fuel prices, ev-Pulsar has been a blessing. I&apos;m saving so much on gas, and the maintenance costs are minimal. Plus, the government rebates were a huge help in making my purchase more affordable!&quot;</p>
          </div>
        </div>
      </section>

      {/* Clientele Section */}
     <section className="bg-gray-900 text-white py-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Our Partners</h3>
        <div className="flex flex-wrap items-center justify-center space-x-12 space-y-4">
          <div className="flex-shrink-0">
            <Image src="/eurotech.svg" alt="Eurotech" width={180} height={180} className="max-w-full h-auto" />
          </div>
          <div className="flex-shrink-0">
            <Image src="/techshop.png" alt="Techshop" width={180} height={180} className="max-w-full h-auto" />
          </div>
          <div className="flex-shrink-0">
            <Image src="/lille2.svg" alt="Lille" width={180} height={180} className="max-w-full h-auto" />
          </div>
          <div className="flex-shrink-0">
            <Image src="/credit.svg" alt="Credit" width={180} height={180} className="max-w-full h-auto" />
          </div>
        </div>
      </section>
      <div id="contact" className="flex flex-col gap-6 px-4">
        <div className="w-full flex p-8 flex-col gap-4 justify-center items-center">
          <h1 className="text-3xl font-sans font-semibold antialiased relative">
            Contact us <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 h-[2px] bg-yellow-300 "></span>
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="p-6 md:p-10 flex flex-col w-full md:w-3/4 lg:w-1/2 mx-auto border border-[#262626] shadow-sm gap-5 rounded-lg">
          <div className="flex w-full flex-col md:flex-row gap-5">
            <div className="flex flex-col rounded-md  border border-[#F2F2F7] p-3 w-full md:w-1/2">
              <p className="font-medium  text-base">Full Name</p>
              <input
                type="text"
                className="p-2 text-sm text-black  w-full border-b outline-none  border-b-[#C7C7CC] placeholder:text-[#C7C7CC] placeholder:text-sm"
                placeholder="Type here"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required />            
            </div>
            <div className="flex flex-col rounded-md  border border-[#F2F2F7] p-3 w-full md:w-1/2">
              <p className="font-medium text-base">Email</p>
              <input
                type="email"
                className="p-2 text-sm text-black border-b outline-none border-b-[#C7C7CC] w-full placeholder:text-[#C7C7CC] placeholder:text-sm"
                placeholder="Type here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
            </div>         
          </div>
          {/* <div className="flex p-3 border  border-[#F2F2F7] flex-col gap-4 rounded-md">
            <h1 className="text-base font-medium">
              Why are you contacting us?
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-4">
              {["Software Applications", "Machine Learning Systems", "Mobile App Development", "Others"].map(service => (
                <div key={service} className="flex flex-row gap-2 items-center">
                  <input
                      type="checkbox"
                      checked={services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                  />
                  <p className="text-sm  font-light">
                      {service}
                  </p>
                </div>
              ))}
            </div>  
          </div> */}
                
          <div className="flex p-3 border items-start w-full border-[#F2F2F7] flex-col gap-4 rounded-md">
            <p className="font-medium text-base">Your Message</p>
            <textarea
              className="p-2 w-full text-sm focus:border-0 text-black border-b border-b-[#C7C7CC]  outline-none placeholder:text-[#C7C7CC] placeholder:text-sm"
              placeholder="Type here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required />
          </div>
          <button type="submit" className="rounded-md text-white py-3 px-5 text-sm bg-gray-700">
            Send Message
          </button>      
        </form>
        {/* <ToastContainer /> */}
      </div>
      <footer className="bg-white  text-gray-800 py-8">
            <div className="container mx-auto px-4">
            {/* Upper section with logo and navigation links */}
            <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-300 pb-6 space-y-6 md:space-y-0">
                {/* Logo */}
                <div className="flex justify-center items-center">
                 <Image src={"/ev-logo.png"} width={140} height={140} alt="PalsLab logo" />
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm">
                <a href="#home" className="hover:text-[#CAAC70]">Home</a>
                <a href="#mission" className="hover:text-[#CAAC70]">Mission</a>
                <a href="#products" className="hover:text-[#CAAC70]">Product</a>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://www.instagram.com/eric_gakuba_/" className="p-2 bg-gray-100 rounded hover:bg-gray-200">
                    <Instagram color="#CAAC70" />
                </a>
                <a href="#" className="p-2 bg-gray-100 rounded hover:bg-gray-200">
                    <Twitter color="#CAAC70" />
                </a>
                <a href="https://www.linkedin.com/in/eric-gakuba-060201168" className="p-2 bg-gray-100 rounded hover:bg-gray-200">
                    <Linkedin color="#CAAC70" />
                </a>
                </div>
            </div>

            {/* Lower section with contact information and address */}
            <div className="flex flex-col md:flex-row text-gray-500 justify-between items-center py-6 space-y-6 md:space-y-0">
                {/* Contact Information */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-sm justify-center items-center">
                <div className="flex items-center space-x-2">
                    <Mail color="#CAAC70" size={18} />
                    <span>gakberic10@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Phone color="#CAAC70" size={18} />
                    <span>+33695885606</span>
                </div>
                <div className="flex items-center space-x-2 text-center">
                    <MapPin color="#CAAC70" size={18} />
                    <span>Paris, France</span>
                </div>
                </div>

                {/* Copyright */}
                <div className="text-sm text-center md:text-left text-gray-500">
                © 2024 Ev-Puslar. All rights reserved.
                </div>
            </div>
            </div>
        </footer>
    </div>
  );
} 