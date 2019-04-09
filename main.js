function Display(){
  let nom = document.getElementById('lastname').value;
  let prenom = document.getElementById('firstname').value;
  let ville = document.querySelector('#city').value;
  alert(nom + "\n" + prenom + "\n" + ville);
}


/*function Display()
{
  let nom = lastname.value;
  let prenom = firstname.value;
  let ville = city.value;
  alert(`Nom : ${nom} \nPrénom : ${prenom} \nVille : ${ville}`);
}*/
// Ceci est de l'interpolation
