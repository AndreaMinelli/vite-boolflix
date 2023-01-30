import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar as fasFaStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
library.add(fasFaStar, farFaStar, faSpinner);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export const fontAwesome = { library, fasFaStar, farFaStar, FontAwesomeIcon };
