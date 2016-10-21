//addListItem("product-list", {name: "cool product"})

onNewListItem("product-list", function(product) {
  console.log(product.picture)
  var nameHeader = $("<h1 class='product-name'>" + product.name + "</h1>")
  var image = $("<img class='product-image'>").attr("src", "https://cbswingbowl2.files.wordpress.com/2012/01/gentleman-jerry-1.jpg?w=709")  

  $(".product-list-container").append(nameHeader, image)
})