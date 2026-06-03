// RFQ Modal + Conversion Enhancements

function openRFQ(product){
  const modal=document.getElementById('rfqModal');
  if(modal) modal.style.display='block';

  const field=document.getElementById('rfqProduct');
  if(field && product){
    field.value=product;
  }
}

function closeRFQ(){
  const modal=document.getElementById('rfqModal');
  if(modal) modal.style.display='none';
}

// auto popup after delay
window.onload=function(){
  setTimeout(()=>{
    const modal=document.getElementById('rfqModal');
    if(modal){
      modal.style.display='block';
    }
  },8000);
}

// click outside close
document.addEventListener('click',function(e){
  const modal=document.getElementById('rfqModal');
  if(modal && e.target===modal){
    closeRFQ();
  }
});