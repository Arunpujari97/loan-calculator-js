// document.getElementById('loan-form').addEventListener('submit',function(e){
//      document.getElementById('results').style.display='none';
//         document.getElementById('loading').style.display='block';
//     setTimeout(claculate,2000);
//     e.preventDefault();
// });
document.getElementById('loan-form').addEventListener('submit',function(e){

    const amount=document.getElementById('loan-ammount').value;
    const interest=document.getElementById('interest').value;
    const years=document.getElementById('years').value;

    if(amount === '' || interest === '' || years === ''){
        showAlert('Please enter all values');
        e.preventDefault();
        return;
    }

    document.getElementById('results').style.display='none';
    document.getElementById('loading').style.display='block';

    setTimeout(claculate,2000);

    e.preventDefault();
});
function claculate(e){
    const ammount=document.getElementById('loan-ammount');
    const interst=document.getElementById('interest');
    const years=document.getElementById('years');
    const maonthly_payment=document.getElementById('mountly-payment');
    const total_ammount=document.getElementById('total-ammount');
    const total_intrest=document.getElementById('total-intrest');

    const principal=parseFloat(ammount.value);
    const claculatedintrest=parseFloat(interst.value)/100/12;
    const claculatedpayment=parseFloat(years.value) * 12;
    const x=Math.pow(1+ claculatedintrest,claculatedpayment)
    const mountly=(principal*x*claculatedintrest)/(x-1);

    if(isFinite(mountly)){
        maonthly_payment.value=mountly.toFixed(2);
        total_ammount.value=(mountly*claculatedpayment).toFixed(2);
        total_intrest.value=(mountly*claculatedpayment-principal).toFixed(2);

        document.getElementById('results').style.display='block';
        document.getElementById('loading').style.display='none';
    }else{
        showAlert('please enter the value');
    }
}
function showAlert(error){
    const errordiv=document.createElement('div')
    errordiv.className='alert alert-danger';
    errordiv.appendChild(document.createTextNode(error))
    const card=document.querySelector('.card');
    const heading=document.querySelector('.heading');
    card.insertBefore(errordiv,heading);
    setTimeout(function(){
       document.querySelector('.alert').remove(); 
    },1000);
    
}
document.getElementById('clear-btn').addEventListener('click', function(){

    // clear input fields
    document.getElementById('loan-ammount').value='';
    document.getElementById('interest').value='';
    document.getElementById('years').value='';

    // hide results
    document.getElementById('results').style.display='none';

});
