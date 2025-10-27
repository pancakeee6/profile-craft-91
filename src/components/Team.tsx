import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      initials: "SJ",
      bio: "Visionary leader with 15+ years in tech innovation"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      initials: "MC",
      bio: "Technology strategist passionate about scalable solutions"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      initials: "ER",
      bio: "Creative director crafting exceptional user experiences"
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      initials: "DK",
      bio: "Full-stack expert building robust applications"
    }
  ];

  return (
    <section id="team" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground">
            Talented individuals united by a passion for innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-6 space-y-4">
                <Avatar className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-accent">
                  <AvatarFallback className="text-2xl font-bold text-primary-foreground bg-transparent">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
                <button className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
