let api = "https://randomuser.me/api/";
let btn=document.getElementById("btn")
btn.addEventListener('click',()=>{
    fetch(api).then((data) => {
        data.json().then((data) => {
          const imageUrl = `${data.results[0].picture.large}`;
          const username = `${data.results[0].name.first} ${data.results[0].name.last}`;
          const useremail = `${data.results[0].email}`;
          const phonenum = `${data.results[0].cell}`;
          const userdob = `${data.results[0].dob.date}`;
          const gender = `${data.results[0].gender}`;
          const country = `${data.results[0].location.country}`;
          let userName=document.getElementById("userName")
          let userEmail=document.getElementById("userEmail")
          let number=document.getElementById("number")
          let userDob=document.getElementById("userDob")
          let userGender=document.getElementById("userGender")
          let userCountry=document.getElementById("userCountry")
          let userImage=document.getElementById("userImage")
          userImage.src=imageUrl
          userName.innerText=username
          userEmail.innerText=useremail
          number.innerText=phonenum
          userDob.innerText=userdob
          userGender.innerText=gender
          userCountry.innerText=country
          
         
         
        });
      });
      
   
})

