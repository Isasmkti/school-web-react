import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, GraduationCap } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">SMA Negeri 1</div>
                <div className="text-xs text-muted-foreground">Jakarta</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Sekolah unggulan yang berkomitmen mencetak generasi cerdas, berkarakter, dan berprestasi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/profil" className="text-muted-foreground hover:text-primary transition-colors">Profil Sekolah</Link></li>
              <li><Link to="/program" className="text-muted-foreground hover:text-primary transition-colors">Program Pendidikan</Link></li>
              <li><Link to="/berita" className="text-muted-foreground hover:text-primary transition-colors">Berita</Link></li>
              <li><Link to="/galeri" className="text-muted-foreground hover:text-primary transition-colors">Galeri</Link></li>
              <li><Link to="/ppdb" className="text-muted-foreground hover:text-primary transition-colors">PPDB</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Jl. Pendidikan No. 123, Jakarta Pusat, DKI Jakarta 10110</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">(021) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@sman1jakarta.sch.id</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background hover:bg-primary border border-border rounded-lg flex items-center justify-center transition-all hover:scale-110 group"
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background hover:bg-primary border border-border rounded-lg flex items-center justify-center transition-all hover:scale-110 group"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background hover:bg-primary border border-border rounded-lg flex items-center justify-center transition-all hover:scale-110 group"
              >
                <Youtube className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SMA Negeri 1 Jakarta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
