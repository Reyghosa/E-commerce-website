


const form = document.getElementById('payform');
form.addEventListener('submit',payNow );

const payNow = (e) => {
    e.preventDefault();

    flutterwaveCheckout({
        public_key:  'FLWPUBK_TEST-17d61118dad1cc2518d8235b90003f78-X',
        tx_ref: 'pr_'+Math.floor((Math.random()*10000000000000000000000)+1),
        amount: document.getElementById('amount').value,
        currency: 'NGN, USD',
        customer: {
            email: document.getElementById('email').value,
            phonenumber: document.getElementById('phoneNumber').value,
            name: document.getElementById('name').value,
        },
        callback:function(data){
            const reference = data.tx_ref;
            alert('Payment was successfully completed' + reference);
        },

        customizations: {
            'title': 'Something',
            'description': 'App Test',
        }
    });
}