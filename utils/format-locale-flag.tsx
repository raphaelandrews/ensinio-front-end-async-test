import Image from "next/image";

import FlagBrasil from "@/public/assets/brazil-flag.svg";
import FlagUSA from "@/public/assets/usa-flag.svg";
import FlagSpain from "@/public/assets/spain-flag.svg";

const FormatLocaleFlag = (flag: string) => {
    let localeFlag;
    switch (flag) {
        case 'pt':
            localeFlag = <Image src={FlagBrasil} alt="Bandeira do Brasil" />;
            break;
        case 'en':
            localeFlag = <Image src={FlagUSA} alt="Bandeira dos Estados Unidos" />;
            break;
        case 'es':
            localeFlag = <Image src={FlagSpain} alt="Bandeira da Espanha" />;
            break;
    }
    return localeFlag;
}

export default FormatLocaleFlag;