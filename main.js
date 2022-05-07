let btn = document.querySelector(".dark-btn");
let btn2 = document.querySelector(".light-btn");
let body = document.querySelector("body");
let twitter_icon = document.querySelector(".nav-links .tweets");
let nav_livks = document.querySelectorAll(".nav-links a  i, span");
let nav_livk = document.querySelectorAll(".nav-links a");
let mainAcc = document.querySelector(".main-account a");
let main = document.querySelector("main .main-twitter .main-center");
let feed_tweet = document.querySelectorAll(".feed-tweet .tweet-text");
let feed_tweet_original = document.querySelectorAll(".feed-tweet");
let feed_name = document.querySelectorAll(".feed-tweet .twitter-name");
let home_style = document.querySelector(".main-twitter .home-bar");
let home_icon = document.querySelector(".main-twitter .home-bar i");
let new_tweet = document.querySelector(".new-tweet-details input");
let search = document.querySelector(".search ");
let search_input = document.querySelector(".search input");
let trending = document.querySelector(".trending");
let trending_item = document.querySelectorAll(".trending-item  p");
let trending_item_original= document.querySelectorAll(".trending-item");
let trending_link= document.querySelectorAll(".show-more");
let title = document.querySelector(".title");
let follow = document.querySelector(".follow");
let follow_profile = document.querySelectorAll(".follow .follow-profile");
let follow_profile_link = document.querySelectorAll(".follow .follow-profile a");
let follow_profile_button = document.querySelectorAll(".follow .follow-profile button");
let follow_title = document.querySelector(".follow .title");


btn.addEventListener("click" , function(){
    body.classList.remove("dark-mode")
    body.classList.add("light-mode");
    btn.style.display="none";
    btn2.style.display = "block";
    twitter_icon.classList.add("twitter-icons");
    nav_livks.forEach((nav)=>{
        nav.classList.add("black-icons");
    })
    nav_livk.forEach((nav)=>{
        nav.classList.add("gray-back");
    })
    mainAcc.classList.add("gray-back");
    main.style.borderColor = "#E7E7E8";
   feed_tweet.forEach((tweet)=> {
       tweet.style.color = "black";
   })
   feed_name.forEach((feed_name)=>{
       feed_name.style.color="black";
   })
   home_style.style.backgroundColor = "white";
   home_icon.style.color = "black";
   new_tweet.style.backgroundColor = "white";

   feed_tweet_original.forEach((feed)=>{
       feed.style.borderColor = "#E7E7E8";
       feed.classList.add("back-gray");
   })

   search.style.backgroundColor = "white";
   search_input.style.backgroundColor="#EFF3F4";
   trending.style.backgroundColor = "#EFF3F4";
   title.style.color = "black";

   trending_item.forEach((item)=>{
       item.style.color = "black";
   })
   trending_item_original.forEach((original)=>{
       original.classList.add("back-gray");
   })
   trending_link.forEach((link)=>{
       link.classList.add("back-gray");
   });
   follow.style.backgroundColor = "#EFF3F4";
   follow_title.style.color = "black";


   follow_profile.forEach((profile)=>{
       profile.classList.add("back-gray");
   })
   follow_profile_button.forEach((btn)=>{
       btn.style.backgroundColor = "black";
       btn.style.color = "white";
   })
   follow_profile_link.forEach((link)=>{
       link.style.color="black";
   })
})


btn2.addEventListener("click",function() {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    btn2.style.display="none";
    btn.style.display = "block";
    twitter_icon.classList.remove("twitter-icons");
    nav_livks.forEach((nav)=>{
        nav.classList.remove("black-icons");
    })
    nav_livk.forEach((nav)=>{
        nav.classList.remove("gray-back");
    })
    mainAcc.classList.remove("gray-back");
    home_style.style.backgroundColor = "black";
    home_icon.style.color = "white";
    new_tweet.style.backgroundColor = "black";
    feed_name.forEach((feed_name)=>{
        feed_name.style.color="white";
    })

    feed_tweet.forEach((tweet)=> {
        tweet.style.color = "white";
    })
    feed_tweet_original.forEach((feed)=>{
        feed.style.borderColor = "rgba(47,51,54)";
        feed.classList.remove("back-gray");

    })
    search.style.backgroundColor = "black";
    search_input.style.backgroundColor="#212327";
    trending.style.backgroundColor = "#212327";
    title.style.color = "white";
    trending_item.forEach((item)=>{
        item.style.color = "white";
    })
    trending_item_original.forEach((original)=>{
        original.classList.remove("back-gray");
    })
    trending_link.forEach((link)=>{
        link.classList.remove("back-gray");
    });
    follow_title.style.color = "white";
    follow.style.backgroundColor = "#212327";


    follow_profile.forEach((profile)=>{
        profile.classList.remove("back-gray");
    })
    follow_profile_button.forEach((btn)=>{
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
    })
    follow_profile_link.forEach((link)=>{
        link.style.color="white";
    })
})



