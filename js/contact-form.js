/*
--------------------------------
Ajax Contact Form
--------------------------------
+ https://github.com/pinceladasdaweb/Ajax-Contact-Form
+ A Simple Ajax Contact Form developed in PHP with HTML5 Form validation.
+ Has a fallback in jQuery for browsers that do not support HTML5 form validation.
+ version 1.0.1
+ Copyright 2014 Pedro Rogerio
+ Licensed under the MIT license
+ https://github.com/pinceladasdaweb/Ajax-Contact-Form
*/

window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
  
    var form = document.getElementById("contact-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = `
      <div class='alert alert-success' role='alert'>
         Thanks for your submission!
       </div>
      `;
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = `<div class="alert alert-danger" role="alert">
               Oops! There was a problem submitting your form
      
       </div>
      
      `;
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  

//     var form = document.getElementById("contact-form");
    
//     async function handleSubmit(event) {
//       event.preventDefault();
//       var status = document.getElementById("status");
//       var data = new FormData(event.target);
//       fetch(event.target.action, {
//         method: form.method,
//         body: data,
//         headers: {
//             'Accept': 'application/json'
//         }
//       }).then(response => {
//         status.innerHTML =`
//         <div class='alert alert-success' role='alert'>
//         Thanks for your submission!
//       </div>
//         `;
//         form.reset()
//       }).catch(error => {
//         status.innerHTML = `<div class="alert alert-danger" role="alert">
//         Oops! There was a problem submitting your form

// </div>
// `
//       });
//     }
//     form.addEventListener("submit", handleSubmit)


// (function ($, window, document, undefined) {
//     'use strict';

//     var $form = $('#contact-form');

//     $form.submit(function (e) {
//         // remove the error class
//         $('.form-group').removeClass('has-error');
//         $('.help-block').remove();

//         // get the form data
//         var formData = {
//             'name' : $('input[name="form-name"]').val(),
//             'email' : $('input[name="form-email"]').val(),
//             'subject' : $('input[name="form-subject"]').val(),
//             'message' : $('textarea[name="form-message"]').val()
//         };

//         // process the form
//         $.ajax({
//             type : 'POST',
//             url  : 'contact-form.php',
//             data : formData,
//             dataType : 'json',
//             encode : true
//         }).done(function (data) {
//             // handle errors
//             if (!data.success) {
//                 if (data.errors.name) {
//                     $('#name-field').addClass('has-error');
//                     $('#name-field').find('.col-lg-10').append('<span class="help-block">' + data.errors.name + '</span>');
//                 }

//                 if (data.errors.email) {
//                     $('#email-field').addClass('has-error');
//                     $('#email-field').find('.col-lg-10').append('<span class="help-block">' + data.errors.email + '</span>');
//                 }

//                 if (data.errors.subject) {
//                     $('#subject-field').addClass('has-error');
//                     $('#subject-field').find('.col-lg-10').append('<span class="help-block">' + data.errors.subject + '</span>');
//                 }

//                 if (data.errors.message) {
//                     $('#message-field').addClass('has-error');
//                     $('#message-field').find('.col-lg-10').append('<span class="help-block">' + data.errors.message + '</span>');
//                 }
//             } else {
//                 // display success message
//                 $form.html('<div class="alert alert-success">' + data.message + '</div>');
//             }
//         }).fail(function (data) {
//             // for debug
//             console.log(data)
//         });

//         e.preventDefault();
//     });
// }(jQuery, window, document));