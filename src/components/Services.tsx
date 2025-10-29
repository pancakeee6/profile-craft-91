import React from "react";
import { Cpu, Code, Database, Car, Settings, CheckCircle, Wrench, Users, FlaskConical, CircuitBoard, Cog, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Services = () => {
  const programs = [
    { icon: <Code className="h-8 w-8" />, title: "Teknik Informatika", description: "Software Engineer" },
    { icon: <Cpu className="h-8 w-8" />, title: "Teknik Informatika", description: "Web Developer" },
    { icon: <Database className="h-8 w-8" />, title: "Teknik Informatika", description: "Data Analyst" },
    { icon: <Cog className="h-8 w-8" />, title: "Teknik Mesin", description: "Mechanical Engineer" },
    { icon: <Settings className="h-8 w-8" />, title: "Teknik Mesin", description: "Maintenance Engineer" },
    { icon: <CheckCircle className="h-8 w-8" />, title: "Teknik Mesin", description: "Quality Control" },
    { icon: <Car className="h-8 w-8" />, title: "Teknik Otomotif", description: "Automotive Engineer" },
    { icon: <Users className="h-8 w-8" />, title: "Teknik Otomotif", description: "Service Advisor" },
    { icon: <FlaskConical className="h-8 w-8" />, title: "Teknik Otomotif", description: "R&D Specialist" },
    { icon: <CircuitBoard className="h-8 w-8" />, title: "Teknik Elektronika Industri", description: "Automation Engineer" },
    { icon: <Zap className="h-8 w-8" />, title: "Teknik Elektronika Industri", description: "Control System Engineer" },
    { icon: <Cpu className="h-8 w-8" />, title: "Teknik Elektronika Industri", description: "Electrical Technician" },
  ];

  return (
    <section id="prospek-kerja" className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Prospek Kerja</h2>
          <p className="text-lg text-muted-foreground">
            Menyiapkan tenaga ahli unggul di dunia industri modern
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-12"
        >
          {programs.map((program, index) => (
            <SwiperSlide key={index}>
              <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-200 p-4 flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                  {program.icon}
                </div>

                <p className="text-2xl md:text-3xl text-black text-center font-semibold mb-6">
                  {program.description}
                </p>

                <p className="text-md text-gray-500 text-center font-medium">
                  {program.title}
                </p>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
