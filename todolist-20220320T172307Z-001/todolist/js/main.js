// sayfadaki elementlere erişmek
let btnDom = document.querySelector("#liveToastBtn") // id ile ekle butonuna eriştik ve btnDom değişkenine attık
let listDom = document.querySelector("#list")
let taskDom = document.querySelector("#task")
let ulLength = document.getElementsByTagName("li") // bütün li elementlerini ullengt değişkenine atadık böylelikle kaç li olduğunu elimizde tuttuk



for (let i =0; i< ulLength.length; i++)
{
  let closebutton = document.createElement("span"); // close iconu span içerisinde olduuğu için yeni bir span elemanı oluşturup değişkene attık
  closebutton.textContent="\u00D7"; // çarpı işareti eklemek için
  closebutton.classList.add("close");
  closebutton.onclick=removeButton;
  ulLength[i].append(closebutton);
  ulLength[i].onclick=check;
}

btnDom.addEventListener('click', elemanEkle) // butona tıklandığın da ekleme

function check()
{
  this.classList.toggle("checked"); // yapıldığında üstünü çiz 
}
function removeButton()
{
  this.parentElement.remove(); // seçileni silmek için
}
function elemanEkle()
{
  if(taskDom.value=="") // eğer alan boş ise uyarı mesajını çağırdık
  {
    $(".error").toast("show"); 
  }
  else{
    $(".success").toast("show"); // dolu ise listeye eklendi mesajını çağırdık
  let liDom=document.createElement('li');
  listDom.appendChild(liDom);
  liDom.innerHTML=task.value;
  taskDom.value="";


  // sonradan eklediğimiz maddeleri silmek içinde tekrar ayrı işlemleri yapıyoruz
  liDom.onclick = check;
        
    let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        
        liDom.append(closeButton);
        listDom.append(liDom);
        inputElement.value = ("");
 }
}


