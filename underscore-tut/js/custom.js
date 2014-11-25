var listOfContacts = [
  {
    email: "randy@example.com",
    number: "555-555-5555",
    name: "Randy Davis",
    imageUrl: "img/RandyDavisHeadShotMKS.png",
    address: "123 Some St. Lovely, TX"
  },
  {
    email: "jim@example.com",
    number: "555-555-5678",
    name: "Jim Hensen",
    imageUrl: "img/BUWhitejersey.jpg",
    address: "12032 Other Dr. Buena Vista, CA"
  },
  {
    email: "Art@example.com",
    number: "555-555-1111",
    name: "Art Briles",
    imageUrl: "img/BU_be-the-standard.jpg",
    address: "456 McLane Dr. Waco, TX"
  },
  {
    email: "jill@example.com",
    number: "555-111-5555",
    name: "Jill Day",
    imageUrl: "img/BUWhitejersey.jpg",
    address: "12553 McGregor Ln. Stillwater, OK"
  },
  {
    email: "kristen@example.com",
    number: "555-555-3480",
    name: "Kristen Davis",
    imageUrl: "img/RandyDavisHeadShotMKS.png",
    address: "123 Some St. Lovely, TX"
  },
  {
    email: "sarah@example.com",
    number: "555-550-5325",
    name: "Sarah James",
    imageUrl: "img/BU_be-the-standard.jpg",
    address: "78210 Justin Ln. Dallas, TX"
  },
  {
    email: "mary@example.com",
    number: "555-670-5505",
    name: "Mary Stevens",
    imageUrl: "img/BUWhitejersey.jpg",
    address: "123 Some St. Paris, TX"
  },
  {
    email: "brad@example.com",
    number: "555-505-4565",
    name: "Brad Schumpert",
    imageUrl: "img/RandyDavisHeadShotMKS.png",
    address: "4237 Quinley St. San Antonio, TX"
  }
];

$(document).ready(function() {

  // Kaoru way, works!
  // var templateHtml = $('#contact-template').html();
  // var templateGen = _.template(templateHtml);
  // templateGen(listOfContacts);
  // $(".contacts-list").html(templateGen(listOfContacts));


  // Tut way, works!
  // Get template as a string
  var contactTemplate = _.template($("#contact-template").html());
  var resultingHtml = contactTemplate({contacts : listOfContacts});

  $(".contacts-list").html(resultingHtml);


  $(".pagination").customPaginate({
    itemsToPaginate : ".contact",
    itemsPerPage : 4
  });


});