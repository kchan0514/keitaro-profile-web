let selectedField='all';
const projectEntries=[...document.querySelectorAll('.project')];
const result=document.getElementById('result-count');
function applyFilter(key){selectedField=key;let n=0;projectEntries.forEach(el=>{const show=key==='all'||el.dataset.fields.split(' ').includes(key);el.hidden=!show;if(show)n++;});document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===key)));result.textContent=document.documentElement.lang==='en'?`${n} projects / ${projectEntries.length} total`:`${projectEntries.length}件中 ${n}件を表示`;}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>applyFilter(b.dataset.filter)));
document.querySelectorAll('[data-field-jump]').forEach(a=>a.addEventListener('click',()=>applyFilter(a.dataset.fieldJump)));
document.querySelector('.lang').addEventListener('click',function(){const en=document.documentElement.lang==='ja';document.documentElement.lang=en?'en':'ja';document.querySelectorAll('[data-en]').forEach(el=>{if(!el.dataset.ja)el.dataset.ja=el.innerHTML;el.innerHTML=en?el.dataset.en:el.dataset.ja;});this.textContent=en?'EN / JP':'JP / EN';applyFilter(selectedField);});
document.querySelector('form').addEventListener('submit',function(e){e.preventDefault();const status=this.querySelector('[role=status]');status.dataset.ja='入力を確認しました。検討用フォームのため送信・保存は行っていません。';status.dataset.en='Preview complete. This prototype does not send or store messages.';status.textContent=document.documentElement.lang==='en'?status.dataset.en:status.dataset.ja;});
applyFilter('all');
