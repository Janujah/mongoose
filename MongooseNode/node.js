const mongoose1 = require("mongoose");
// const model1 = require("./Collections/User.js");
// const model2 = require("./Collections/Payment.js");
const model3 = require("./Collections/Product.js");
// const model4 = require("./Collections/Course.js");

mongoose1.connect("mongodb+srv://JJ:janu1216@cluster0.sri8blx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("you're connected")
    })
    .catch((error)=>{
        console.log("Error Didected",error)
    });
//     const user1 = new model1({
//         UserID: "3kjhhkwsadvdvfdvbhiu3AB",
//         Name:"Janujah",
//         Age:21,
//         Course: "FWD",
//         Email:"janusasvdcivsiusdvhrga@gmail.com",
//         District: "Vavuniya"
//     })
//     user1.save()
//     .then(() =>{
//         console.log("user saved")
//     })
//     .catch((erorr) =>{
//         console.log("erorr",erorr)
//     });
//     const payment1 = new model2({
//         PaymentID: "54jsdasvvwegihjkhig5L",
//         PaymentMethod:"Cash",
//         Fee:1000
//     })
//     payment1.save()
//     .then(() =>{
//         console.log("Payment Method selected")
//     })
//     .catch((erorr) =>{
//         console.log("erorr",erorr)
//     });

//     const product = new model3({
//         ProductID: "s23sdvasffweuhkiuhiJ",
//         ProductName:"Cash",
//         ProductCat : "Glass item",
//         ProductPrice: 2000,
//         ProductQuantity: 9
//     })
//     product.save()
//     .then(() =>{
//         console.log("Product saved")
//     })
//     .catch((erorr) =>{
//         console.log("erorr",erorr)
//     });

//     const course = new model4({
//         CourseID: "s23rsdvsdefwguhkiuhiJ",
//         CourseName:"Cash",
//         CourseFee : 22222,
//         CourseDuration: "6 months",
//     })
//     course.save()
//     .then(() =>{
//         console.log("Course Regitered")
//     })
//     .catch((erorr) =>{
//         console.log("erorr",erorr)
//     });


    
    async function fetchAllProducts() {
        try {
          const products = await model3.find({});
          console.log(products);
        } catch {
          console.error('Error fetching products');
        }
      }
      
    fetchAllProducts();
      



    // const products = model3.find({});
    // console.log(products);

    

