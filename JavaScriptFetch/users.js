function fetchUsersData(){
    
  console.log("Hellooo User");
 //console.log(fetch('https://reqres.in/api/users')); // it will return you promise /an object with pending status
 fetch('https://reqres.in/api/users').then((result)=>{
    return result.json()
     
}).then((res)=>{
    console.log('fetch response', res.data)
    //document.querySelector('#users').innerHTML = '<h2>Ameleeee</h2>'
    const responseHtml = res.data.map((item)=>{
        return  `<div class='contianer'>
        <p>Name: ${item.first_name} Last Name: ${item.last_name} Email: ${item.email}</p>
       
        </div>
        ` 
    }).join('')
    console.log("all Name",responseHtml);
    document.querySelector('#users').insertAdjacentHTML("afterbegin", responseHtml)
}).catch((err)=>{
    console.log("Error is ", err.message);
})
}
fetchUsersData()