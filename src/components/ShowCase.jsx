import React from "react";

const ShowCase = () => {
  const showCase = [
    {
      id: 1,
      title: "UI KIT",
      text: "Mozart Project",
      url: "https://s3-alpha-sig.figma.com/img/0473/f69d/784b36f7f86dce0c85f1d1dd2bc46f50?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B0IY5ualYk1tys3~LoKIj0GL9i5knEbDotq5deK1XslZv-Y4F3q59IPW4IsH6LJKUnujCFtYHWrqyed~IDci~82xnD2IlWld2pvlL7UXzx23NAiGLjoeDWmlI39uf2VUxoi~ciyXmwLyRMjvo67HG5mlK651hPkIsh5M9eGcKFwgSMOPfmMOolHxOwYe6llexLUUpyuoO6~ynleRxtrYp3lVACRH2lMy7o-R2T0Ok6mlm2x3-~MmAfjWSgsaYqV~GgXFz111-hStLhTy6vPQAjqM4SjIp9b4N8DIk~ZUkmm4KTbYw36JSL0DWHGLFgbYDhzLDM~VD9giOEWKJoe1pQ__",
    },
    {
      id: 2,
      title: "Framework",
      text: "Startup Framework 2.0",
      url: "https://s3-alpha-sig.figma.com/img/1460/2bf9/1a2ee33c171f39337a5b71e42c42b387?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XDjAEqcHlMskTkNrdlXfELkz6rmdaRSs~7G0IFBPhuxSPWjGu6gHIb~J1e94~VkDNC0dmlB5Wma9DvQkLx-hhQ-5AMm5ePnM-idOjGKoW6rFVLSs2zb-rTcCjdsBtv1Q20RBmeuYKQXK3h5F936J9EeeVJckQ0ckmtfd0IvkscewsYtDJuDs6c8ydgHuS~7VOmNb7sTUeCAMgr6T74Yni8601RM6Hh9m~rqpNG~XWOobPvNIGWwZ6OkPi8g0tM0sF4tEkhjSrOP4Jwx2Nwad203VZDGDG7SEf9IEQS8NUqt9J70CZHWP4xoVifQjnYIqxDktyd0tv90qeWYBp7M4rg__",
    },
    {
      id: 3,
      title: "Photos",
      text: "From the Sky",
      url: "https://s3-alpha-sig.figma.com/img/e08f/26b3/dccd6dbe720b42e9b0413e3a873d2883?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DLZH0PHHJSpXPqGcHIc0F8IVHueEBetWmBBZrboQa6ARLrBaMjmlLeMRMZmbeaK6feayDGXZ0PXKiwpfJCEfsvcJopkM8IyC~kInVOfJvsW~d~vmOCaQhVyKufK0vddL1Je-gSg~mIMlRN1J~jy1DGLv5-p~jvl7MdfCe3yV4xUJ8XXLWFCt3Ii4evjld9OdQWPOHr~dy5HgsQInssgO2acMof3rWGtpEdQrwfIxtSJEYauJly6Op1MuCo7a6gcxJxIGx9twJlXSVNKgpKrrCRJRb3fedC0ehOTgyaXWjVxf4zhl-yhiKCL6dKcXoGo-TgGFk~Cycb-edry9jxd~9w__",
    },
    {
      id: 4,
      title: "Pictures",
      text: "Air Forces",
      url: "https://s3-alpha-sig.figma.com/img/6092/e136/1b7d6d15b1d01cf0004cb784dcfb12ce?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cd~jOyaT6wW5Hwv7i7DljTXCsO0xycD-kwXB8x-Szb7J8B52BJwDxLkhzY26tJ2cABPOiLWQE0EjgWZy6oTTqf2fasEYS9t7F171degYPK7eaZZewtdsTzNdUDpmy5haxZyRpZ4wBb8~Yz-oQj1FvSoeOShD72Vez0rpdcsBHrK1iYqBBSqwlUHCY5IRNMZbvgjpUyPPGdxUl2DggLN6wWhs1Q-ugf8x717CiGsxZ093vEWG4owWd-b9fxUkuj4PCFvv9OwHqUBIJ-qRYR7~vChA1sqogH8RzWkBjp-6parGn1O9nf80FlF6PzlCU3vvQ7cn5bql6qMMDXnh7211Eg__",
    },
  ];
  return (
    <>
      <div className="bg-[#2F1893]  h-[1120px]">
        <div className="relative flex justify-between items-center w-[970px] h-[52.2px] top-[100px] left-[70px]">
          <h1 className="text-white font-bold text-3xl">Last works</h1>
          <div className="w-[170px] h-[50px] border border-white text-white rounded-full flex justify-center items-center ">
            View all Works
          </div>
        </div>

        <div className="relative w-[970px] h-[816px] top-[205px] left-[70px]">
          <div className="grid grid-cols-2 gap-10">
            {showCase.map((item, index) => (
              <div className="text-gray-300">
                <img
                  src={item.url}
                  alt=""
                  className="w-[470px] h-[280px] object-cover rounded-lg"
                />
                <p className="font-medium uppercase tracking-[3px] text-center mt-4">
                  {item.title}
                </p>
                <p className="font-medium  text-2xl text-center mt-2">
                  {item.text}
                </p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowCase;
