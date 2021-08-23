
describe("Payments test with setup and tear-down", function(){
    describe('testing createCurPayment', function(){

        it('should return null', function(){
            billAmtInput.value = null;
            tipAmtInput.value = null;
            expect(createCurPayment()).nothing();

        });

        it('should return nothing', function(){
            billAmtInput.value = '-1';
            tipAmtInput.value = '20';
            expect(createCurPayment()).nothing();
        });

        it('should contain values in form of object', function(){
            billAmtInput.value = '90';
            tipAmtInput.value = '12';
            expect(createCurPayment()).toBeDefined();
            expect(createCurPayment().billAmt).toEqual(billAmtInput.value);
            expect(createCurPayment().tipPercent).toBeGreaterThan(0);
        });


        afterEach(function(){
            billAmtInput.value = '';
            tipAmtInput.value = '';
        });
    });

    describe('testing appendPaymentTable', function(){
        beforeAll(function(){
            billAmtInput.value = '100';
            tipAmtInput.value = '15';
        })
        it('should throw error with empty input', function(){
            expect( () => appendPaymentTable() ).toThrow();
        });

        it('should append table element with predetermined values', function(){
            let curpay = createCurPayment();
            expect(curpay.billAmt).toBeDefined();
            expect(appendPaymentTable(curpay)).not.toBeDefined();
        });

        it('should append empty table element',function(){
            let curpay = createCurPayment();
            curpay.billAmt = '';
            curpay.tipAmt = '';
            curpay.tipPercent = '';
            expect(curpay.billAmt).toEqual('');     
            expect(appendPaymentTable(curpay)).not.toBeDefined();
        });
        afterAll(function(){
            paymentTbody.innerHTML = '';
        })
    });

    describe('testing updateSummary', function(){
    });

    describe('testing submitPaymentInfo testing', function(){
    });

});