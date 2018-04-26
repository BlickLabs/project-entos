$('form[name="contact-entos"]').validate({
  name: 'required',
  email: 'required',
  messages: {
   name: "Please, enter your name",
   email: "Please, enter a email.",
  },
  submitHandler: function(form) {
   var data = $('form[name="contact-entos"]').serialize();
   console.log(data);
   $.ajax({
     url: 'http://integrations.blick.mx/entos/contact/',
     method: 'POST',
     data: data
   }).done(function(data) {
     if (parseInt(data) === 1) {
       alertify.logPosition("bottom right");
       alertify.success("Email sent. Thank you for contacting us!.");
       $('form[name="contact-entos"]')[0].reset();
     }
   });
  },
  invalidHandler: function(event, validator) {
   var errors = validator.numberOfInvalids();
   alertify.logPosition("bottom right");
   alertify.error("Verify your information. You have " + errors + " errors.");
  }
});
