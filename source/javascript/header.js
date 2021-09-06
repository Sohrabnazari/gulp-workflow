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
        method: 'Post',
        dataType: "json"
    }).done(function(output) {
        $("#cart-items").text(output.cartItemsCount);
        $("#cartPreviewHolder").html(output.cartPreview);
    });
}

