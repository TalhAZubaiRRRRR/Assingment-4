
// //ARRAY FOR COUNT
let interviewList = []
let rejectedList = []
let currentstatus = 'all'




// //count section

let total = document.getElementById("total-count")
let interviweCount = document.getElementById("interview-count")
let rejectedCount = document.getElementById("rejected-count")

// console.log(total,interviweCount,rejectedCount)

// //small side job show sections
let smJobCount = document.getElementById("job-show")
// console.log(smJobCount)



const allCardSection = document.getElementById("all-cards")
// console.log(allCardSection.children.length)

// //MAIN CONTANT SECTIONS

const mainContainer = document.querySelector("main")
// console.log(mainContainer)


// //3 MAIN BUTTON SECTIONS

const allBtn = document.getElementById("all-btn")
const interviewBtn = document.getElementById("interview-btn")
const rejecetBtn = document.getElementById("rejecet-btn")

// //FILETER SECTION

const filterSection = document.getElementById("filter-section")


// //funtion use for count
// interviewList.push({name:"talha1"})

function calculateCount() {
    total.innerText = allCardSection.children.length
    smJobCount.innerText = allCardSection.children.length + " Jobs"
    interviweCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
    
}
calculateCount()

// //TOGGLE STYLE

function toggleStyle(id) {
    const selected = document.getElementById(id)

    currentstatus = id

    allBtn.classList.remove("bg-blue-400", "text-white")
    interviewBtn.classList.remove("bg-blue-400", "text-white")
    rejecetBtn.classList.remove("bg-blue-400", "text-white")

    allBtn.classList.add("btn-outline")
    interviewBtn.classList.add("btn-outline")
    rejecetBtn.classList.add("btn-outline")




    // make selected button blue
    selected.classList.remove("btn-outline")
    selected.classList.add("bg-blue-400", "text-white")

    if (id == 'interview-btn') {
        
        allCardSection.classList.add('hidden')
        filterSection.classList.remove('hidden')
        renderInterview()
    } else if (id == 'all-btn') {
        allCardSection.classList.remove('hidden')
        filterSection.classList.add('hidden')
    } else if (id == 'rejecet-btn') {
        allCardSection.classList.add('hidden')
        filterSection.classList.remove('hidden')
        
        renderreject()
    }
   


}

let nojobSection = `
 <div class="space-y-6 ">
                <!-- //NO JOBS SECTION -->
                <div class="flex justify-between shadow p-6 rounded-md bg-[#ffffff] space-y-2 h-[448px] mt-5 ">
                    <div class="mx-auto my-auto ">
                        <img src="jobs.png" alt="" class="pl-[100px]">

                        <p class="text-[#002C5C] font-extrabold text-xl text-center mt-5">No jobs available</p>
                        <p class="text-[#323b49]">Check back soon for new job opportunities</p>

                    </div>


                </div>
            </div>
            `
mainContainer.addEventListener('click', function (event) {
    // console.log(event.target.classList.contains('enter-btn'))
    if (event.target.classList.contains('enter-btn')) {
        const parentNode = event.target.parentNode.parentNode
        const jobName = parentNode.querySelector('.job-name').innerText
        const jobInfo = parentNode.querySelector('.job-info ').innerText
        const statusInfo = parentNode.querySelector('.status').innerText
        const noteInfo = parentNode.querySelector('.notes').innerText



        parentNode.querySelector('.status').innerText = 'interviewd'


        const cardInfo = {
            jobName,
            jobInfo,
            statusInfo: 'interviewd',
            noteInfo
        }




        const jobExist = interviewList.find(item => item.jobName == cardInfo.jobName)


        if (!jobExist) {
            interviewList.push(cardInfo)
            console.log(interviewList)
        }


        rejectedList = rejectedList.filter(item => item.jobName != cardInfo.jobName)

        calculateCount()
        renderInterview()
    }
    else if (event.target.classList.contains('rej-btn')) {
        const parentNode = event.target.parentNode.parentNode
        const jobName = parentNode.querySelector('.job-name').innerText
        const jobInfo = parentNode.querySelector('.job-info ').innerText
        const statusInfo = parentNode.querySelector('.status').innerText
        const noteInfo = parentNode.querySelector('.notes').innerText



        parentNode.querySelector('.status').innerText = 'Rejected'


        const cardInfo = {
            jobName,
            jobInfo,
            statusInfo: 'Rejected',
            noteInfo
        }




        const jobExist = rejectedList.find(item => item.jobName == cardInfo.jobName)


        if (!jobExist) {
            rejectedList.push(cardInfo)
            console.log(interviewList)
        }
        interviewList = interviewList.filter(item => item.jobName != cardInfo.jobName)

        if (currentstatus == "interview-btn") {
            renderInterview()
        }

        calculateCount()

    }

    // //DELETE BUTTON 
else if (event.target.closest('.btn-delete')) {
    const deleteBtn = event.target.closest('.btn-delete');
    const card = deleteBtn.parentElement.parentElement;
    const jobName = card.querySelector('.job-name').innerText;

    // Remove from both lists
    interviewList = interviewList.filter(item => item.jobName != jobName);
    rejectedList = rejectedList.filter(item => item.jobName != jobName);

    // Remove the card from DOM
    card.remove();

    // Recalculate counts
    calculateCount();

}
})



function renderInterview() {
    filterSection.innerHTML = ''
    if(interviewList.length <= 0){
        let div = document.createElement('div')
        div.innerHTML=nojobSection
        filterSection.appendChild(div)
    }
    for (let interview of interviewList) {
        let div = document.createElement('div')
        div.className = 'space-y-6 mb-6'
        div.innerHTML = `
        <div class="flex justify-between shadow p-6 rounded-md bg-[#ffffff] space-y-2">
                    <div >
                    <div class="job-name">
                        <p>Mobile First Crop</p>
                        <p>React Native Developer</p>
                    </div>
                    <div >
                        <p class="job-info mt-5 mb-5">Remote • Full-time • $130,000-$175,000</p>

                        <p class="status font-bold  w-[124px] h-11  text-[#002C5C] bg-[#eef4ff] text-[14px] p-3 rounded-md">${interview.statusInfo}</p>
                    
                    <p class="notes mb-5">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide. </p>
                    </div>
                    <div>
                    <button class="enter-btn btn btn-soft btn-accent p-2 w-[97px] h-9 border-1 border-[#10b981] mr-1">
                    Interview
                    </button>
            
                    <button class="rej-btn btn btn-soft btn-error p-2 w-[97px] h-9 border border-red-500 "> Rejected</button>
                    </div>


                </div>
                <div>
                    <button id="delete-btn" class="btn-delete border border-black-100 rounded-full p-1"><img src="delete.png" alt=""></button>
                </div>
               
            </div>

        `
        filterSection.appendChild(div)

    }
}
function renderreject() {
    filterSection.innerHTML = ''
     if(rejectedList.length <= 0){
        let div = document.createElement('div')
        div.innerHTML=nojobSection
        filterSection.appendChild(div)
    }
    for (let rejecet of rejectedList) {
        let div = document.createElement('div')
        div.className = 'space-y-6 mb-6'
        div.innerHTML = `
        <div class="flex justify-between shadow p-6 rounded-md bg-[#ffffff] space-y-2">
                    <div >
                    <div class="job-name">
                        <p>Mobile First Crop</p>
                        <p>React Native Developer</p>
                    </div>
                    <div >
                        <p class="job-info mt-5 mb-5">Remote • Full-time • $130,000-$175,000</p>

                        <p class="status font-bold  w-[124px] h-11  text-[#002C5C] bg-[#eef4ff] text-[14px] p-3 rounded-md">${rejecet.statusInfo}</p>
                    
                    <p class="notes mb-5">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide. </p>
                    </div>
                    <div>
                    <button class="enter-btn btn btn-soft btn-accent p-2 w-[97px] h-9 border-1 border-[#10b981] mr-1">
                    Interview
                    </button>
            
                    <button class="rej-btn btn btn-soft btn-error p-2 w-[97px] h-9 border border-red-500 "> Rejected</button>
                    </div>


                </div>
                <div>
                    <button id="delete-btn" class="btn-delete border border-black-100 rounded-full p-1"><img src="delete.png" alt=""></button>
                </div>
               
            </div>

        `
        filterSection.appendChild(div)

    }
}