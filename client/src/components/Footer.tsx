import { Link } from "wouter";
import logo from "/assets/Falcons-Racing_1769682474129.png";
import { Facebook, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Falcons Pedal Mafia Racing Team" className="h-16 w-auto" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-3xl tracking-wider uppercase leading-none text-primary">
                  Falcons Pedal Mafia
                </span>
                <span className="font-display font-bold text-3xl tracking-wider uppercase text-white leading-none">
                  Racing Team
                </span>
              </div>
            </div>
            <p className="text-gray-400 max-w-md font-body leading-relaxed mb-6">
              Development. Mentorship. Community. Performance. <br />
              Western Australian based elite road cycling team, competing at the highest level while fostering the next generation of talent.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/falcons_racing_cc" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-primary hover:text-white p-3 rounded-full transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/5 hover:bg-primary hover:text-white p-3 rounded-full transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/5 hover:bg-primary hover:text-white p-3 rounded-full transition-all duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl uppercase tracking-wider mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-4 font-body text-gray-400">
              <li><Link href="/riders"><span className="hover:text-white cursor-pointer transition-colors">The Team</span></Link></li>
              <li><Link href="/events"><span className="hover:text-white cursor-pointer transition-colors">Race Calendar</span></Link></li>
              <li><Link href="/partners"><span className="hover:text-white cursor-pointer transition-colors">Our Partners</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-white cursor-pointer transition-colors">Contact Us</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl uppercase tracking-wider mb-6 text-primary">Contact</h4>
            <ul className="space-y-4 font-body text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 mt-1 text-primary" size={18} />
                <span>Perth, Western Australia</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-primary" size={18} />
                <a href="mailto:kawkaw@falconscycling.com.au" className="hover:text-white transition-colors">kawkaw@falconscycling.com.au</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-body">
          <p>&copy; {new Date().getFullYear()} Falcons Pedal Mafia Racing Team. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy"><span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span></Link>
            <Link href="/terms"><span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
