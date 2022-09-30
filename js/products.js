


fetch("https://campspace.one//wp-json/wp/v2/posts").then((data)=>{
    return data.json();
}).then((completedata)=>{
    console.log(completedata[0].title);
    document.getElementById("root").
    innerHTML=completedata[0].title;
});
