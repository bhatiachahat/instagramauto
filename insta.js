const puppeteer = require('puppeteer');
let cFile=process.argv[2];

let num=process.argv[3];
let fs=require("fs");
let comments=["Wow!!","Great!","Amazing.....","Ultimate!!","Lovely","Great","WonderFul","LOVED IT!!","Wow!!","Great!","Amazing.....","Ultimate!!","Lovely","Great","WonderFul","LOVED IT!!"];

(async () => {
    try{

    
    let data = await fs.promises.readFile(cFile);
    let { username,password} = JSON.parse(data)[0];
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 10, 
    defaultViewport: null,
    args: ["--start-maximized", "--disable-notifications"]
  });
  let tabs = await browser.pages();
  let tab = tabs[0];
  //const page = await browser.newPage();
  await tab.setDefaultNavigationTimeout(0); 
  await tab.goto('https://www.instagram.com/', { waitUntil: "networkidle2" });
  await tab.waitForSelector("._2hvTZ.pexuQ.zyHYP");
     await tab.type("._2hvTZ.pexuQ.zyHYP", username, { delay: 100 });
     await tab.type("input[type=password]", password, { delay: 100 });
//   //await page.goto('https://facebook.com');
//   //await page.screenshot({path: 'example.png'});
  await Promise.all([
    tab.waitForNavigation({ waitUntil: "networkidle2" }), // The promise resolves after navigation has finished
    tab.click('.sqdOP.L3NKy.y3zKF'), // Clicking the link will indirectly cause a navigation
  ]);
  let search = await tab.$(".eyXLr.wUAXj ");
  await search.click({delay:10});
  await tab.waitForSelector(".XTCLo.x3qfX");
  await tab.type(".XTCLo.x3qfX", "foodnetworkasia", { delay: 190 });
  //foodnetworkasia
  
//   let query = await tab.$$(".drKGC .fuqBx");
await tab.waitForSelector(".drKGC", {visible: true})
//   console.log(query);
//   let query1 = await tab.$(".drKGC .fuqBx a");
//   console.log(query1);
  
//   let href = await tab.evaluate(function (elem) {
//     return elem.getAttribute("href");
//   }, query[0]); 
//   console.log(href);
//https://www.instagram.com/virat.kohli/

  await tab.goto("https://www.instagram.com/foodnetworkasia/", { waitUntil: "networkidle2" });
 // let arr=document.querySelectorAll(".ySN3v div div .Nnq7C.weEfm .v1Nh3.kIKUG._bz0w");
  let query = await tab.$$(".ySN3v div div .Nnq7C.weEfm .v1Nh3.kIKUG._bz0w");
  console.log(query.length);
  //await tab.waitForSelector(query, {visible: true})
  //console.log(query);
  //console.log(query[0]);
  
//   let li=await query[0].$(".Nnq7C.weEfm");
//   console.log(li);
  
//await tab.waitForSelector(".fr66n");
let idx=0;
do{
    let p1=await query[idx].$("[decoding=auto]")
    //await tab.waitForSelector(p, {visible: true})
    await p1.click();
    //console.log(p);
    
   
    await tab.waitForSelector('.s2MYR article', {visible: true})
    console.log((idx+1)+"post liked.");
    //await tab.waitForSelector('.M9sTE.L_LMM.JyscU.Tgarh.ePUX4', {visible: true})
    await tab.waitForSelector('.fr66n', {visible: true})
    
    let like1=await tab.$(".fr66n");
    await like1.click({delay:500});
    
    await tab.waitForSelector(".sH9wk._JgwE .RxpZH .X7cDz .Ypffh ",{visible:true});
    await tab.type(".sH9wk._JgwE .RxpZH .X7cDz .Ypffh ", comments[idx], { delay: 190 });
    await tab.waitForSelector(".RxpZH .X7cDz .sqdOP.yWX7d.y3zKF",{visible:true});
    let postbtn=await tab.$(".RxpZH .X7cDz .sqdOP.yWX7d.y3zKF");
    postbtn.click({delay:190});
    console.log(comments[idx]+"Comment Posted");
    await tab.waitForSelector(".Igw0E.IwRSH.eGOV_._4EzTm.BI4qX.qJPeX.fm1AK.TxciK.yiMZG .wpO6b",{visible:true});
    let close1=await tab.$(".Igw0E.IwRSH.eGOV_._4EzTm.BI4qX.qJPeX.fm1AK.TxciK.yiMZG .wpO6b");
    await close1.click({delay:190});
    idx++;
}while(idx<num);
 
//   let arr=await query.$("[decoding=auto]")
//   console.log(arr.length);
//   let p2=await query[1].$("[decoding=auto]")
//   //await tab.waitForSelector(p, {visible: true})
//   await p2.click();

  //class=" _65Bje  coreSpriteRightPaginationArrow"
//   await tab.waitForSelector("._65Bje.coreSpriteRightPaginationArrow", {visible: true});
//   let next=await tab.$("._65Bje.coreSpriteRightPaginationArrow");
//   next.click({delay:500});
//   await tab.waitFor(1000);

 // await tab.waitForSelector(".fr66n");
 // let like=await tab.$(".fr66n");
//  await tab.waitForSelector('.s2MYR article', {visible: true})
//  console.log("visible");
//  //await tab.waitForSelector('.M9sTE.L_LMM.JyscU.Tgarh.ePUX4', {visible: true})
//  let like2=await tab.$(".fr66n");
//  await tab.waitForSelector('.fr66n', {visible: true})
//  await tab.waitForSelector('.fr66n', {visible: true})
 
//   await like2.click({delay:500});
//   await tab.waitForSelector(".Igw0E.IwRSH.eGOV_._4EzTm.BI4qX.qJPeX.fm1AK.TxciK.yiMZG .wpO6b",{visible:true});
//   let close2=await tab.$(".Igw0E.IwRSH.eGOV_._4EzTm.BI4qX.qJPeX.fm1AK.TxciK.yiMZG .wpO6b");
//   await close2.click();
//  await tab.waitForSelector("._65Bje.coreSpriteRightPaginationArrow", {visible: true});
//   //let next=await tab.$("._65Bje.coreSpriteRightPaginationArrow");
//   next.click({delay:500});
// let p3=await query[3].$("[decoding=auto]")
//   //await tab.waitForSelector(p, {visible: true})
//   await p3.click();
//   await tab.waitForSelector('.s2MYR article', {visible: true})
//   console.log("visible");
//   //await tab.waitForSelector('.M9sTE.L_LMM.JyscU.Tgarh.ePUX4', {visible: true})
//   await tab.waitForSelector('.fr66n', {visible: true})
//   let like3=await tab.$(".fr66n");
//   await like3.click({delay:500});
//   await tab.waitForSelector(".Igw0E.IwRSH.eGOV_._4EzTm.BI4qX.qJPeX.fm1AK.TxciK.yiMZG .wpO6b",{visible:true});
//   let close3=await tab.$(".Igw0E.IwRSH.eGOV_._4EzTm.BI4qX.qJPeX.fm1AK.TxciK.yiMZG .wpO6b");
//   await close3.click();
    
 
//   await Promise.all([
    
//     tab.waitForNavigation({ waitUntil: "networkidle2" }), // The promise resolves after navigation has finished
//     tab.click('._42ft._4jy0._4w98._4jy3._517h._51sy._4w97 '), // Clicking the link will indirectly cause a navigation
//   ]);

await tab.close();
}
catch(err){
    console.log(err);
}

  //await browser.close();
})();