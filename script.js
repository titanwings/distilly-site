(function(){
  const langBtn=document.querySelector('[data-lang-toggle]'); let zh=false;
  function setLang(){document.documentElement.lang=zh?'zh-CN':'en';document.querySelectorAll('[data-en]').forEach(el=>el.innerHTML=zh?el.dataset.zh:el.dataset.en);if(langBtn)langBtn.textContent=zh?'EN':'中文'}
  langBtn?.addEventListener('click',()=>{zh=!zh;setLang()});
  document.querySelectorAll('[data-copy]').forEach(btn=>btn.addEventListener('click',async()=>{const el=document.getElementById(btn.dataset.copy);try{await navigator.clipboard.writeText(el.textContent.trim());document.querySelector('.copy-note').textContent=zh?'已复制到剪贴板':'Copied to clipboard';setTimeout(()=>document.querySelector('.copy-note').textContent='',2000)}catch(e){document.querySelector('.copy-note').textContent=zh?'请手动复制':'Select and copy manually'}}));
  const menu=document.querySelector('.menu-toggle'); const nav=document.querySelector('.nav-links'); menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));if(nav){nav.style.display=open?'none':'flex';nav.style.position='absolute';nav.style.top='64px';nav.style.left='0';nav.style.right='0';nav.style.padding='20px';nav.style.background='var(--paper)';nav.style.flexDirection='column';nav.style.margin='0';}});
})();
