(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();let d=document.querySelector("#menu"),a=document.querySelector(".navbar");d.onclick=()=>{d.classList.toggle("fa-times"),a.classList.toggle("active")};document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".modal-open").forEach(o=>{o.addEventListener("click",function(){const n=this.getAttribute("data-product-id");document.getElementById("modal-product-id").value=n,document.getElementById("main-modal").style.display="flex"})}),document.querySelector(".close-btn").addEventListener("click",function(){document.getElementById("main-modal").style.display="none"}),window.addEventListener("click",function(o){o.target===document.getElementById("main-modal")&&(document.getElementById("main-modal").style.display="none")})});const m="https://script.google.com/macros/s/AKfycbyMmHFjfkefz1qnUbU-6GJc5C9Yn6JSGbi9XVk-13drD2XhTYum772imEVViaa38QcvKg/exec",c=document.forms["contact-form"],s=document.getElementById("sendText");c.addEventListener("submit",o=>{o.preventDefault(),fetch(m,{method:"POST",body:new FormData(c)}).then(n=>{s.innerHTML="Ваша заявка отправлена! Спасибо за обращение, мы скоро с вами свяжемся.",setTimeout(function(){s.innerHTML="",document.getElementById("main-modal").style.display="none"},5e3),c.reset()}).catch(n=>{console.error("Error!",n.message)})});
