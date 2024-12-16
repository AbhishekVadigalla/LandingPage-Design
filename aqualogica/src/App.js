import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
function App() {
  return (
    <div className='mb-5'>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-8'>
            <h3>Aqualogica</h3>
          </div>
          <div style={{display:'flex',justifyContent:"center",alignItems:'center'}} className='col-4'>
            <h5 style={{fontSize:'18px'}}>Go to website</h5>
            <h5 style={{fontSize:'18px',marginLeft:'25px'}}>Submit a Query</h5>
          </div>
        </div>
      </div>
      <div style={{backgroundImage:'url(/water2.webp)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        <div style={{marginTop:'80px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div style={{marginTop:'50px'}} className='text-center'>
            <h2> Welcome! Search, Find and Solve</h2>
            <h2>Effortlessly</h2>
          </div>
        </div>
        <div style={{marginTop:'40px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <input style={{width:'500px',borderColor:'blue',borderWidth:'2px',borderRadius:'20px',padding:'8px 25px',marginBottom:'40px'}} placeholder='Search'  className='form-control'/>
        </div>
      </div>
      <div className='container mt-5 text-center'>
        <div className='row'>
          <div  className='col-4 mt-5'>
            <div class="card" style={{height:'150px'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} class="card-body">
                 <h5>Track Order</h5>
                </div>
            </div>
          </div>
          <div className='col-4 mt-5'>
            <div class="card" style={{height:'150px',padding:'5px 10px'}}>
                <div class="card-body">
                 <h5>Modify Order</h5>
                 <h5>(Edit Address,Update Contact Number,Update Payment Mode)</h5>
                </div>
            </div>
          </div>
          <div className='col-4 mt-5'>
            <div class="card" style={{height:'150px'}}>
                <div class="card-body">
                 <h5>Delivery related concern</h5>
                 <h5>(Delivery not attempted,Incorrect order status)</h5>
                </div>
            </div>
          </div>
          <div className='col-4  mt-5'>
            <div class="card" >
                <div class="card-body">
                 <h5>Cancel Order</h5>
                </div>
            </div>
          </div>
          <div className='col-4 mt-5'>
            <div class="card" >
                <div class="card-body">
                 <h5>Payment Related</h5>
                </div>
            </div>
          </div>
          <div className='col-4 mt-5'>
            <div class="card">
                <div class="card-body">
                 <h5>Refund/Cashback related</h5>
                </div>
            </div>
          </div>
          <div className='col-4 mt-5'>
            <div class="card" style={{height:'140px'}}>
                <div class="card-body">
                 <h5>Delivery Order issues</h5>
                 <h5>Received Defected/Damaged/Missing Products</h5>
                </div>
            </div>
          </div>
          <div className='col-4 mt-5'>
            <div  class="card" style={{height:'140px'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} class="card-body">
                 <h5>Return Order</h5>
                </div>
            </div>
          </div>
          <div className='col-4 mt-5'>
            <div class="card" style={{height:'140px'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} class="card-body">
                 <h5>More Help Topics</h5>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
