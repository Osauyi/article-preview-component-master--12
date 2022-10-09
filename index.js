
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

//  document.querySelector('[data-bs-toggle="popover"]').popover({
//       html: true,
//       trigger: 'click',
//       placement: 'top',
//       content: function () { return '<img src="' + document.querySelector(this).data('img') + '" />'; }
//     });


