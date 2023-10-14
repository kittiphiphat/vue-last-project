<template>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <div class="container1">
        <!-- Navbar -->
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-3 border-bottom">
          <div class="col-md-2 mb-1 mb-md-0">
            <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
              <i class="fa-solid fa-stethoscope" style="color: #ffffff;"></i>

            </a>
          </div>
  
    
          <div class="col-md-3 text-end" style=" top: 1rem; margin-right: 2rem;">
            <a href="/loginPage"><button  class="btn btn-outline-info link-light me-3" style="padding: 0.3rem;" >เข้าสู่ระบบ</button></a>
          </div>
        </header>
        <!-- Navbar -->

  </div>

<div class="container2">
      <ul class="nav col-12 col-md-auto mb-0 justify-content-center mb-md-0">
        <li><a href="/" class="nav-link px-4 link-dark">หน้าหลัก</a></li> 
        <li><a href="/health" class="nav-link px-4 link-dark">ข้อมูลสุขภาพ</a></li>
        <li><a href="/healthtips" class="nav-link px-4 link-dark">เคล็บลับสุขภาพ</a></li>
        <li><a href="/healtyfood" class="nav-link px-4 link-dark">อาหารเพื่อสุขภาพ</a></li>
        <li><a href="/hospital" class="nav-link px-4 link-dark">โรงพยาบาล</a></li>
      </ul>

</div>

</template>

<script setup>

</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Mitr:wght@300&family=Sriracha&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Mitr:wght@300&family=Sriracha&display=swap');
  *{
    margin: 0;
    padding: 0;

  }
  .fa-solid.fa-stethoscope{
    font-size: 40px;
    margin-top: 2px;
    margin-left: 15px;
    justify-content: center;
    padding: 1rem;
    display: flex;
  }

  .container1{
    background-color:#276a87 ;
    font-family: 'Mitr', sans-serif;
    max-width: 100%;
    font-weight: 400;
    height: 90px;  
    color: #fff;
   
  }
  .container2{
    background: rgba(204, 240, 255, 1);

    font-family: 'Mitr', sans-serif;
    max-width: 100%;
    font-weight: 600;
    font-size: 20px;
  
  }

  .nav-link.px-4.link-dark{
    list-style: none;
    margin: 0 20px;
    transition: 0.8s;

    
  }
  .nav-link.px-4.link-dark:hover{
     transform: scale(1.5);
 
     filter: blur(0.2px);
  }

 
 

</style>
