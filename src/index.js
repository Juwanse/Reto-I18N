import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";

import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
                
const userLocale = navigator.language || navigator.userLanguage;

const messages = userLocale.startsWith("es") ? localeEsMessages : localeEnMessages;

ReactDOM.render(
  <IntlProvider locale={userLocale} messages={messages}>
    <JobsList locale={userLocale} />
  </IntlProvider>,
  document.getElementById("root")
);
