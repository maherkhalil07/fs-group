$(".img-item").click(function () {
    let imgSrc = $(this).attr("src");
    $("#main-img").attr("src", imgSrc);
})