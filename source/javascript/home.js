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

