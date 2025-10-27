import { Target, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Mission Driven",
      description: "We're committed to delivering exceptional results that exceed expectations and drive meaningful impact."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Client Focused",
      description: "Your success is our priority. We build lasting partnerships based on trust and mutual growth."
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Innovation First",
      description: "We leverage cutting-edge technology to solve complex challenges and create competitive advantages."
    }
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About InnovateCo</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Founded in 2020, we've grown from a small startup to a trusted partner for businesses worldwide. 
            Our team of experts combines technical excellence with strategic thinking to deliver transformative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
