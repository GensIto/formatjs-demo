import { FormattedMessage, IntlProvider, useIntl } from "react-intl";
import { en } from "./locales/en";
import { ja } from "./locales/ja";
import { useEffect, useState } from "react";

const messages: Record<string, Record<string, string>> = {
  en: en,
  ja: ja,
};

const HelloComponent = () => {
  const intl = useIntl();
  const name = "Taro";

  return (
    <>
      <FormattedMessage id='HELLO' values={{ name }} />
      <div>{intl.formatMessage({ id: "HELLO" }, { name })}</div>
    </>
  );
};

const App = () => {
  // const locale = navigator.language.split("-")[0]; // ブラウザの言語設定を使用本番用
  // デバック用
  const [locale, setLocale] = useState(navigator.language.split("-")[0]);
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const queryLocale = queryParams.get("locale");
    if (queryLocale && messages[queryLocale]) {
      setLocale(queryLocale);
    }
  }, []);
  //
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <HelloComponent />
    </IntlProvider>
  );
};

export default App;
