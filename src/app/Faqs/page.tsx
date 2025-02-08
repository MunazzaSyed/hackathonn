// import React from 'react'


// function page() {
//   return (
//     <>
//       <div>
//         <h1 className="text-center font-bold text-3xl md:text-4xl mt-10 mb-4">
//           Question Look Here
//         </h1>
//         <p className="text-center mb-8 text-gray-600">
//           Here are some common questions about our chair collection. Find the
//           answers below.
//         </p>
//       </div>
//       <div className="grid grid-cols-2 gap-3 space-x-3 ">
//         <div className="1 py-3 bg-slate-300 rounded-lg">
//           Are the chairs adjustable?
//           <p>
//             Yes, many of our chairs come with adjustable height, recline, and
//             armrest settings to ensure maximum comfort and support for different
//             body types.
//           </p>
//         </div>
//         <div className="2 py-3 bg-slate-300 rounded-lg">
//           What materials are used in your chair collection?
//           <p>
//             Our chairs are crafted from high-quality materials such as premium
//             wood, durable metals, and eco-friendly fabrics to offer both
//             elegance and durability.
//           </p>
//         </div>

//         <div className="3 py-3 bg-slate-300 rounded-lg">
//           Do you offer customization for your chairs?
//           <p>
//             Yes, we offer customization options such as fabric choice, color,
//             and additional features to make sure your chair perfectly fits your
//             space and preferences.
//           </p>
//         </div>
//         <div className="4  py-3 bg-slate-300 rounded-lg">
//           How do I maintain my chair?
//           <p>
//             Regularly clean your chair using a soft cloth and mild cleaning
//             solutions. Avoid using harsh chemicals to maintain the appearance
//             and durability of the materials.
//           </p>
//         </div>
//         <div className="5 py-3 bg-slate-300 rounded-lg">
//           What is the warranty for your chairs?
//           <p>
//             Our chairs come with a standard one-year warranty, covering defects
//             in materials and craftsmanship. Additional warranty options are
//             available for certain models.
//           </p>
//         </div>
//         <div className="6 py-3 bg-slate-300 rounded-lg">
//           What types of chairs do you offer?
//           <p>
//             We offer a variety of chairs, including ergonomic office chairs,
//             accent chairs, dining chairs, and recliners, each designed for
//             comfort and style.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default page









import React from "react";

function Page() {
  return (
    <>
      <div className="text-center px-4">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mt-10 mb-4">
          Question Look Here
        </h1>
        <p className="mb-8 text-gray-600 text-sm sm:text-base md:text-lg">
          Here are some common questions about our chair collection. Find the
          answers below.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-8">
        {/* Question Cards */}
        {[
          {
            question: "Are the chairs adjustable?",
            answer:
              "Yes, many of our chairs come with adjustable height, recline, and armrest settings to ensure maximum comfort and support for different body types.",
          },
          {
            question: "What materials are used in your chair collection?",
            answer:
              "Our chairs are crafted from high-quality materials such as premium wood, durable metals, and eco-friendly fabrics to offer both elegance and durability.",
          },
          {
            question: "Do you offer customization for your chairs?",
            answer:
              "Yes, we offer customization options such as fabric choice, color, and additional features to make sure your chair perfectly fits your space and preferences.",
          },
          {
            question: "How do I maintain my chair?",
            answer:
              "Regularly clean your chair using a soft cloth and mild cleaning solutions. Avoid using harsh chemicals to maintain the appearance and durability of the materials.",
          },
          {
            question: "What is the warranty for your chairs?",
            answer:
              "Our chairs come with a standard one-year warranty, covering defects in materials and craftsmanship. Additional warranty options are available for certain models.",
          },
          {
            question: "What types of chairs do you offer?",
            answer:
              "We offer a variety of chairs, including ergonomic office chairs, accent chairs, dining chairs, and recliners, each designed for comfort and style.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-slate-300 p-4 md:p-6 rounded-lg shadow-md"
          >
            <h2 className="text-lg md:text-xl font-semibold">
              {item.question}
            </h2>
            <p className="text-gray-700 text-sm sm:text-base mt-2">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Page;
