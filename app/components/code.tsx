/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Instagram, Facebook, Twitter, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function BeautyParlour() {
  const [activeTab, setActiveTab] = useState("services")
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const services = [
    { name: "Facials", image: "https://i.ibb.co/RgcjXhn/Untitled-design-min.png" },
    { name: "Haircuts & Styling", image: "https://i.ibb.co/Rby0q0B/Untitled-design-1-min.png" },
    { name: "Manicure & Pedicure", image: "https://i.ibb.co/GJMCgvz/Untitled-design-2-min.png" },
    { name: "Waxing",  image: "https://i.ibb.co/Bcv9spX/Untitled-design-min.png" },
    { name: "Bridal Packages", image: "https://i.ibb.co/9TLcP8Z/Untitled-design-1-min.png" },
    { name: "Makeup Services", image: "https://i.ibb.co/0Jf832p/Untitled-design-2-min-1.png" },
    { name: "Body Treatments", image: "https://i.ibb.co/gyrxvLw/Untitled-design-3-min.png" },
    { name: "Skin Treatments", image: "https://i.ibb.co/TtCNGsH/Untitled-design-4-min.png" },
    { name: "Massage Services", image: "https://i.ibb.co/WtK2kLq/Untitled-design-5-min.png" },
    { name: "Spa Packages", image: "https://i.ibb.co/tc9SWfm/Untitled-design-6-min.png" },
  ]

  const workShowcase = [
    { image: "https://i.ibb.co/PYFQJrH/459272962-17992968410698116-7140709157794698124-n-1.jpg", caption: "Bridal Makeup" },
    { image: "https://i.ibb.co/0J0FRQS/421115793-17963871353698116-915936259171628710-n-1-1.jpg", caption: "Hair Styling" },
    { image: "https://i.ibb.co/JBTB9NL/459144531-17992968401698116-8287230656250941514-n-1-1.jpg", caption: "Nail Art" },
    { image: "https://i.ibb.co/qCwFGgd/439631004-17974636967698116-6351696678185889553-n-1-1.jpg", caption: "Facial Treatment" },
  ]

  //@ts-expect-error
  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${email}?subject=Booking%20Service:%20${encodeURIComponent(selectedService)}&body=Hello%20${encodeURIComponent(name)},%0D%0A%0D%0AThank%20you%20for%20choosing%20our%20service!`;
    
    // Open user's email client with the constructed mailto link
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className='text-center w-full'>
            <h1 className="text-3xl font-bold text-pink-600 ">MakeupByPooja</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            {["Services", "Work", "About", "Contact"].map((item) => (
              <Button
                key={item}
                variant="ghost"
                onClick={() => setActiveTab(item.toLowerCase())}
                className={activeTab === item.toLowerCase() ? "text-pink-600" : "text-gray-600"}
              >
                {item}
              </Button>
            ))}
          </nav>
        </div>
      </header>
      <main>
        <section className="relative h-[350px] w-full flex items-center justify-center">
          <Image
            src="https://i.ibb.co/vkDsmzT/solutions-1.png"
            alt="Beauty parlour hero image"
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
          <div className="absolute inset-0 " />
          <div className="relative z-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white mb-8"
            >
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <Tabs defaultValue="services" className="w-full max-w-md mx-auto">
      <TabsList className="flex p-1 space-x-1 bg-white rounded-full text-white">
        {["services", "work", "contact"].map((tab) => (
          <TabsTrigger
            key={tab}
            value={tab}
            className={`${
              activeTab === tab
                ? "text-white font-semibold"
                : "text-black font-semibold"
            } relative w-full rounded-full py-2.5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            onClick={() => setActiveTab(tab)}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 capitalize">{tab}</span>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>

            <TabsContent value="services" className="mt-8">
              <h3 className="text-3xl font-bold text-center mb-8">Our Services</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className='max-h-[250px] max-w-[200px]'>
                      <CardHeader className="p-1">
                        <Image
                          src={service.image}
                          alt={service.name}
                          width={200}
                          height={200}
                          className="rounded-t-lg object-contain"
                        />
                      </CardHeader>
                      <CardContent className="p-2">
                        <CardTitle className="mb-2">{service.name}</CardTitle>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="work" className="mt-8">
              <h3 className="text-3xl font-bold text-center mb-8">Our Services</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {workShowcase.map((service, index) => (
                  <motion.div
                    key={service.caption}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className='max-h-[250px] max-w-[200px]'>
                      <CardHeader className="p-1">
                        <Image
                          src={service.image}
                          alt={service.caption}
                          width={200}
                          height={200}
                          className="rounded-t-lg object-contain"
                        />
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="contact" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Phone: 63958 27703</p>
                  <p className="mb-4">Address: Opp Bhatt colony phase 1 Haldwani</p>
                  <div className="flex space-x-4 mb-6 justify-center w-full">
                    <Button variant="outline" size="icon" className=''>
                      <Link href={"https://www.instagram.com/makeupbypooja03/"}>
                        <Instagram className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  {/* <Card className="bg-pink-50">
                    <CardHeader>
                      <CardTitle className="text-pink-600">Book an Appointment</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service</label>
                        <select
                          id="service"
                          name="service"
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
                          required
                        >
                          <option value="">Select a service</option>
                          {services.map(service => (
                            <option key={service.name} value={service.name}>
                              {service.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <button type="submit" className="w-full bg-pink-500 text-white py-2 px-4 rounded-md">Book Now</button>
                    </form>
                    </CardContent>
                  </Card> */}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </div>
  )
}