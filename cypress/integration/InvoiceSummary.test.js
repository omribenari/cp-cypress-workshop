import { InvoiceSummaryActions as actions } from '../actions/InvoiceSummaryActions';
import { formatCurrencyNumber, formatDate } from '../actions/intl-helper';

const token =
  '50e78fb1bbd14641babf5eb37926d9f41a27783a2a0c42c7ba638f2c5cd15b79ea52b182aa714e20a4c9fd0acc762629';

describe('Invoice summary tests', () => {
  beforeEach(() => {
    cy.visit(token);
  });

  it('should contain invoice info', () => {
    actions.getSummaryElement().contains('Invoice');
    actions.getSummaryElement().contains('Due date');
    actions.getSummaryElement().contains('Invoice total');

    cy.getReduxStore().then(store => {
      actions.getSummaryElement().contains(store.invoice.invoiceNumber);
      const amount = formatCurrencyNumber(
        store.invoice.currency,
        store.invoice.invoiceAmount
      );
      actions.getSummaryElement().contains(amount);
      if (store.invoice.isPartiallyPaid) {
        actions.getSummaryElement().contains('Partially paid');
      }
      if (store.invoice.isFullyPaid) {
        actions.getSummaryElement().contains('Fully paid');
      }
      const date = formatDate(store.invoice.invoiceDueDate);
      actions.getSummaryElement().contains(date);
    });
  });
});
