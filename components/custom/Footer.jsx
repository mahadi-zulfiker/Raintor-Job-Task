import Link from "next/link";
import { Twitter, Instagram, Facebook, Dribbble, Figma } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-12 px-4 lg:px-20 bg-dark-background-custom text-foreground border-t border-muted glowing-section-bg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="col-span-1 lg:col-span-2">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            DEVLP.ME
          </h2>
          <p className="text-muted-foreground text-lg">As you can</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Say hello</h3>
          <ul className="space-y-2">
            <li>
              <a href="mailto:HELLO@DEVLP.ME.COM" className="text-muted-foreground hover:text-foreground transition-colors">
                HELLO@DEVLP.ME.COM
              </a>
            </li>
            <li>
              <a href="mailto:MAHBUBUL@ME.COM" className="text-muted-foreground hover:text-foreground transition-colors">
                MAHBUBUL@ME.COM
              </a>
            </li>
            <li className="pt-4">
              <h4 className="text-xl font-semibold mb-2">Call</h4>
            </li>
            <li>
              <a href="tel:+784549498100" className="text-muted-foreground hover:text-foreground transition-colors">
                +784549 4981 00
              </a>
            </li>
            <li>
              <a href="tel:+88450100211" className="text-muted-foreground hover:text-foreground transition-colors">
                +8845 0100 211
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li><Link href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
            <li><Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
            <li><Link href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</Link></li>
            <li><Link href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Social</h3>
          <ul className="space-y-2">
            <li>
                <Link href="#" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                    <Twitter className="h-5 w-5" /> <span>Twitter</span>
                </Link>
            </li>
            <li>
                <Link href="#" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                    <Instagram className="h-5 w-5" /> <span>Instagram</span>
                </Link>
            </li>
            <li>
                <Link href="#" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                    <Facebook className="h-5 w-5" /> <span>Facebook</span>
                </Link>
            </li>
            <li>
                <Link href="#" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                    <Figma className="h-5 w-5" /> <span>Behance</span>
                </Link>
            </li>
            <li>
                <Link href="#" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                    <Dribbble className="h-5 w-5" /> <span>Dribbble</span>
                </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-muted flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <div className="mb-4 md:mb-0">BESNIK</div>
        <div>&copy; devlop.me 2022</div>
        <div className="flex space-x-4">
          <Link href="#" className="hover:text-foreground transition-colors">PRIVACY</Link>
          <Link href="#" className="hover:text-foreground transition-colors">TERMS</Link>
        </div>
      </div>
    </footer>
  );
}