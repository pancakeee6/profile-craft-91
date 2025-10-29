import { Card, CardContent } from "@/components/ui/card";
import logoTI from "@/assets/logo-ti.png";
import logoTO from "@/assets/logo-tei.png";
import logoTM from "@/assets/logo-tm.png";
import logoTEI from "@/assets/logo-to.png";
const About = () => {
  const values = [
    {
      icon: <img src={logoTI} alt="Logo Informatika" className="h-12 w-12 object-contain" />,
      title: "Teknik Informatika",
      description:
        "Program Studi Teknik Informatika di Politeknik Baja Tegal membekali mahasiswa dengan pengetahuan dan keterampilan teknologi informasi yang melatih berpikir logis, sistematis, dan adaptif terhadap perkembangan teknologi.",
    },
    {
      icon: <img src={logoTM} alt="Logo Mesin" className="h-12 w-12 object-contain" />,
      title: "Teknik Mesin",
      description:
        "Program Studi D3 Teknik Mesin Politeknik Baja Tegal membekali mahasiswa dengan keterampilan teknis dan analitis di bidang manufaktur, otomasi, dan teknologi modern untuk menghadapi kebutuhan industri nasional maupun global.",
    },
    {
      icon: <img src={logoTO} alt="Logo Otomotif" className="h-12 w-12 object-contain" />,
      title: "Teknik Otomotif",
      description:
        "Program Studi Teknik Otomotif Politeknik Baja Tegal mempersiapkan mahasiswa menjadi tenaga ahli madya yang kompeten dalam teknologi kendaraan konvensional dan modern dengan keterampilan teknis, analitis, serta manajerial di bidang industri otomotif.",
    },
    {
      icon: <img src={logoTEI} alt="Logo Elektronika" className="h-12 w-12 object-contain" />,
      title: "Teknik Elektronika Industri",
      description:
        "Program Studi Teknik Elektronika Industri Politeknik Baja Tegal membekali mahasiswa dengan keahlian dalam merancang dan mengelola sistem elektronika untuk mendukung kebutuhan industri modern.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Tentang Politeknik Baja Tegal</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Politeknik Baja (Bhakti Praja) Tegal adalah kampus vokasi yang berfokus pada pengembangan sumber daya manusia kompeten, terampil, dan siap bersaing di dunia industri. Dengan kurikulum berbasis kebutuhan industri, tenaga pengajar profesional, serta fasilitas modern, kampus ini mencetak lulusan adaptif terhadap perkembangan teknologi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-2xl flex space-x-4 items-center">
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