let api = `AIzaSyAFQdVXTxCNUp2eLvMKeIKgYjloNWC_Xbc`;
let  getData=async() =>{
    try{
        let query =document.getElementById("query").value;
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=AIzaSyCMC229kOy1sG5CrMN5-WJlhelZc0JJoPQ&part=snippet&maxResults=20&regionCode=IN`)
        let {items} = await res.json()
        
        
         let array_of_videos = items;
         
         appendvedio(array_of_videos)
         
        }catch(err){

        
    }

};


let appendvedio = (data) =>{
    document.getElementById("search_video").innerHTML=null
    document.getElementById("result").innerText="Search Result..."
    data.forEach(({snippet:{title,thumbnails:{high:{url}}}, id:{videoId}})=>{
        let div = document.createElement('div')
        div.setAttribute("id","container")
        
        let data1={
          snippet1:title,
          videoId1:videoId,
        }
        div.onclick = () => {
            localStorage.setItem("clicked",JSON.stringify(data1))
            window.location.href="youtube.html"
            

        }
        // let iframe=document.createElement("iframe")
        // iframe.src=`https://www.youtube.com/embed/${videoId}`;
        // iframe.width="100%";
        // iframe.height="100%"
        // iframe.allow="fullscreen"
        let image= document.createElement("img")
        image.src=url
        
        let name= document.createElement("h5")
        name.innerText=title;


        
        div.append(image,name)
        document.getElementById("search_video").append(div)
        console.log()
        

    //    let tittle =ele.snippet.title 
    //     let videoID=ele.id.videoId;
    
     

    })
}

document.getElementById("image").addEventListener("click",()=>{
    window.location.href="index.html"
})

let  trending=async() =>{
    try{
        
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?&key=AIzaSyCMC229kOy1sG5CrMN5-WJlhelZc0JJoPQ&part=snippet&maxResults=20&chart=mostPopular&regionCode=IN`)
        let {items} = await res.json()
        
        
         let array_of_videos = items;
         console.log(array_of_videos)
         
         appendvedio1(array_of_videos)
         
        }catch(err){

        
    }

};
trending()


let appendvedio1 = (data) =>{
    document.getElementById("search_video").innerHTML=null
   
    data.forEach(({snippet:{title,thumbnails:{high:{url}}}, id:{videoId}})=>{
        let div = document.createElement('div')
        div.setAttribute("id","container")
        
        // let iframe=document.createElement("iframe")
        // iframe.src=`https://www.youtube.com/embed/${videoId}`;
        // iframe.width="100%";
        // iframe.height="80%"
        // iframe.allow="fullscreen"
        let image= document.createElement("img")
        image.src=url
        
        let name= document.createElement("h5")
        name.innerText=title;


        
        div.append(image,name)
        document.getElementById("search_video").append(div)
        
        let data1={
            snippet1:title,
            videoId1:videoId,
          }
        div.onclick = () => {
            localStorage.setItem("clicked",JSON.stringify(data1))
            window.location.href="youtube.html"
            

        }
        
        

    
    
     

    })
}
    