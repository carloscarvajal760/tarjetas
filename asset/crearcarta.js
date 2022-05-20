export function createCard(){

const card=document.createElement("div")
card.className="card"

const app=document.querySelector("#app")
app.appendChild(card)

const card_header_red=document.createElement("div")
card_header_red.className="card_header red"
card.appendChild(card_header_red)

const tittle=document.createElement("div")
tittle.className="tittle"
card_header_red.appendChild(tittle)

const circle=document.createElement("div")
circle.className="circle"
circle.textContent="1"
tittle.appendChild(circle)

const t1=document.createElement("p")
t1.textContent="Agenda/Topic"
tittle.appendChild(t1)

const id=document.createElement("div")
id.className="id"
card_header_red.appendChild(id)

const t2=document.createElement("p")
t2.textContent="SAAS-000"
id.appendChild(t2)

const img1=document.createElement("img")
img1.src="img/icon.svg"
id.appendChild(img1)

const card_section=document.createElement("div")
card_section.className="card_section"
card.appendChild(card_section)

const t3=document.createElement("p")
t3.textContent="Descripcion de la card"
card_section.appendChild(t3)

const card_footer=document.createElement("div")
card_footer.className="card_footer"
card.appendChild(card_footer)

const t4=document.createElement("p")
t4.textContent="Mis Actualizaciones"
card_footer.appendChild(t4)

const t5=document.createElement("p")
t5.textContent="14/07/2021"
card_footer.appendChild(t5)

const car=document.createElement("div")
car.className="card"
app.appendChild(car)

const card_header_purple=document.createElement("div")
card_header_purple.className="card_header purple"
car.appendChild(card_header_purple)

const tittl=document.createElement("div")
tittl.className="tittle"
card_header_purple.appendChild(tittl)

const circl=document.createElement("div")
circl.className="circle"
circl.textContent="1"
tittl.appendChild(circl)

const t6=document.createElement("p")
t6.textContent="Agenda/Topic"
tittl.appendChild(t6)

const ide=document.createElement("div")
ide.className="id"
card_header_purple.appendChild(ide)

const t7=document.createElement("p")
t7.textContent="SAAS-000"
ide.appendChild(t7)

const img2=document.createElement("img")
img2.src="img/icon.svg"
ide.appendChild(img2)

const card_sectio=document.createElement("div")
card_sectio.className="card_section"
car.appendChild(card_sectio)

const t8=document.createElement("p")
t8.textContent="Descripcion de la card"
card_sectio.appendChild(t8)

const card_foote=document.createElement("div")
card_foote.className="card_footer"
car.appendChild(card_foote)

const t9=document.createElement("p")
t9.textContent="Mis Actualizaciones"
card_foote.appendChild(t9)

const t10=document.createElement("p")
t10.textContent="14/07/2021"
card_foote.appendChild(t10)

const ca=document.createElement("div")
ca.className="card"
app.appendChild(ca)

const card_header_blue=document.createElement("div")
card_header_blue.className="card_header blue"
ca.appendChild(card_header_blue)

const titt=document.createElement("div")
titt.className="tittle"
card_header_blue.appendChild(titt)

const circ=document.createElement("div")
circ.className="circle"
circ.textContent="1"
titt.appendChild(circ)

const t11=document.createElement("p")
t11.textContent="Agenda/Topic"
titt.appendChild(t11)

const idee=document.createElement("div")
idee.className="id"
card_header_blue.appendChild(idee)

const t12=document.createElement("p")
t12.textContent="SAAS-000"
idee.appendChild(t12)

const img3=document.createElement("img")
img3.src="img/icon.svg"
idee.appendChild(img3)

const card_secti=document.createElement("div")
card_secti.className="card_section"
ca.appendChild(card_secti)

const t13=document.createElement("p")
t13.textContent="Descripcion de la card"
card_secti.appendChild(t13)

const card_foot=document.createElement("div")
card_foot.className="card_footer"
ca.appendChild(card_foot)

const t14=document.createElement("p")
t14.textContent="Mis Actualizaciones"
card_foot.appendChild(t14)

const t15=document.createElement("p")
t15.textContent="14/07/2021"
card_foot.appendChild(t15)

}