// const arr = ["a", "b", "c", "d"];
// const myName = "sut pi";

// console.log(_.chunk(arr, 2));

// const m = moment();
// m.subtract(3, "years");
// m.subtract(14, "days");
// console.log(m.format("D MMM Y"));

// axios("https://dummyjson.com/products/1").then((data) =>
//   console.log(data.data)
// );
const ctx = document.getElementById("myChart");
const btn = document.querySelector("button");
// const tt = document.querySelector("#typed")

// new Chart(ctx, {
//   type: "pie",
//   data: {
//     labels: ["a", "b", "c", "d", "e"],
//     datasets: [
//       {
//         label: "weekday",
//         data: [5, 1, 7, 3, 5],
//       },
//       {
//         label: "backend",
//         data: [1, 3, 2, 6, 5],
//       },
//       {
//         label: "okay nasa",
//         data: [5, 5, 7, 3, 5],
//       },
//       {
//         label: "Y axis",
//         data: [5, 1, 7, 3, 5],
//       },
//     ],
//   },
// });
// const run = () => {
//   Swal.fire({
//     title: "Are you sure?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, delete it!",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       const swalWithBootstrapButtons = Swal.mixin({
//         customClass: {
//           confirmButton: "btn btn-success",
//           cancelButton: "btn btn-danger",
//         },
//         buttonsStyling: false,
//       });

//       swalWithBootstrapButtons
//         .fire({
//           title: "Are you sure?",
//           text: "You won't be able to revert this!",
//           icon: "warning",
//           showCancelButton: true,
//           confirmButtonText: "Yes, delete it!",
//           cancelButtonText: "No, cancel!",
//           reverseButtons: true,
//         })
//         .then((result) => {
//           if (result.isConfirmed) {
//             swalWithBootstrapButtons.fire(
//               "Deleted!",
//               "Your file has been deleted.",
//               "success"
//             );
//           } else if (
//             /* Read more about handling dismissals below */
//             result.dismiss === Swal.DismissReason.cancel
//           ) {
//             swalWithBootstrapButtons.fire(
//               "Cancelled",
//               "Your imaginary file is safe :)",
//               "error"
//             );
//           }
//         });
//     } else {
//       Swal.fire("thanks you");
//     }
//   });
// };
// btn.addEventListener("click", run);

// Swal.fire(
//   "San Kyi thar",
//   "Function to display a SweetAlert2 popup, with an object of options, all being optional. See the SweetAlertOptions interface for the list of accepted fields and values",
//   "success"
// );
const tt = new Typed("#typed", {
  strings: ["min ga lar par", "ok bar", "san kyi thar"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 500,
});
