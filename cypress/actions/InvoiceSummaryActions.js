export const InvoiceSummaryActions = {
  setRoutes() {
    cy.server();
    cy.route('/icnportal-server/rest/document/*.pdf').as('pdf');
    cy.route('/icnportal-server/rest/document/*/image?pgNo=1').as('pdfPreview');
  },
  setRoutesNoPdfImg(responseStatus = 404) {
    cy.server();
    cy.route('/icnportal-server/rest/document/*.pdf').as('pdf');
    cy.route({
      method: 'GET',
      url: '/icnportal-server/rest/document/*/image?pgNo=1',
      status: responseStatus,
      response: {}
    }).as('pdfPreview');
  },
  waitForPdfAndPdfImage() {
    cy.wait(['@pdf', '@pdfPreview']);
  },
  waitForPdfAndPdfImageRetries() {
    cy.wait(['@pdf', '@pdfPreview', '@pdfPreview', '@pdfPreview']);
  },
  getSummaryElement() {
    return cy.get('.pdf-preview-wrapper > .i-s > .flex-column');
  },
  getPdfPreviewElement() {
    return cy.get('.pdf-preview-thumbnail-wrapper');
  },
  getPdfPreviewShimmer() {
    this.getPdfPreviewElement().within(() => {
      return cy.get('.shimmer');
    });
  },
  getPdfPreviewImage() {
    this.getPdfPreviewElement().within(() => {
      return cy.get('img[alt="PDF Preview"]');
    });
  },
  verifyPdfError() {
    this.getPdfPreviewElement().within(() => {
      cy.get('.error').as('error');
      cy.get('@error').contains('Something went wrong');
      cy.get('@error').contains('button', 'Try again');
    });
  }
};
