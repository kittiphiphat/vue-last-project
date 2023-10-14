<script>
export default {
  name: 'LoginPage',
  metaInfo: {
    title: 'login - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'login - exported project',
      },
    ],
  },
}
</script>


<template>

<section class="vh-100" style="background: linear-gradient(180deg,rgba(34, 90, 115, 1), rgba(128, 201, 232, 1)); ">
  <div class="container py-2 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style="border-radius: 1rem;">
          <div class="row g-0">
            <div class="col-md-5 col-lg-5 d-none d-md-block">
              <img src="https://cdn.discordapp.com/attachments/1006370035457064990/1161306067024740414/pexels-antoni-shkraba-5214958.jpg?ex=6537d18e&is=65255c8e&hm=411beea85fd6d2a5c8c061cfbabcaf4c3ce514f8f903895e74e9bf21047ca8a1&"
                alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem; width: 100%; " />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form>

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <!-- <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i> -->
                    <span class="h1 fw-bold mb-0">เข้าสู่ระบบ</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign into your account</h5>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example17" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example27" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example27">Password</label>
                  </div>

                  <div class="pt-1 mb-4">
                    <router-link :to ="'/'"><button class="btn btn-dark btn-lg btn-block" type="button">เข้าสู่ระบบ</button></router-link>
                  </div>

                  
                  <!-- <p class="mb-5 pb-lg-2" style="color: #393f81;">ไม่มีบัญชี? <a href="/registerPage"
                      style="color: #393f81;">ลงทะเบียนตรงนี้</a></p> -->

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


</template>



<style scoped>


</style>


