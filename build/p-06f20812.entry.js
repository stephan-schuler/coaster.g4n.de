import{r as t,h as r}from"./p-690f29fd.js";import{p as o}from"./p-9cd232d8.js";let s=class{constructor(r){t(this,r)}render(){const t=this.produkt;if(t)return r("div",null,r("h2",null,"Product: ",t.name),r("button",{onClick:()=>t.zahlen.soll++},"soll: ",t.zahlen.soll),r("button",{onClick:()=>t.zahlen.ist++},"ist: ",t.zahlen.ist))}get produkt(){if(this.match&&this.match.params.produkt)return o.filter((t=>t.identifier==this.match.params.produkt)).shift()}};export{s as app_produkt}