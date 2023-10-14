<template>
  <div class="container" style="max-width: 100%;">
  <footer class="row row-cols-1  row-cols-sm-2 row-cols-md-6 py-5 my-5" >
    <div class="col mb-3" style="padding-left: 2rem;" >
      <a href="#" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
      </a>
      <p class="text-body-info" style="">Hospitel</p>
      <p class="text-body-light" >เราจะช่วยคุณในด้านสุขภาพต่างๆ</p>
    </div>

    <div class="col mb-3">

    </div>

    <div class="col mb-3" style="margin-top: 2rem;">
      <h5 class="mb-4">ข้อมูลสุขภาพ</h5>
      <ul class="nav flex-column " >
        <li class="nav-item mb-3"><a href="#" class="nav-link p-0 text-body-light">โรคและการรักษา</a></li>
        <li class="nav-item mb-3"><a href="#" class="nav-link p-0 text-body-light">โรคที่มักพบบ่อย</a></li>
        <li class="nav-item mb-3"><a href="#" class="nav-link p-0 text-body-light">การป้องกันโรค</a></li>
      </ul>
    </div>

    <div class="col mb-3" style="margin-top: 2rem;">
      <h5 class="mb-4">เคล็ดลับสุขภาพ</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-3"><a href="#" class="nav-link p-0 text-body-light">การนอนหลับที่เพียงพอ</a></li>
        <li class="nav-item mb-3"><a href="#" class="nav-link p-0 text-body-light">การบริโภคอาหารที่ดี</a></li>
        <li class="nav-item mb-3"><a href="#" class="nav-link p-0 text-body-light">การจัดการความเครียด</a></li>
      </ul>
    </div>

    <div class="col mb-3" style="margin-top: 2rem;">
      <h5 class="mb-4">อาหารเพื่อสุขภาพ</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-3"><a href="#" class="nav-link p-0 text-body-light">อาหารที่ควรรับประทาน</a></li>
        <li class="nav-item mb-3"><a href="#" class="nav-link p-0 text-body-light">อาหารที่ควรหลีกเลี่ยง</a></li>
        <li class="nav-item mb-3"><a href="#" class="nav-link p-0 text-body-light">เมนูอาหารสุขภาพ</a></li>
      </ul>
    </div>

    <div class="col mb-3" style="margin-top: 2rem;">
      <h5 class="mb-4">โรงพยาบาล</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-3"><a href="#" class="nav-link p-0 text-body-light">ทำประกัน</a></li>
        <li class="nav-item mb-3"><a href="#" class="nav-link p-0 text-body-light">ค่าใช้จ่ายโรงพยาบาล</a></li>
        <li class="nav-item mb-3"><a href="#" class="nav-link p-0 text-body-light">ตรวจสุขภาพประจำปี</a></li>
      </ul>
    </div>
  </footer>
</div>

<div class="b-example-divider"></div>
</template>

<style scoped>
.container{
  background-color:  rgba(26, 46, 55, 1);
  color: #fff;
  position: absolute;
  

}

h5 {
  font-family: 'Mitr', sans-serif;
  font-weight: 400;
  
  font-size: 24px;
  
}

a {
  font-family: 'Mitr', sans-serif;
  font-weight: 400;
  font-size: 16px;

}
.text-body-info{
  font-size: 40.7px;
  text-align: center;
  color: rgba(66, 180, 238, 1);
  font-family: 'Mitr', sans-serif;
  font-weight: 700;
}
.text-body-light{
  font-size: 21.7px;
  color:rgba(255, 255, 255, 1);
  

  font-family: 'Mitr', sans-serif;
  font-weight: 400;
}
p.text-body-light{
  text-align: center;
  margin-left: 1rem;
}


</style>