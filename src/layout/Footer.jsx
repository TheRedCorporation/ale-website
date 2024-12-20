import FooterLinks from "../content/FooterLinks";
import SocialMedia from "../content/SocialMedia";

export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center space-y-3 mt-4">
      <FooterLinks />
      <div className=" flex flex-col items-center md:flex-row justify-evenly space-y-2 md:h-12 h-20 w-full">
        <p>&copy; {year}, <a href="https://www.theredcorporation.com" className="cursor-pointer" title="TRC">The Red Corporation</a></p>
        <SocialMedia />
      </div>
    </footer>
  );
}
