const URL = "https://jsonplaceholder.typicode.com";
const postsMainWrapperEl = document.querySelector(".posts_cards_btn_wrapper");
const postsWrapperEl = document.querySelector(".posts_wrapper");

const commentsSectionEl = document.querySelector(".section_comments");
const commentsMainWrapperEl = document.querySelector(".comments_cards_btn_wrapper");
const commentsWrapperEl = document.querySelector(".comments_wrapper");

const usersSectionEl = document.querySelector(".section_users");
const usersMainWrapperEl = document.querySelector(".users_cards_btn_wrapper");
const usersWrapperEl = document.querySelector(".users_wrapper");


const getPostsData = async () => {
    try {
        const responsePosts = await fetch(`${URL}/posts?_limit=20`);
        const dataPosts = responsePosts.json();
        dataPosts.then((result) => {
            renderPostsData(result);
        }).catch((err) => {
            console.log(err);
        });

    } catch (err) {
        console.error(err);
    }
}
window.onload = () => {
    getPostsData();
}

const getCommentsData = async () => {
    try {
        const responseComments = await fetch(`${URL}/comments?_limit=50`);
        const dataComments = responseComments.json();
        dataComments.then((result) => {
            renderCommentsData(result);
        }).catch((err) => {
            console.log(err);
        });
    } catch (err) {
        console.log(err);
    }
}
const getUsersData = async () => {
    try {
        const responseUsers = await fetch(`${URL}/users`);
        const dataUsers = responseUsers.json();
        dataUsers.then((result) => {
            renderUsersData(result);
        }).catch((err) => {
            console.log(err);
        })
    } catch (err) {
        console.log(err);
    }
}



const renderPostsData = (data) => {
    const fragment = document.createDocumentFragment()
    data.forEach((item, index) => {
        const images = ["https://images.uzum.uz/ctfvjir4nkds9ma10a0g/t_product_540_high.jpg",
            "https://images.uzum.uz/csq9cjtpq3ggq63d1rog/t_product_540_high.jpg",
            "https://images.uzum.uz/ccjab135a95unf11ni90/t_product_540_high.jpg",
            "https://images.uzum.uz/cd76qmj5a95unf132hv0/t_product_540_high.jpg",
            "https://images.uzum.uz/ccavcn622va9iqdon49g/t_product_540_high.jpg",
            "https://images.uzum.uz/cd00lvbb3ho5lmuq2170/t_product_540_high.jpg",
            "https://images.uzum.uz/csq9co3vgbkpg1nm1nk0/t_product_540_high.jpg",
            "https://images.uzum.uz/cs5msr6fh2vj1qtk4s0g/t_product_540_high.jpg",
            "https://images.uzum.uz/ccmm7bbb3ho5lmupnkjg/t_product_540_high.jpg",
            "https://images.uzum.uz/chtfc2t6sfhndlbnedpg/t_product_540_high.jpg",
            "https://images.uzum.uz/cvt1vs47fd1p445sdtgg/original.jpg",
            "https://images.uzum.uz/d04biuc7fd1idphtbopg/t_product_540_high.jpg",
            "https://images.uzum.uz/cccon2e22va03rn5gee0/t_product_540_high.jpg",
            "https://images.uzum.uz/cdu90eol08kcldtnune0/t_product_540_high.jpg",
            "https://images.uzum.uz/cdhpv3n0tgqvlm599ofg/t_product_540_high.jpg",
        ]
        const randomNum = Math.floor(Math.random() * images.length);
        const newPostsCardEl = document.createElement("div");
        newPostsCardEl.className = "posts_card";
        newPostsCardEl.innerHTML = `
        <div class="posts_card flex flex-col flex-1 rounded-[8px] duration-500 ease-out group hover:shadow-[0px_12px_8px_#959da533]">
                    <div class="posts_image flex items-center justify-center overflow-hidden">
                        <img id="cardImage" class="w-[100%] group-hover:scale-[1.02] duration-300 rounded-[8px] object-cover h-[309px]" src="${images[randomNum]}" alt="Product Image">
                    </div>
                    <div class="posts_body pt-[12px] flex flex-col flex-1 items-start p-[8px]">
                        <p class="posts_title min-h-[50px] mb-[4px] font-I text-[12.8px] leading-[15.36px] text-primary-text line-clamp-2"><span class="font-[500]">Title:</span> ${item.title}</p>
                        <p class="posts_title font-I text-[12.8px] leading-[15.36px] text-primary-text mb-[4px] line-clamp-4"><span class="font-[500]">Body:</span> ${item.body}</p>
                        <div class="posts_review_ranking flex items-center gap-[3.5px] mb-[8px]">
                         <img class="pb-[1px]" src="./assets/images/star.svg" alt="Star Icon">
                        <span class="font-I font-[300] text-[11.2px] leading-[11.2px] text-[#8B8E99]">4.8</span>
                        <span class="font-I font-[300] text-[11.2px] leading-[11.2px] text-[#8B8E99]">(162 sharsh)</span>
                        </div>
                        <span class="font-R text-[11px] leading-[17px] inline-block text-primary-text px-[5px] rounded-[4px] bg-[#FFFF00] mb-[17px]">6 600 so'm/oyiga</span>
                        <div class="posts_price_cart w-full flex items-end justify-between gap-[4px] flex-1">
                       <div class="flex flex-col">
                        <del class="font-I text-[11.2px] leading-[13.44px] text-[#8B8E99]">179 000 so'm</del>
                        <span class="font-I text-[14px] font-[500] leading-[16.8px] text-primary-text">55 000 so'm</span>
                    </div>
                    <button class="flex items-center justify-center hover:bg-[#dee0e4] duration-300 ease-out size-[32px] border-[1px] border-[#36364033] rounded-[50%]"><img src="./assets/images/addcart.svg" alt="Add to cart icon"></button>
                </div>
            </div>
        </div>
        `
        fragment.appendChild(newPostsCardEl);
    })

    postsWrapperEl.appendChild(fragment);
    const newPostsSeeMoreBtn = document.createElement("button");
    newPostsSeeMoreBtn.classList = "posts_see_more_btn";
    newPostsSeeMoreBtn.innerHTML = "Yana ko'rsatish";
    postsMainWrapperEl.appendChild(newPostsSeeMoreBtn);

    const postsSeeMoreBtnEl = document.querySelector(".posts_see_more_btn");
    postsSeeMoreBtnEl.addEventListener("click", () => {
        getCommentsData();
        postsSeeMoreBtnEl.style.display = "none";
        commentsSectionEl.style.display = "block";
    })
}

const renderCommentsData = (data) => {
    const fragment = document.createDocumentFragment()
    data.forEach((item, index) => {
        const images = ["https://images.uzum.uz/ctfvjir4nkds9ma10a0g/t_product_540_high.jpg",
            "https://images.uzum.uz/csq9cjtpq3ggq63d1rog/t_product_540_high.jpg",
            "https://images.uzum.uz/ccjab135a95unf11ni90/t_product_540_high.jpg",
            "https://images.uzum.uz/cd76qmj5a95unf132hv0/t_product_540_high.jpg",
            "https://images.uzum.uz/ccavcn622va9iqdon49g/t_product_540_high.jpg",
            "https://images.uzum.uz/cd00lvbb3ho5lmuq2170/t_product_540_high.jpg",
            "https://images.uzum.uz/csq9co3vgbkpg1nm1nk0/t_product_540_high.jpg",
            "https://images.uzum.uz/cs5msr6fh2vj1qtk4s0g/t_product_540_high.jpg",
            "https://images.uzum.uz/ccmm7bbb3ho5lmupnkjg/t_product_540_high.jpg",
            "https://images.uzum.uz/chtfc2t6sfhndlbnedpg/t_product_540_high.jpg",
            "https://images.uzum.uz/cvt1vs47fd1p445sdtgg/original.jpg",
            "https://images.uzum.uz/d04biuc7fd1idphtbopg/t_product_540_high.jpg",
            "https://images.uzum.uz/cccon2e22va03rn5gee0/t_product_540_high.jpg",
            "https://images.uzum.uz/cdu90eol08kcldtnune0/t_product_540_high.jpg",
            "https://images.uzum.uz/cdhpv3n0tgqvlm599ofg/t_product_540_high.jpg",
        ]
        const randomNum = Math.floor(Math.random() * images.length);
        const newPostsCardEl = document.createElement("div");
        newPostsCardEl.className = "posts_card";
        newPostsCardEl.innerHTML = `
        <div class="posts_card flex flex-col flex-1 rounded-[8px] duration-500 ease-out group hover:shadow-[0px_12px_8px_#959da533]">
                    <div class="posts_image flex items-center justify-center overflow-hidden">
                        <img id="cardImage" class="w-[100%] group-hover:scale-[1.02] duration-300 rounded-[8px] object-cover h-[309px]" src="${images[randomNum]}" alt="Product Image">
                    </div>
                    <div class="posts_body pt-[12px] flex flex-col flex-1 items-start p-[8px]">
                        <p class="posts_title min-h-[50px] font-I text-[12.8px] leading-[15.36px] text-primary-text mb-[6px] line-clamp-2"><span class="font-[500]">Title:</span> ${item.name}</p>
                        <p class="posts_title font-I text-[12.8px] leading-[15.36px] text-primary-text mb-[6px] line-clamp-4"><span class="font-[500]">Body:</span> ${item.body}</p>
                        <div class="posts_review_ranking flex items-center gap-[3.5px] mb-[8px]">
                         <img class="pb-[1px]" src="./assets/images/star.svg" alt="Star Icon">
                        <span class="font-I font-[300] text-[11.2px] leading-[11.2px] text-[#8B8E99]">4.8</span>
                        <span class="font-I font-[300] text-[11.2px] leading-[11.2px] text-[#8B8E99]">(162 sharsh)</span>
                        </div>
                        <span class="font-R text-[11px] leading-[17px] inline-block text-primary-text px-[5px] rounded-[4px] bg-[#FFFF00] mb-[17px]">6 600 so'm/oyiga</span>
                        <div class="posts_price_cart w-full flex items-end justify-between gap-[4px] flex-1">
                       <div class="flex flex-col">
                        <del class="font-I text-[11.2px] leading-[13.44px] text-[#8B8E99]">179 000 so'm</del>
                        <span class="font-I text-[14px] font-[500] leading-[16.8px] text-primary-text">55 000 so'm</span>
                    </div>
                    <button class="flex items-center justify-center hover:bg-[#dee0e4] duration-300 ease-out size-[32px] border-[1px] border-[#36364033] rounded-[50%]"><img src="./assets/images/addcart.svg" alt="Add to cart icon"></button>
                </div>
            </div>
        </div>
        `
        fragment.appendChild(newPostsCardEl);
    })

    commentsWrapperEl.appendChild(fragment);
    const newCommentsSeeMoreBtnEl = document.createElement("button");
    newCommentsSeeMoreBtnEl.classList.add("comments_see_more_btn");
    newCommentsSeeMoreBtnEl.innerHTML = "Yana ko'rsatish";
    commentsMainWrapperEl.appendChild(newCommentsSeeMoreBtnEl);

    newCommentsSeeMoreBtnEl.addEventListener("click", () => {
        getUsersData();
        usersSectionEl.style.display = "block";
        newCommentsSeeMoreBtnEl.style.display = "none";
    })

}

const renderUsersData = (data) => {
    const fragment = document.createDocumentFragment()
    data.forEach((item, index) => {
        const images = ["https://images.uzum.uz/ctfvjir4nkds9ma10a0g/t_product_540_high.jpg",
            "https://images.uzum.uz/csq9cjtpq3ggq63d1rog/t_product_540_high.jpg",
            "https://images.uzum.uz/ccjab135a95unf11ni90/t_product_540_high.jpg",
            "https://images.uzum.uz/cd76qmj5a95unf132hv0/t_product_540_high.jpg",
            "https://images.uzum.uz/ccavcn622va9iqdon49g/t_product_540_high.jpg",
            "https://images.uzum.uz/cd00lvbb3ho5lmuq2170/t_product_540_high.jpg",
            "https://images.uzum.uz/csq9co3vgbkpg1nm1nk0/t_product_540_high.jpg",
            "https://images.uzum.uz/cs5msr6fh2vj1qtk4s0g/t_product_540_high.jpg",
            "https://images.uzum.uz/ccmm7bbb3ho5lmupnkjg/t_product_540_high.jpg",
            "https://images.uzum.uz/chtfc2t6sfhndlbnedpg/t_product_540_high.jpg",
            "https://images.uzum.uz/cvt1vs47fd1p445sdtgg/original.jpg",
            "https://images.uzum.uz/d04biuc7fd1idphtbopg/t_product_540_high.jpg",
            "https://images.uzum.uz/cccon2e22va03rn5gee0/t_product_540_high.jpg",
            "https://images.uzum.uz/cdu90eol08kcldtnune0/t_product_540_high.jpg",
            "https://images.uzum.uz/cdhpv3n0tgqvlm599ofg/t_product_540_high.jpg",
        ]
        const randomNum = Math.floor(Math.random() * images.length);
        const newPostsCardEl = document.createElement("div");
        newPostsCardEl.className = "posts_card";
        newPostsCardEl.innerHTML = `
        <div class="posts_card flex flex-col flex-1 rounded-[8px] duration-500 ease-out group hover:shadow-[0px_12px_8px_#959da533]">
                    <div class="posts_image flex items-center justify-center overflow-hidden">
                        <img id="cardImage" class="w-[100%] group-hover:scale-[1.02] duration-300 rounded-[8px] object-cover h-[309px]" src="${images[randomNum]}" alt="Product Image">
                    </div>
                    <div class="posts_body pt-[12px] flex flex-col flex-1 items-start p-[8px]">
                        <p class="posts_title font-I text-[12.8px] leading-[15.36px] text-primary-text mb-[6px] line-clamp-1"><span class="font-[500]">Name:</span> ${item.name}</p>
                        <p class="posts_title font-I text-[12.8px] leading-[15.36px] text-primary-text mb-[6px] line-clamp-1"><span class="font-[500]">Username:</span> ${item.username}</p>
                        <p class="posts_title font-I text-[12.8px] leading-[15.36px] text-primary-text mb-[6px] line-clamp-1"><span class="font-[500]">Email:</span> ${item.email}</p>
                        <p class="posts_title font-I text-[12.8px] leading-[15.36px] text-primary-text mb-[6px] line-clamp-3"><span class="font-[500]">Address:</span> ${item.address.suite} ${item.address.street} ${item.address.city} ${item.address.zipcode} ${item.address.geo.lat}  ${item.address.geo.lng}</p>
                        <p class="posts_title font-I text-[12.8px] leading-[15.36px] text-primary-text mb-[6px] line-clamp-1"><span class="font-[500]">Phone:</span> ${item.phone}</p>
                        <p class="posts_title font-I text-[12.8px] leading-[15.36px] text-primary-text mb-[6px] line-clamp-1"><span class="font-[500]">Website:</span> ${item.website}</p>
                        <div class="posts_review_ranking flex items-center gap-[3.5px] mb-[8px]">
                         <img class="pb-[1px]" src="./assets/images/star.svg" alt="Star Icon">
                        <span class="font-I font-[300] text-[11.2px] leading-[11.2px] text-[#8B8E99]">4.8</span>
                        <span class="font-I font-[300] text-[11.2px] leading-[11.2px] text-[#8B8E99]">(162 sharsh)</span>
                        </div>
                        <span class="font-R text-[11px] leading-[17px] inline-block text-primary-text px-[5px] rounded-[4px] bg-[#FFFF00] mb-[17px]">6 600 so'm/oyiga</span>
                        <div class="posts_price_cart w-full flex items-end justify-between gap-[4px] flex-1">
                       <div class="flex flex-col">
                        <del class="font-I text-[11.2px] leading-[13.44px] text-[#8B8E99]">179 000 so'm</del>
                        <span class="font-I text-[14px] font-[500] leading-[16.8px] text-primary-text">55 000 so'm</span>
                    </div>
                    <button class="flex items-center justify-center hover:bg-[#dee0e4] duration-300 ease-out size-[32px] border-[1px] border-[#36364033] rounded-[50%]"><img src="./assets/images/addcart.svg" alt="Add to cart icon"></button>
                </div>
            </div>
        </div>
        `
        fragment.appendChild(newPostsCardEl);
    })

    usersWrapperEl.appendChild(fragment);
    const newUsersSeeLessBtnEl = document.createElement("button");
    newUsersSeeLessBtnEl.classList.add("users_see_less_btn");
    newUsersSeeLessBtnEl.innerHTML = "Orqaga qaytish";
    usersMainWrapperEl.appendChild(newUsersSeeLessBtnEl);

    newUsersSeeLessBtnEl.addEventListener("click", () => {
        commentsSectionEl.style.display = "none";
        usersSectionEl.style.display = "none";
    })
}

