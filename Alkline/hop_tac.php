<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hợp tác</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="./theme/css/animate.css">
    <link rel="stylesheet" href="./theme/css/reset.css">
    <link rel="stylesheet" href="./theme/css/swiper-bundle.min.css">
    <link rel="stylesheet" href="./theme/css/style.css">
    <link rel="stylesheet" href="./theme/css/base.css">
</head>
<body>
    <?php @include('header.php'); ?>

    <!-- section slider start -->

     <section class="slider__cooperate">
        <div class="swiper-container slide-banner__cooperate">
            <div class="swiper-wrapper">
                <div class="swiper-slide slider__background-cooperate">
                    <img class="" src="./theme/images/background-slider.png" alt="image-background">
                    <div class="slider__cooperate-text text-center">
                        <h2>Cơ hội kinh doanh</h2>
                        <p>
                            Giúp bạn thống lĩnh thị trường từ sản phẩm có 102 trên thế giới
                        </p>
                        <h1>dược phẩm <br> <span>Kiềm sinh học </span> <br> Độc quyền công nghệ <br> toàn thế giới</h1>
                        <a href="" class="btn btn__background">Liên hệ ngay → </a>
                    </div>
                </div>
            </div>
            <!-- <div class="pagination-banner-cooperate"></div> -->
        </div>
    </section>

    <!-- section introduce start -->
    <section class="introduce">
        <div class="container">
            <div class="introduce__text text-center">
                <h1>giới thiệu về alkaline living</h1>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas pulvinar pellentesque sit odio sed semper fermentum ac erat.</p>
            </div>
            <div class="row introduce__content">
                <div class=" col  introduce__item">
                    <h3>Là sản phẩm Kiềm số 1 trên thế giới</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas pulvinar pellentesque sit odio sed semper fermentum ac erat.</p>
                </div>
                <div class="col introduce__item">
                    <img src="./theme/images/image122-introduce.png" alt="">
                </div>
                <div class="col introduce__item">
                    <h3>2 dòng sản phẩm Kiềm</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas pulvinar pellentesque sit odio sed semper fermentum ac erat.</p>
                </div>
                <div class="col introduce__item">
                    <img src="./theme/images/image122-introduce.png" alt="">
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at morbi neque, sed sit sit sem. At vel magna amet, ridiculus volutpat eget. Bibendum sagittis, tempor velit non suspendisse amet nunc tempor lacus. Nunc massa commodo facilisis duis adipiscing gravida nunc massa lorem. Sed facilisi sed sed fringilla amet.</p>
        </div>
    </section>

    <!-- section cơ chế hợp tácc start -->

    <section class="policy text-center">
        <div class="container">
            <h1>Cơ chế hợp tác</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas pulvinar pellentesque sit odio sed semper fermentum ac erat.</p>
            <div class="swiper-container slide__policy">
                <div class="swiper-wrapper">
                    <div class="swiper-slide slider__background-policy">
                        <div class="policy__content">
                            <img class="logo" src="./theme/images/Logo Amazing Alkaline wwhite-01 3.png" alt="logo img">
                            <h1>Chính sách thưởng doang số năm 2021</h1>
                            <img class="table-policy" src="./theme/images/photo-2021-05-13-10-06-13 1.png" alt="bảng doanh số">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pretium euismod orci etiam. A viverra dolor volutpat proin enim velit sed scelerisque.</p>
                        </div>
                    </div>
                    <div class="swiper-slide slider__background-policy">
                        <div class="policy__content">
                            <img class="logo" src="./theme/images/Logo Amazing Alkaline wwhite-01 3.png" alt="logo img">
                            <h1>Chính sách thưởng doang số năm 2021</h1>
                            <img class="table-policy" src="./theme/images/photo-2021-05-13-10-06-13 1.png" alt="bảng doanh số">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pretium euismod orci etiam. A viverra dolor volutpat proin enim velit sed scelerisque.</p>
                        </div>
                    </div>
                </div>
                <div class="pagination-slide-policy"></div>
            </div>
           
        </div>
    </section>

    <!-- section cơ chế hợp tác ends -->

    <!-- section registration start -->

    <section class="registration">
        <div class="container">
            <div class="row registration__container">
                <div class="col">
                    <div class="registration__text">
                        <h1>Hãy đăng ký với chúng tôi để biết thêm  thông tin chi tiết</h1>
                        <p>Để lại thông tin của bạn dưới đây để nhận ưu đãi từ chúng tôi</p>
                        <form>
                            <input type="text" name="hoten" placeholder="Họ tên*">
                            <input type="number" name="sdt" placeholder="Số điện thoại*">
                            <textarea name="" id="" cols="63" rows="3" placeholder="Gửi lời nhắn"></textarea>
                            <input type="submit" class="btn btn__background registration__btn" value="Đăng ký"></input>
                        </form>
                    </div>
                </div>
                <div class="col">
                    <img src="./theme/images/portrait-doctor 1.png" alt="">
                </div>
            </div>
        </div>
    </section>

    <!-- section registration ends -->
 <!-- section footer start -->

<?php @include('footer.php'); ?>

    <!-- section footer ends -->




    <!-- backup and log-head start -->

    <div id="backtop">
        <i class="fas fa-angle-double-up"></i>
</div>
<div id=container>
    <div class="dog-head">
        <img src="./theme/images/Thongbao.png" alt="">
    </div>
  
    <div class="dog-body">
  
    </div>
  </div>





  <div id="notification">
        <div class="formclosenotification" class="fas fa-bars"></div>

        <div class=" notification__container">
            <div class="container notification__contnent">
                <h1 class="text-center">Đăng kí nhận thông báo</h1>
                <p>để lại thông tin của bạn ở đây để không bỏ lỡ bất kì ưu đãi nào của chúng tôi</p>
                <form action="" method="post" >
                    <input type="text" name="hoten" placeholder="Họ tên *">
                    <input type="number" name="sdt" placeholder="Số điện thoại*">
                    <input type="submit" name="dang_ki" value="Đăng ký" class="btn btn__background notification__button">
                </form>
            </div>
        </div>
    </div>
  <!--  end -->




    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="./theme/js/jquery-3.4.1.min.js"></script>
    <script src="./theme/js/swiper-bundle.min.js"></script>
    <script src="./theme/js/wow.min.js"></script>
    <script src="./theme/js/script.js"></script>
</body>
</html>