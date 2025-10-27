import { Code, Lightbulb, LineChart, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12" />,
      title: "Software Development",
      description: "Custom applications built with modern technologies, designed to scale with your business needs."
    },
    {
      icon: <Lightbulb className="h-12 w-12" />,
      title: "Strategic Consulting",
      description: "Expert guidance to help you navigate digital transformation and make informed technology decisions."
    },
    {
      icon: <LineChart className="h-12 w-12" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and visualization tools."
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance."
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive solutions tailored to your unique business challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardHeader>
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
