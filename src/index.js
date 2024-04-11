console.log('hi')
// // index.js
// fetch("http://localhost:3000/ramens")
//     .then((resp) => resp.json())
//     .then((data) => renderRamenMenuArr(data))

// function renderRamenMenuArr(ramenMenuArr) {

//<div id=ramen-menu> all ramen images</div>
//function displayRamens = requests the data from the 
//server to get allRamenObj
//forEach <div id= #ramen-menu>
//<img>eachRamen</div>
// const ul = document.querySelector('#ramen-menu');
// const displayRamens = () => {
// ramenMenuArr.forEach((ramenObj) => {
// const li = document.createElement('li')
// const img = document.createElement('img')
//    img.src = ramenObj.image
// li.appendChild(img)
// console.log(img)
// }
// )};
// };

// fetch("http://localhost:3000/ramens")
//     .then((resp) => resp.json())
//     .then((data) => renderRamenArr(data))

//     console.log(data)
    
// function renderRamenArr(objStoringUrls) {
//    const ramenArr = objStoringUrls.image

//    const displayRamens = () => {
//     const imgContainer = document.querySelector('#ramen-menu')

//     ramenArr.forEach((eachRamen) => {
//         const img = document.createElement('img')
//         img.src = eachRamen
//         imgContainer.appendChild(img)
//     })
// }
// }
const objStoringUrls = "http://localhost:3000/ramens"
fetch(objStoringUrls)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)

    for (const  ramenMenuArr of objStoringUrls.image) {
      const displayRamens = () => {
        const imgContainer = document.querySelector('#ramen-menu')
    
        ramenMenuArr.forEach((ramenObj) => {
          const li = document.createElement('li')
            const img = document.createElement('img')
            img.src = ramenObj.image
            li.appendChild(img)
          //  ramenMenuArr.forEach((ramenObj) => {
             
            
              //    img.src = ramenObj.image
              // li.appendChild(img)
        })
    }
  }
})

    //   const listItem = document.createElement("li");
    //   listItem.appendChild(document.createElement("strong")).textContent =
    //     product.Name;
    //   listItem.append(` can be found in ${product.Location}. Cost: `);
    //   listItem.appendChild(document.createElement("strong")).textContent =
    //     `£${product.Price}`;
    //   myList.appendChild(listItem);
    // }
  // })
  // .catch(console.error);
// console.log(data)

// const ramenArr = "http://localhost:3000/ramens";

// fetch(ramenArr)
// .then((resp) => resp.json())
// .then((data) => renderRamen(data))
//     console.log(data);
// .then((data) => renderRamenMenuArr(data))
  
//   function renderRamen(objStoringRamen) {
//     RamenObj = objStoringRamen.image
//     breedArr = Object.keys(breedObj)
// const displayRamens = () => {
//   const ul = document.querySelector('#ramen-menu');
// ramenMenuArr.forEach((ramenObj) => {
// const li = document.createElement('li')
// const img = document.createElement('img')
//    img.src = ramenObj.image
// li.appendChild(img)
// }

// )}

// //   // //  // displayRamens > should fetch all ramens and display them as <img> inside #ramen-menu
// //   // //   // Add code   that requests the data from the server to get all the ramen objects.
//   const ul = document.getElementById('ramen-menu');
  // const displayRamens = () => {
//   ramenArr.forEach((ramenObj) => {
//     const li = document.createElement('li')
// const img = document.createElement('img')
//    img.src = ramenObj.image
// li.appendChild(img)
// })
// console.log(img)
// console.log(displayRamens)
//   }

// //  new Promise(resolve => setTimeout(resolve, 0));
  
// //   const originalUrls = testResponseData.map((ramen) => ramen.ramenImages);
  
// //     expect(ramenImages.length).toEqual(testResponseData.length );                                 
// //    expect(urls).toEqual(originalUrls);
// //         }


  
// // // // Callbacks
const handleClick = (ramen) => {
// // //   // Add code  handleClick > should fire on a click on every img inside #ramen-menu
const img = ramenImages[0];

 
      fireEvent.click(img);//add DOM

      expect(handleClickSpy).toHaveBeenCalled();

    const detailImg = document.querySelector("#ramen-detail > .detail-image");

img.appendChild(click)
};

const addSubmitListener = () => {
// // // //   // Add code
// // // //   //handleSubmit > should add a new slider image when the submit button is clicked
//  const ramenMenuDivAfter = document.querySelectorAll('#ramen-menu img');
//         expect(ramenMenuDivAfter.length).toBe(ramenMenuDivBefore.length + 1);
                                        
//         expect(ramenMenuDivAfter[ramenMenuDivBefore.length].src).toBe(newRamen.image);
//    };
const submitButton = document.getElementById('submit-button');
    210| 
    211|         main(ramenForm)
    212| 
    213|         ramenFormName.value = newRamen.name;
it  (".mainBanner").slick({
  arrows: false    
});
( '.sidebar').on( 'click', '.switch', function(e) {
  e.preventDefault();
  var button = (this).attr("data-attr");
  var slide = (".mainBanner .slide");
    $(slide).each(function() {
      ramenMenuArr.push($(this).attr("data-attr"));
  });
});
//   cons, async () => {
  const ramenForm = document.getElementById('new-ramen');
     addSubmitListener(ramenForm)
      
      const newRamen = {
        name: 'Labb',
 ramenMenuDivAfter = document.querySelectorAll('#ramen-menu img')
      }
    }
//       const img = ramenMenuDivAfter[ramenMenuDivBefore.length];
//       img.addEventListener('click', (event) => {
//          handleClick(newRamen, event);
//        });
//        it('should add a new slider image when the submit button is clicked', async () => {
//         const ramenForm = document.getElementById('new-ramen');
//         addSubmitListener(ramenForm)//not function
//         fireEvent.click(img)
      


// // const form = document.querySelector('.add-toy-form')

// // form.addEventListener('submit', (e) => handleAddNewToy(e))

// // function handleAddNewToy(e) {
// //   e.preventDefault()
  
// //   const newRamenObj = {
// //     name : e.target.name.value,
// //     image : e.target.image.value,
// //     likes : 0,
// //     id : 0
// //   }

// //   renderRamens([newRamenObj])

// // }

document.addEventListener("DOMContentLoaded", main) {};

const main = () => {
  return function(displayRamens,addSubmitListener)
  // Invoke displayRamens here
  // Invoke addSubmitListener here
}
// // main()

// // // // Export functions for testing
// // // // export {
// // // //   displayRamens,
// // // //   addSubmitListener,
// // // //   handleClick,
// // // //   main,
// // // // };
// // // /*
// // document.addEventListener("DOMContentLoaded", main){};