import { Icon, Link } from "#app/components/atoms";
import { Section } from "#app/components/templates";
import contactSrc from "#app/images/contact.svg";
import Image from "next/image";

export const Contact = () => {
  const contactTitle = "contact-title";
  return (
    <Section
      className="flex flex-col gap-strong"
      aria-labelledby={contactTitle}
    >
      <h2 className="font-headings text-h2 text-text" id={contactTitle}>
        Jak się z nami skontaktować?
      </h2>
      <div className="flex flex-col gap-strong md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-strong">
          <ul className="flex flex-col gap-strong">
            <li className="flex gap-base">
              <Icon name="kindergarten" className="h-16 w-16" />
              <div className="flex flex-col gap-2">
                <p className="text-p3 text-text-inactive">Adres</p>
                <address className="text-p1 not-italic text-text-subtle">
                  Osiedle Centrum E14,
                  <span className="block">31-934 Kraków</span>
                </address>
              </div>
            </li>
            <li className="flex gap-base">
              <Icon name="email" className="h-16 w-16" />
              <div className="flex flex-col gap-2">
                <p className="text-p3 text-text-inactive">Adres email</p>
                <Link href="mailto:zlobekhuta@gmail.com">
                  zlobekhuta@gmail.com
                </Link>
              </div>
            </li>
            <li className="flex gap-base">
              <Icon name="phone-call" className="h-16 w-16" />
              <div className="flex flex-col gap-2">
                <p className="text-p3 text-text-inactive">Number telefonu</p>
                <Link href="tel:739-048-513">739 048 513</Link>
              </div>
            </li>
            <li className="flex justify-start gap-base">
              <Icon name="web" className="h-16 w-16 shrink-0" />
              <div className="flex flex-col gap-2">
                <p className="text-p3 text-text-inactive">Facebook</p>
                <Link
                  href="https://www.facebook.com/encepencehuta"
                  target="_blank"
                  className="break-all"
                >
                  facebook.com/encepencehuta
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <Image
          src={contactSrc}
          alt=""
          className="max-h-[500px] max-w-[500px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
        />
      </div>
    </Section>
  );
};
