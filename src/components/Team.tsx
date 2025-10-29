import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";

const Team = () => {
  const alumni = [
    {
      name: "Anisa Fitri A.Md.Kom",
      role: "Alumni D3 Teknik Informatika",
      initials: "AF",
      bio: "Spesialis jaringan komputer dan infrastruktur TI, siap menjaga sistem tetap handal.",
      linkedin: "https://www.linkedin.com/in/anisa-fitri-4956b0332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      name: "Najiyatu Khasna'ul Fauziyyah A.Md.Kom",
      role: "Alumni D3 Teknik Informatika",
      initials: "KF",
      bio: "Spesialis desain dan pengalaman pengguna dengan sentuhan kreatif.",
      linkedin: "https://www.linkedin.com/in/najiyatu-khasna-ul-fauziyyah-46054333b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Ratna Amaliyah Mahmudah A.Md.Kom",
      role: "Alumni D3 Teknik Informatika",
      initials: "RA",
      bio: "Ahli analisis data untuk mendukung keputusan bisnis berbasis insight.",
      linkedin: "https://id.linkedin.com/in/ratna-amaliyah-mahmudah-04935232a"
    },
    {
      name: "Zelda Ammarsa Saefna Putri A.Md.Kom",
      role: "Alumni D3 Teknik Informatika",
      initials: "ZA",
      bio: "Membangun aplikasi dan solusi perangkat lunak yang efisien dan bisa dikembangkan dengan mudah.",
      linkedin: "https://www.linkedin.com/in/zelda-ammarsa-saefna-putri-883924332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  ];

  return (
    <section id="alumni" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Alumni Politeknik Baja Tegal
          </h2>
          <p className="text-xl text-muted-foreground">
            “Alumni unggulan, siap bersinar dan memimpin transformasi di dunia industri dan teknologi modern.”
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {alumni.map((member, index) => (
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

                {/* Tombol LinkedIn */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;