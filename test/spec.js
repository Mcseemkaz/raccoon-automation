const BaseTest = require('../services/base-test');
const LoginPage = require('../resources/page-objects/login-page');
const AdminMainPage = require('../resources/page-objects/admin-main-page');
const ClinicaSpecialistPage = require('../resources/page-objects/clinica-specialist-page');
const SpecialistMainPage = require('../resources/page-objects/specialist-main-page');
const PatientMainPage = require('../resources/page-objects/patient-main-page');
const credentials = require('../resources/credentials.json');
const assert = require('assert');

describe('Smoke Suite', function () {
  this.timeout(10000)
  let app;

  beforeEach(async () => {
    app = await BaseTest.startApp();
    })
 
  afterEach( async () => {
    await BaseTest.stopApp(app);
  })

  it('warm up the application', async () => {
    return await app.client.getWindowCount().then(function (count) {
      assert.equal(count, 1)
    })
  })

  it('#1 Login Page : login as admin', async () => {

    await app.client
              .setValue(LoginPage.loginField, credentials.adminLoginDev)
              .setValue(LoginPage.passwordField, credentials.adminPassDev)
              .click(LoginPage.signInButton)
              .element(AdminMainPage.welcomeHeader)
              .should.eventually.exist;;
     })


  it('#2 Login Page : login as clinica', async () => {

      await app.client          
                .setValue(LoginPage.loginField, credentials.clinicaTestLoginDev)
                .setValue(LoginPage.passwordField, credentials.clinicaTestPassDev)
                .click(LoginPage.buttonIamClinica)
                .click(LoginPage.signInButton)
                .element(ClinicaSpecialistPage.clinicHomeContainerElement)
                .should.eventually.exist;
       })


  it('#3 Login Page : login as specialist', async () => {

        await app.client          
                  .setValue(LoginPage.loginField, credentials.specialistTestLoginDev)
                  .setValue(LoginPage.passwordField, credentials.specialistTestPassDev)
                  .click(LoginPage.buttonIamSpecialist)
                  .click(LoginPage.signInButton)
                  .element(SpecialistMainPage.specialistMainElement)
                  .should.eventually.exist;
         })

  it.only('#4 Login Page : login as patient', async () => {

        await app.client          
              .setValue(LoginPage.loginField, credentials.patientTestLoginDev)
              .setValue(LoginPage.passwordField, credentials.patientTestPassDev)
              .click(LoginPage.buttonIamPatient)
              .click(LoginPage.signInButton)
              .element(PatientMainPage.patientMainElement)
              .should.be.exist;
           })
 
})

