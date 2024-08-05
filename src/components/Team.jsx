import React from "react";

const Team = () => {
  const Team = [
    {
      id: 1,
      url: "https://s3-alpha-sig.figma.com/img/cff8/bdd8/96f5730df623c29a513f900e76096e77?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mik7ZwyegoDafmMi5HTozNCzK1V~KJkIBx62yAg-S2zBFxOSdrgapGMlRNxF9a7MplHKGBC7qKvAmvgBXg5HsHZULY~mX0Dv3gaBV2GW~C2TocGSf1E~U1nTOiFq0XyFTVoJQhz6zSHLlaNVsbIkHWKCkpGx6cxuOcti3nAjlBVZiLnRubPjpgJmP4KSfUc8zVCtm8Kac1Xh5o2X8B7HLpwNjASeNcj-r3Qp7MtyDwZqpv9qzERToKFHblprPVOSI9EaWuy7yEcVAPcmu0jw6Qj0nmdB7pcvISgdByqZevRZDBqD0kxCwtHZ21JTTe9WtL1p0C3T3aa2dIOB71mxtw__",
      title: "Leah Salomon",
      decs: "UI Designer",
      url1: "/icon/t.png",
      url2: "/icon/i.png",
      url4: "/icon/b.png",
      url5: "/icon/f.png",
    },
    {
      id: 2,
      url: "https://s3-alpha-sig.figma.com/img/bb2f/5c77/0a77c77bf6142b6543f039c7ac3556f6?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i0yj103n-UbGk4jWLbuEUKZHqGaH5A8CR5B2spmYdorWKa-WKPhsbosgH2ZNP2YtyUNosKcbDwCS2Rjk0-O9gfzCBRyKSRG3-xruGtCAvUc7KqOf5vP0k5slZ7zJsaLKpGbXnnKQzFqa3YFDDEb8XQacVTvQ-avFi0MAHwnyRyKjTk7lAnB8a8qR8CgmJf-Jd3DZtVooKrwXdz5rW2Kd68NUM9BxkVE-BCei9YPCl9KMjDWwiSFpb5wvPKp~10SC4yyD46EX8Od7NDnAx6~CDekaA68cX21~g7v3eqJptkBk-wgFpvGQzRGmM9d2zSOYBTERFNR4dtdhRnudBrpXCA__",
      title: "Leah Salomon",
      decs: "UI Designer",
      url5: "/icon/f.png",
      url1: "/icon/t.png",
    },
    {
      id: 3,
      url: "https://s3-alpha-sig.figma.com/img/9b2d/668b/00abeae165aff03b0044744ba81357af?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NXGFrCSRBVMTO0TGSQj1YfWEGtkstAUZHS-aTQT4qVnizNZT5D4l9cBiTzCJjfM70et9STHpyc3Lal2-NK78Y5dnbwc4VnxUcCkMKEnKimt-m58TvY8OxpsRKMSPYblRVMnXPvsOKLQUBXJFuRyN65xU-LCfHcc8aWTDDRShpG48AkS~HX0GOz32yuf9SP0M~zjaL58HbSUgXsX2l~ucRgQOK2Kh-K~Z1kpT~3~z6189gOK7Gq8kFOyEJKMrTqVJLkfkQxiDCyXvxbkGRymXYgGn8Q6SVF4sA8GZkazE3ulFkW21-NWvXqg8VO4DTiLEt5rZcRi37REF8kZazgvJzw__",
      title: "Leah Salomon",
      decs: "UI Designer",
      url3: "/icon/1.png",
      url6: "/icon/g.png",
      url7: "/icon/s.png",
    },
    {
      id: 4,
      url: "https://s3-alpha-sig.figma.com/img/3f6f/38f6/1d39e8c7b1c070e5a7f1b9bd6a0f35fe?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=coqyGhKXqB8DBqMqJ8dua22EGBRHvLjfq~Zd2yD9AQCyXZb2KghmMV6V69TaDkr~y4P7GeMeoMTXOPcnxUHGm-Lx-eHk7YesJjF3Sq7rWDyxY-NHAn5U3Iktirg9P~Gxcuc7mnWo99KDbjnPf3IV0zsAuyw97hycPw6UbXH1vxqnZ7H6Ny9yVPlGaRXesseV8OJHPHFGlhQowBbmckbioAKN72J5WFVQl-2eoxpVrkFcMiLO4BwR8hOUXDOX0TWNi5JeHlHXTS3aJVe05N~W6N6RFGNX9mJPWVi6~o7KB0L1opvHJIZjbwV3G4J52VJoEIeOoSmWH9a1lgrl0EAEnw__",
      title: "Leah Salomon",
      decs: "UI Designer",
      url1: "/icon/t.png",
      url5: "/icon/f.png",
    },
    {
      id: 5,
      url: "https://s3-alpha-sig.figma.com/img/ad8b/ed9c/decf110a8875ee9f91007ac763caa1b6?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NF0pMkIv7F4VtvrxZVvM6xK0cN3KcRJy4n3Ge0qiRYQakUr77f5fkAhHki3WuuAQD0thllUAT-38foDc496jQI2sYRBS52Y-A5KSe~mBmsd1no-0yIYM3CCsONuViNjPHem~RHB3z2BfIbU0vaUNFp5447egSmZpS9hyr9ouqyLaVjW-Bd2ZfOfSfbKVw5nfmpmbeDjC9D8FPel0W4JP3ZjxVadgwrBPZDJojHzWvotbdtCMxXV1NufdC4V3SLyfLV-Y88NpvbAhdGk4C-TNCZUQS35PZbWxVPngZYmU08D8oalYDOfD6r-ER9UJd3gc-WzuTW-yHlMjzOL~MJtIlA__",
      title: "Leah Salomon",
      decs: "UI Designer",
      url1: "/icon/t.png",
    },
  ];
  return (
    <div className="bg-[#2F1893]  h-[870px]">
      <div className="relative  w-[764px] h-[179px] top-[100px] left-[115px]">
        <h1 className="text-white font-bold text-3xl">Startup Crew</h1>
        <h1 className="text-white font-medium text-xl mt-3">
          The most important part of the Startup Framework is the samples. The
          samples form a set of 25 usable pages you can use as is or you can add
          new blocks from UI Kit.
        </h1>
      </div>
      <div className="relative  w-[764px] h-[543px] top-[120px] left-[115px]">
        <div className="grid grid-cols-3 text-gray-300 gap-10">
          {Team.map((item, index) => (
            <div>
              <img
                src={item.url}
                alt=""
                className="w-[100px] h-[100px] rounded-full"
              />
              <h1 className="font-semibold text-2xl mt-2">{item.title}</h1>
              <p className="font-medium text-gray-400 mt-1">{item.decs}</p>
              <div className="flex gap-7 mt-3">
                <img src={item.url1 || item.url7} alt="" />
                <img
                  src={item.url5 || item.url2 || item.url4 || item.url3}
                  alt=""
                />
                <img src={item.url4 || item.url6} alt="" />
                <img src={item.url2} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
