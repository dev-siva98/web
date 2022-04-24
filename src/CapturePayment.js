import axios from './axios'

function CapturePayment({ payment, order }) {
    console.log('payment', payment)
    axios({
        method: 'post',
        url: 'capturepayment',
        data: {
            paymentId: payment,
            order: order
        },
        headers: { "Authorization": localStorage.getItem('token') }
    }).then(res => {
        console.log(res)
    })
}

export default CapturePayment