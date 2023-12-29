import React from 'react';

import * as styles from './index.styles';
import GroupsIcon from '@mui/icons-material/Groups';
import FacebookIcon from '@mui/icons-material/Facebook';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { Flags } from "@/components/Flags";

const offer = [{
  title: "Profesnonalna kadra",
  description: "Centrum Językowe prowadzone przez nauczyciela - metodyka i praktyka. Profesjonalni lektorzy różnych języków oraz native speakerzy. Łączy ich pasja do nauczania.",
  icon: <GroupsIcon className={styles.offerItemIconStyles} />
},
{
  title: "Pełna mobilność",
  description: "Zajęcia indywidualne z dojazdem do klienta/szkoły/firmy (na terenie Tychów dojazd bezpłatny).",
  icon: <DirectionsCarIcon className={styles.offerItemIconStyles} />
},
{
  title: "Indywidualizacja nauczania",
  description: "Dostosowanie metod i materiałów do potrzeb i oczekiwań klienta.",
  icon: <AccessibilityNewIcon className={styles.offerItemIconStyles} />
},
{
  title: "Elastyczność terminów",
  description: "Rozpocznij naukę w każdej chwili. Dostosujemy się do Twojego grafiku.",
  icon: <CalendarMonthIcon className={styles.offerItemIconStyles} />
}]

export const OfferSection: React.FC = () => {
  return (
    <>
      <div className={styles.offerInfoContainerStyles}>
        <h2 className={styles.offerTitleStyles}>Oferta zajęć indywidualnych</h2>
        <div className={styles.offerQuoteStyles}>"If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart."</div>
        <div className={styles.offerWrapperStyles}>
          {offer.map(({ title, description, icon }) => (
            <div key={title} className={styles.offerItemStyles}>
              <div>{icon}</div>
              <div className={styles.offerItemTitleStyles}>{title}</div>
              <div className={styles.offerItemDescriptionStyles}>{description}</div>
            </div>
          ))}
        </div>
        <div className={styles.offerFinalInformationStyles}>Z nami możesz poznać następujące języki obce:<b> angielski, niemiecki, hiszpański, włoski, francuski, rosyjski. </b><br /> O inne pytaj indywidualnie. </div>
      </div></>
  );
};
