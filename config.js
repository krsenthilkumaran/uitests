exports.config = {

    directConnect : true,
    framework: 'jasmine2',

 //   seleniumAddress: 'http://localhost:4444/wd/hub',
 // seleniumSessionId: 'b57ea1a0f2dea00a7569bd32314c65ea',

    capabilities: {
        browserName: 'chrome',
 //       acceptInsecureCerts: true,

/*                chromeOptions: {
                    args: [ "--headless","--disable-extensions", "--incognito","--window-size=1366,768" ]
                },  
			

          {
                browserName: 'firefox',
                    firefoxOptions: {
                args: ['-headless']
            },
                'moz:firefoxOptions': {
                args: ['-headless']
            }
            }   */



            },



    suites : {
        Masters: [
            'Specs/Login.js',
            'Specs/Master_to_Draft.js',
            'Specs/Master_Channel.js',
            'Specs/Master_Currency.js',
            'Specs/Master_Customer_Emp_Status.js',
            'Specs/Master_Customer_Segment.js',
            'Specs/Master_Country.js',
            'Specs/Master_State.js',
            'Specs/Master_Region.js',
            'Specs/Master_Merchant_Cat.js',
            'Specs/Master_Merchant.js',
            'Specs/Master_Exception_Reason.js',
            'Specs/Master_Cohort_cat.js',
            'Specs/Master_Customer_Cohort.js',
            'Specs/Master_Trans_Code.js',
            'Specs/Master_Month_Days.js',
            'Specs/Master_Fee_code.js'

        ],

 /*       Products: [

            'Specs/Products.js',
            'Specs/Workflow.js',
            'Specs/Checker-Login_Approval.js'


        ]   */
    },
    allScriptsTimeout: 1200000,
    getPageTimeout: 500000,



// Below code for Report generations

    onPrepare: function () {

        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({

            allureReport: {
                resultsDir: 'allure-results'
            }
        }));

        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
    },

    jasmineNodeOpts:
        {defaultTimeoutInterval: 900000}

};