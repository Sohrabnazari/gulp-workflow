String.prototype.replaceAll = function(find,replace,str){
    return str.replace(find , replace);
};

$ = require( 'jquery' );

$(function(){
    refreshCartPreview();

    $(".cart").on('click',function(){
        $("#cartPreviewHolder").toggle();
    });
});


function refreshCartPreview(){
    $.ajax({
        url: "/shop/product/refreshCartPreview",
        method: 'POST',
        dataType: "json"
    }).done(function(output) {
        $("#cart-items").text(output.cartItemsCount);
        $("#cartPreviewHolder").html(output.cartPreview);
    });
}


$ = require( 'jquery' );


$(function(){
    $("#displayAsList").on('click',function(){
        $('#viewType').val('list');
        reloadData();
    });

    $("#displayAsGrid").on('click',function(){
        $('#viewType').val('grid');
        reloadData();
    });

    $("#sortType").on('change',function(){
        reloadData();
    });

    $("#keyword").on('keyup',function(){
        reloadData();
    });

    reloadData();

});



function addOrder(productId){
    $.ajax({
        url: "/shop/product/addToCart/" + productId,
        method: 'POST',
        dataType: "json"
    }).done(function(output) {
        $("#cart-items").text(output.cartItemsCount);
        $("#cartPreviewHolder").html(output.cartPreview);
    });
    refreshCartPreview();
}


function removeOrder(productId){
    $.ajax({
        url: "/shop/product/removeFromCart/" + productId,
        method: 'POST',
        dataType: "json"
    }).done(function(output) {
        $("#cart-items").text(output.cartItemsCount);
        $("#cartPreviewHolder").html(output.cartPreview);
    });
    refreshCartPreview();
}


function reloadData(pageIndex){
    pageIndex = pageIndex || 1;
    var sortType = $("#sortType").val();
    var keyword = $("#keyword").val();
    var viewType = $("#viewType").val();
    var filter = $("#filter").val();

    $.ajax({
        url: "/shop/product/search/" + pageIndex,
        method: 'post',
        data: {
            sortType: sortType,
            keyword: keyword,
            viewType: viewType,
            filter: filter
        }}).done(function(output) {
            $("#products").empty();
            $("#products").append(output);
    });
}


var fill;

(fill = function(item) {
  return $('.tagline').append("" + item);
})('The most creative minds in Art');

fill();

$ = require( 'jquery' );


// Smooth Scrolling With Id Example : #header

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.href);
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 6000);
    }
});



$ = require( 'jquery' );

$(document).ready(function(){
    $('#img2').hide();
    $('#img3').hide();

    setInterval(function(){
        $('#div-slider-container :first-child').fadeOut(2000).next('img').fadeIn().end().appendTo('#div-slider-container');
    },6000);

    $('#next').click(function(){
        $('#div-slider-container :first-child').hide().next('img').show().end().appendTo('#div-slider-container');
    });

    $('#prev').click(function(){
        $('#div-slider-container :last-child').hide().prev('img').show().end().prependTo('#div-slider-container');
    });

    $("img").on('click',function(){
      //  $("img").css("background-color" , "white");
       // $('#div-slider-container :last-child').hide().prev('img').show().end().prependTo('#div-slider-container');
    });

});
String.prototype.replaceAll = function(find,replace,str){
    return str.replace(find , replace);
};

$ = require( 'jquery' );

$(function(){
    refreshCartPreview();

    $(".cart").on('click',function(){
        $("#cartPreviewHolder").toggle();
    });
});


function refreshCartPreview(){
    $.ajax({
        url: "/shop/product/refreshCartPreview",
        method: 'POST',
        dataType: "json"
    }).done(function(output) {
        $("#cart-items").text(output.cartItemsCount);
        $("#cartPreviewHolder").html(output.cartPreview);
    });
}


$ = require( 'jquery' );


$(function(){
    $("#displayAsList").on('click',function(){
        $('#viewType').val('list');
        reloadData();
    });

    $("#displayAsGrid").on('click',function(){
        $('#viewType').val('grid');
        reloadData();
    });

    $("#sortType").on('change',function(){
        reloadData();
    });

    $("#keyword").on('keyup',function(){
        reloadData();
    });

    reloadData();

});



function addOrder(productId){
    $.ajax({
        url: "/shop/product/addToCart/" + productId,
        method: 'POST',
        dataType: "json"
    }).done(function(output) {
        $("#cart-items").text(output.cartItemsCount);
        $("#cartPreviewHolder").html(output.cartPreview);
    });
    refreshCartPreview();
}


function removeOrder(productId){
    $.ajax({
        url: "/shop/product/removeFromCart/" + productId,
        method: 'POST',
        dataType: "json"
    }).done(function(output) {
        $("#cart-items").text(output.cartItemsCount);
        $("#cartPreviewHolder").html(output.cartPreview);
    });
    refreshCartPreview();
}


function reloadData(pageIndex){
    pageIndex = pageIndex || 1;
    var sortType = $("#sortType").val();
    var keyword = $("#keyword").val();
    var viewType = $("#viewType").val();
    var filter = $("#filter").val();

    $.ajax({
        url: "/shop/product/search/" + pageIndex,
        method: 'post',
        data: {
            sortType: sortType,
            keyword: keyword,
            viewType: viewType,
            filter: filter
        }}).done(function(output) {
            $("#products").empty();
            $("#products").append(output);
    });
}


var fill;

(fill = function(item) {
  return $('.tagline').append("" + item);
})('The most creative minds in Art');

fill;

$ = require( 'jquery' );


// Smooth Scrolling With Id Example : #header

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.href);
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 6000);
    }
});



$ = require( 'jquery' );

$(document).ready(function(){
    $('#img2').hide();
    $('#img3').hide();

    setInterval(function(){
        $('#div-slider-container :first-child').fadeOut(2000).next('img').fadeIn().end().appendTo('#div-slider-container');
    },6000);

    $('#next').click(function(){
        $('#div-slider-container :first-child').hide().next('img').show().end().appendTo('#div-slider-container');
    });

    $('#prev').click(function(){
        $('#div-slider-container :last-child').hide().prev('img').show().end().prependTo('#div-slider-container');
    });

    $("img").on('click',function(){
      //  $("img").css("background-color" , "white");
       // $('#div-slider-container :last-child').hide().prev('img').show().end().prependTo('#div-slider-container');
    });

});