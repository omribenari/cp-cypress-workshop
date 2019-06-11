import { IntlProvider } from 'react-intl';

// Create the IntlProvider to retrieve context for wrapping around.
const intlProvider = new IntlProvider({ locale: 'en-us' }, {});
const { intl } = intlProvider.getChildContext();

export const formatCurrencyNumber = (currency, number) => {
  return intl.formatNumber(number, {
    style: 'currency',
    currency
  });
};

export const formatDate = (
  date,
  options = { month: 'long', year: 'numeric', day: 'numeric' }
) => {
  return intl.formatDate(date, options);
};
