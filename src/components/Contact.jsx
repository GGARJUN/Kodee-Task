import React from "react";

const Contact = () => {
  return (
    <>
      <div className="relative  min-h-screen ">
        <div
          className="absolute"
          style={{ backgroundColor: "rgba(47, 24, 147, 1)" }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/801b/8400/03ba21507c4e4e0df1ee626da6fc2a65?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ihBi6trOiIAvftN5QakpzTi9uUEu~OL1wS9C5k2aPTwC~4mQfQ6nOOx2Z8SwuFEZ0ZEJ5OHRLaXg~ZdAmCCa0GEpcM1q4WvqCCENSbbGqT4xGJiBzrhYIl0q3vrN0Md~kGRaz7yzVYxfTJQ9ZTGxAk1mGSvzTaADO4EqeTXgN~LbvNHrltV2j3HwWciRrrXxlGCwieMZ3vGwifavvDDzadP-fQdn0OlXRDx-wXXKeLREAK9S6C8HpP8GB110a0KT4os7j8xumgvDOCNZsHNNBB30vZfjeh6wbdhQUqMS8qYvkak9WKY-i3-IKEfHfkLYoqsUlc-c4XI8i0WAf-fVpg__"
            alt=""
            className="opacity-50 object-cover h-[605px]  w-[1400px]"
          />
        </div>
        <div className="relative h-[208px] w-[410px] top-[150px] left-[215px] text-white">
          <h1 className="text-2xl font-bold">Let’s Keep in Touch</h1>
          <p className="mt-2 text-gray-300 ">
            We have created a new product that will help designers, developers
            and companies create websites for their startups quickly and easily.
          </p>
        </div>
        <div className="relative h-[218px] w-[283.5px] top-[111.2px] left-[215.5px] text-white">
          <div className="flex items-center gap-5">
            <img src="/icon/p.png" alt="" />
            <h1 className="text-lg font-medium">+1 555 505 5050</h1>
          </div>
          <div className="flex items-center gap-5 mt-7">
            <img src="/icon/m.png" alt="" />
            <h1 className="text-lg font-medium">info@designmodo.com</h1>
          </div>
          <div className="flex items-start gap-5 mt-7">
            <img src="/icon/c.png" alt="" className="mt-3" />
            <h1 className="text-lg font-medium">
              San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco,
              230909
            </h1>
          </div>
        </div>
        <div className="absolute h-[470px] w-[400px] top-[100px] left-[714px] bg-white rounded-xl p-7">
          <div className="grid grid-cols-2 ">
            <div>
              <h1 className="text-gray-500 tracking-[2px] font-semibold">YOUR NAME</h1>
              <input
                type="text"
                required
                placeholder="Your Name"
                className="border border-gray-500 p-2 rounded-full w-[190px] mt-2"
              />
            </div>
            <div className="ml-10">
              <h1 className="text-gray-500 tracking-[2px] font-semibold">BUDGET</h1>
              <input
                type="number"
                required
                placeholder="$5000"
                className="border border-gray-500 p-2 rounded-full w-[130px] mt-2"
              />
            </div>
            <div className="col-span-2 mt-5 w-full">
              <h1 className=" text-gray-500 tracking-[2px]  font-semibold">
                INPUT FIELD
              </h1>
              <input
                type="email"
                required
                placeholder="name@mail.com"
                className="border border-gray-500 p-2 w-full rounded-full mt-2"
              />
            </div>
            <div className="col-span-2 mt-5 w-full">
              <h1 className=" text-gray-500 tracking-[2px]  font-semibold">
                YOUR MESSAGE
              </h1>
              <input
                type="textarea"
                
                required
                placeholder="Massage"
                className="border text-left h-20 border-gray-500 p-2 w-full rounded-xl mt-2"
              />
            </div>
            <div className="mt-9 w-full">

                <input type="checkbox" 
                required
                className="border text-left  border-gray-500 p-2   rounded-xl mt-2"
                />
                <span className="text-gray-400 text-lg"> Send me a copy</span>
            </div>
            <div className="mt-9">
                <button type="sumbit"  className="bg-[#25DAC5] text-white px-10 py-2 rounded-full ml-14 font-bold">Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
